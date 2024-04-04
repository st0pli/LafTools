import fs from "fs";
import path from "path";
import { getAppBootstrapInternalDir } from "./share-copy/appdir";

// argument:
// 1. --module=web2|desktop2

// export type ModuleType = "web2" | "desktop2";

// export const LafToolsHomePath = ".laftools";

let bootstrapInternalDir = getAppBootstrapInternalDir();
console.log("entrypoint", bootstrapInternalDir);

let currentDIRName = __dirname;
let defaultServerEntry = path.join(currentDIRName, "..", "core", "server.js");

// start launching the server
require(defaultServerEntry);
