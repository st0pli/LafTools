import child_process from "child_process";
import { join } from "path";

let actualEntryPointFile = join(__dirname, "entrypoint.js");

let nodeBIN = process.execPath;

let spawn = child_process.spawn;
const spawnFN = spawn(nodeBIN, [actualEntryPointFile]);

spawnFN.stdout.on("data", (data) => {
  console.log(`${data}`);
});

spawnFN.stderr.on("data", (data) => {
  console.log(`${data}`);
});

spawnFN.on("close", (code) => {
  console.log(`child process exited with code ${code}`);
});

// keep alive
setInterval(() => {}, 1000 * 60 * 60);
