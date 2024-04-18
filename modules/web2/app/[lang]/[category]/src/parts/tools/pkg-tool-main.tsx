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
import ToolView from './view-tools'
import { useConstructedKeyAndInit } from '@/app/[lang]/client/src/initapp';
import FundrasingPlanBtn from '../cpt/cpt-fundrasing-btn';
import Sidebar from './main-sidebar';
import { ToolProp } from '.';
import ExtraListTool from './extra-list-tool';
import { CategoryTypeSearchDetail } from '@/app/[lang]/page';
import { Button, Dialog, DialogBody, DialogFooter } from '@blueprintjs/core';
import DialogToolListView from './dialog-tool-list-view';
import { HocClientWrapperClient, hocClientWrapper } from '../../common/hocClientWrapper';
import dynamic from 'next/dynamic';
export let getCardsProps = (): CardProps => {
    return {
        radius: "none", shadow: "none", className: light_border_clz_all
    }
}

export type CrtToolProp = ToolProp & CategoryTypeSearchDetail

export default (props: CrtToolProp) => {
    return <Card {...getCardsProps()} className={light_border_clz_all + ' mt-2 rounded shadow-md '} style={{
        height: 'calc(100vh - 91px)'
    }}>
        <SubTabNav  {...props}></SubTabNav>
        <HocClientWrapperClient children={
            <ToolView {...props} />
        }></HocClientWrapperClient>
        {
            // React.createElement(hocClientWrapper(dynamic(() => import("./view-tools"), {
            //     ssr: false
            // })))
            //  <ToolView {...props} />
        }
    </Card >
}