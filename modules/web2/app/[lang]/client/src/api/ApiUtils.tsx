'use server'

import axios, { AxiosResponse } from "axios"
import { HEADER_X_LAF_LANG, HEADER_X_LAF_PLATFORM as HEADER_X_LAF_PLATFORM, HEADER_X_LAF_REGION, HEADER_X_LAF_VERSION } from "../../../../../../server2/src/constant";
import { APPINFOJSON } from "../nocycle";
import { APITypeInfo, API_SERVER_URL, core_sendAPIRequestInBE } from "@/app/__CORE__/share/api";

const LAFREGION = process.env.LAFREGION
export let sendAPIRequestInBE = async (partialInfo: {
    lang: string
}, url: string, request: any): Promise<Response> => {
    if (!url.startsWith('/')) {
        url = '/' + url;
    }
    let currentLang = partialInfo.lang
    let region = currentLang == 'zh_CN' ? "CN" : 'US'
    if (LAFREGION) { // if the region is set in the env, use it
        region = LAFREGION
    }
    let res = await core_sendAPIRequestInBE({
        lang: currentLang,
        platform: '', // TODO: unknown for now
        version: APPINFOJSON.version,
        region: region
    }, url, request)
    return res;
}
