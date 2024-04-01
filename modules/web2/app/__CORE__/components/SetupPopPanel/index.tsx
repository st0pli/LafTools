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

import { CSS_BG_COLOR_WHITE, border_clz } from "@/app/__CORE__/meta/styles"
import { useState } from "react"
import regionUtils from "../../utils/regionUtils"
import TranslationUtils from "../../utils/cTranslationUtils"


type ReturnType = [string, (value: string) => void]

export default (props) => {
    let pathname = location.hostname
    return <div className={
        "fixed bottom-0 right-0 w-[300px] h-[500px] " + CSS_BG_COLOR_WHITE + " " + border_clz + ' rounded-md shadow-md '
    }>
        <div>this is setup pop panel</div>
    </div>
}