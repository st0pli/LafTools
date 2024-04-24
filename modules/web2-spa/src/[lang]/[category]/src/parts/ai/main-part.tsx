// LafTools
// 
// Date: Wed, 28 Feb 2024
// Description:
// License: AGPLv3
// Copyright (C) 2024 - Present, https://laftools.dev and https://codegen.cc

import React from 'react';
import { border_clz, light_border_clz_all, tw } from '@/__CORE__/meta/styles';
import { Dot } from '@/__CORE__/utils/TranslationUtils';
import SubTabNav from '../nav/nav-sub-tab';
import Link from '@/__CORE__/components/Link';
import { fmtURL_Server } from '@/__CORE__/utils/routeUtils';
import { useConstructedKeyAndInit } from '@/[lang]/client/src/initapp';
import FundrasingPlanBtn from '../cpt/cpt-fundrasing-btn';
import Sidebar from './main-sidebar';
import { ToolProp } from '.';
import { getSearchDetailBySearchProps } from '@/[lang]/page';
import NotYetOkie from '@/[lang]/client/src/components/NotYetOkie';
import UnderDevelopment from '@/[lang]/client/src/components/UnderDevelopment';


export type CrtToolProp = ToolProp
export default (props: CrtToolProp) => {
    // let searchDetail = getSearchDetailBySearchProps(props)
    return <div className='flex-1  space-y-2 '>
        <div style={{
        }}>
            <UnderDevelopment />
        </div>
    </div>
}