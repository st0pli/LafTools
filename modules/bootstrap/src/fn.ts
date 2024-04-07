import { DLinkType } from "types";
import { getAppBootstrapInternalDir } from "./web2share-copy/appdir";
import path from "path";
import fs from "fs";
import { logger } from "./utils/logger";

export let getCurrentBootConfigFile = () => {
  let bootStrapInternalDir = getAppBootstrapInternalDir();
  let currentBootConfig = path.join(bootStrapInternalDir, "dlink.json");

  return currentBootConfig;
};
export let deleteDLinkConfig = () => {
  let currentBootConfig = getCurrentBootConfigFile();
  if (fs.existsSync(currentBootConfig)) {
    fs.unlinkSync(currentBootConfig);
  }
};
export let getDLinkConfig = (): DLinkType | null => {
  let currentBootConfig = getCurrentBootConfigFile();
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
