// LafTools - The Leading All-In-One ToolBox for Programmers.
//
// Date: Tue, 14 Nov 2023
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

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { startListening } from "../listenerMiddleware";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import CacheUtils from "../utils/CacheUtils";
import _, { initial } from "lodash";
import { logutils } from "../utils/LogUtils";
import { EachTab } from "../pages/FixedWorkBench/components/GenHorizontalTab";
import SyncStateUtils from "../utils/SyncStateUtils";

let preferredSizeForLeftRightMenu = 280; //0.13 * window.innerWidth;

type LayoutState = {
  menuHide: {
    left: boolean;
    right: boolean;
    bottom: boolean;
  };
  menuRecord: {
    ltr: any[];
    ltr_old: any[];
    ttm: any[];
    ttm_old: any[];
  };
  menuSize: {
    left: number | undefined;
    middle: number | undefined;
    right: number | undefined;
    bottom: number;
  };
  tools_EachTab: EachTab[];
};

let fn_initialState = (): LayoutState => {
  return {
    menuHide: {
      left: false,
      right: false,
      bottom: false,
    },
    menuRecord: {
      ltr: [],
      ltr_old: [],
      ttm: [],
      ttm_old: [],
    },
    menuSize: {
      left: preferredSizeForLeftRightMenu,
      middle: undefined,
      right: preferredSizeForLeftRightMenu,
      bottom: 300, //window.innerHeight * 0.28,
    },
    tools_EachTab: [],
  };
};

let initialState: LayoutState = fn_initialState();

initialState = CacheUtils.getFromCache("layout", {
  ...initialState,
}) as LayoutState;

try {
  if (!_.isEmpty(initialState.menuRecord.ltr)) {
    // let arr = !_.isEmpty(initialState.menuRecord.ltr_old)
    //   ? initialState.menuRecord.ltr_old
    //   : initialState.menuRecord.ltr;
    let arr = initialState.menuRecord.ltr;
    initialState.menuSize.left = arr[0];
    initialState.menuSize.middle = arr[1];
    initialState.menuSize.right = arr[2];
  }
  if (!_.isEmpty(initialState.menuRecord.ttm)) {
    // let arr = !_.isEmpty(initialState.menuRecord.ttm_old)
    //   ? initialState.menuRecord.ttm_old
    //   : initialState.menuRecord.ttm;
    let arr = initialState.menuRecord.ttm;
    initialState.menuSize.bottom = arr[1];
  }
  // initialState.menuHide = _.mapValues(initialState.menuHide, (x) => false);
} catch (e) {
  logutils.error("err while initialzing the layout", e);
  initialState = fn_initialState();
}

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    ...SyncStateUtils.useSyncStateReducers(),
    // write slice for updating menuRecord
    updateMenuRecord(
      state: LayoutState,
      action: PayloadAction<{ menu: string; record: any }>
    ) {
      let { menu, record } = action.payload;
      state.menuRecord[menu] = record;
    },
    // write slice for updating one field of menuHide
    updateMenuHide(
      state: LayoutState,
      action: PayloadAction<{ menu: string; hide: boolean }>
    ) {
      let { menu, hide } = action.payload;
      state.menuHide[menu] = hide;
    },
    // write slice for updating one field of menuSize
    updateMenuSize(
      state: LayoutState,
      action: PayloadAction<{ menu: string; size: number }>
    ) {
      let { menu, size } = action.payload;
      state.menuSize[menu] = size;
    },
  },
});

export default layoutSlice;
