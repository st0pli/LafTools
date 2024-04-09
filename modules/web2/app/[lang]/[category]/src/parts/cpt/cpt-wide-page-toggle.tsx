'use client'

import { Dot } from "@/app/__CORE__/utils/cTranslationUtils"
import { nav_text_clz } from "../nav/constants"
import { isWidePage, setWidePage } from "../../widepage"
import { loadDOT } from "@/app/__CORE__/utils/i18n-for-nonclient"
import { useEffect } from "react"

let a = loadDOT("MNR-D93dP")

export default () => {
    let val_isWidePage = isWidePage()
    useEffect(() => {
        if (val_isWidePage) {
            document.body.classList.add('wide-page')
        }
    }, [])
    return <span className={nav_text_clz + ' hover:cursor-pointer  hover:underline'} onClick={() => {
        setWidePage(!val_isWidePage)
    }}>
        {val_isWidePage ? Dot("no.wide.page", "Fixed Width") : Dot("wide.page", "Wide Page")}
    </span>
}