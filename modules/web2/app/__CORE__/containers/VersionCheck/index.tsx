'use client'

import ApiUtils from "@/app/[lang]/client/src/api/ApiUtils"
import { URL_API_HELLO_WORLD } from "@/app/[lang]/client/src/api/api"
import _ from "lodash"
import { useCallback, useEffect } from "react"

export default () => {
    let fn = useCallback(_.once(() => {
        ApiUtils.sendRequest(URL_API_HELLO_WORLD, {})
    }), [])
    useEffect(() => {
        fn()
    }, [])
    return ''
}