import { HEADER_X_LAF_LANG, HEADER_X_LAF_OS, HEADER_X_LAF_REGION, HEADER_X_LAF_VERSION } from '@/constant';
import { Request } from 'express';

export type RequestInfo = {
  version: string;
  lang: string;
  region: string;
  fromCNRegion: boolean;
  os?: string;
};

export let InfoFn = (req: Request): RequestInfo => {
  let region = req.headers[HEADER_X_LAF_REGION] as string;
  let fromCNRegion = region === 'CN';
  return {
    region,
    fromCNRegion,
    version: req.headers[HEADER_X_LAF_VERSION] as string,
    lang: req.headers[HEADER_X_LAF_LANG] as string,
    os: req.headers[HEADER_X_LAF_OS] as string,
  };
};
