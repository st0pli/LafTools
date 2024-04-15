// LafTools - The Leading All-In-One ToolBox for Programmers.
// 
// Date: Wed, 28 Feb 2024
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

import React from 'react';
import { Autocomplete, AutocompleteItem, CardProps, Listbox, ListboxItem, Tab, Tabs } from "@nextui-org/react";
import { Card, Divider, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import { border_clz, light_border_clz_all, tw } from '@/app/__CORE__/meta/styles';
import { Dot } from '@/app/__CORE__/utils/TranslationUtils';
import SubTabNav from '../nav/nav-sub-tab';
import Link from 'next/link';
import { fmtURL_Server } from '@/app/__CORE__/utils/routeUtils';
import { useConstructedKeyAndInit } from '@/app/[lang]/client/src/initapp';
import FundrasingPlanBtn from '../cpt/cpt-fundrasing-btn';
import Sidebar from './main-sidebar';
import { ToolProp } from '.';
import { getSearchDetailBySearchProps } from '@/app/[lang]/page';
import ClientWrapper from '../../common/clientWrapper';
import LoginPage from './login/LoginPage';
import RegisterPage from './register/RegisterPage';
export let getCardsProps = (): CardProps => {
    return {
        radius: "none", shadow: "none", className: light_border_clz_all
    }
}

export type CrtToolProp = ToolProp
export default (props: CrtToolProp) => {
    let pid = props.params.id
    let finPage: JSX.Element | null = null;
    let passClz = ' rounded-sm shadow-sm mt-2 w-[600px]  ' + light_border_clz_all
    if (pid == 'sign-in') {
        finPage = (
            <LoginPage type="username" passClz={passClz} />
        )
    } else if (pid == 'sign-up') {
        finPage = (
            <RegisterPage passClz={passClz} />
        )
    } else {
        finPage = (
            <div>404 no page found for {pid}</div>
        )
    }
    return <div className='flex-1  space-y-2 '>
        <div className={'flex justify-center mx-auto'} style={{
            minHeight: '100vh',
        }}>
            {finPage}
        </div>
    </div>
}