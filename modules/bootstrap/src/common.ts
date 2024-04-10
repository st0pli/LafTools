import { join } from "path";
import { getLafToolsDataDir } from "./web2share-copy/homedir";

export let VAL_COMMON_MAP: { [key: string]: string } = {};

export let getTestFlagTest2Launch = (): string => {
  return join(getLafToolsDataDir(), "test-flag.txt");
};
