let path = require("path");
let fs = require("fs");
let sh = require("shelljs");
let _ = require("lodash");
var cnchars = require("cn-chars");
let os = require("os");
var { searchItems, baseDIR } = require("./get-scan-items");
var md5 = require("md5");
const { exit } = require("process");
let i18njson = require("../../../resources/public/purejs/app-i18n.json");

let laftoolsRoot = process.env.LAFTOOLS_ROOT;
console.log("i18njson", i18njson);
// cross platform watch file
let chokidar = require("chokidar");
let latestTaskIdObj = {
  //
};
// sleep
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function readFileAsJSONMap(file) {
  return JSON.parse(file);
}
function getFile(file) {
  let obj = {
    file,
    filepath: file,
    text: () => {
      return fs.readFileSync(file, { encoding: "utf-8" }).toString();
    },
    lastModified: () => {
      return fs.statSync(file).mtimeMs.toString();
    },
    jsonmap: () => {
      return readFileAsJSONMap(obj.text());
    },
  };
  return obj;
}

let overwrittenDir = path.join(
  baseDIR,
  ...`devtools/lang/overwrriten`.split("/"),
);

let loadingDOTMapObj = {
  // [key:string]: boolean
  /**
   filename+id: {
      targetDIR: null,
      filename: '',
      id: ''
   }
   */
};

let langarr = [];

i18njson.forEach((x) => {
  if (x.Value == "en_US") {
    return;
  }
  langarr.push(x.Value);
});

