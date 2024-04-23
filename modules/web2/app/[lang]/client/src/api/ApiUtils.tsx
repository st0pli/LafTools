'use server'

import axios, { AxiosResponse } from "axios"
import { APPINFOJSON } from "../nocycle";
import { core_sendAPIRequestInBE, } from "@/app/__CORE__/share/api";
import { getLAFRegion } from "@/app/__CORE__/share/api_constants";


export let webaction_sendAPIRequestInBE = async (partialInfo: {
    lang: string,
    isPOST?: boolean,
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
    }, url, {
        method: partialInfo.isPOST ? 'POST' : 'GET',
    })
    return await res.text();
}
