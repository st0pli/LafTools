// LafTools - The Leading All-In-One ToolBox for Programmers.
// 
// Date: Thu, 11 Jan 2024
// Author: LafTools Team - FX <work7z@outlook.com>
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


import localforage from "localforage";
import {
    Callout,
    PanelStack,
    ProgressBar,
    AnchorButton,
    Tooltip,
    Dialog,
    Drawer,
    Overlay,
    Alert,
    RadioGroup,
    MenuItem,
    Radio,
    ButtonGroup,
    TextArea,
    HotkeysProvider,
    Intent,
    Position,
    Toaster,
    Checkbox,
    NumericInput,
    FormGroup,
    HTMLSelect,
    ControlGroup,
    InputGroup,
    Navbar,
    NavbarHeading,
    NonIdealState,
    NavbarDivider,
    NavbarGroup,
    Alignment,
    Classes,
    Icon,
    Card,
    Elevation,
    Button,
    Popover,
    Menu,
    MenuDivider,
} from "@blueprintjs/core";
import {
    ColumnHeaderCell,
    Cell,
    Column,
    Table,
    Regions,
} from "@blueprintjs/table";
import { APPINFOJSON, delayFN } from "../../../../../../../../nocycle";

import React, { useEffect, useMemo } from "react";
import ReactDOM from "react-dom";
import gutils from "../../../../../../../../utils/GlobalUtils";
import { logutils } from "../../../../../../../../utils/LogUtils";
import _ from "lodash";
import RouteMem from "../../../../../../../../types/router-mem";
import statusSlice from "../../../../../../../../reducers/statusSlice";
import { useState, useContext, useCallback, useRef } from "react";
import {
    withRouter,
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
    Redirect,
} from "react-router-dom";
import PageUtils from "../../../../../../../../utils/PageUtils";
import TranslationUtils, {
    Dot,
} from "../../../../../../../../utils/cTranslationUtils";
import "allotment/dist/style.css";
import { Allotment, AllotmentHandle } from "allotment";
import exportUtils from "../../../../../../../../utils/ExportUtils";
import forgeSlice, {
    ACTION_UPDATE_LANG_AND_APPLY_CHANGE,
} from "../../../../../../../../reducers/forgeSlice";
import { ACTION_callRefreshAll } from "../../../../../../../../reducers/systemSlice";
import {
    ID_FILES,
    ID_HISTORY as ID_MANUAL,
    ID_NOTES,
    ID_TOOLS,
    URL_WORKBENCH_WORKSPACE,
} from "../../../../../../../../types/constants";
import { type } from "jquery";
import apiSlice from "../../../../../../../../reducers/apiSlice";
import { VAL_CSS_TAB_TITLE_PANEL } from "../../../../../../../../types/workbench-types";
import { FunctionalMenu } from "../../../nav/functional";
import { SidebarMenu } from "../../../nav/sidebar/Biz_SidebarMenu";
import Biz_DrawerMenu from "../../../nav/control";
import layoutSlice from "../../../../../../../../reducers/layoutSlice";
import {
    FN_CLOSE_LTR_MENU,
    FN_SHOW_LTR_MENU,
} from "../../../nav/functional/panel-group/controls/FunctionalControls";
import GenCodeMirror from "../../../../../../../../components/GenCodeMirror";
import GenHorizontalTab from "../../../../../../../../components/GenHorizontalTab";
import ShellGroupNote from "./ShellGroupNote";
import { getSessionId } from "../tools/ToolInnerImplView";


export default () => {
    let s = exportUtils.useSelector((v) => {
        return {
            tabs: v.workspace.notes.tabs,
            tabId: v.workspace.notes.tabId,
        };
    });
    let sessionId = getSessionId(s.tabId)
    return <ShellGroupNote key={sessionId}></ShellGroupNote>
}