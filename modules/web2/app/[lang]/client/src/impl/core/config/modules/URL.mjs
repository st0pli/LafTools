// LafTools
//
// Date: Sun, 14 Jan 2024
// Second Author: Ryan Laf
// Description:
// License: AGPLv3
// Copyright (C) 2024 - Present, https://laftools.dev and https://codegen.cc

/**
 * THIS FILE IS AUTOMATICALLY GENERATED BY src/core/config/scripts/generateConfig.mjs
 *
 * @author n1474335 [n1474335@gmail.com]
 * @copyright Crown Copyright 2023
 * @license Apache-2.0
 */
import ParseURI from "../../operations/ParseURI.mjs";
import URLDecode from "../../operations/URLDecode.mjs";
import URLEncode from "../../operations/URLEncode.mjs";

const OpModules = typeof self === "undefined" ? {} : self.OpModules || {};

OpModules.URL = {
  "Parse URI": ParseURI,
  "URL Decode": URLDecode,
  "URL Encode": URLEncode,
};

export default OpModules;
