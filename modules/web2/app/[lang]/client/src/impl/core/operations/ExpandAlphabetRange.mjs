// LafTools
//
// Date: Sun, 14 Jan 2024
// Second Author: Ryan Laf
// Description:
// License: AGPLv3
// Copyright (C) 2024 - Present, https://laftools.dev and https://codegen.cc

/**
 * @author n1474335 [n1474335@gmail.com]
 * @copyright Crown Copyright 2016
 * @license Apache-2.0
 */

import Operation from "../Operation.tsx";
import Utils from "../Utils.mjs";

/**
 * Expand alphabet range operation
 */
class ExpandAlphabetRange extends Operation {
  /**
   * ExpandAlphabetRange constructor
   */
  constructor() {
    super();

    this.name = "Expand alphabet range";
    this.module = "Default";
    this.description =
      "Expand an alphabet range string into a list of the characters in that range.<br><br>e.g. <code>a-z</code> becomes <code>abcdefghijklmnopqrstuvwxyz</code>.";
    this.inputType = "string";
    this.outputType = "string";
    this.args = [
      {
        name: "Delimiter",
        type: "binaryString",
        value: "",
      },
    ];
  }

  /**
   * @param {string} input
   * @param {Object[]} args
   * @returns {string}
   */
  run(input, args) {
    return Utils.expandAlphRange(input).join(args[0]);
  }
}

export default ExpandAlphabetRange;
