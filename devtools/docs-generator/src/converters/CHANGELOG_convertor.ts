import _ from "lodash";
import { FnInternalConverter } from "..";
import fs, { writeFileSync } from "fs";
import { join } from "path";
export type ReleasePreInfoType = {
  version: string;
  date: string;
  lines: string[];
};
export let fn: FnInternalConverter = (content: string, lang: string) => {
  let identifier = "@PEN@";
  let lines = content.split("\n");
  let newContent: string[] = [];
  let lastObj: ReleasePreInfoType | null = null;
  let allLastObj: ReleasePreInfoType[] = [];
  for (let eachLine of lines) {
    if (eachLine.indexOf(identifier) != -1) {
      let [____, __, version, date] = eachLine.split("@");
      version = version.trim();
      date = date.trim();
      if (!version.startsWith("v")) {
        throw new Error("Version should start with 'v'");
      }
      if (!date.match(/\d{4}-\d{2}-\d{2}/)) {
        throw new Error("Date should be in format 'YYYY-MM-DD'");
      }
      eachLine = `## Release ${version} (${date})`;
      if (lastObj != null) {
        allLastObj.push(lastObj);
      }
      lastObj = {
        version,
        date,
        lines: [],
      };
    } else {
      if (!lastObj) {
        throw new Error("Incorrect format in CHANGELOG.md, please check");
      }
      lastObj?.lines.push(eachLine);
    }
    newContent.push(eachLine);
  }
  if (lastObj) {
    allLastObj.push(lastObj);
  }
  if (allLastObj.length == 0) {
    throw new Error("No release found in CHANGELOG.md");
  }
  let LAFTOOLS_ROOT = process.env.LAFTOOLS_ROOT;
  if (!LAFTOOLS_ROOT) {
    throw new Error("LAFTOOLS_ROOT is not defined");
  }
  let subDir = join(LAFTOOLS_ROOT, "docs", "release-meta");
  console.log("subDir", subDir);
  if (!fs.existsSync(subDir)) {
    fs.mkdirSync(subDir);
  }
  let subFile = join(subDir, `${lang}.json`);
  writeFileSync(
    subFile,
    JSON.stringify(
      allLastObj.map((x) => {
        return {
          ...x,
          lines: undefined,
        };
      }),
      null,
      2,
    ),
  );
  _.forEach(allLastObj, (eachLastObj) => {
    if (eachLastObj.lines.length == 0) {
      throw new Error("Empty release found in CHANGELOG.md");
    }
    console.log(
      "Release",
      eachLastObj.version,
      eachLastObj.date,
      _.size(eachLastObj.lines),
    );
    let subsubDir = join(subDir, lang);
    if (!fs.existsSync(subsubDir)) {
      fs.mkdirSync(subsubDir);
    }
    let subMarkdownFile = join(subsubDir, `${eachLastObj.version}.md`);
    writeFileSync(subMarkdownFile, eachLastObj.lines.join("\n"));
  });
  return newContent.join("\n");
};
