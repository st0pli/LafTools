import child_process from "child_process";
import { join } from "path";
import fs from "fs";
import { logger } from "./utils/logger";
import {
  getAppBootstrapInternalDir,
  getBootstrapUpdateReloadFile,
} from "./web2share-copy/appdir";
import { ModuleType } from "./constant";
import _ from "lodash";
import { IsCurrentServerMode } from "./types";
import { getDLinkConfig } from "./fn";
import { isProductionEnv } from "./web2share-copy/env";

let nodeBIN = process.execPath;
export let getFileDistDir = () => {
  return isProductionEnv() ? __dirname : join(__dirname, "..", "dist");
};
let distDIR = getFileDistDir();

let typeDefaultSets: { type: ModuleType; defaultPath: string }[] = [
  {
    type: "web2",
    defaultPath: join(distDIR, "entrypoint.js"),
  },
  {
    type: "test2",
    defaultPath: join(distDIR, "items", "test2.js"),
  },
];
logger.debug("__dirname: " + __dirname);

export let fn_runtype_dynamic_load = (runType: ModuleType) => {
  let spawn = child_process.spawn;
  let typeDefault = _.find(typeDefaultSets, (item) => {
    return runType == item.type;
  });
  if (!typeDefault) {
    logger.error(`Invalid runType: ${runType}`);
    process.exit(1);
  }

  let loadFile = typeDefault.defaultPath;
  if (!IsCurrentServerMode()) {
    try {
      let dlink = getDLinkConfig(runType);
      if (dlink) {
        if (dlink.loadPath) {
          loadFile = dlink.loadPath;
        }
      }
    } catch (e) {
      logger.error(e);
    }
  }

  const spawnFN = spawn(nodeBIN, [loadFile]);
  logger.info(`Running entrypoint: ${loadFile}, path: ${nodeBIN}`);

  spawnFN.stdout.on("data", (data) => {
    console.log(`${data}`);
  });

  spawnFN.stderr.on("data", (data) => {
    console.log(`${data}`);
  });

  spawnFN.on("close", (code) => {
    console.log(`child process exited with code ${code}`);
    let reloadFile = getBootstrapUpdateReloadFile();
    if (fs.existsSync(reloadFile)) {
      logger.info(`Reloading entrypoint: ${loadFile}`);
      fs.unlinkSync(reloadFile);
      fn_runtype_dynamic_load(runType);
    } else {
      logger.info(`No reload file found: ${reloadFile}, will end the process.`);
    }
  });
};
