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
import { HASH_DELIM_OPTIONS } from "../lib/Delim.mjs";
import ssdeepjs from "ssdeep.js";
import OperationError from "../errors/OperationError.mjs";

/**
 * Compare SSDEEP hashes operation
 */
class CompareSSDEEPHashes extends Operation {
  /**
   * CompareSSDEEPHashes constructor
   */
  constructor() {
    super();

    this.name = "Compare SSDEEP hashes";
    this.module = "Crypto";
    this.description =
      "Compares two SSDEEP fuzzy hashes to determine the similarity between them on a scale of 0 to 100.";
    this.infoURL = "https://forensicswiki.xyz/wiki/index.php?title=Ssdeep";
    this.inputType = "string";
    this.outputType = "Number";
    this.args = [
      {
        name: "Delimiter",
        type: "option",
        value: HASH_DELIM_OPTIONS,
      },
    ];
  }

  /**
   * @param {string} input
   * @param {Object[]} args
   * @returns {Number}
   */
  run(input, args) {
    const samples = input.split(Utils.charRep(args[0]));
    if (samples.length !== 2)
      throw new OperationError("Incorrect number of samples.");
    return ssdeepjs.similarity(samples[0], samples[1]);
  }
}

export default CompareSSDEEPHashes;
