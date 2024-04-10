import { DLinkType } from "./types";
import { getAppBootstrapInternalDir } from "./web2share-copy/appdir";
import path from "path";
import fs from "fs";
import { logger } from "./utils/logger";
import { getMinimalDIrPath } from "./items/web2";
import { readPkgInfoFromDir } from "./web2share-copy/pkginfo";
import { writeFileSync } from "fs";
import { ModuleType } from "./constant";

export let confirmDLinkConfig = (
  moduleType: ModuleType,
  newValDLink: DLinkType,
) => {
  let currentBootConfig = getCurrentBootConfigFileWithCurrentVer(moduleType);
  writeFileSync(currentBootConfig, JSON.stringify(newValDLink, null, 4));
};

export let getCurrentBootConfigFileWithCurrentVer = (
  moduleType: ModuleType,
) => {
  let bootStrapInternalDir = getAppBootstrapInternalDir();
  let pkgInfo = readPkgInfoFromDir(getMinimalDIrPath());
  let currentBootConfig = path.join(
    bootStrapInternalDir,
    `dlink-${moduleType}-${pkgInfo.version}.json`,
  );
  return currentBootConfig;
};
export let deleteDLinkConfig = (moduleType: ModuleType) => {
  let currentBootConfig = getCurrentBootConfigFileWithCurrentVer(moduleType);
  if (fs.existsSync(currentBootConfig)) {
    fs.unlinkSync(currentBootConfig);
  }
};
export let getDLinkConfig = (moduleType: ModuleType): DLinkType | null => {
  let currentBootConfig = getCurrentBootConfigFileWithCurrentVer(moduleType);
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
