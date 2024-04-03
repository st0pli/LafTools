'use client'

import ApiUtils from "@/app/[lang]/client/src/api/ApiUtils"
import { URL_RELEASE_GET_LATEST } from "@/app/[lang]/client/src/api/url"
import _ from "lodash"
import { useCallback, useEffect } from "react"

export default () => {
    let fn = useCallback(_.once(() => {
        ApiUtils.sendRequest(URL_RELEASE_GET_LATEST, {})
    }), [])
    useEffect(() => {
        fn()
    }, [])
    return ''
}