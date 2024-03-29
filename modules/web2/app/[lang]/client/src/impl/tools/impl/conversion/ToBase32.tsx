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

import { Dot } from "@/app/[lang]/client/src/utils/cTranslationUtils";
import { TEXT_INPUT_EXAMPLE_HELLO_WORLD } from './_constants.tsx'
import Operation, { OptDetail } from "../../../core/Operation.tsx";
import Utils from "../../../core/Utils.mjs";

/**
 * To Base32 operation
 */
class ToBase32 extends Operation {
    public getOptDetail(): OptDetail {
        return {
            relatedID: 'base32',
            config: {
                "module": "Default",
                "description": "Base32 is a notation for encoding arbitrary byte data using a restricted set of symbols that can be conveniently used by humans and processed by computers. It uses a smaller set of characters than Base64, usually the uppercase alphabet and the numbers 2 to 7.",
                "infoURL": "https://wikipedia.org/wiki/Base32",
                "inputType": "ArrayBuffer",
                "outputType": "string",
                "flowControl": false,
                "manualBake": false,
                "args": [
                    {
                        "name": Dot("anosdk", "Alphabet"),
                        "type": "binaryString",
                        "value": "A-Z2-7="
                    }
                ]
            },
            nousenouseID: 'tobase32',
            infoURL: "https://wikipedia.org/wiki/Base32",
            optName: Dot("M3ytc", "Encode {0}", "Base32"),
            optDescription: Dot(
                "BGd7dP9",
                "This operation encodes raw data into an ASCII {0} string.",
                "Base32"
            ),
            exampleOutput: "JBSWY3DPEBLW64TMMQQQ::::",
            exampleInput: TEXT_INPUT_EXAMPLE_HELLO_WORLD,

        }
    }

    /**
     * ToBase32 constructor
     */
    constructor() {
        super();

        this.module = "Default";
        this.inputType = "ArrayBuffer";
        this.outputType = "string";
        this.args = [
            {
                name: Dot("skq3i12", "Alphabet"),
                type: "binaryString",
                value: "A-Z2-7="
            }
        ];
    }

    /**
     * @param {ArrayBuffer} input
     * @param {Object[]} args
     * @returns {string}
     */
    run(input, args) {
        if (!input) return "";

        input = new Uint8Array(input);

        const alphabet = args[0] ? Utils.expandAlphRange(args[0]).join("") : "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=";
        let output = "",
            chr1, chr2, chr3, chr4, chr5,
            enc1, enc2, enc3, enc4, enc5, enc6, enc7, enc8,
            i = 0;
        while (i < input.length) {
            chr1 = input[i++];
            chr2 = input[i++];
            chr3 = input[i++];
            chr4 = input[i++];
            chr5 = input[i++];

            enc1 = chr1 >> 3;
            enc2 = ((chr1 & 7) << 2) | (chr2 >> 6);
            enc3 = (chr2 >> 1) & 31;
            enc4 = ((chr2 & 1) << 4) | (chr3 >> 4);
            enc5 = ((chr3 & 15) << 1) | (chr4 >> 7);
            enc6 = (chr4 >> 2) & 31;
            enc7 = ((chr4 & 3) << 3) | (chr5 >> 5);
            enc8 = chr5 & 31;

            if (isNaN(chr2)) {
                enc3 = enc4 = enc5 = enc6 = enc7 = enc8 = 32;
            } else if (isNaN(chr3)) {
                enc5 = enc6 = enc7 = enc8 = 32;
            } else if (isNaN(chr4)) {
                enc6 = enc7 = enc8 = 32;
            } else if (isNaN(chr5)) {
                enc8 = 32;
            }

            output += alphabet.charAt(enc1) + alphabet.charAt(enc2) + alphabet.charAt(enc3) +
                alphabet.charAt(enc4) + alphabet.charAt(enc5) + alphabet.charAt(enc6) +
                alphabet.charAt(enc7) + alphabet.charAt(enc8);
        }

        return output;
    }

}

export default ToBase32;
