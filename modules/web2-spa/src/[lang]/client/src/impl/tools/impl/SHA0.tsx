// LafTools
// 
// Date: Wed, 13 Mar 2024
// Description:
// License: AGPLv3
// Copyright (C) 2024 - Present, https://laftools.dev and https://codegen.cc

import { Dot } from "@/[lang]/client/src/utils/cTranslationUtils.tsx";
import Operation from "../../core/Operation.tsx";
import fn from "./conversion/SHA0.tsx";
import { ToolHandler, ToolMetaInfo } from "../r_handler.tsx";
import { AppOpFnMapTypeKeys } from "../g_optlist.tsx";

export default class MeHandler extends ToolHandler {
  getMetaInfo(): ToolMetaInfo {
    return {
      hideCodePanel: true,
      description: Dot(
        "h97aov0Ab",
        "Generates a SHA-0 hash from a text. SHA-0 is not secure and should not be used."
      ),
    }
  }


  getOperationsByName(): AppOpFnMapTypeKeys[] {
    return (
      [
        "SHA0",
      ]
    )
  }
}