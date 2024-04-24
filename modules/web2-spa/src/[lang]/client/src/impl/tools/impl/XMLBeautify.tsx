import { Dot } from "@/[lang]/client/src/utils/cTranslationUtils.tsx";
import Operation from "../../core/Operation.tsx";
import fn from "./conversion/XMLBeautify.tsx";
import { ToolHandler, ToolMetaInfo } from "../r_handler.tsx";
import { AppOpFnMapTypeKeys } from "../g_optlist.tsx";

export default class Base64Handler extends ToolHandler {
    getMetaInfo(): ToolMetaInfo {
        return {
            hideCodePanel: true,
            exampleType: "css-short",
            description: Dot(
                "hX1CWGAhl",
                "Indents and prettifies eXtensible Markup Language (XML) code."
            ),
        }
    }

    getOperationsByName(): AppOpFnMapTypeKeys[] {
        return (
            [
                "XMLBeautify",
            ]
        )
    }
}