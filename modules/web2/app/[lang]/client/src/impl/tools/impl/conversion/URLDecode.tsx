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
 * @author n1474335 [n1474335@gmail.com]
 * @copyright Crown Copyright 2016
 * @license Apache-2.0
 */

import { Dot } from "../../../../utils/cTranslationUtils.tsx";
import Operation, { OptDetail } from "../../../core/Operation.tsx";

/**
 * URL Decode operation
 */
class URLDecode extends Operation {
  public getOptDetail(): OptDetail {
    return {
      // provide information
      relatedID: 'url',
      config: {
        "module": "Default",
        "description": "Converts URI/URL percent-encoded characters back to their raw values.<br><br>e.g. <code>%3d</code> becomes <code>=</code>",
        "infoURL": "https://wikipedia.org/wiki/Percent-encoding",
        "inputType": "string",
        "outputType": "string",
        "flowControl": false,
        "manualBake": false,
        "args": []
      },
      optName: Dot("btUVQxdq8uc", "{0} Decode", 'URL'),
      optDescription: Dot("btUVQx8uc", "Converts URI/URL percent-encoded characters back to their raw values."),
      exampleInput: "https%3A%2F%2Fexample.com%2F%3Fq%3Dtest",
      exampleOutput: "https://example.com/?q=test",
      infoURL: "https://wikipedia.org/wiki/Percent-encoding",
      nousenouseID: "urldecode",
    }
  }
  /**
   * URLDecode constructor
   */
  constructor() {
    super();

    this.name = "URL Decode";
    this.module = "URL";
    // this.description =
    //   "Converts URI/URL percent-encoded characters back to their raw values.<br><br>e.g. <code>%3d</code> becomes <code>=</code>";
    // this.infoURL = "https://wikipedia.org/wiki/Percent-encoding";
    this.inputType = "string";
    this.outputType = "string";
    this.args = [];
    this.checks = [
      {
        pattern: ".*(?:%[\\da-f]{2}.*){4}",
        flags: "i",
        args: [],
      },
    ];
  }

  /**
   * @param {string} input
   * @param {Object[]} args
   * @returns {string}
   */
  run(input, args) {
    const data = input.replace(/\+/g, "%20");
    try {
      return decodeURIComponent(data);
    } catch (err) {
      return unescape(data);
    }
  }
}

export default URLDecode;
