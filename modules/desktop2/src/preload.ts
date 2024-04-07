// dynamic load core logic

import path from "path";
import { DMainPassProps } from "./core/d-types";
import dPreload from "./core/d-preload";

let loadPath: string | null = null;
let anyNewVersionOverrided: boolean = false; // TODO:
if (process.env.NODE_ENV === "production") {
  if (anyNewVersionOverrided) {
    loadPath = path.join(__dirname, "..", "core", "d-preload.js");
  }
}
if (loadPath) {
  require(loadPath)();
} else {
  dPreload();
}
