// LafTools - The Leading All-In-One ToolBox for Programmers.
//
// Date: Tue, 26 Sep 2023
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
  Dialog,
  DialogBody,
  DialogFooter,
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
  Divider,
} from "@blueprintjs/core";
import {
  ColumnHeaderCell,
  Cell,
  Column,
  Table,
  Regions,
} from "@blueprintjs/table";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import _ from "lodash";
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
import exportUtils from "../../../../utils/ExportUtils";
import forgeSlice, {
  ACTION_UPDATE_LANG_AND_APPLY_CHANGE,
} from "../../../../slice/ForgeSlice";
import { Dot } from "../../../../utils/TranslationUtils";
import gutils from "../../../../utils/GlobalUtils";
import systemSlice, {
  ACTION_callRefreshAll,
  ACTION_initAllDataAtOnce,
} from "../../../../slice/SystemSlice";
import { BlueprintIcons_16 } from "@blueprintjs/icons/lib/esm/generated/16px/blueprint-icons-16";
import statusSlice from "../../../../slice/StatusSlice";
import "./index.scss";
import {
  ID_FILES,
  ID_HISTORY,
  ID_NOTES,
  ID_TOOLS,
  URL_WORKBENCH_FILES,
  URL_WORKBENCH_MANUALS,
  URL_WORKBENCH_NOTES,
  SUB_URL_WORKBENCH_TOOLS_CATEGORY,
} from "../../../../styles/path";
import RouteMem from "../../../../styles/routeMem";
import { TOOL_PutNewDialog } from "../../../../slice/DialogSlice";
import ALL_NOCYCLE, { APPINFOJSON } from "../../../../nocycle";

const SystemNav = () => {
  return <div></div>;
};

export default SystemNav;
