import { Dot } from "@/app/[lang]/client/src/utils/cTranslationUtils.tsx";
import Operation from "../../core/Operation.tsx";
import fn from "./conversion/HTMLMinify.tsx";
import { ToolHandler, ToolMetaInfo } from "../r_handler.tsx";
import { AppOpFnMapTypeKeys } from "../g_optlist.tsx";

export default class MyHandler extends ToolHandler {
    getMetaInfo(): ToolMetaInfo {
        return {
            hideCodePanel: true,
            exampleType: "css-short",
            description: Dot(
                "A8KATd2ml",
                "Converts a string to HTML entity."
            ),
        }
    }

    getOperationsByName(): AppOpFnMapTypeKeys[] {
        return (
            [
                "ToHTMLEntity",
                "FromHTMLEntity"
            ]
        )
    }
}