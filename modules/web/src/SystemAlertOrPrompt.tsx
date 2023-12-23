// LafTools - The Leading All-In-One ToolBox for Programmers.
//
// Date: Sat, 7 Oct 2023
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

import React, { useEffect, useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import testReducer, { pong, testSliceActions } from "./reducers/testSlice";
import { store, RootState } from "./store/index";
import exportUtils from "./utils/ExportUtils";
import { logutils } from "./utils/LogUtils";
import {
  Alert,
  HotkeysProvider,
  HotkeysTarget2,
  Intent,
} from "@blueprintjs/core";
import {
  Button,
  DialogFooter,
  ButtonProps,
  Code,
  DialogBody,
  InputGroup,
  FormGroup,
  ButtonGroup,
  DialogStep,
  Dialog,
  H5,
  HTMLSelect,
  Label,
  MultistepDialog,
  MultistepDialogNavPosition,
  NumericInput,
  Radio,
  RadioGroup,
} from "@blueprintjs/core";
import {
  withRouter,
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  Redirect,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import Welcome from "./pages/Welcome";

import $ from "jquery";
import _ from "lodash";
import { CLZ_ROOT_DARK, CLZ_ROOT_LIGHT } from "./styles/var";
import InitSystemEnv from "./pages/Loading";
import UserAskMultipleDialogs from "./containers/UserAskMultipleDialogs";
import gutils from "./utils/GlobalUtils";
import TranslationUtils, { Dot } from "./utils/TranslationUtils";
import PageUtils from "./utils/PageUtils";
import { URL_WORKBENCH } from "./styles/path";
import RouteUtils from "./utils/RouteUtils";
import InitRouteHistory from "./InitRouteHistory";
import { DialogStoreMap } from "./reducers/dialogSlice";
import { Z_INDEX_CONFIRM, Z_INDEX_DIALOG } from "./styles/config";
import { FN_testDialogHere } from "./styles/dialog";
import AlertUtils from "./utils/AlertUtils";
import { PrompType } from "./reducers/statusSlice";

let EachPrompt = (props: { x: PrompType }): any => {
  let { x } = props;
  let [val, onVal] = useState<string | undefined>(
    props.x.textFieldDefaultValue
  );
  return (
    <Alert
      key={x.id}
      style={{ zIndex: Z_INDEX_CONFIRM }}
      cancelButtonText={Dot("IaSyO", "Cancel")}
      confirmButtonText={Dot("n1jA9", "Confirm")}
      intent={Intent.PRIMARY}
      icon="paragraph"
      isOpen={true}
      loading={false}
      onConfirm={async (e) => {
        if (x.fn) {
          let r = await x.fn(true, {
            iptIfHave: val + "",
          });
          if (!r) {
            return;
          }
          AlertUtils.deletePromptList(x.id);
        } else {
          AlertUtils.deletePromptList(x.id);
        }
      }}
      onCancel={() => {
        x.fn && x.fn(false);
        AlertUtils.deletePromptList(x.id);
      }}
      onClose={() => {
        // AlertUtils.deletePromptList(x.id);
      }}
      canEscapeKeyCancel={true}
    >
      <h3 style={{ marginBottom: "10px" }}>{x.msg}</h3>
      <p>
        <InputGroup
          {...(x.textProps || {})}
          style={{ width: "100%" }}
          value={val}
          onChange={(e) => {
            onVal(e.target.value);
          }}
          fill={true}
          defaultValue={x.textFieldDefaultValue}
          placeholder={Dot(
            "tEkR3",
            "Input your value according to the prompt message"
          )}
        />
      </p>
    </Alert>
  );
};

const OtherChoose = (prop) => {
  const dis = exportUtils.dispatch();
  const o1 = exportUtils.useSelector((val) => ({
    // get alert, prompt, confirm from status state
    alert: val.status.msg.alertList,
    prompt: val.status.msg.promptList,
    confirm: val.status.msg.confirmList,
  }));

  return (
    <div>
      {o1.alert.map((x) => {
        return (
          <Alert
            style={{ zIndex: Z_INDEX_CONFIRM }}
            key={x.id}
            confirmButtonText={Dot("jO5eP", "OK")}
            intent={x.intent || Intent.NONE}
            isOpen={true}
            loading={false}
            onCancel={() => { }}
            onConfirm={() => {
              AlertUtils.deleteAlertList(x.id);
            }}
            canEscapeKeyCancel={true}
          >
            <p>{x.msg || "N/A"}</p>
          </Alert>
        );
      })}
      {o1.confirm.map((x) => {
        return (
          <Alert
            key={x.id}
            style={{ zIndex: Z_INDEX_CONFIRM }}
            cancelButtonText={Dot("Ggob_", `Cancel`)}
            confirmButtonText={Dot("d-l2l", "Confirm")}
            intent={Intent.PRIMARY}
            isOpen={true}
            loading={false}
            icon={"info-sign"}
            onConfirm={() => {
              AlertUtils.deleteConfirmList(x.id);
              x.fn && x.fn(true);
            }}
            onCancel={() => {
              AlertUtils.deleteConfirmList(x.id);
              x.fn && x.fn(false);
            }}
            onClose={() => {
              AlertUtils.deleteConfirmList(x.id);
            }}
            canEscapeKeyCancel={true}
          >
            <p>{x.msg || "N/A"}</p>
          </Alert>
        );
      })}
      {o1.prompt.map((x) => {
        return <EachPrompt x={x} />;
      })}
    </div>
  );
};

export default (props) => {
  const dis = exportUtils.dispatch();
  const o1 = exportUtils.useSelector((val) => ({
    dialogIncrement: val.dialog.dialogIncrement,
  }));
  if (gutils.IsDevMode()) {
    FN_testDialogHere();
  }
  return (
    <div>
      {_.map(DialogStoreMap, (obj, key) => {
        let Ele = obj.ele;
        return (
          <div
            style={{
              zIndex: (obj.index || 0) + Z_INDEX_DIALOG,
            }}
          >
            <Ele
              obj={obj}
              closeBtnJSX={
                <Button
                  intent="none"
                  text={TranslationUtils.Dot("sR8yc", "Close")}
                  onClick={obj.close}
                />
              }
            />
          </div>
        );
      })}
      <OtherChoose />
    </div>
  );
};