let processWithArg = async ({
  taskID: _taskID,
  eachRunItem,
  handleFurtherLoadingDOT = true,
  allFiles,
}) => {
  let taskID = _taskID;

  let waitTranslateObj = {};
  // iterate all files
  for (let eachFile of allFiles) {
    let file = getFile(eachFile); // replace with appropriate function
    let text = file.text();
    if (handleFurtherLoadingDOT) {
      let loadDOTIdx = text.indexOf("loadDOT(");
      if (loadDOTIdx != -1) {
        let nextPartIdx = text.substring(loadDOTIdx).indexOf(")");
        let scopeID = text
          .substring(loadDOTIdx, loadDOTIdx + nextPartIdx)
          .replace("loadDOT(", "")
          .replace(")", "")
          .replace(/"/g, "");
        loadingDOTMapObj[file.filepath] = {
          eachRunItem,
          filepath: file.filepath,
          scopeID,
          targetDIR: eachRunItem.target,
        };
        continue;
      }
    }
    let match;
    while ((match = eachRunItem.pattern.exec(text))) {
      let key = match[2];
      let value = match[4];
      if (value) {
        if (!_.isNil(waitTranslateObj[key])) {
        }
        waitTranslateObj[key] = value;
      }
      text = text.substring(match.index + match[0].length);
    }
  }
  if (!handleFurtherLoadingDOT) {
    console.log("not disable loading Dot");
  }
  let waitArr = [];
  for (let eachLang of langarr) {
    await sleep(1000);
    let crtTaskId = latestTaskIdObj[eachRunItem.dir];
    if (crtTaskId != taskID && handleFurtherLoadingDOT) {
      return;
    }
    let outputLang = eachLang.replace("-", "_");
    let isChinese = eachLang == "zh_CN" || eachLang == "zh_HK";
    let outputLangFile = path.join(eachRunItem.target, `${outputLang}.json`);

    let a1 = `${overwrittenDir}/${
      isChinese ? "zh_CN" : eachLang
    }-id-overwrite.json`;
    let overwrittenFile = a1;
    let idOverwriteJSONFile = getFile(a1); // replace with appropriate function
    let overwriteJSONFile = getFile(
      `${overwrittenDir}/${isChinese ? "zh_CN" : eachLang}-overwrite.json`,
    );

    if (!fs.existsSync(idOverwriteJSONFile.file)) {
      fs.writeFileSync(idOverwriteJSONFile.file, "{}");
    }
    if (!fs.existsSync(overwriteJSONFile.file)) {
      fs.writeFileSync(overwriteJSONFile.file, "{}");
    }
    let overwrritenMap = getFile(overwrittenFile).jsonmap();
    let lastModifiedForIdOverwriteJSONFile =
      idOverwriteJSONFile.lastModified() + overwriteJSONFile.lastModified();

    let waitTranslateObjStr = toJSON(waitTranslateObj);
    // console.log(waitTranslateObj);

    let tmpTranslateDir = path.join(__dirname, "tmp-translate-result");
    if (!fs.existsSync(tmpTranslateDir)) {
      fs.mkdirSync(tmpTranslateDir);
    }

    // start iteratting all languages here

    fs.writeFileSync(
      path.join(tmpTranslateDir, `raw-${eachRunItem.id}-${eachLang}.json`),
      waitTranslateObjStr,
    );
    fs.writeFileSync(
      path.join(tmpTranslateDir, `config-${eachRunItem.id}-${eachLang}.json`),
      toJSON({
        id: eachRunItem.id,
      }),
    );

    // execute a command
    let cmd = `go run "${path.join(
      __dirname,
      "translate-tools",
      "bulktranslate.go",
    )}" --id=${eachRunItem.id} --lg=${eachLang} --output="${outputLangFile}" `;
    console.log("cmd----", cmd);

    sh.exec(cmd);

    let resultFile = path.join(
      __dirname,
      `tmp-translate-result/result-${eachRunItem.id}-${eachLang}.json`,
    );
    // TODO: if there's no dynamic file was mentioned in the code, then we should clean them
    if (fs.existsSync(resultFile)) {
      let resultJSON = getFile(resultFile).jsonmap();
      _.forEach(overwrritenMap, (x, d, n) => {
        if (resultJSON[d]) {
          resultJSON[d] = x;
        }
      });

      if (eachLang == "zh_HK") {
        resultJSON = _.mapValues(resultJSON, (x, d, n) => {
          return _.chain(x)
            .split("")
            .map((xx) => cnchars.toTraditionalChar(xx))
            .join("")
            .value();
        });
      }
      fs.writeFileSync(outputLangFile, toJSON(resultJSON));
    } else {
      console.log("file not exists: ", resultFile);
      process.exit(-1);
    }

    console.log("------------------------------");
  }
  for (let eachItem of waitArr) {
    await eachItem;
  }
};
// iterate all files for dir.file, recursively
let iterateFiles = (dir, done) => {
  let results = [];
  fs.readdir(dir, function (err, list) {
    if (err) return done(err);
    var pending = list.length;
    if (!pending) return done(null, results);
    list.forEach(function (file) {
      file = path.resolve(dir, file);
      fs.stat(file, function (err, stat) {
        if (stat && stat.isDirectory()) {
          iterateFiles(file, function (err, res) {
            results = results.concat(res);
            if (!--pending) done(null, results);
          });
        } else {
          results.push(file);
          if (!--pending) done(null, results);
        }
      });
    });
  });
};
let toJSON = (obj) => {
  return JSON.stringify(obj, null, 4);
};

let runStatusObj = {};

let scan = async (eachRunItem) => {
  let crtTaskId = latestTaskIdObj[eachRunItem.dir];
  // console.log("scaning", crtTaskId, eachRunItem.dir);
  let triggerFn = async (crtTaskId) => {
    try {
      await sleep(1000);

      // get all dir
      let dir = getFile(eachRunItem.dir); // replace with appropriate function

      // get all files
      let allFiles = await new Promise((resolve, reject) => {
        iterateFiles(dir.file, (err, results) => {
          if (err) {
            reject(err);
          } else {
            console.log("checked the results", results);
            if (eachRunItem.exclude) {
              results = results.filter((x) => {
                let tmpx = x.replace(/\\/g, "/");
                let anyContaminated = false;
                if (eachRunItem.exclude instanceof Array) {
                  for (let eachExclude of eachRunItem.exclude) {
                    if (tmpx.indexOf(eachExclude) != -1) {
                      anyContaminated = true;
                      break;
                    }
                  }
                } else {
                  throw new Error("unknown error" + eachRunItem);
                }
                return !anyContaminated;
              });
            }

            resolve(results);
          }
        });
      });

      // sort allFiles by name
      allFiles.sort((a, b) => {
        return a.localeCompare(b);
      });

      await processWithArg({
        taskID: crtTaskId,
        eachRunItem,
        allFiles,
        handleFurtherLoadingDOT: true,
      });
    } catch (e) {
      console.log("err", e);
      await sleep(3000);
    }
  };
  try {
    await triggerFn(crtTaskId);
  } catch (e) {
    console.log("err", e);
  }
};

let r2 = async () => {
  let gwaitarr = [];
  for (let eachItem of searchItems) {
    let a = (async () => {
      let existOrNot = fs.existsSync(eachItem.dir);
      console.log("existOrNot", existOrNot, eachItem.dir);
      if (existOrNot) {
        console.log("enter");

        let triggerAllFn = _.debounce(async () => {
          let tsval = new Date().getTime() + "";
          console.log("changed now", tsval);
          latestTaskIdObj[eachItem.dir] = tsval;
          // if (true) {
          //   return;
          // }

          let eachRunItem = eachItem;
          // if (runStatusObj[eachRunItem.dir]) return;
          // runStatusObj[eachRunItem.dir] = "1";

          scan(eachItem);
          // try {
          //   await ;
          //   // await sleep(1000);
          // } catch (e) {
          //   console.log("err", e);
          // }

          // delete runStatusObj[eachRunItem.dir];
        }, 100);

        triggerAllFn();

        chokidar.watch(eachItem.dir).on("all", async (event, path) => {
          // if new file is added or exist file is modified/delete
          if (event == "add" || event == "change" || event == "unlink") {
            let eachFile = path;
            console.log("is changed", event, path);
            if (
              (eachFile + "").endsWith("go") ||
              (eachFile + "").endsWith("ts") ||
              (eachFile + "").endsWith("tsx") ||
              (eachFile + "").endsWith("md") ||
              (eachFile + "").endsWith("java") ||
              (eachFile + "").endsWith("groovy") ||
              (eachFile + "").endsWith("js")
            ) {
              triggerAllFn();
            }
          }
        });
        // let lastContent = "";
        // setInterval(() => {
        //   console.log("xx-begin");
        //   let updateFile = path.join(__dirname, "update.txt");
        //   let crtContent = fs.readFileSync(updateFile, { encoding: "utf-8" });
        //   console.log("xx-comparing", crtContent, lastContent);
        //   if (crtContent != lastContent) {
        //     lastContent = crtContent;
        //     setTimeout(() => {
        //       // triggerAllFn();
        //     });
        //   }
        // }, 1000);
      }
    })();
    await a;
    gwaitarr.push(a);
  }
  for (let eg of gwaitarr) {
    await eg;
  }
};
r2();

let alreadyRunLoadingDOTObj = {};
// handling loadDOT logic
let entryForLoadingDOT = async () => {
  while (true) {
    _.forEach(loadingDOTMapObj, (loadEachObj, d, n) => {
      if (!alreadyRunLoadingDOTObj[d]) {
        alreadyRunLoadingDOTObj[d] = 1;
        setTimeout(async () => {
          while (true) {
            let { scopeID, targetDIR, filepath, eachRunItem } = loadEachObj;
            let crtTaskId = latestTaskIdObj[eachRunItem.dir];
            if (!fs.existsSync(targetDIR)) {
              fs.mkdirSync(targetDIR);
            }
            let extraDirName = path.join(targetDIR, "extra");
            if (!fs.existsSync(extraDirName)) {
              fs.mkdirSync(extraDirName);
            }
            let dynDirName = path.join(extraDirName, scopeID);
            if (!fs.existsSync(dynDirName)) {
              fs.mkdirSync(dynDirName);
            }
            // console.log("Loading DOT", loadEachObj.scopeID);
            await processWithArg({
              taskID: crtTaskId,
              eachRunItem: {
                type: eachRunItem.type,
                id: eachRunItem.id + scopeID,
                prefix: eachRunItem.prefix,
                pattern: eachRunItem.pattern,
                target: dynDirName,
                dir: null,
              },
              allFiles: [filepath],
              handleFurtherLoadingDOT: false,
            });
            await sleep(1000);
          }
        });
      }
      return;
    });
    await sleep(1000);
  }
};
entryForLoadingDOT();
