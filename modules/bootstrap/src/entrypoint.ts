/**
 * Usages:
 *  node ./entrypoint.ts --type=web2|desktop2|bootstrap
 */

import fs from "fs";
import path from "path";
import { getAppBootstrapInternalDir } from "./web2share-copy/appdir";
import { ModuleType } from "./constant";
import web2 from "./items/web2";
import desktop2 from "./items/desktop2";
import { runItems } from "./items";
import { DLinkType, IsCurrentServerMode } from "./types";
import { logger } from "./utils/logger";
import { getDLinkConfig } from "./fn";
import child_process from "child_process";

let runType: ModuleType | null = "web2";

let runItem = runItems[runType];
if (!runItem) {
  logger.error("Invalid runType", runType);
  process.exit(1);
}
let bootStrapInternalDir = getAppBootstrapInternalDir();
// mkdir if not exist
if (!fs.existsSync(bootStrapInternalDir)) {
  fs.mkdirSync(bootStrapInternalDir, { recursive: true });
}

// write timestamp to log
logger.info("start entrypoint");
// if it's current server mode, then load the item
let hasAckAnyDynamic = false;
if (!IsCurrentServerMode()) {
  try {
    let dlink = getDLinkConfig();
    if (dlink) {
      if (dlink.loadPath) {
        let newLoadModule = require(dlink.loadPath);
        if (runType == "web2") {
          let newRunItems = newLoadModule.runItems;
          newRunItems[runType](true);
          logger.info("[LOADED] web2Path: " + dlink.loadPath);
          hasAckAnyDynamic = true;
        } else if (runType == "desktop2") {
          // TODO: not implemented yet
        }
      }
    }
  } catch (e) {
    console.log(e);
    logger.error(e);
  }
}

if (!hasAckAnyDynamic) {
  runItem.load(false);
}
