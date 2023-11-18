// LafTools - The Leading All-In-One ToolBox for Programmers.
//
// Date: Wed, 15 Nov 2023
// Author: LafTools Team <work7z@outlook.com>
// Description:
// Copyright (C) 2023 - Present, https://codegen.cc
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
import {
  APPINFOJSON,
  FN_GetDispatch,
  FN_GetState,
  delayFN,
} from "../../../nocycle";

import React, { useEffect, useMemo } from "react";
import ReactDOM from "react-dom";
import gutils from "../../../utils/GlobalUtils";
import { logutils } from "../../../utils/LogUtils";
import _ from "lodash";
import RouteMem from "../../../styles/routeMem";
import statusSlice from "../../../slice/StatusSlice";
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
import URLUtils from "../../../utils/URLUtils";
import TranslationUtils, { Dot } from "../../../utils/TranslationUtils";
import "allotment/dist/style.css";
import { Allotment } from "allotment";
import exportUtils from "../../../utils/ExportUtils";
import forgeSlice, {
  ACTION_UPDATE_LANG_AND_APPLY_CHANGE,
} from "../../../slice/ForgeSlice";
import { ACTION_callRefreshAll } from "../../../slice/SystemSlice";
import {
  ID_FILES,
  ID_HISTORY as ID_MANUAL,
  ID_NOTES,
  ID_TOOLS,
  SUB_URL_WORKBENCH_TOOLS_CATEGORY,
  URL_WORKBENCH_FILES,
  URL_WORKBENCH_MANUALS as URL_WORKBENCH_MANUAL,
  URL_WORKBENCH_NOTES,
} from "../../../styles/path";
import FixedWorkBenchTool from "../../FixedWorkBenchTool";
import FixedWorkBenchFiles from "../../FixedWorkBenchFiles";

import FixedWorkBenchHistory from "../../FixedWorkBenchHistory";
import FixedWorkBenchNotes from "../../FixedWorkBenchNotes";
import { type } from "jquery";
import apiSlice from "../../../slice/apiSlice";
import { SysTabPane } from "../cpt/SysTabPane";
import layoutSlice from "../../../slice/LayoutSlice";
import {
  FN_ACTION_CloseMenu_ltr,
  FN_ACTION_OpenMenu_ltr,
} from "../../../sliceAction/layout_action";

export let FN_SHOW_LTR_MENU = (menuKey: string) => {
  let dis = FN_GetDispatch();
  dis(
    FN_ACTION_OpenMenu_ltr({
      menuRecordKey: "ltr",
      menuKey: menuKey,
    })
  );
};

export let FN_CLOSE_LTR_MENU = (menuKey: string): any => {
  let dis = FN_GetDispatch();
  dis(
    FN_ACTION_CloseMenu_ltr({
      menuRecordKey: "ltr",
      menuKey: menuKey,
    })
  );
};

export let FN_TAB_ITEM_CLICKED_FN = (menuKey: string, isCurrentActive) => {
  let thatHide = FN_GetState().layout.menuHide[menuKey];
  if (thatHide) {
    // do show logic
    FN_SHOW_LTR_MENU(menuKey);
  } else {
    // if current is not hide, and click on current, do hide for this case only
    if (isCurrentActive) {
      FN_CLOSE_LTR_MENU(menuKey);
    } else {
      // otherwise, do nothing
    }
  }
};

export default () => {
  let dis = exportUtils.dispatch();
  return (
    <Button
      onClick={() => {
        FN_CLOSE_LTR_MENU("left");
      }}
      small
      minimal
      rightIcon="minus"
    ></Button>
  );
};
