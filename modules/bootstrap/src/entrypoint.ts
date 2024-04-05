/**
 * Usages:
 *  node ./entrypoint.ts --type=web2|desktop2
 */

import fs from "fs";
import path from "path";
import { getAppBootstrapInternalDir } from "./share-copy/appdir";
import { ModuleType } from "./constant";
import web2 from "./items/web2";
import desktop2 from "./items/desktop2";
import { runItems } from "./items";

let runType: ModuleType | null = null;
process.argv.forEach((val, index) => {
  if (val.startsWith("--type=")) {
    runType = val.substr(7).trim() as any;
  }
});
let runItem = runItems[runType];
if (!runItem) {
  console.error("Invalid runType", runType);
  process.exit(1);
}

runItem.load();
runItem.versionCheck();
