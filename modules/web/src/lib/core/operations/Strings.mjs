// LafTools - The Leading All-In-One ToolBox for Programmers.
// 
// Date: Sun, 14 Jan 2024
// Author: Ryan Laf <get>
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
 * @author n1474335 [n1474335@gmail.com]
 * @copyright Crown Copyright 2016
 * @license Apache-2.0
 */

import Operation from "../Operation.mjs";
import XRegExp from "xregexp";
import { search } from "../lib/Extract.mjs";
import { caseInsensitiveSort } from "../lib/Sort.mjs";

/**
 * Strings operation
 */
class Strings extends Operation {

    /**
     * Strings constructor
     */
    constructor() {
        super();

        this.name = "Strings";
        this.module = "Regex";
        this.description = "Extracts all strings from the input.";
        this.infoURL = "https://wikipedia.org/wiki/Strings_(Unix)";
        this.inputType = "string";
        this.outputType = "string";
        this.args = [
            {
                name: "Encoding",
                type: "option",
                value: ["Single byte", "16-bit littleendian", "16-bit bigendian", "All"]
            },
            {
                name: "Minimum length",
                type: "number",
                value: 4
            },
            {
                name: "Match",
                type: "option",
                value: [
                    "[ASCII]", "Alphanumeric + punctuation (A)", "All printable chars (A)", "Null-terminated strings (A)",
                    "[Unicode]", "Alphanumeric + punctuation (U)", "All printable chars (U)", "Null-terminated strings (U)"
                ]
            },
            {
                name: "Display total",
                type: "boolean",
                value: false
            },
            {
                name: "Sort",
                type: "boolean",
                value: false
            },
            {
                name: "Unique",
                type: "boolean",
                value: false
            }
        ];
    }

    /**
     * @param {string} input
     * @param {Object[]} args
     * @returns {string}
     */
    run(input, args) {
        const [encoding, minLen, matchType, displayTotal, sort, unique] = args,
            alphanumeric = "A-Z\\d",
            punctuation = "/\\-:.,_$%'\"()<>= !\\[\\]{}@",
            printable = "\x20-\x7e",
            uniAlphanumeric = "\\pL\\pN",
            uniPunctuation = "\\pP\\pZ",
            uniPrintable = "\\pL\\pM\\pZ\\pS\\pN\\pP";

        let strings = "";

        switch (matchType) {
            case "Alphanumeric + punctuation (A)":
                strings = `[${alphanumeric + punctuation}]`;
                break;
            case "All printable chars (A)":
            case "Null-terminated strings (A)":
                strings = `[${printable}]`;
                break;
            case "Alphanumeric + punctuation (U)":
                strings = `[${uniAlphanumeric + uniPunctuation}]`;
                break;
            case "All printable chars (U)":
            case "Null-terminated strings (U)":
                strings = `[${uniPrintable}]`;
                break;
        }

        // UTF-16 support is hacked in by allowing null bytes on either side of the matched chars
        switch (encoding) {
            case "All":
                strings = `(\x00?${strings}\x00?)`;
                break;
            case "16-bit littleendian":
                strings = `(${strings}\x00)`;
                break;
            case "16-bit bigendian":
                strings = `(\x00${strings})`;
                break;
            case "Single byte":
            default:
                break;
        }

        strings = `${strings}{${minLen},}`;

        if (matchType.includes("Null-terminated")) {
            strings += "\x00";
        }

        const regex = new XRegExp(strings, "ig");
        const results = search(
            input,
            regex,
            null,
            sort ? caseInsensitiveSort : null,
            unique
        );

        if (displayTotal) {
            return `Total found: ${results.length}\n\n${results.join("\n")}`;
        } else {
            return results.join("\n");
        }
    }

}

export default Strings;
