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
import NodeHorizontalBar from "@/__CORE__/containers/TabGroupHorizontalBar";
import _, { random } from "lodash";

import InnerHome from '../../home'

import React, { } from "react";
import { PageProps } from '@/__CORE__/meta/pages'
import getAuthInfo, { AuthInfo } from "@/__CORE__/containers/GrailLayoutWithUser/actions/handleAuthInfo";
import { Dot } from "../../__CORE__/utils/TranslationUtils";
import Link from "@/__CORE__/components/Link";


import { getAppDevIcon, getAppKeywords } from "../../__CORE__/config/imgconfig";
import { CategorySearchProps, generateMetadata as toolMetaDataFn } from "../page";
import EntryPage from './go/[subCategory]/page'
import VersionCheck from "@/__CORE__/containers/VersionCheck";
import { RegisterSlot } from "./src/fnrefmap";
export type AuthInfoProps = { authInfo: AuthInfo }

export let sleep = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}


export default function Home(props: CategorySearchProps) {
    return (
        <EntryPage {...props} />
    )
}


