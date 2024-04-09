'use client'

import { Dot } from "@/app/__CORE__/utils/cTranslationUtils"
import { nav_text_clz } from "../nav/constants"
import { isFullScreen, setFullScreen } from "../../fullscreen"
import { useEffect } from "react"

export default () => {
    let isFull = isFullScreen()
    useEffect(() => {
        if (isFull) {
            document.body.classList.add('wide-page')
        }
    }, [])
    return <span className={nav_text_clz + ' hover:cursor-pointer  hover:underline'} onClick={() => {
        setFullScreen(!isFull)
        location.reload()
    }}>
        {isFull ? Dot("no.wide.page", "Fixed Width") : Dot("wide.page", "Wide Page")}
    </span>
}