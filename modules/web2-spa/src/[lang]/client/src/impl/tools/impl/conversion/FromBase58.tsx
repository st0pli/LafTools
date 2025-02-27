// LafTools
// 
// Date: Sun, 14 Jan 2024
// Second Author: Ryan Laf 
// Description: 
// License: AGPLv3
// Copyright (C) 2024 - Present, https://laftools.dev and https://codegen.cc

/**
 * @author tlwr [toby@toby.codes]
 * @copyright Crown Copyright 2017
 * @license Apache-2.0
 */

import { Dot } from "@/[lang]/client/src/utils/cTranslationUtils";
import { TEXT_INPUT_EXAMPLE_HELLO_WORLD } from './_constants.tsx'
import Operation, { OptDetail } from "../../../core/Operation.tsx";
import Utils from "../../../core/Utils.mjs";
import OperationError from "../../../core/errors/OperationError.mjs";
import { ALPHABET_OPTIONS } from "../../../core/lib/Base58.mjs";

/**
 * From Base58 operation
 */
class FromBase58 extends Operation {
    public getOptDetail(): OptDetail {
        return {
            relatedID: 'base58',
            infoURL: "https://en.wikipedia.org/wiki/Base58",
            nousenouseID: 'frombase58',
            optName: Dot("L9qbQku", "Decode {0}", "Base58"),
            optDescription: Dot(
                "JdqidUE8",
                "This operation decodes data from an ASCII string (with an alphabet of your choosing, presets included) back into its raw form.",
            ),

            exampleOutput: TEXT_INPUT_EXAMPLE_HELLO_WORLD,
            exampleInput: "2NEpo7TZRRrLZSi2U",


            config: {
                "module": "Default",
                "description": "Base58 (similar to Base64) is a notation for encoding arbitrary byte data. It differs from Base64 by removing easily misread characters (i.e. l, I, 0 and O) to improve human readability.<br><br>This operation decodes data from an ASCII string (with an alphabet of your choosing, presets included) back into its raw form.<br><br>e.g. <code>StV1DL6CwTryKyV</code> becomes <code>hello world</code><br><br>Base58 is commonly used in cryptocurrencies (Bitcoin, Ripple, etc).",
                "infoURL": "https://wikipedia.org/wiki/Base58",
                "inputType": "string",
                "outputType": "byteArray",
                "flowControl": false,
                "manualBake": false,
                "args": [
                    {
                        "name": Dot("anosdk", "Alphabet"),
                        "type": "editableOption",
                        "value": [
                            {
                                "name": "Bitcoin",
                                "value": "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
                            },
                            {
                                "name": "Ripple",
                                "value": "rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz"
                            }
                        ]
                    },
                    {
                        "name": Dot("nskqw", "Remove non-alphabet chars"),
                        "type": "boolean",
                        "value": true
                    }
                ],
                "checks": [
                    {
                        "pattern": "^[1-9A-HJ-NP-Za-km-z]{20,}$",
                        "flags": "",
                        "args": [
                            "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
                            false
                        ]
                    },
                    {
                        "pattern": "^[1-9A-HJ-NP-Za-km-z]{20,}$",
                        "flags": "",
                        "args": [
                            "rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz",
                            false
                        ]
                    }
                ]
            }

        }
    }

    /**
     * FromBase58 constructor
     */
    constructor() {
        super();

        this.module = "Default";
        // this.description = ;
        // this.infoURL = "";
        this.inputType = "string";
        this.outputType = "byteArray";
        this.args = [
            {
                "name": Dot("anosdk", "Alphabet"),
                "type": "editableOption",
                "value": ALPHABET_OPTIONS
            },
            {
                "name": Dot("nskqw", "Remove non-alphabet chars"),
                "type": "boolean",
                "value": true
            }
        ];





        this.checks = [
            {
                pattern: "^[1-9A-HJ-NP-Za-km-z]{20,}$",
                flags: "",
                args: ["123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz", false]
            },
            {
                pattern: "^[1-9A-HJ-NP-Za-km-z]{20,}$",
                flags: "",
                args: ["rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz", false]
            },
        ];
    }

    /**
     * @param {string} input
     * @param {Object[]} args
     * @returns {byteArray}
     */
    run(input, args) {
        let alphabet = args[0] || ALPHABET_OPTIONS[0].value;
        const removeNonAlphaChars = args[1] === undefined ? true : args[1],
            result = [0];

        alphabet = Utils.expandAlphRange(alphabet).join("");

        if (alphabet.length !== 58 ||
            ([] as any).unique.call(alphabet).length !== 58) {
            throw new OperationError("Alphabet must be of length 58");
        }

        if (input.length === 0) return [];

        let zeroPrefix = 0;
        for (let i = 0; i < input.length && input[i] === alphabet[0]; i++) {
            zeroPrefix++;
        }

        [].forEach.call(input, function (c, charIndex) {
            const index = alphabet.indexOf(c);

            if (index === -1) {
                if (removeNonAlphaChars) {
                    return;
                } else {
                    throw new OperationError(`Char '${c}' at position ${charIndex} not in alphabet`);
                }
            }

            let carry = result[0] * 58 + index;
            result[0] = carry & 0xFF;
            carry = carry >> 8;

            for (let i = 1; i < result.length; i++) {
                carry += result[i] * 58;
                result[i] = carry & 0xFF;
                carry = carry >> 8;
            }

            while (carry > 0) {
                result.push(carry & 0xFF);
                carry = carry >> 8;
            }
        });

        while (zeroPrefix--) {
            result.push(0);
        }

        return result.reverse();
    }

}

export default FromBase58;
