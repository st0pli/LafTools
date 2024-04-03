'use client'

import { sendAPIRequestInBE } from "@/app/[lang]/client/src/api/ApiUtils"
import { URL_RELEASE_GET_LATEST } from "@/app/[lang]/client/src/api/url"
import _ from "lodash"
import { useCallback, useEffect } from "react"
import { getCurrentLang } from "../../utils/cTranslationUtils"

export default () => {
    let fn = useCallback(_.once(() => {
        sendAPIRequestInBE({
            lang: getCurrentLang()
        }, URL_RELEASE_GET_LATEST, {})
    }), [])
    useEffect(() => {
        fn()
    }, [])
    return ''
}