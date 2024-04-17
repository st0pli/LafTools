// LafTools - The Leading All-In-One ToolBox for Programmers.
// 
// Date: Sat, 16 Mar 2024
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


import _ from "lodash";
import React, { } from "react";
import { Dot, getXHostname } from "@/app/__CORE__/utils/TranslationUtils";
import Link from "next/link";
import { NavCategory as NavCategory } from "../nav/nav-category";
import { getAppDevIcon } from "@/app/__CORE__/config/imgconfig";
import { ClosableText } from "@/app/__CORE__/components/ClosableText";
import RedirectToOtherBanner from "@/app/__CORE__/components/RedirectToOtherBanner/index";
import { border_clz, border_clz_top, row_pad_clz } from "@/app/__CORE__/meta/styles";
import LightDarkButton from "@/app/__CORE__/components/LightDarkButton";
import GitHubButton from "@/app/__CORE__/components/GitHubButton";
import SysBreadCrumbs from '../cpt/cpt-breadcrumbs'
// import {

// } from '../../../../../../types'
import { GitHubRepoIssueLink } from "@/app/__CORE__/meta/constants";
import Footer from "@/app/__CORE__/containers/Footer";
import PossiblePathname from "@/app/__CORE__/components/PossiblePathname";
import {
    getCategoryList as getCategoryList,
    fn_rightNav,

    fn_rightCategoryArr

} from "@/app/[lang]/client/src/impl/tools/d_portal";
import { CategorySearchProps } from "@/app/[lang]/page";
import { URL_SUBCATEGORY_GO_PATH } from "@/app/__CORE__/meta/url";
import { fmtURL_ToolSubPage } from "@/app/__CORE__/meta/common";
import { NavigatorPassProp } from "..";
import { ifnil } from "@/app/__CORE__/meta/fn";
import { getIconImgAndBannerTextByCategory } from "@/app/[lang]/client/src/impl/tools/d_subcategory";

export default (props: NavigatorPassProp) => {
    let { category } = props.params;
    let {
        backgroundImage,
        textColor,
        bgSize,

        iconImg, crtTitleBanner } = getIconImgAndBannerTextByCategory(category, props);
    return <div className={border_clz + " py-3 px-2 relative h-[74px] flex items-center  "} style={{
        backgroundImage: backgroundImage,
        backgroundSize: bgSize
    }}>
        <div className={' space-x-2 px-4 items-center z-20 flex flex-row  relative '} >
            <div className="">
                <img src={'/static/' + iconImg} width={40} height={40} className="" style={{
                    // border: '2px solid #ffffff'
                }}></img>
            </div>
            <div className="text-center" style={{
                color: textColor
            }}>
                <h1 className=" m-0 mt-1  font-semibold" style={{
                    fontSize: '1rem',
                }}>{crtTitleBanner}</h1>
                <div className='text-xs   mt-[-1px] mb-1'>
                    {/* <PossiblePathname /> */}
                    {Dot("forever-foss", "Forever FOSS")}
                </div>
                {/* <h2 className="text-xs pl-[2px] text-slate-600 dark:text-slate-300 mt-[-2px] mb-1 items-center m-0 space-x-1 flex flex-row ">
                    <div>
                        <PossiblePathname />
                    </div>
                    <div>•</div>
                    <div className="small-text">{Dot("quality-first", "High Quality First")}</div>
                    <div>•</div>
                    <div className="small-text">{Dot("forever-foss", "Forever FOSS")}</div>
                </h2> */}
            </div>
            {/* <div className=" absolute right-0 bottom-0  ">
                <div className=" text-gray-600 dark:text-gray-400 ">
                    <div className="w-full space-y-[3px]">
                        <ClosableText
                            closeKey='QUxFMltus'
                            text={"[1] " + Dot(
                                "C_qzLO7yw",
                                "Please use Chrome, Firefox, or Edge for the best experience."
                            )}
                        ></ClosableText>
                        <ClosableText
                            goText={Dot("CqFdiBu6M", "View")}
                            goLink="https://github.com/work7z/LafTools/"
                            closeKey="L49HJwuJz"
                            text={"[2] " +
                                Dot("giveas3tar", "Give us a star on GitHub if you like LafTools.")
                            }
                        ></ClosableText>
                        <ClosableText
                            goText={Dot("Ezsn81tfc", "View")}
                            goLink="https://github.com/work7z/LafTools/"
                            closeKey="XDp3Meed-"
                            text={"[3] " + Dot("BQs6go-dk", "Free Download LafTools for Windows, Linux, and macOS.")}
                        >
                        </ClosableText>
                    </div>
                </div>
            </div> */}
        </div>
    </div>
}