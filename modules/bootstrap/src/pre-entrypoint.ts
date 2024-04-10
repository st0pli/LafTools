import child_process from "child_process";
import { join } from "path";
import fs from "fs";
import { logger } from "./utils/logger";
import {
  getAppBootstrapInternalDir,
  getBootstrapUpdateReloadFile,
} from "./web2share-copy/appdir";

let actualEntryPointFile = join(__dirname, "entrypoint.js");

let nodeBIN = process.execPath;

let fn_run_entrypoint = () => {
  let spawn = child_process.spawn;
  const spawnFN = spawn(nodeBIN, [actualEntryPointFile]);
  logger.info(`Running entrypoint: ${actualEntryPointFile}, path: ${nodeBIN}`);

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
      logger.info(`Reloading entrypoint: ${actualEntryPointFile}`);
      fs.unlinkSync(reloadFile);
      fn_run_entrypoint();
    } else {
      logger.info(`No reload file found: ${reloadFile}, will end the process.`);
    }
  });
};
fn_run_entrypoint();
// keep alive
setInterval(() => {}, 1000 * 60 * 60);
