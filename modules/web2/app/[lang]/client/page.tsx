// LafTools
// 
// Date: Sun, 25 Feb 2024
// Description:
// License: AGPLv3
// Copyright (C) 2024 - Present, https://laftools.dev and https://codegen.cc

/* tslint:disable:no-unused-variable */
import _ from "lodash";
import React, { } from "react";
import getAuthInfo, { AuthInfo } from "@/app/__CORE__/containers/GrailLayoutWithUser/actions/handleAuthInfo";
import { PageProps } from '@/app/__CORE__/meta/pages'
// import Entry from "./client";
import { Metadata } from "next/types";
import { getAppDevIcon, getAppKeywords } from "@/app/__CORE__/config/imgconfig";
// import {  } from "./src/utils/TranslationUtils";
import dynamic from "next/dynamic";
import { fmtURL_Server } from "@/app/__CORE__/utils/routeUtils";
import { Dot, getXLocaleStrInRSC } from "@/app/__CORE__/utils/TranslationUtils";
import { isDevEnv } from "@/app/__CORE__/share/env";
import PassClientValue from './pass'
import PageLoadingEffect from "@/app/__CORE__/containers/PageLoadingEffect";
import { CategorySearchProps } from "../page";
import SetupPopPanel from "@/app/__CORE__/containers/SetupPopPanel";
const EntryWrapper = dynamic(() => import('./client'), { ssr: false, loading: () => <PageLoadingEffect /> })

let cachedLangMap: { [key: string]: string } = {}
let getCachedValueIfNot = (key: string, fn: () => string) => {
    if (cachedLangMap[key] && !isDevEnv()) {
        return cachedLangMap[key]
    }
    cachedLangMap[key] = fn()
    return cachedLangMap[key]
}

export default async function ClientPage(props: CategorySearchProps) {
    return (
        <main>
            <EntryWrapper />
        </main>
    )
}
export let generateMetadata = async function (): Promise<Metadata> {
    let title = Dot("QkJ-TOduip6z_", "LafTools IDE")
    return {
        icons: [
            getAppDevIcon()
        ],
        title: title,
        description: Dot("8OqB7hN1s", "This page provides an IDE UI style for LafTools, a higher level of abstraction for LafTools."),
        keywords: [
            Dot("s-fxP80Dd", "LafTools IDE"),
            Dot("FLsbFsOZq", "IDE"),
            ...getAppKeywords(),
        ]
    };
}

