// LafTools
// 
// Date: Tue, 26 Dec 2023
// Author: LafTools Team - FX <work7z@outlook.com>
// Description: 
// Copyright (C) 2023 - Present, https://laftools.dev and https://codegen.cc
// License: AGPLv3


import { Button, Card, Popover } from "@blueprintjs/core";
import GenCodeMirror from "../../../../../../../../components/GenCodeMirror";
import { Dot } from "../../../../../../../../utils/cTranslationUtils";
import { VAL_CSS_TAB_TITLE_PANEL } from "../../../../../../../../types/workbench-types";
import { Allotment, AllotmentHandle } from "allotment";
import { FN_GetDispatch, FN_GetState, getAjaxResPayloadValue, getAjaxResPayloadValueAsString } from "../../../../../../../../nocycle";
import { FN_GetActualTextValueByBigTextId, FN_SetTextValueFromInsideByBigTextId___DONOTUSEIT__EXTERNALLY, FN_SetTextValueFromOutSideByBigTextId } from "../../../../../../../../actions/bigtext_action";
import AjaxUtils from "../../../../../../../../utils/AjaxUtils";
import AlertUtils from "../../../../../../../../utils/AlertUtils";
import { useCallback, useMemo, useState } from "react";
import _ from 'lodash'
import { useGetI18nLangList } from "../../../../../../../../containers/UserAskMultipleDialogs";
import { SessionViewProp } from "../../../../../../../../containers/MultipleSessionLeftView";
import { NoAvailableDataPanel, NoAvailablePanel } from "../../../../../../../../types/workbench-hook";
import exportUtils from "../../../../../../../../utils/ExportUtils";
import SessionSlice, { SessionAttr } from "../../../../../../../../reducers/container/sessionSlice";
import { EachLang } from "../../../../../../../../types/purejs-types-READ_ONLY";
import Blink from "../../../../../../../../components/Blink";


type PassProp = {}
export default (props: PassProp) => {
    return <div className="p-2">
        {Dot("0gvcN", "Welcome to overview page, it's still under development.")}
        <br />
        <div>
            {Dot("B0s0z", "Purpose of this page:")}
        </div>
        <ul>
            <li>
                {Dot("KmEUF", "Provide a quick overview of the current system tools.")}
            </li>
        </ul>
    </div>
}