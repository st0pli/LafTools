// LafTools - The Leading All-In-One ToolBox for Programmers.
// 
// Date: Mon, 22 Jan 2024
// Author:   
// Description: 
// Copyright (C) 2024 - Present, https://laftools.dev and https://codegen.cc
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

import _ from "lodash";
import { ExtensionVM } from "@/app/[lang]/client/src/types/purejs-types-READ_ONLY.ts";
import gutils from "@/app/[lang]/client/src/utils//GlobalUtils.tsx";
import Operation from "../core/Operation.tsx";
// import Chef from "./core/Chef.mjs";
import Utils from "../core/Utils.mjs";
import setupApp from "../setupApp.ts";
import DishBigNumber from "../core/dishTypes/DishBigNumber.mjs";
import Chef from "../core/Chef.mjs";
// import ToBase64 from "./core/impl/ToBase64.js";
setupApp();

export type ProcessReturnType = {
  result: string;
  error?: string;
};

export type RecipeConfig = { op: Operation, args: string[] }

let LibIndex = {
  process: async (
    originalValue: string,
    param: {
      operations: Operation[];
      extVM: ExtensionVM;
      extId: string;
    },
  ): Promise<ProcessReturnType> => {
    try {


      let inputValue: string = originalValue
      let recipeConfig: RecipeConfig[] = []
      for (let eachOp of param.operations) {
        let argsValueArr = _.map(eachOp.args, (arg) => {
          let eachValue = _.get(arg, 'value')
          if (_.isString(eachValue)) {
            return eachValue
          }
          if (_.isArray(eachValue)) {
            let p = _.get(eachValue, [0]) // TODO: select type
            if (typeof p == 'string') {
              return p
            }
            return _.get(eachValue, [0, 'value'])
          }
          return eachValue;
        })
        if (_.isNil(argsValueArr)) {
          argsValueArr = []
        }
        recipeConfig.push({
          op: eachOp,
          args: argsValueArr
        })
      }

      const chef = new Chef();
      const result = await chef.bake(
        inputValue,
        recipeConfig,
        { returnType: "string" }
      );

      if (result.error) {
        return {
          result: "",
          error: result.error.displayStr
        }
      } else {
        return {
          result: result.result,
        }
      }



    } catch (e) {
      console.log("err", e);
      return {
        result: "",
        error: _.toString(gutils.getErrMsg(e)),
      };
    }
  },
};

export default LibIndex;
