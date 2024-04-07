import { DLinkType } from "types";
import { getAppBootstrapInternalDir } from "./web2share-copy/appdir";
import path from "path";
import fs from "fs";
import { logger } from "./utils/logger";
import { getMinimalDIrPath } from "items/web2";
import { readPkgInfoFromDir } from "web2share-copy/pkginfo";

export let getCurrentBootConfigFileWithCurrentVer = () => {
  let bootStrapInternalDir = getAppBootstrapInternalDir();
  let pkgInfo = readPkgInfoFromDir(getMinimalDIrPath());
  let currentBootConfig = path.join(
    bootStrapInternalDir,
    `dlink-${pkgInfo.version}.json`,
  );

  return currentBootConfig;
};
export let deleteDLinkConfig = () => {
  let currentBootConfig = getCurrentBootConfigFileWithCurrentVer();
  if (fs.existsSync(currentBootConfig)) {
    fs.unlinkSync(currentBootConfig);
  }
};
export let getDLinkConfig = (): DLinkType | null => {
  let currentBootConfig = getCurrentBootConfigFileWithCurrentVer();
  if (fs.existsSync(currentBootConfig)) {
    let dlink: DLinkType = JSON.parse(
      fs.readFileSync(currentBootConfig, "utf-8"),
    );
    return dlink;
  } else {
    logger.error("no available dlink.json");
  }
  return null;
};
