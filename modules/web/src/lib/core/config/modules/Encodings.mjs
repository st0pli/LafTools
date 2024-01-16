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
* THIS FILE IS AUTOMATICALLY GENERATED BY src/core/config/scripts/generateConfig.mjs
*
* @author n1474335 [n1474335@gmail.com]
* @copyright Crown Copyright 2023
* @license Apache-2.0
*/
import AMFDecode from "../../operations/AMFDecode.mjs";
import AMFEncode from "../../operations/AMFEncode.mjs";
import CitrixCTX1Decode from "../../operations/CitrixCTX1Decode.mjs";
import CitrixCTX1Encode from "../../operations/CitrixCTX1Encode.mjs";
import DecodeText from "../../operations/DecodeText.mjs";
import EncodeText from "../../operations/EncodeText.mjs";
import FromHTMLEntity from "../../operations/FromHTMLEntity.mjs";
import FromPunycode from "../../operations/FromPunycode.mjs";
import NormaliseUnicode from "../../operations/NormaliseUnicode.mjs";
import TextEncodingBruteForce from "../../operations/TextEncodingBruteForce.mjs";
import ToHTMLEntity from "../../operations/ToHTMLEntity.mjs";
import ToPunycode from "../../operations/ToPunycode.mjs";

const OpModules = typeof self === "undefined" ? {} : self.OpModules || {};

OpModules.Encodings = {
    "AMF Decode": AMFDecode,
    "AMF Encode": AMFEncode,
    "Citrix CTX1 Decode": CitrixCTX1Decode,
    "Citrix CTX1 Encode": CitrixCTX1Encode,
    "Decode text": DecodeText,
    "Encode text": EncodeText,
    "From HTML Entity": FromHTMLEntity,
    "From Punycode": FromPunycode,
    "Normalise Unicode": NormaliseUnicode,
    "Text Encoding Brute Force": TextEncodingBruteForce,
    "To HTML Entity": ToHTMLEntity,
    "To Punycode": ToPunycode,
};

export default OpModules;
