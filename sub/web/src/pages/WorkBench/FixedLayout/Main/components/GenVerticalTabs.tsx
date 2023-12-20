// LafTools - The Leading All-In-One ToolBox for Programmers.
//
// Date: Sun, 12 Nov 2023
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
import { APPINFOJSON, delayFN } from "../../../nocycle";

import React, { useEffect, useMemo } from "react";
import ReactDOM from "react-dom";
import gutils from "../../../utils/GlobalUtils";
import { logutils } from "../../../utils/LogUtils";
import _ from "lodash";
import RouteMem from "../../../styles/routeMem";
import statusSlice from "../../../reducers/StatusSlice";
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
import PageUtils from "../../../utils/PageUtils";
import TranslationUtils, { Dot } from "../../../utils/TranslationUtils";
import "allotment/dist/style.css";
import { Allotment } from "allotment";
import exportUtils from "../../../utils/ExportUtils";
import forgeSlice, {
  ACTION_UPDATE_LANG_AND_APPLY_CHANGE,
} from "../../../reducers/ForgeSlice";
import { ACTION_callRefreshAll } from "../../../reducers/SystemSlice";
import {
  ID_FILES,
  ID_HISTORY as ID_MANUAL,
  ID_NOTES,
  ID_TOOLS,
} from "../../../styles/path";
import { type } from "jquery";
import apiSlice from "../../../reducers/apiSlice";
import {
  EachTabPanelProp,
  PropGenTabs,
  VAL_CSS_TAB_TITLE_PANEL,
} from "../definitions/WB_Types";
import { NoAvailablePanel } from "../definitions/WB_Common";

export default (props: PropGenTabs) => {
  let jsx_inner_panel = <NoAvailablePanel />;

  // get active panel by id
  let activePanel = _.find(props.tabs, (x) => {
    return x.id == props.activeId;
  });
  if (!_.isNil(activePanel)) {
    let ActiveJSXPanel = activePanel.panel;
    if (!_.isNil(ActiveJSXPanel)) {
      jsx_inner_panel = <ActiveJSXPanel key="m01" />;
    }
  }
  const [refId, onRefId] = useState(_.uniqueId(""));

  const [focusCrt, onFocusCrt] = useState(false);

  // if the user click out of this container, then set clickFocus as false
  useEffect(() => {
    let fn = (e) => {
      let target = e.target;
      let isInside = false;
      while (target) {
        try {
          if (
            target.className &&
            // target.className.indexOf("sys-tab-pane-wp") > -1
            target.id == refId
          ) {
            isInside = true;
            break;
          }
          target = target.parentNode;
        } catch (e) {
          isInside = true;
          break;
        }
      }
      if (!isInside) {
        onFocusCrt(false);
      } else {
        onFocusCrt(true);
      }
    };
    document.body.addEventListener("click", fn);
    return () => {
      document.body.removeEventListener("click", fn);
    };
  }, []);

  // TODO: using style to highlight focus / unfocus

  let jsx_tabs = (
    <div
      className={"tab-title-panel-p" + " " + `tab-mode-${props.whichPart}`}
      style={{
        width: VAL_CSS_TAB_TITLE_PANEL + "px",
        // background: "gray",
      }}
    >
      <div className="tab-title-panel-btn-group">
        {props.tabs.map((x, d) => {
          let isCurrentActive = props.activeId == x.id;
          let innerBTN = (
            <Button
              className="focus:outline-none"
              outlined={false}
              icon={x.icon as any}
              text={x.label}
              loading={false}
              // intent={stObj.currentPlateId == x.id ? "primary" : "none"}
              intent={isCurrentActive ? (props.highlightIntent as any) : "none"}
              minimal={props.activeId != x.id}
              onClick={(e) => {
                // if e is combined with ctrl, then do nothing
                if (e.ctrlKey || e.metaKey || e.shiftKey) {
                  return;
                }
                props.onItemClicked && props.onItemClicked(x, isCurrentActive);
                setTimeout(() => {
                  onFocusCrt(true);
                }, 0);
                props.onActiveIdChange(x);
              }}
            ></Button>
          );
          return (
            <Tooltip content={x.desc} key={x.id + d}>
              {x.pathname ? (
                <Link to={x.pathname + ""}>{innerBTN}</Link>
              ) : (
                innerBTN
              )}
            </Tooltip>
          );
        })}
      </div>
    </div>
  );

  let jsx_panel = (
    <div
      className="tab-title-panel-box"
      style={{
        width:
          props.showNavOrContent == "content"
            ? "100%"
            : `calc(100% - ${VAL_CSS_TAB_TITLE_PANEL}px)`,
      }}
    >
      {jsx_inner_panel}
    </div>
  );

  if (props.showNavOrContent == "nav") {
    jsx_panel = <span></span>;
  }
  if (props.showNavOrContent == "content") {
    jsx_tabs = <span></span>;
  }
  return (
    <div
      id={refId}
      className={
        `  tab-title-panel-wp  ${focusCrt ? ` wp-focus-p ` : ""} ` +
        props.className
      }
    >
      {props.whichPart == "left"
        ? [jsx_tabs, jsx_panel]
        : [jsx_panel, jsx_tabs]}
    </div>
  );
};
