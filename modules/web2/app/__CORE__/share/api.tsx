import { HEADER_X_LAF_LANG, HEADER_X_LAF_PLATFORM, HEADER_X_LAF_REGION, HEADER_X_LAF_VERSION } from "./server_constants";

let isDev = process.env.NODE_ENV === "development";
export const API_SERVER_URL = isDev ? "http://127.0.0.1:2016" : "https://api.laftools.cn";

export type APITypeInfo = {
    lang: string,
    platform: string,
    version: string,
    region: string
}

export let core_sendAPIRequestInBE = async (info: APITypeInfo, url: string, request: any): Promise<Response> => {
    if (!url.startsWith('/')) {
        url = '/' + url;
    }
    let res = await fetch(API_SERVER_URL + '/v3' + url, {
        headers: {
            [HEADER_X_LAF_REGION]: info.region,
            [HEADER_X_LAF_LANG]: info.lang,
            [HEADER_X_LAF_PLATFORM]: info.platform,
            [HEADER_X_LAF_VERSION]: info.version
        },
        body: JSON.stringify(request),
    })
    return res;
}
