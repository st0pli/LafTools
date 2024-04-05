'use client'

import { sendAPIRequestInBE } from "@/app/[lang]/client/src/api/ApiUtils"
import _ from "lodash"
import { useCallback, useEffect } from "react"
import { getCurrentLang } from "../../utils/cTranslationUtils"
import { IsCurrentServerMode, IsCurrentServerModeWithPromise } from "../../utils/systemUtils"
import { URL_RELEASE_GET_LATEST } from "../../share/server_urls"

export default () => {
    let fn = useCallback(_.once(async () => {
        let serverMode = await IsCurrentServerModeWithPromise()
        if (serverMode) return;
        sendAPIRequestInBE({
            lang: getCurrentLang()
        }, URL_RELEASE_GET_LATEST, {})
    }), [])
    useEffect(() => {
        fn()
    }, [])
    return ''
}