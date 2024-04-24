// LafTools
// 
// Date: Wed, 28 Feb 2024
// Description:
// License: AGPLv3
// Copyright (C) 2024 - Present, https://laftools.dev and https://codegen.cc

'use client'

import NoSsr2 from '@/__CORE__/components/NoSsr2'
import { FinalRootApp } from './src/main'
import TranslationUtils from '@/__CORE__/utils/cTranslationUtils'
import { useEffect } from 'react'
import SetupPopPanel from '@/__CORE__/containers/SetupPopPanel'
import VersionCheck from '@/__CORE__/containers/VersionCheck'
import { useTheme } from '@/__CORE__/components/LightDarkButton/theme'


export default () => {
    useEffect(() => {
        if (window) {
            // let langMap = 
            // TranslationUtils.LangMap = langMap
        }
    }, [])
    let innerChild = <div className="w-full h-full">
        <FinalRootApp />
    </div>
    return innerChild
}
