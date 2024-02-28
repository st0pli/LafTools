// LafTools - The Leading All-In-One ToolBox for Programmers.
//
// Date: Sun, 14 Jan 2024
// Second Author: Ryan Laf
// Description:
// Copyright (C) 2024 - Present, https://laf-tools.com and https://codegen.cc
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
 * @author n1073645 [n1073645@gmail.com]
 * @copyright Crown Copyright 2020
 * @license Apache-2.0
 */

import Operation from "../Operation.tsx";
import OperationError from "../errors/OperationError.mjs";

/**
 * Luhn Checksum operation
 */
class LuhnChecksum extends Operation {
  /**
   * LuhnChecksum constructor
   */
  constructor() {
    super();

    this.name = "Luhn Checksum";
    this.module = "Default";
    this.description =
      "The Luhn algorithm, also known as the modulus 10 or mod 10 algorithm, is a simple checksum formula used to validate a variety of identification numbers, such as credit card numbers, IMEI numbers and Canadian Social Insurance Numbers.";
    this.infoURL = "https://wikipedia.org/wiki/Luhn_algorithm";
    this.inputType = "string";
    this.outputType = "string";
    this.args = [];
  }

  /**
   * Generates the Luhn Checksum from the input.
   *
   * @param {string} inputStr
   * @returns {number}
   */
  checksum(inputStr) {
    let even = false;
    return (
      inputStr
        .split("")
        .reverse()
        .reduce((acc, elem) => {
          // Convert element to integer.
          let temp = parseInt(elem, 10);

          // If element is not an integer.
          if (isNaN(temp))
            throw new OperationError("Character: " + elem + " is not a digit.");

          // If element is in an even position
          if (even) {
            // Double the element and add the quotient and remainder together.
            temp = 2 * elem;
            temp = Math.floor(temp / 10) + (temp % 10);
          }

          even = !even;
          return acc + temp;
        }, 0) % 10
    );
  }

  /**
   * @param {string} input
   * @param {Object[]} args
   * @returns {string}
   */
  run(input, args) {
    if (!input) return "";

    const checkSum = this.checksum(input);
    let checkDigit = this.checksum(input + "0");
    checkDigit = checkDigit === 0 ? 0 : 10 - checkDigit;

    return `Checksum: ${checkSum}
Checkdigit: ${checkDigit}
Luhn Validated String: ${input + "" + checkDigit}`;
  }
}

export default LuhnChecksum;
