'use server'

import axios, { AxiosResponse } from "axios"
import { APPINFOJSON } from "../nocycle";
import { core_sendAPIRequestInBE, } from "@/app/__CORE__/share/api";
import { getLAFRegion } from "@/app/__CORE__/share/api_constants";


export let sendAPIRequestInBE = async (partialInfo: {
    lang: string
}, url: string): Promise<string> => {
    if (!url.startsWith('/')) {
        url = '/' + url;
    }
    let currentLang = partialInfo.lang
    let region = getLAFRegion(currentLang)
    let res = await core_sendAPIRequestInBE({
        lang: currentLang,
        platform: '', // TODO: unknown for now
        version: APPINFOJSON.version,
        region: region
    }, url, {})
    return await res.text();
}
