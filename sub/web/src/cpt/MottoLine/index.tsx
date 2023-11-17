// LafTools - The Leading All-In-One ToolBox for Programmers.
//
// Date: Fri, 13 Oct 2023
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
} from "@blueprintjs/core";
import React, { useEffect, useState } from "react";
import _ from "lodash";
import apiSlice from "../../slice/apiSlice";
import { Dot } from "../../utils/TranslationUtils";
import { useParams } from "react-router";
import { ToolParamType } from "../../styles/var";

interface BlinkProp {}
export default (props: BlinkProp): any => {
  let toolParam = useParams() as ToolParamType;
  let mottoLineRes = apiSlice.useGetOneMottoQuery(
    {
      categoryId: toolParam.category,
    },
    {
      refetchOnMountOrArgChange: true,
    }
  );
  let mottoLine = mottoLineRes?.data?.payload?.value;
  return (
    <div
      style={{
        textAlign: "center",
        padding: "10px 6px",
        margin: "0 auto",
      }}
      className="whitespace-break-spaces bp5-text-muted bp5-text-small  h-full w-full   "
      title={Dot("i-yRo", "Double click to refresh")}
      onDoubleClick={() => {
        mottoLineRes.refetch();
      }}
    >
      {mottoLineRes.isLoading ? "thinking..." : mottoLine}
    </div>
  );
};
