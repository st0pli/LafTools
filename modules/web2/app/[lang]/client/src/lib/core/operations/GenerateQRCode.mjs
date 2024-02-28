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
 * @author j433866 [j433866@gmail.com]
 * @copyright Crown Copyright 2018
 * @license Apache-2.0
 */

import Operation from "../Operation.tsx";
import OperationError from "../errors/OperationError.mjs";
import { generateQrCode } from "../lib/QRCode.mjs";
import { toBase64 } from "../lib/Base64.mjs";
import { isImage } from "../lib/FileType.mjs";
import Utils from "../Utils.mjs";

/**
 * Generate QR Code operation
 */
class GenerateQRCode extends Operation {
  /**
   * GenerateQRCode constructor
   */
  constructor() {
    super();

    this.name = "Generate QR Code";
    this.module = "Image";
    this.description =
      "Generates a Quick Response (QR) code from the input text.<br><br>A QR code is a type of matrix barcode (or two-dimensional barcode) first designed in 1994 for the automotive industry in Japan. A barcode is a machine-readable optical label that contains information about the item to which it is attached.";
    this.infoURL = "https://wikipedia.org/wiki/QR_code";
    this.inputType = "string";
    this.outputType = "ArrayBuffer";
    this.presentType = "html";
    this.args = [
      {
        name: "Image Format",
        type: "option",
        value: ["PNG", "SVG", "EPS", "PDF"],
      },
      {
        name: "Module size (px)",
        type: "number",
        value: 5,
        min: 1,
      },
      {
        name: "Margin (num modules)",
        type: "number",
        value: 4,
        min: 0,
      },
      {
        name: "Error correction",
        type: "option",
        value: ["Low", "Medium", "Quartile", "High"],
        defaultIndex: 1,
      },
    ];
  }

  /**
   * @param {string} input
   * @param {Object[]} args
   * @returns {ArrayBuffer}
   */
  run(input, args) {
    const [format, size, margin, errorCorrection] = args;

    return generateQrCode(input, format, size, margin, errorCorrection);
  }

  /**
   * Displays the QR image using HTML for web apps
   *
   * @param {ArrayBuffer} data
   * @returns {html}
   */
  present(data, args) {
    if (!data.byteLength && !data.length) return "";
    const dataArray = new Uint8Array(data),
      [format] = args;
    if (format === "PNG") {
      const type = isImage(dataArray);
      if (!type) {
        throw new OperationError("Invalid file type.");
      }

      return `<img src="data:${type};base64,${toBase64(dataArray)}">`;
    }

    return Utils.arrayBufferToStr(data);
  }
}

export default GenerateQRCode;
