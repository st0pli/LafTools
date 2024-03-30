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
 * URL Encode operation
 */
class URLEncode extends Operation {

  // impl getOptDetail
  public getOptDetail(): OptDetail {
    return {
      // provide information
      relatedID: 'url',
      config: {
        "module": "Default",
        "description": "Encodes problematic characters into percent-encoding, a format supported by URIs/URLs.<br><br>e.g. <code>=</code> becomes <code>%3d</code>",
        "infoURL": "https://wikipedia.org/wiki/Percent-encoding",
        "inputType": "string",
        "outputType": "string",
        "flowControl": false,
        "manualBake": false,
        "args": [
          {
            "name": Dot("e7Afj0xo2", "Encode all special chars"),
            "type": "boolean",
            "value": false,
          },
        ]
      },
      optName: Dot("btUdVQx8duc", "{0} Encode", 'URL'),
      optDescription: Dot("btUVqx8uc", "Encodes problematic characters into percent-encoding, a format supported by URIs/URLs."),
      exampleInput: "test 12345",
      exampleOutput: "test%2012345",
      infoURL: "https://wikipedia.org/wiki/Percent-encoding",
      nousenouseID: "urlencode",
    }
  }

  /**
   * URLEncode constructor
   */
  constructor() {
    super();

    this.name = "URL Encode";
    this.module = "URL";
    // this.description =
    //   "Encodes problematic characters into percent-encoding, a format supported by URIs/URLs.<br><br>e.g. <code>=</code> becomes <code>%3d</code>";
    // this.infoURL = "https://wikipedia.org/wiki/Percent-encoding";
    this.inputType = "string";
    this.outputType = "string";
    this.args = [
      {
        name: Dot("0NSerY3oe", "Encode all special chars"),
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
    const encodeAll = args[0];
    return encodeAll ? this.encodeAllChars(input) : encodeURI(input);
  }

  /**
   * Encode characters in URL outside of encodeURI() function spec
   *
   * @param {string} str
   * @returns {string}
   */
  encodeAllChars(str) {
    // TODO Do this programmatically
    return encodeURIComponent(str)
      .replace(/!/g, "%21")
      .replace(/#/g, "%23")
      .replace(/'/g, "%27")
      .replace(/\(/g, "%28")
      .replace(/\)/g, "%29")
      .replace(/\*/g, "%2A")
      .replace(/-/g, "%2D")
      .replace(/\./g, "%2E")
      .replace(/_/g, "%5F")
      .replace(/~/g, "%7E");
  }
}

export default URLEncode;
