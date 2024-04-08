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
 * @author Matt C [matt@artemisbot.uk]
 * @copyright Crown Copyright 2018
 * @license Apache-2.0
 */

import Operation, { OptDetail } from "../../../core/Operation.tsx";
import OperationError from "../../../core/errors/OperationError.mjs";
import notepack from "notepack.io";
import { isWorkerEnvironment } from "../../../core/Utils.mjs";
import { Dot } from "@/app/__CORE__/utils/cTranslationUtils.tsx";

/**
 * To MessagePack operation
 */
class ToMessagePack extends Operation {
  public getOptDetail(): OptDetail {
    return {
      infoURL: "https://wikipedia.org/wiki/MessagePack",
      optName: Dot("XAJIZiKtp", "To MessagePack"),
      optDescription: Dot("FsrRIxrjL", "Converts JSON to MessagePack encoded byte buffer. MessagePack is a computer data interchange format. It is a binary form for representing simple data structures like arrays and associative arrays."),
      exampleInput: "{\n  \"a\": 42\n}",
      exampleOutput: "8b2a",
      relatedID: "fromto",
      config: {
        flowControl: false,
        manualBake: false,
        module: "Code",
        description: "Converts JSON to MessagePack encoded byte buffer. MessagePack is a computer data interchange format. It is a binary form for representing simple data structures like arrays and associative arrays.",
        infoURL: "https://wikipedia.org/wiki/MessagePack",
        inputType: "JSON",
        outputType: "ArrayBuffer",
        args: [],
      },
    }
  }
  /**
   * ToMessagePack constructor
   */
  constructor() {
    super();

    this.name = "To MessagePack";
    this.module = "Code";
    // this.description =
    //   "Converts JSON to MessagePack encoded byte buffer. MessagePack is a computer data interchange format. It is a binary form for representing simple data structures like arrays and associative arrays.";
    // this.infoURL = "https://wikipedia.org/wiki/MessagePack";
    this.inputType = "JSON";
    this.outputType = "ArrayBuffer";
    this.args = [];
  }

  /**
   * @param {JSON} input
   * @param {Object[]} args
   * @returns {ArrayBuffer}
   */
  run(input, args) {
    try {
      if (isWorkerEnvironment()) {
        return notepack.encode(input);
      } else {
        const res = notepack.encode(input);
        // Safely convert from Node Buffer to ArrayBuffer using the correct view of the data
        return new Uint8Array(res).buffer;
      }
    } catch (err) {
      throw new OperationError(`Could not encode JSON to MessagePack: ${err}`);
    }
  }
}

export default ToMessagePack;
