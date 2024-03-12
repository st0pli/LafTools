import { Dot } from "@/app/[lang]/client/src/utils/cTranslationUtils.tsx";
import Operation from "../../core/Operation.tsx";
import fn from "./conversion/JavaScriptBeautify.tsx";
import { ToolHandler, ToolMetaInfo } from "../r_handler.tsx";

export default class Base64Handler extends ToolHandler {
    getMetaInfo(): ToolMetaInfo {
        return {
            hideCodePanel: true,
            exampleType: "js-short",
            description: Dot(
                "IxAJswoSh",
                "Parses and pretty prints valid JavaScript code. Also works with JavaScript Object Notation (JSON).",
            ),
        }
    }
    getOperations(): Operation[] {
        return (
            [
                new fn(),
            ]
        )
    }
}