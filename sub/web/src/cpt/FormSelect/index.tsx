// LafTools - The Leading All-In-One ToolBox for Programmers.
//
// Date: Tue, 17 Oct 2023
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
  TreeNode,
} from "@blueprintjs/core";
import React, { useEffect, useMemo, useState } from "react";
import _ from "lodash";
import { Dot } from "../../utils/TranslationUtils";
import moment from "moment";
import DateUtils from "../../utils/DateUtils";
import { QueryStatus } from "@reduxjs/toolkit/dist/query";
import {
  MutationState,
  MutationSubState,
  QuerySubState,
} from "@reduxjs/toolkit/dist/query/core/apiState";
import gutils from "../../utils/GlobalUtils";
import { UseQueryHookResult } from "@reduxjs/toolkit/dist/query/react/buildHooks";
import { ContextMenu, Tree, TreeNodeInfo } from "@blueprintjs/core";
import { Example, ExampleProps } from "@blueprintjs/docs-theme";
import { TreeWrapInfo } from "../../styles/var";
import "./index.scss";
import Html_select from "../Html_select";

export default (props: {
  list: { label: string; value: string }[];
  value: string;
  onChange: (nextVal: string) => void;
  disabled?: boolean;
  disableAutoFirst?: boolean;
}) => {
  // // console.log("gformselect", props);
  // console.log("gform_select_props", props);
  useEffect(() => {
    if (!props.disableAutoFirst) {
      if (!_.isEmpty(props.list)) {
        if (
          (!_.isEmpty(props.list) && _.isNil(props.value)) ||
          (!_.isEmpty(props.list) &&
            _.findIndex(props.list, (x) => x.value == props.value) == -1)
        ) {
          let nextVal = _.get(props, "list.0.value");
          if (!_.isNil(nextVal) && nextVal != props.value) {
            props.onChange(nextVal);
          }
        }
      }
    }
  }, [_.size(props.list)]);
  return (
    <Html_select
      disabled={props.disabled}
      value={props.value}
      list={props.list}
      onChange={props.onChange}
    />
  );
};
