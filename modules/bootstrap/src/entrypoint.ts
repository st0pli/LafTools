import fs from "fs";
import path from "path";
import { getAppBootstrapInternalDir } from "web2share/appdir";

// export type ModuleType = "web2" | "desktop2";

// export const LafToolsHomePath = ".laftools";

let bootstrapInternalDir = getAppBootstrapInternalDir();
console.log("entrypoint", bootstrapInternalDir);
