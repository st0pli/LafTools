/**
 * Usages:
 *  node ./entrypoint.ts --type=web2|desktop2|bootstrap2
 */

import fs from "fs";
import path from "path";
import { getAppBootstrapInternalDir } from "@/web2share-copy/appdir";
import { ModuleType } from "./constant";
import web2 from "./items/web2";
import desktop2 from "./items/desktop2";
import { runItems } from "./items";

export let IsCurrentServerMode = () => {
  return process.env.ONLINEMODE == "true";
};
export type DLinkType = {
  loadPath: string;
};
let runType: ModuleType | null = null;
process.argv.forEach((val, index) => {
  if (val.startsWith("--type=")) {
    runType = val.substr(7).trim() as any;
  }
});
console.log(`runType: ${runType}`);
let runItem = runItems[runType];
if (!runItem) {
  console.error("Invalid runType", runType);
  process.exit(1);
}
let bootStrapInternalDir = getAppBootstrapInternalDir();
// mkdir if not exist
if (!fs.existsSync(bootStrapInternalDir)) {
  fs.mkdirSync(bootStrapInternalDir, { recursive: true });
}
let errorLogFile = path.join(bootStrapInternalDir, "error.log");
let accessLogFile = path.join(bootStrapInternalDir, "access.log");
// clean file first
fs.writeFileSync(errorLogFile, "");
fs.writeFileSync(accessLogFile, "");
let errorlog = fs.createWriteStream(errorLogFile, { flags: "a" });
let accesslog = fs.createWriteStream(accessLogFile, { flags: "a" });
// write timestamp to log
accesslog.write(new Date().toString() + "\n");
// if it's current server mode, then load the item
let hasAckAnyDynamic = false;
if (!IsCurrentServerMode()) {
  try {
    let currentBootConfig = path.join(bootStrapInternalDir, "dlink.json");
    if (fs.existsSync(currentBootConfig)) {
      let dlink: DLinkType = JSON.parse(
        fs.readFileSync(currentBootConfig, "utf-8"),
      );
      if (dlink.loadPath) {
        let newLoadModule = require(dlink.loadPath);
        if (runType == "web2") {
          let newRunItems = newLoadModule.runItems;
          newRunItems[runType](true);
          accesslog.write("[LOADED] web2Path: " + dlink.loadPath + "\n");
          hasAckAnyDynamic = true;
        } else if (runType == "desktop2") {
          // TODO: not implemented yet
        }
      }
    } else {
      console.error("no available dlink.json");
    }
  } catch (e) {
    console.error(e);
    errorlog.write(e + "\n");
  }
}

if (!hasAckAnyDynamic) {
  runItem.load(false);
}
