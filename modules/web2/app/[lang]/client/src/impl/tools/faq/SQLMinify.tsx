// LafTools
// 
// Date: Sat, 27 Jan 2024
// Description:
// License: AGPLv3
// Copyright (C) 2024 - Present, https://laftools.dev and https://codegen.cc

import { loadDOT } from "@/app/[lang]/client/src/reducers/systemSlice";
import { Dot } from "@/app/[lang]/client/src/utils/cTranslationUtils";
import CommonMinify from "./CommonMinify";
import sameFAQs from "./SQLBeautify";

import { FAQItem } from "./types";
import React from "react";

loadDOT("C8airO3gW")

export default (): FAQItem[] => {
    return [
        ...CommonMinify(),
        ...sameFAQs()
    ]
}