// LafTools
// 
// Date: Thu, 14 Mar 2024
// Description:
// License: AGPLv3
// Copyright (C) 2024 - Present, https://laftools.dev and https://codegen.cc





import { getWebsiteName } from "@/__CORE__/common/config";
import { TopNav } from "@/__CORE__/containers/TopNav";
import CenterPart from "@/__CORE__/containers/CenterPart";
import CardPanel from '@/__CORE__/components/CardPanel'
import _, { random } from "lodash";

import InnerHome from '../../../../home'

import React, { } from "react";
import { PageProps, } from '@/__CORE__/meta/pages'
import getAuthInfo, { AuthInfo } from "@/__CORE__/containers/GrailLayoutWithUser/actions/handleAuthInfo";


import Tools, { CategorySearchProps, generateMetadata as toolMetaDataFn } from '@/[lang]/page'
import ToolPart from '../../src/parts/tools'
import AIPart from '../../src/parts/ai'
import UserPart from '../../src/parts/user'
import DocsPart from '../../src/parts/docs'
import ResourcesPart from '../../src/parts/resources'
import NavigatorPage from '../../src/parts/index'
import { ifnil } from "@/__CORE__/meta/fn";
import { getToolSubCategory } from "@/[lang]/client/src/impl/tools/d_subcategory";
export type AuthInfoProps = { authInfo: AuthInfo }
export type CombindSearchProps = PageProps<any, any>
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

export default function Home(props: CategorySearchProps) {
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
    } else if (category == 'user') {
        whatPartForChildren = <UserPart {...props} />
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


export { generateMetadata } from '@/[lang]/page'