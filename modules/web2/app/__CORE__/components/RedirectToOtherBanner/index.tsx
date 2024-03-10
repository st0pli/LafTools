'use client'

import { border_clz } from "@/app/[lang]/styles"
import { useState } from "react"
import regionUtils from "../../utils/regionUtils"
import TranslationUtils from "../../utils/cTranslationUtils"


type ReturnType = [string, (value: string) => void]
export let useLocalStorage = (key: string, initialValue: string): ReturnType => {
    let [value, setValue] = useState(() => {
        let value = localStorage.getItem(key)
        if (value) {
            return value
        } else {
            return initialValue
        }
    })
    let setLocalStorageValue = (value: string) => {
        setValue(value)
        localStorage.setItem(key, value)
    }
    return [value, setLocalStorageValue]
}

export let BannerWithText = (props: { link: string, text: string, onClick: any }) => {
    return <div className={" bg-yellow-100 text-black p-1 text-xs text-center  border-b-[1px] " + border_clz}>
        <div className="space-x-2">
            <span className="font-semibold">
                {props.text}
            </span>
            <a href={props.link}>Redirect</a>
            <a href="#" onClick={() => {
                props.onClick()
            }}>Close</a>
        </div>
    </div>
}

export default (props) => {

    let [read, setRead] = useLocalStorage("readendtgFr", "false")

    if (read == 'true') {
        return ''
    }
    let isCNUser = regionUtils.isCurrentUserPossibleChinese()
    if (!isCNUser && regionUtils.isCNHost()) {
        return (
            <BannerWithText link={regionUtils.getUSHosts()[0]} text={"Switch to US region (Recommended)"} onClick={() => {
                setRead("true")
            }}></BannerWithText>
        )
    }
    if (isCNUser && regionUtils.isUSHost()) {
        return (
            <BannerWithText link={regionUtils.getCNHosts()[0]} text={"切换至国内版，速度更快！(Switch to CN region)"} onClick={() => {
                setRead("true")
            }}></BannerWithText>
        )
    } else {
        return ''
    }
}