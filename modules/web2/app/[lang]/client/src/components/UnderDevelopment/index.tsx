'use client'
// LafTools - The Leading All-In-One ToolBox for Programmers.
//
// Date: Sun, 1 Oct 2023
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
import { Dot } from "../../utils/cTranslationUtils";
import { loadDOT } from "@/app/__CORE__/utils/i18n-for-nonclient";

let a = loadDOT("pv92PGN1H")

interface BlinkProp {
}
export default (props: BlinkProp): any => {
  a()
  return (
    <div className="pure-g min-h-screen">
      <div className="pure-u-3-5 marginauto">
        <h1 className="text-lg">{Dot("RRhfWtFQP", "This part is still under development")}</h1>
        <div className="bp5-running-text bp5-text-large">
          {Dot("Q-fTyELbm", "Hi there, this part is still under development. We would let you know once it is done. Thank you!")}
        </div>
      </div>
    </div>
  );
};
