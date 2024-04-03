'use server'

import axios, { AxiosResponse } from "axios"
import { HEADER_X_LAF_LANG, HEADER_X_LAF_OS, HEADER_X_LAF_REGION, HEADER_X_LAF_VERSION } from "../../../../../../server2/src/constant";
import { APPINFOJSON } from "../nocycle";
import { IsCurrentServerMode as IsCurrentServerMode } from "@/app/__CORE__/utils/systemUtils";

export type APITypeInfo = {
    lang: string
}

const LAFREGION = process.env.LAFREGION
export let sendAPIRequestInBE = async (info: APITypeInfo, url: string, request: any): Promise<AxiosResponse<any, any>> => {
    if (!url.startsWith('/')) {
        url = '/' + url;
    }
    let currentLang = info.lang
    let region = currentLang == 'zh_CN' ? "CN" : 'US'
    if (LAFREGION) { // if the region is set in the env, use it
        region = LAFREGION
    }
    let res = await axios({
        url: '/v3' + url,
        headers: {
            [HEADER_X_LAF_REGION]: region, // TODO: wait to be ipmlemented later. currently, just make it CN
            [HEADER_X_LAF_LANG]: currentLang,
            // [HEADER_X_LAF_OS]: getCurrentOS() // TODO: will support it later
            [HEADER_X_LAF_VERSION]: APPINFOJSON.version
        }
    })
    return res;
}
