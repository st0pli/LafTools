'use client'

import axios, { AxiosResponse } from "axios"
import { HEADER_X_LAF_LANG, HEADER_X_LAF_OS, HEADER_X_LAF_REGION, HEADER_X_LAF_VERSION } from "../../../../../../server2/src/constant";
import { getCurrentLang } from "../utils/cTranslationUtils";
import { APPINFOJSON } from "../nocycle";

let ApiUtils = {
    sendRequest: async (url: string, request: any): Promise<AxiosResponse<any, any>> => {
        if (!url.startsWith('/')) {
            url = '/' + url;
        }
        let currentLang = getCurrentLang()
        let res = await axios({
            url: '/v3' + url,
            headers: {
                [HEADER_X_LAF_REGION]: currentLang == 'zh_CN' ? "CN" : 'US', // TODO: wait to be ipmlemented later. currently, just make it CN
                [HEADER_X_LAF_LANG]: currentLang,
                // [HEADER_X_LAF_OS]: getCurrentOS() // TODO: will support it later
                [HEADER_X_LAF_VERSION]: APPINFOJSON.version
            }
        })
        return res;
    }
}
export default ApiUtils