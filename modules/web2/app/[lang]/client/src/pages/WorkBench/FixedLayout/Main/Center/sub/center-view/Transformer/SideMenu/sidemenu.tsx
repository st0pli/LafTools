

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { CommonTransformerProps } from '../types'
import { CSS_BG_COLOR_WHITE, CSS_TW_LAYOUT_BORDER_LIGHTER, CommonTransformerPassProp, LabelValuePair, VAL_CSS_TAB_TITLE_PANEL, light_border_clz_all } from '../../../../../../../../../types/workbench-types'
import { TransformerWithRuntime as TransformerWithRuntimeProp } from '../hooks'
import gutils from '../../../../../../../../../utils/GlobalUtils'
import { Dot } from '../../../../../../../../../utils/cTranslationUtils'
import { usePromiseWait } from '../hooks'
import _ from 'lodash'
import { AnchorButton, Button, Callout, InputGroup, Intent, SegmentedControl, Tabs } from '@blueprintjs/core'
import { CodeImplDetail, CodeImplMap, program_languages } from '@/app/[lang]/client/src/impl/tools/code/types'
import GenCodeMirror from '../../../../../../../../../components/GenCodeMirror'
import exportUtils from '../../../../../../../../../utils/ExportUtils'
import { SysTabPane } from '@/app/[lang]/client/src/components/SysTabPane'
import { FN_GetDispatch } from '@/app/[lang]/client/src/nocycle'
import { OpDetail, getAllOperationDetails } from '@/app/[lang]/client/src/impl/tools/s_tools'
import { useInitFunctionOnceOnly } from '@/app/__CORE__/hooks/cache'
import ParamStateSlice, { ToolSideMenuTabIdType } from '@/app/[lang]/client/src/reducers/state/paramStateSlice'
import ActionListView from './ActionListView'

export default (props: CommonTransformerPassProp & TransformerWithRuntimeProp) => {
    exportUtils.useLoadDotCountCpt()
    let { defaultTab, searchText } = exportUtils.useSelector(v => {
        return {
            defaultTab: v.paramState.tsdmid,
            searchText: v.paramState.tsdrsipt
        }
    })
    let setDefaultTab = (v: ToolSideMenuTabIdType) => {
        FN_GetDispatch()(ParamStateSlice.actions.updateOneOfParamState({
            tsdmid: v
        }))
    }
    let opDetails: OpDetail[] = props.opDetails
    let filteredOpDetails: OpDetail[] = useMemo(() => {
        if (_.isEmpty(searchText)) {
            return opDetails;
        } else {
            let lt = searchText.toLowerCase()
            return _.filter(opDetails, x => {
                return x.label.toLowerCase().indexOf(lt) > -1
            })
        }
    }, [opDetails, searchText])
    let toolsChain = []
    let favourites = []
    let innerContent = (
        <div>
            <SegmentedControl
                // fill
                options={[
                    // {
                    //     label: Dot("actions.favourites", "Favourites"),
                    //     value: "favourites",
                    // },
                    {
                        label: Dot("alloperations", "Operations"),
                        value: "allops",
                    },
                    {
                        label: Dot("Rc_TrzJNm", "Run Pipeline"),
                        value: "pipeline",
                    },

                ]}
                onValueChange={(value) => {
                    setDefaultTab(value as any)
                }}
                defaultValue={defaultTab}
            />
            {
                defaultTab === "pipeline" && <div>
                    <div className='p-2'>
                        {Dot("9ElKDB5ix", "This part is still under development, will be released soon")}
                    </div>
                </div>
            }
            {
                defaultTab === "allops" && <ActionListView {...props} opDetails={filteredOpDetails} />
            }
        </div>)
    return <div className='w-full h-full'>
        <div className={CSS_BG_COLOR_WHITE + ` w-full font-mono text-xs justify-center flex flex-row items-center ` + light_border_clz_all}
            style={{ borderRight: 'none', borderTop: 'none', borderLeft: 'none', height: VAL_CSS_TAB_TITLE_PANEL }}>
            <span>
                {
                    defaultTab == "pipeline" ?
                        Dot("H-W-_p", "Do the Conversion in One Go", _.size(toolsChain))
                        : defaultTab == 'allops' ? Dot(
                            "uraDHtTJj", "Quickly Use Any Operation You Need"
                        ) :
                            Dot("XfKkqZuFU", "{0} Favourites", _.size(favourites))
                }
            </span>
        </div>
        <div className='flex-1'>
            {innerContent}
        </div>
    </div>
}