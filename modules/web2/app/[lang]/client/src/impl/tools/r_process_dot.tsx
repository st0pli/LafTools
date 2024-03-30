import { loadDOT } from "../../reducers/systemSlice.tsx";
import { Dot } from "../../utils/cTranslationUtils.tsx";

let d = loadDOT("kJH5NqVs0")

export let useFormattedArgsCheckLabelDotMappings = () => {
    return {
        "Cell delimiters": Dot("WrUDbaJCs", "Cell delimiters"),
        "Row delimiters": Dot("VkSPUIvL-", "Row delimiters"),
        "Space": Dot("txt.Space", "Space"),
        "Percent": Dot("txt.Percent", "Percent"),
        "Comma": Dot("txt.Comma", "Comma"),
        "Semi-colon": Dot("txt.Semi-colon", "Semi-colon"),
        "Colon": Dot("txt.Colon", "Colon"),
        "Line feed": Dot("txt.Line feed", "Line feed"),
        "CRLF": Dot("txt.CRLF", "CRLF"),
        "0x": Dot("txt.0x", "0x"),
        "0x with comma": Dot("txt.0x with comma", "0x with comma"),
        "None": Dot("txt.None", "None"),

        "Width": Dot("wdit", "Width"),
        "Upper case hex": Dot("UppUNIsdfex", "Upper case hex"),
        "Include final length": Dot("InclUNIsdf", "Include final length"),
        "UNIX format": Dot("UNIsdf", "UNIX format"),
        "Include comments": Dot("dqw312", "Include comments"),
        "Semicolons before closing braces": Dot("sbcl", "Semicolons before closing braces"),
        "Scheme": Dot("8dq312", "Scheme"),
        "Format": Dot("8dq31231", "Formatted"),
        "Formatted": Dot("8dq31231", "Formatted"),
        "Quotes": Dot("QzQWQd", "Quotes"),
        "Signed": Dot("Signed", "Signed"),
        "Delimiter": Dot("CVaQSQSfm", "Delimiter"),
        "Input format": Dot("qocvMVNTC", "Input format"),
        "Strict mode": Dot("izQSRE3f2", "Strict mode"),
        "Rounds": Dot("rnd1", "Rounds"),
        "Standard": Dot("vLCRStTeS", "Standard"),
        "Size": Dot("size", "Size"),
        "Levels": Dot("levels", "Levels"),
        "Number": Dot("number", "Number"),
        "Key": Dot("key", "Key"),
        "Preserve comments": Dot("preserveComments", "Preserve comments"),
        "Include delimeter": Dot("includeDelimeter", "Include delimeter"),
        "Spaces": Dot("Spaces", "Spaces"),
        Packed: Dot("Packed", "Packed"),
        "Bytes per line": Dot("Bytesspline", "Bytes per line"),
        "Tabs": Dot("Tabs", "Tabs"),
        "By": Dot("By", "By"),
        "Full stops": Dot("Full stops", "Full stops"),
        "Output format": Dot("Outputformat", "Output format"),
        "All-zero group char": Dot("KzQWeHkgU", "All-zero group char")
    }
}
