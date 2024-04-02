import { HEADER_X_LAF_LANG, HEADER_X_LAF_OS, HEADER_X_LAF_VERSION } from "@/constant";
import { Request } from "express";

export type RequestInfo = {
    version: string;
    lang: string
    os?: string;
}

export let InfoFn = (req: Request): RequestInfo => {
    return {
        version: req.headers[HEADER_X_LAF_VERSION] as string,
        lang: req.headers[HEADER_X_LAF_LANG] as string,
        os: req.headers[HEADER_X_LAF_OS] as string
    }
}