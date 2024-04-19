// LafTools - The Leading All-In-One ToolBox for Programmers.
// 
// Date: Thu, 22 Feb 2024
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

"use client"
import * as React from "react";
import { ThemeProvider as NextThemesProvider, } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";
import $ from 'jquery';
import { useTheme } from "./__CORE__/components/LightDarkButton/theme";
import _ from 'lodash'
import { hocClientWrapper } from "./[lang]/[category]/src/common/hocClientWrapper";
if (typeof window !== 'undefined') _.set(window, '$', $)

let CustomerInner = hocClientWrapper(({ children, ...props }: ThemeProviderProps) => {
    const { theme, setTheme } = useTheme()
    React.useEffect(() => {

    }, [
        theme
    ])
    return <div className={"customerinner w-full h-full " + (
        // theme == 'dark' ? 'bp5-dark' : 'bp5-light'
        ''
    )}>{children}</div>
})

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    let [mounted, setMounted] = React.useState(false)
    React.useEffect(() => {
        setMounted(true)
    }, [])
    if (!mounted) return ''
    return <CustomerInner>{children}</CustomerInner>
    // return <NextThemesProvider enableSystem={false}  {...props}>
    //     <CustomerInner>{children}</CustomerInner>
    // </NextThemesProvider>
}