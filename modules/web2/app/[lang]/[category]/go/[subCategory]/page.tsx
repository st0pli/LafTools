// LafTools - The Leading All-In-One ToolBox for Programmers.
// 
// Date: Thu, 14 Mar 2024
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

import Image from "next/image";
import type { Metadata, ResolvingMetadata } from "next";
import Head from 'next/head'
import { Props } from "next/script";
import { getWebsiteName } from "@/app/__CORE__/common/config";
import { TopNav } from "@/app/__CORE__/containers/TopNav";
import CenterPart from "@/app/__CORE__/containers/CenterPart";
import CardPanel from '@/app/__CORE__/components/CardPanel'
import _, { random } from "lodash";
import { useParams, useSearchParams } from "next/navigation";
import InnerHome from '../../../../home'
import { usePathname } from 'next/navigation';
import React, { } from "react";
import { PageProps, getToolSubCategory } from '@/app/__CORE__/meta/pages'
import getAuthInfo, { AuthInfo } from "@/app/__CORE__/containers/GrailLayoutWithUser/actions/handleAuthInfo";
import { Dot } from "../../../../__CORE__/utils/TranslationUtils";
import Link from "next/link";
import { NextUIProvider } from "@nextui-org/react";

import { getAppDevIcon, getAppKeywords } from "../../../../__CORE__/config/imgconfig";
import Tools, { CategorySearchProps, generateMetadata as toolMetaDataFn } from '@/app/[lang]/page'
import ToolPart from '../../src/parts/tools'
import AIPart from '../../src/parts/ai'
import DocsPart from '../../src/parts/docs'
import ResourcesPart from '../../src/parts/resources'
import NavigatorPage from '../../src/parts/index'
import { ifnil } from "@/app/__CORE__/meta/fn";
export type AuthInfoProps = { authInfo: AuthInfo }
export type CombindSearchProps = PageProps<any, any>


export default async function Home(props: CategorySearchProps) {
    let { subCategory, category } = props.params
    if (_.isEmpty(subCategory)) {
        subCategory = getToolSubCategory()[0].id
        props = {
            ...props,
            params: {
                ...props.params,
                subCategory
            }
        }
    }
    let whatPartForChildren = <span>it is undefined so far</span>
    if (ifnil(category, '') == '' || category == 'tools') {
        whatPartForChildren = (
            <ToolPart {...props} />
        )
    } else if (category == 'docs') {
        whatPartForChildren = (
            <DocsPart {...props} />
        )
    } else if (category == 'resources') {
        whatPartForChildren = (
            <ResourcesPart {...props} />
        )
    } else if (category == 'ai') {
        whatPartForChildren = (
            <AIPart {...props} />
        )
    } else {
        whatPartForChildren = (
            <div>sorry, I have no idea for this category {category}</div>
        )
    }
    return (
        <main>
            <NavigatorPage {...props} innerContent={whatPartForChildren}></NavigatorPage>
        </main>
    )
}


export { generateMetadata } from '@/app/[lang]/page'