
// Date: Sun, 14 Jan 2024
// Second Author: Ryan Laf
// Description: This code defines a TypeScript class `AND` that extends the `Operation` class. The `AND` class represents an operation to perform a bitwise AND operation on an input byte array with a specified key. It provides functionality for running the operation, highlighting relevant parts of the input/output, and handles user arguments. The class is designed to be used within a larger programming toolbox application.
// License: AGPLv3
// Copyright (C) 2024 - Present, https://laftools.dev and https://codegen.cc

import { Dot } from "../../../../utils/cTranslationUtils.tsx";
import Operation, { OptDetail } from "../../../core/Operation.tsx";
import Utils from "../../../core/Utils.mjs";
import { bitOp, and, BITWISE_OP_DELIMS } from "../../../core/lib/BitwiseOp.mjs";

/**
 * @author n1474335 [n1474335@gmail.com]
 * @copyright Crown Copyright 2016
 * @license Apache-2.0
 */

/**
 * AND operation
 */
class AND extends Operation {
  /**
   * AND constructor
   */
  constructor() {
    super();

    this.name = "AND";
    this.module = "Default";
    this.description = Dot(
      "and.desc",
      "AND the input with the given key.<br>e.g. <code>{0}</code>",
      "fe023da5"
    );
    this.infoURL = Dot("and.infoURL", "https://wikipedia.org/wiki/Bitwise_operation#AND");
    this.inputType = "byteArray";
    this.outputType = "byteArray";
    this.args = [
      {
        name: Dot("and.arg.name", "Key"),
        type: "toggleString",
        value: "",
        toggleValues: BITWISE_OP_DELIMS,
      },
    ];
  }

  /**
   * @param {byteArray} input
   * @param {Object[]} args
   * @returns {byteArray}
   */
  run(input, args) {
    const key = Utils.convertToByteArray(args[0].string || "", args[0].option);

    return bitOp(input, key, and);
  }

  /**
   * Highlight AND
   *
   * @param {Object[]} pos
   * @param {number} pos[].start
   * @param {number} pos[].end
   * @param {Object[]} args
   * @returns {Object[]} pos
   */
  highlight(pos, args) {
    return pos;
  }

  /**
   * Highlight AND in reverse
   *
   * @param {Object[]} pos
   * @param {number} pos[].start
   * @param {number} pos[].end
   * @param {Object[]} args
   * @returns {Object[]} pos
   */
  highlightReverse(pos, args) {
    return pos;
  }

  /**
   * Get detailed information about the AND operation.
   */
  getOptDetail(): OptDetail {
    return {
      relatedID: 'bitwise-and',
      config: {
        module: "Bitwise Operations",
        description: Dot(
          "and.config.desc",
          "Performs a bitwise AND operation between the input data and the provided key. The result is a new byte array representing the bitwise conjunction of the two inputs. This operation can be useful for masking or extracting specific bits from the input data.",
          ""
        ),
        infoURL: this.infoURL,
        inputType: this.inputType,
        outputType: this.outputType,
        flowControl: false,
        manualBake: false,
        args: this.args.map((arg) => ({
          name: arg.name,
          type: arg.type,
          defaultValue: arg.value,
          toggleValues: arg.toggleValues,
        })),
      },
      infoURL: this.infoURL,
      nousenouseID: 'bitwise-and',
      optName: Dot("and.optName", "Bitwise AND Operation"),
      optDescription: this.description,
      exampleInput: TEXT_INPUT_EXAMPLE_BYTE_ARRAY,
      exampleOutput: "Example output byte array",
    };
  }
}

export default AND;
