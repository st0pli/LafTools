// LafTools - The Leading All-In-One ToolBox for Programmers.
// 
// Date: Sun, 21 Jan 2024
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


import React, { useEffect, useState } from 'react'
import { CommonTransformerProps } from '../types'
import { CSS_TW_LAYOUT_BORDER_LIGHTER, CommonTransformerPassProp } from '../../../../../../../../../types/workbench-types'
import { TransformerWithRuntime as TransformerWithRuntimeProp } from '../hooks'
import gutils from '../../../../../../../../../utils/GlobalUtils'
import { Dot } from '../../../../../../../../../utils/TranslationUtils'
import { usePromiseWait } from '../hooks'
import { FAQItem } from '../../../../../../../../../lib/tools/faq/types'
import _ from 'lodash'
import { AnchorButton, Button, Callout, Tabs } from '@blueprintjs/core'
import { CodeImplDetail, CodeImplMap, program_languages } from '../../../../../../../../../lib/tools/code/types'
import GenCodeMirror from '../../../../../../../../../components/GenCodeMirror'

export default (props: CommonTransformerPassProp & TransformerWithRuntimeProp) => {
    // props.toolHandler
    let [code, onCode] = useState<CodeImplMap | null>(null)
    let { loading, progressText } = usePromiseWait({
        text: Dot("KcrRr", "Retrieving Code Implementation Data"),
        whenToStart: !_.isNil(props.toolHandler),
        promise: async () => {
            if (!props.toolHandler) {
                return;
            }
            let crt_obj = await props.toolHandler.getCode()
            onCode(crt_obj)
        }
    }, [props.toolHandler])
    let [tabId, onTabId] = useState("java")
    if (loading) {
        return <div className="p-2">{progressText}</div>
    }
    if (!code || _.isEmpty(code)) {
        return <div className="p-2">{Dot("iOEjZ", "No Available Code")}</div>
    }
    //     <div className="flex justify-between items-center mb-2 mt-0">
    //     <div>
    //         {/* <b>
    //             {Dot("Uzqjy","Implementation")}
    //         </b>    </div> */}
    //     <div>
    //         {/* TODO: provide an option to configure if source code is required */}
    //         {/* <a href={props.toolHandler?.getMetaInfo().infoURL} target='_blank'>
    //             {Dot("U2ZNl", "Learn more on Wikipedia")}
    //         </a> */}
    //     </div>
    // </div>

    return <div className='p-2'>
        <div className=''>
            <Tabs id="CodeImplTabs" vertical onChange={(newTabId) => {
                onTabId(newTabId.toString())
            }
            } selectedTabId={tabId}>
                {
                    _.map(program_languages, x => {
                        let o: CodeImplDetail = code && code[x.value]
                        return <Tabs.Tab key={x.value} id={x.value} title={x.label} panel={<div className='min-w-full w-full h-auto whitespace-nowrap'>
                                                        <div className='whitespace-normal min-w-full w-[80%] mb-2'>
                                <Callout intent='none' icon="info-sign"  >
                                {o.howToRunItTips}

                                </Callout>
                            </div>
                            <div className={CSS_TW_LAYOUT_BORDER_LIGHTER+" min-w-full"}>
                                <GenCodeMirror
                                    language={'javascript'}
                                    placeholder={''}
                                    directValue={o.template}
                                    lineWrap={true}
                                    bigTextId={''}
                                    key={""}
                                ></GenCodeMirror>

                            </div>
                        </div>}>
                        </Tabs.Tab>
                    })
                }
            </Tabs>
        </div>
        <div className="text-center mb-2 mt-4">
            <AnchorButton target='_blank' minimal outlined href={'https://github.com/work7z/LafTools/issues'} intent="none" text={Dot("Ylq2X", "Error Correction")}></AnchorButton>
        </div>

    </div>
}