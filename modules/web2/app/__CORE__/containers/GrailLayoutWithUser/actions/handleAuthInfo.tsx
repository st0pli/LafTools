// LafTools - The Leading All-In-One ToolBox for Programmers.
// 
// Date: Thu, 22 Feb 2024
// Author:   
// Description: 
// Copyright (C) 2024 - Present, https://laf-tools.com and https://codegen.cc
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

'use server'

import { handleImgBase64Result, } from "@/app/api/captcha/route";
import { setCookie, getCookie, getCookies, deleteCookie } from 'cookies-next';
import { cookies, headers } from 'next/headers';
import _ from "lodash";
import { randomUUID } from "crypto";
import { redirect, usePathname } from "next/navigation";
// import { SystemInfoBody, fn_add_user_into_active, fn_get_system_info_from_redis } from "@/app/[lang]/register/user-types";
import { LocaleType } from "@/middleware";
import { LocalUser } from "@/app/__CORE__/dao/model";

let getPathnameInRSC = () => {
    const headersList = headers();
    const header_url = headersList.get('x-url') || "";
    return header_url
}

export let redirectToLoginPage = () => {
    let pathname = getPathnameInRSC()
    let permitted = pathname.startsWith("/login") || pathname.startsWith("/register")
    // no need to redirect to login page
}

export type AuthInfo = {
    user: LocalUser | null,
    signedIn: boolean,
    // systemInfo: SystemInfoBody
}

export default async (): Promise<AuthInfo> => {
    // let systemInfo = {
    // };// await fn_get_system_info_from_redis()
    // let elb3AuthStr = getCookie(header_ELB3_auth, { cookies });
    // if (!_.isEmpty(elb3AuthStr)) {
    //     try {
    //         let [expiredTS, body, singature, version] = elb3AuthStr?.split(".") as string[];
    //         let crtTime = new Date();
    //         if (crtTime.getTime() > parseInt(expiredTS)) {
    //             throw new Error("expired");
    //         }
    //         let c_sig = getSignatureFromStr(body);
    //         if (c_sig != singature) {
    //             throw new Error("signature not match");
    //         }
    //         let push: Elb3AuthBody = JSON.parse(atob(body))
    //         let userInfo = await getUserInfoByUserAcctId(push.userAcctId)
    //         await fn_add_user_into_active(push.userAcctId)
    //         return {
    //             systemInfo,
    //             user: userInfo,
    //             signedIn: userInfo != null,
    //         }
    //     } catch (e) {
    //         // unable to decode, meaning it is not a valid elb3-auth
    //         console.log("decode error", e);
    //         // if they have elb3-auth, but it is not valid, then we should remove it and redirect the user to /login
    //         redirectToLoginPage()
    //     }
    // } else {
    //     // pass through
    // }
    return {
        // systemInfo: {
        // },
        user: null,
        signedIn: false
    }
}