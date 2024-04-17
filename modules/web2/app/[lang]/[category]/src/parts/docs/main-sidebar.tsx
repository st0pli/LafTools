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


import React from 'react';
import { Card, Divider, CardHeader, Button, CardBody, ButtonGroup, CardFooter } from "@nextui-org/react";
import { border_clz, light_border_clz_all, tw } from '@/app/__CORE__/meta/styles';
import { Dot, getHStr } from '@/app/__CORE__/utils/TranslationUtils';
import Nav from '../nav/nav-sub-tab';
import Link from 'next/link';
import { fmtURL_Server } from '@/app/__CORE__/utils/routeUtils';
import { useConstructedKeyAndInit } from '@/app/[lang]/client/src/initapp';
import FundrasingPlanBtn from '../cpt/cpt-fundrasing-btn';
import { ToolProp, getCardsProps } from '.';
import CptCalendar from '../cpt/cpt-calendar';



export default (props: ToolProp) => {
    let secondaryPanelClzHeader = tw('bg-slate-50 g-card-header dark:bg-slate-700')

    return <div className='w-64  space-y-2'>
        <Card {...getCardsProps()}>
            <CardHeader className={secondaryPanelClzHeader}>{Dot("ob1q-I7s-", "About LafTools")}</CardHeader>
            <CardBody>
                <div className='space-y-2'>
                    <Link className='flex flex-row items-center justify-center ' href={fmtURL_Server(['client'])}>
                        <Button color='primary' fullWidth size='sm' variant='bordered'>
                            <img src='/static/controls/program.png' className='w-5 h-5 mr-[2px] ' />
                            <span className=''>
                                {Dot("kUSuP_S-Y", "Try with Client UI")}
                            </span>
                        </Button>
                    </Link>
                    <FundrasingPlanBtn />
                </div>
            </CardBody>
        </Card>
    </div>
}