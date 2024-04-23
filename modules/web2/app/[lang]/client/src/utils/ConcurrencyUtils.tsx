
// Date: Tue, 3 Oct 2023
// Author: LafTools Team <work7z@outlook.com>
// Description:
// Copyright (C) 2023 - Present, https://codegen.cc
// License: AGPLv3

import _ from "lodash";
import gutils from "./GlobalUtils";
import staticDevJson from "../static/dev.json";
import PageUtils from "./PageUtils";
import { Dot } from "./cTranslationUtils";

let hookStatusMap: { [key: string]: () => void | null } = {};

const ConcurrencyUtils = {
  initFunc: async (key: string, fn: () => void) => {
    let st = hookStatusMap[key];
    if (_.isNil(st)) {
      let cachedFn = _.once(fn);
      hookStatusMap[key] = cachedFn;
      cachedFn();
    }
  },
  removeInitStatus: (key: string) => {
    delete hookStatusMap[key];
  },
};

export default ConcurrencyUtils;
