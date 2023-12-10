// LafTools - The Leading All-In-One ToolBox for Programmers.
//
// Date: Sat, 9 Dec 2023
// Author: LafTools Team <work7z@outlook.com>
// Description:
// Copyright (C) 2023 - Present, https://laf-tools.com and https://codegen.cc
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

import { Button, ButtonProps, Tooltip } from "@blueprintjs/core";
import GenCodeMirror from "../../../../../../components/GenCodeMirror";
import {
  VAL_CSS_TAB_TITLE_PANEL,
  VAL_CSS_CONTROL_PANEL,
} from "../../../../definitions/WB_Types";
import { CommonPassProp } from "../transformer_types";
import { Dot } from "../../../../../../utils/TranslationUtils";

type PassProps = CommonPassProp & {};

export default (props: PassProps) => {
  let sessionId = props.sessionId;
  let controlBarHeight = VAL_CSS_CONTROL_PANEL;
  let bodyHeight = `calc(100% - ${controlBarHeight}px)`;
  let leftActions: ButtonProps[] = [
    {
      text: Dot("g4lqi", "Get MD2 Hash"),
      intent: "primary",
      title: Dot("Zpqqpf", "Encrypt the data with MD2"),
    },
    {
      text: Dot("2bqHk", "Load from File"),
      intent: "none",
      title: Dot("NNfJo", "Load Data from File"),
    },
    {
      text: Dot("IWUH5", "Show Example"),
      intent: "none",
      className: "",
      title: Dot("NNd1o", "Use Example for Testing"),
    },
  ];
  let rightActions: ButtonProps[] = [
    {
      icon: "duplicate",
      intent: "success",
      text: Dot("Mg4ldi", "Copy"),
      title: Dot("2JyFN", "Copy Result to Clipboard"),
    },
    {
      icon: "export",
      intent: "success" as any,
      className: "btn-purple",
      text: Dot("o52xW", "Export"),
      title: Dot("i88tb", "Export Result to File"),
    },
    {
      icon: "cog",
      title: Dot("Fy217", "Configure Text Transformer"),
    },
  ];
  let controlClz = "space-x-1 flex  flex-coumn items-center justify-between";
  let fn_format_button = (pmt: string) => {
    return (x: ButtonProps) => {
      return (
        <Tooltip placement={pmt as any} content={x.title}>
          <Button
            {...x}
            title={""}
            small
            intent={x.intent}
            text={x.text}
          ></Button>
        </Tooltip>
      );
    };
  };
  return (
    <div className="w-full h-full">
      <div
        className="w-full using-edge-ui-bg flex  border-b-[1px] dark:border-gray-600 px-1  flex-column items-center justify-between"
        style={{
          height: controlBarHeight,
        }}
      >
        <div className={controlClz}>
          {leftActions.map(fn_format_button("bottom-start"))}
        </div>
        <div className={controlClz}>
          {rightActions.map(fn_format_button("bottom-end"))}
        </div>
      </div>
      <div
        style={{
          height: bodyHeight,
        }}
        className="w-full overflow-auto"
      >
        <GenCodeMirror
          value={"this is test data for " + sessionId}
        ></GenCodeMirror>
      </div>
    </div>
  );
};
