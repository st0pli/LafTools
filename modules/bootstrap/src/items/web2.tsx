import { TypeRunItem } from "../items";
import path from 'path'
import { API_SERVER_URL, core_sendAPIRequestInBE, getLAFRegion } from "../web2share-copy/api";
import { isDevEnv, isTestEnv } from "../web2share-copy/env";
import { getAppBootstrapInternalDir } from "../web2share-copy/appdir";
import { readPkgInfoFromDir } from "../web2share-copy/pkginfo";
import { URL_RELEASE_GET_ALL, URL_RELEASE_GET_LATEST } from "../web2share-copy/server_urls";
import { ReleaseLatestResponse, SysResponse } from "../web2share-copy/server_constants";

let currentDIRName = __dirname;
let minimalDIRPath = isDevEnv() || isTestEnv() ? path.join(
    currentDIRName,
    '..',
    '..',
    'testdata'
) : path.join(
    currentDIRName,
    '..',
    '..',
)
console.log("minimalDIRPath", minimalDIRPath)
let pkgInfo = readPkgInfoFromDir(minimalDIRPath);
export let getLatestVersionResponse = async (): Promise<SysResponse<ReleaseLatestResponse>> => {
    let lang = process.env.APPLANG || 'en_US';
    // TODO: actually, lang is not required in backstaged jobs. If users wanna check release notes, the lang can be selected in the page rather than this job
    let r = await core_sendAPIRequestInBE({
        lang: lang,
        version: pkgInfo.version,
        platform: pkgInfo.platform,
        region: getLAFRegion(lang),
    }, URL_RELEASE_GET_LATEST, {})
    let json = await r.json()
    return json as SysResponse<ReleaseLatestResponse>
}

export let job_runVersionCheck = async () => {
    // check version
}

let isDev = isDevEnv()
let item: TypeRunItem = {
    load: (dynamicMode: boolean) => {
        let bootstrapInternalDir = getAppBootstrapInternalDir();
        console.log("entrypoint", bootstrapInternalDir);

        let defaultServerEntry = path.join(
            minimalDIRPath,
            "core",
            "server.js",
        );

        // start launching the server
        require(defaultServerEntry);

        job_runVersionCheck()
    },
}
export default item