import { expect, test } from "vitest";
import { runItems } from "./items";
import {
  extractTempFileAndConfirmIt,
  downloadByPkgInfo,
  getLatestVersionResponse,
  getReleaseDateTxtInFolder,
} from "./items/web2";
import { computeHash } from "./utils/hash";
import path from "path";
import { logger } from "./utils/logger";
import { PkgDownloadInfo } from "./web2share-copy/server_constants";
import {
  confirmDLinkConfig,
  deleteDLinkConfig,
  getCurrentBootConfigFileWithCurrentVer,
  getDLinkConfig,
} from "./fn";
import { internalRun } from "./internal-run";
import { writeFileSync } from "fs";
import { DLinkType } from "./types";

test("test-version-switch", async () => {
  console.log("where i am: " + __dirname);
  // delete if have
  deleteDLinkConfig("test2");
  // original ver
  console.log("original ver:");
  internalRun("test2");
  // update version
  let newValDLink: DLinkType = {
    fromVersion: "origin-ver",
    toVersion: "modified-ver",
    dateTime: new Date().getTime() + "",
    loadPath: path.join(__dirname, "..", "dist", "test", "test2-modified.js"),
  };
  confirmDLinkConfig("test2", newValDLink);
  // modified ver
  console.log("modified ver:");
  internalRun("test2");
});
