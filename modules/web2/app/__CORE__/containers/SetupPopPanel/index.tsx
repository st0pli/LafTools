// LafTools - The Leading All-In-One ToolBox for Programmers.
// 
// Date: Sun, 10 Mar 2024
// Author:   
// Description: 
// Copyright (C) 2024 - Present, https://laftools.dev and https://codegen.cc
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

'use client'

import { ScrollShadow } from "@nextui-org/react";
import { CSS_BG_COLOR_WHITE, border_clz, light_border_clz_all } from "@/app/__CORE__/meta/styles"
import { useState } from "react"
import regionUtils from "../../utils/regionUtils"
import TranslationUtils, { getCurrentLang } from "../../utils/cTranslationUtils"
import { useGetI18nLangList } from "@/app/[lang]/client/src/containers/UserAskMultipleDialogs"


import { Button } from "@nextui-org/react";
import _ from "lodash";
import { getFormattedLang } from "@/app/[lang]/client/src/i18n";
import exportUtils from "@/app/[lang]/client/src/utils/ExportUtils";
import { FN_GetDispatch } from "@/app/[lang]/client/src/nocycle";
import LocalStateSlice from "@/app/[lang]/client/src/reducers/state/localStateSlice";
import { loadDOT } from "../../utils/i18n-for-nonclient";
type ReturnType = [string, (value: string) => void]
let user_crt_lang_key = 'NnJxl572v'
let confrim_close_key = '9c1ASSbTb'
let a = loadDOT("qo8NONbbw")
let goToNextURL = (lang: string) => {
    // TODO: enhance this logic
    let hrefVal = location.href
    let hasClient = hrefVal.indexOf("/client") != -1
    let formattedValue = getFormattedLang(lang + '')
    let nextURL = '/' + formattedValue
    if (hasClient) {
        nextURL = '/' + formattedValue + "/client"
    }
    location.href = nextURL
}
export default (props) => {
    let Dot = a()

    let pathname = location.hostname
    let i18nList = useGetI18nLangList()
    let [forceclose, setForceClose] = useState(false)
    let crtLang = getCurrentLang()
    let { confirmCloseStr, user_lang_value } = exportUtils.useSelector((v) => {
        return {
            confirmCloseStr: v.localState.setup_confirm_lang,
            user_lang_value: v.localState.setup_user_lang
        }
    })
    if (user_lang_value && !_.isEmpty(user_lang_value) && user_lang_value != crtLang) {
        setTimeout(() => {
            goToNextURL(user_lang_value + '')
        })
    }
    if (forceclose) {
        return ''
    }
    if (confirmCloseStr != null && confirmCloseStr != '') {
        return ''
    }
    return <ScrollShadow className={
        "fixed flex flex-col bottom-0 right-4 w-[300px] scrollbar-hide z-[100]   h-[500px] " + CSS_BG_COLOR_WHITE + " " + light_border_clz_all + ' rounded-md shadow-md '
    }>
        <Button className="absolute right-0 top-0" size='sm' variant="light" onClick={() => {
            FN_GetDispatch()(
                LocalStateSlice.actions.updateOneOfLocalState({
                    setup_confirm_lang: '1'
                })
            )
            setForceClose(true)
        }}>{Dot("hgmxsP7bY", 'Close')}</Button>
        <div className="p-2">
            <div className="text-lg font-bold">Select Language</div>
            <div className="text-sm text-gray-500">Select the language you want to use</div>
        </div>
        <div className="flex-1 space-y-2 p-2">
            {
                i18nList.map(x => {
                    return (
                        <div>
                            <Button key={x.Label} color={
                                x.Value == crtLang ? "primary" : "default"
                            } onClick={() => {
                                goToNextURL(x.Value + '')
                            }} fullWidth>{x.LabelByLang}</Button>
                        </div>
                    )
                })
            }
        </div>
    </ScrollShadow>
}