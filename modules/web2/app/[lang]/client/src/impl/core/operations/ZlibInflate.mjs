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

import Operation from "../Operation.tsx";
import { INFLATE_BUFFER_TYPE } from "../lib/Zlib.mjs";
var zlibAndGzip = require("zlibjs/bin/zlib_and_gzip.min.js");

const Zlib = zlibAndGzip.Zlib;

const ZLIB_BUFFER_TYPE_LOOKUP = {
  Adaptive: Zlib.Inflate.BufferType.ADAPTIVE,
  Block: Zlib.Inflate.BufferType.BLOCK,
};

/**
 * Zlib Inflate operation
 */
class ZlibInflate extends Operation {
  /**
   * ZlibInflate constructor
   */
  constructor() {
    super();

    this.name = "Zlib Inflate";
    this.module = "Compression";
    this.description =
      "Decompresses data which has been compressed using the deflate algorithm with zlib headers.";
    this.infoURL = "https://wikipedia.org/wiki/Zlib";
    this.inputType = "ArrayBuffer";
    this.outputType = "ArrayBuffer";
    this.args = [
      {
        name: "Start index",
        type: "number",
        value: 0,
      },
      {
        name: "Initial output buffer size",
        type: "number",
        value: 0,
      },
      {
        name: "Buffer expansion type",
        type: "option",
        value: INFLATE_BUFFER_TYPE,
      },
      {
        name: "Resize buffer after decompression",
        type: "boolean",
        value: false,
      },
      {
        name: "Verify result",
        type: "boolean",
        value: false,
      },
    ];
    this.checks = [
      {
        pattern: "^\\x78(\\x01|\\x9c|\\xda|\\x5e)",
        flags: "",
        args: [0, 0, "Adaptive", false, false],
      },
    ];
  }

  /**
   * @param {ArrayBuffer} input
   * @param {Object[]} args
   * @returns {ArrayBuffer}
   */
  run(input, args) {
    const inflate = new Zlib.Inflate(new Uint8Array(input), {
      index: args[0],
      bufferSize: args[1],
      bufferType: ZLIB_BUFFER_TYPE_LOOKUP[args[2]],
      resize: args[3],
      verify: args[4],
    });
    return new Uint8Array(inflate.decompress()).buffer;
  }
}

export default ZlibInflate;
