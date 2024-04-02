export const HEADER_X_LAF_LANG = 'x-laf-lang';
export const HEADER_X_LAF_OS = 'x-laf-os';
export const HEADER_X_LAF_VERSION = 'x-laf-version';
export type SysResponse<T> = {
  content: T;
  errors?: string[];
  warnings?: string[];
};

export type PkgType = 'windows-x64' | 'windows-arm64' | 'linux-x64' | 'darwin-x64' | 'darwin-arm64';
export type PkgDownloadURLItem = {
  type: PkgType;
  url: string;
};
export type PkgDownloadURLBundle = {
  cn: PkgDownloadURLItem[];
  us: PkgDownloadURLItem[];
};
export type ReleaseInfo = {
  date: string;
  version: string;
  content: string; // markdown format
  disabled?: boolean;
};
export type ReleasePreFuncList = {
  [key: string]: () => ReleaseInfo;
};
export type ReleasePreFuncBundle = {
  list: ReleasePreFuncList;
  latestVersion: string;
};
