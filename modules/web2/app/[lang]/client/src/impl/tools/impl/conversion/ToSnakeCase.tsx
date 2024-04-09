// LafTools - The Leading All-In-One ToolBox for Programmers.
//
// Date: Sun, 14 Jan 2024
// Second Author: Ryan Laf
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

/**
 * @author tlwr [toby@toby.codes]
 * @copyright Crown Copyright 2017
 * @license Apache-2.0
 */

import snakeCase from "lodash/snakeCase.js";
import Operation, { OptDetail } from "../../../core/Operation.tsx";
import { replaceVariableNames } from "../../../core/lib/Code.mjs";
import { Dot } from "@/app/__CORE__/utils/cTranslationUtils.tsx";

/**
 * To Snake case operation
 */
class ToSnakeCase extends Operation {
  public getOptDetail(): OptDetail {
    return {
      infoURL: "https://wikipedia.org/wiki/Snake_case",
      optName: Dot("jFdaRPHE6", "To {0}", Dot("SL7RJN-sdv6", "Snake case")),
      optDescription: Dot("D10ddoJDo", "Converts the input string to snake case.\n<br><br>\nSnake case is all lower case with underscores as word boundaries.\n<br><br>\ne.g. this_is_snake_case\n<br><br>\n'Attempt to be context aware' will make the operation attempt to nicely transform variable and function names."),
      exampleInput: "this is snake case",
      exampleOutput: "this_is_snake_case",
      relatedID: "fromto",
      config: {
        flowControl: false,
        manualBake: false,
        module: "Code",
        description: "Converts the input string to snake case.\n<br><br>\nSnake case is all lower case with underscores as word boundaries.\n<br><br>\ne.g. this_is_snake_case\n<br><br>\n'Attempt to be context aware' will make the operation attempt to nicely transform variable and function names.",
        infoURL: "https://wikipedia.org/wiki/Snake_case",
        inputType: "string",
        outputType: "string",
        args: [
          {
            name: "Attempt to be context aware",
            type: "boolean",
            value: false,
          },
        ],
      }
    }
  }
  /**
   * ToSnakeCase constructor
   */
  constructor() {
    super();

    this.name = "To Snake case";
    this.module = "Code";
    // this.description =
    //   "Converts the input string to snake case.\n<br><br>\nSnake case is all lower case with underscores as word boundaries.\n<br><br>\ne.g. this_is_snake_case\n<br><br>\n'Attempt to be context aware' will make the operation attempt to nicely transform variable and function names.";
    // this.infoURL = "https://wikipedia.org/wiki/Snake_case";
    this.inputType = "string";
    this.outputType = "string";
    this.args = [
      {
        name: "Attempt to be context aware",
        type: "boolean",
        value: false,
      },
    ];
  }

  /**
   * @param {string} input
   * @param {Object[]} args
   * @returns {string}
   */
  run(input, args) {
    const smart = args[0];

    if (smart) {
      return replaceVariableNames(input, snakeCase);
    } else {
      return snakeCase(input);
    }
  }
}

export default ToSnakeCase;
