
import { LabelHrefType, NavigatorPassProp } from "@/app/[lang]/[category]/src/parts"
import { getAppDevIcon, getAppKeywords } from "@/app/__CORE__/config/imgconfig"
import { Dot } from "@/app/__CORE__/utils/TranslationUtils"
import { fmtURL_Server } from "@/app/__CORE__/utils/routeUtils"
import { Metadata } from "next"
import { cache } from "react"
import appToolInfoObj, { AppToolKeyType } from "./d_meta"
import COMMON_FN_REF from "./common_ref"
import { GithubRepoLink } from "@/app/__CORE__/meta/constants"
import { PortalDefinitionType } from "./d_portal"
import { CategorySearchProps } from "@/app/[lang]/page"
import { tw } from "../../types/styles"
import { ifnil } from "../../pages/WorkBench/FixedLayout/Main/Center/sub/center-view/Transformer/ProcessPanel/hooks"

export type CategoryType = "" | "tools" | "resources" | "docs" | "ai" | "user"


export let getSubCategoryByProps = (props: CategorySearchProps): PortalDefinitionType[] => {
    switch (props.params.category) {
        case 'ai':
            return getAISubCategory()
        case 'docs':
            return getDocsSubCategory()
        case 'resources':
            return getResourcesSubCategory()
        case 'user':
            return getUserSubCategory()
        case 'tools':
        default:
            return getToolSubCategory()
    }
}

export let getCategoryParentTwClz = (category: CategoryType): string => {
    let parentClz = tw` dark:bg-sky-900 bg-sky-600 `
    if (category == 'ai') {
        parentClz = tw` dark:bg-violet-900 bg-violet-900 `
    } else if (category == 'docs') {
        parentClz = tw` dark:bg-teal-900 bg-teal-700 `
    } else if (category == 'resources') {
        parentClz = tw` dark:bg-yellow-900 bg-yellow-700 `
    } else if (category == 'user') {
        // parentClz = tw` dark:bg-zinc-900 bg-zinc- `
        // do nothing
    }
    return parentClz
}

export let getIconImgAndBannerTextByCategory = (category: CategoryType, props: NavigatorPassProp): { iconImg: string, crtTitleBanner: string } => {
    let iconImg = ''
    let crtTitleBanner = ''
    if (ifnil(category, 'tools') == 'tools') {
        iconImg = 'icon-dev.png'
        crtTitleBanner = (
            Dot("OyZLZokUQ", "Empower Development with LafTools!")
        )
    } else if (category == 'ai') {
        iconImg = 'icon-ailab.png'
        crtTitleBanner = (
            Dot("OP2Ogtd1O", "Experience AI Features with LafTools!")
        )
    } else if (category == 'docs') {
        iconImg = 'icon-docs.png'
        crtTitleBanner = (
            Dot("Tj2A9ou2k", "Read Documentations with LafTools!")
        )
    } else if (category == 'resources') {
        iconImg = 'icon-rsce.png'
        crtTitleBanner = (
            Dot("sr9eCEJ0b6M", "Get Resources with LafTools!")
        )
    } else if (category == 'user') {
        iconImg = 'icon.png'
        let name_map = {
            'sign-in': Dot("sign.in", "Sign In"),
            'sign-up': Dot("sign.up", "Sign Up"),
            'reset-password': Dot("forgot.password", "Forgot Password"),
        }
        crtTitleBanner = (
            Dot("sjod7G6WL", "User Centre") + ' - ' + name_map[props.params.subCategory]
        )
    }
    return {
        iconImg,
        crtTitleBanner
    }
}

export let getToolSubCategory = ((): PortalDefinitionType[] => {
    let secondBCLabel = Dot("thAvhgee7", "Universal Tools")
    let toolsPortalDefinitions: PortalDefinitionType[] = [
        {
            seoTitle: Dot("format.code.seo", "Format {0} Code", 'JSON/JS/YAML/CSS/C#/SQL'),
            seoKeywords: [
                Dot("formatjavascript", "Format JavaScript"),
                Dot("formatjson", "Format JSON"),
                Dot("formatyaml", "Format YAML"),
                Dot("formatcss", "Format CSS"),
                Dot("formatcsharp", "Format YAML"),
                "preittier",
                "formatter",
                "lint"
            ],
            seoDescription: Dot("seo.description.format", "Efficiently format your code online with our free tool. Supports multiple languages including JSON, JS, YAML, CSS, C#, and SQL. Improve readability and maintain a consistent coding style across your project."),
            label: Dot("str.formatter", "Formatters"),
            longLabel: Dot("str.formatters.long", "Quick Code Formatters"),
            id: 'formatters',
            subTabs: [
                {
                    id: "jsonformatter",
                    toolId: "JSONBeautify",
                    label: Dot("pkprvdA2O", "JSON Formatter"),
                },
                {
                    id: 'javascriptformatter',
                    toolId: 'JavaScriptBeautify',
                    label: Dot("2Y2Y2qY2", "JavaScript Formatter"),
                },
                {
                    id: 'htmlformatter',
                    toolId: 'HTMLBeautify',
                    label: Dot("2Y2eqY2Y2Y2", "HTML Formatter"),
                },
                {
                    id: "xmlformatter",
                    toolId: 'XMLBeautify',
                    label: Dot("v2YyGqwy2Yh", "XML Formatter"),
                },
                {
                    id: 'yamlformatter',
                    toolId: 'YAMLBeautify',
                    label: Dot("h2Y2Y2Yeq2Y", "YAML Formatter"),
                },
                {
                    id: 'cssformatter',
                    toolId: 'CSSBeautify',
                    label: Dot("2Yd2Y2Y2Y2", "CSS Formatter"),
                },
                {
                    id: 'sqlformatter',
                    toolId: "SQLBeautify",
                    label: Dot("2Y2Y2eqY2Y2", "SQL Formatter"),
                },
                // do same for JSONMinify, JavaScriptMinify, HTMLMinify, XMLMinify, YAMLMinify, CSSMinify, SQLMinify, remember to add affix to the id of Dot
                {
                    id: "jsonminify",
                    toolId: "JSONMinify",
                    label: Dot("pkprdvdA2O", "JSON Minifier"),
                },
                {
                    id: "xmlminify",
                    toolId: 'XMLMinify',
                    label: Dot("v2wy2Yh", "XML Minifier"),
                },
                {
                    id: 'javascriptminify',
                    toolId: 'JavaScriptMinify',
                    label: Dot("2Y2Y2qdqY2", "JavaScript Minifier"),
                },
                {
                    id: 'htmlminify',
                    toolId: 'HTMLMinify',
                    label: Dot("2Y2eq2", "HTML Minifier"),
                },
                {
                    id: 'cssminify',
                    toolId: 'CSSMinify',
                    label: Dot("2Ye2Y2Y2", "CSS Minifier"),
                },
                {
                    id: 'sqlminify',
                    toolId: "SQLMinify",
                    label: Dot("2Y2YY2", "SQL Minifier"),
                },
                // do same for MarkdownBeautify, TypeScriptBeautify, GraphQLBeautify, SCSSBeautify, LessBeautify
                {
                    id: 'markdownformatter',
                    toolId: "MarkdownBeautify",
                    label: Dot("2Y2Y2qYd2Y2", "Markdown Formatter"),
                },
                {
                    id: 'typescriptformatter',
                    toolId: "TypeScriptBeautify",
                    label: Dot("2Y2Y2qqY2Y2", "TypeScript Formatter"),
                },
                {
                    id: 'graphqlformatter',
                    toolId: "GraphQLBeautify",
                    label: Dot("2Ye2dqeY2qY2Y2", "GraphQL Formatter"),
                },
                {
                    id: 'scssformatter',
                    toolId: "SCSSBeautify",
                    label: Dot("2Y2Y2eeeqY2Y2", "{0} Formatter", "SCSS"),
                },
                {
                    id: 'lessformatter',
                    toolId: "LessBeautify",
                    label: Dot("2Ye2Yqw2qY2Y2", "{0} Formatter", "Less"),
                },
                {
                    id: "htmlentity",
                    toolId: 'HTMLEntity',
                    label: Dot("gGpTg5Wn_", "HTML Entity Formats")
                }
            ]
        },
        {
            label: Dot("str.codecs", "Codecs"),
            longLabel: Dot("str.codecs.long", "Encryption and Decryption Tools"),
            id: 'codecs',
            seoTitle: Dot("codecs.seo", "Online Codecs - Base64, URL Encoder, MD5, SHA1, SHA256, SHA512"),
            seoKeywords: [
                "base64",
                "url encoder",
                "md5",
                "sha1",
                "sha256",
                "sha512",
                "online codecs",
                "free codecs",
                "secure codecs"
            ],
            seoDescription: Dot("seo.description.codecs", "Use our free online codecs to encode and decode your data. Supports Base64, URL Encoder, MD5, SHA1, SHA256, SHA512."),
            subTabs: [
                {
                    id: 'base64',
                    toolId: 'edc_base64',
                    label: Dot("sdfqw", "Base64"),
                },
                {
                    id: "urlencoder",
                    toolId: "URLEncode",
                    label: Dot("mdhWk4dtid", "URL Encoder"),
                },
                {
                    id: "md5",
                    toolId: "md5",
                    label: Dot("eTJ2EDLfW", "MD5 Hash"),
                },
                {
                    id: "sha224",
                    toolId: "SHA224",
                    args: [
                        '224',
                        64,
                        64
                    ],
                    label: Dot("dqwrq3w13", "{0} Hash", "SHA224"),
                },
                {
                    id: "sha256",
                    toolId: "SHA256",
                    args: [
                        '256',
                        64,
                        64
                    ],
                    label: Dot("dqwrq3w13", "{0} Hash", "SHA256"),
                },
                {
                    id: "sha384",
                    toolId: "SHA384",
                    args: [
                        '384',
                        160,
                        160
                    ],
                    label: Dot("dqwrq3w13", "{0} Hash", "SHA384"),
                },
                {
                    id: "sha512",
                    toolId: "SHA512",
                    args: [
                        '512',
                        160,
                        160
                    ],
                    label: Dot("dqwrq3w13", "{0} Hash", "SHA512"),
                },
                {
                    id: 'fromhexdump',
                    toolId: 'FromHexdump',
                    label: Dot("eYg7ZNBH6", "From Hexdump"),
                },
                {
                    id: 'tohexdump',
                    toolId: 'ToHexdump',
                    label: Dot("z2FxMaOjF", "To Hexdump"),
                }
            ]
        },
        {
            seoTitle: Dot("encoding.seo", "Online Encoding Tools - URL Encoder, Base64, Escape, Unescape, Encode URI, Decode URI"),
            seoKeywords: [
                "url encoder",
                "base64",
                "escape",
                "unescape",
                "encode uri",
                "decode uri",
                "online encoding",
                "free encoding",
                "secure encoding"
            ],
            seoDescription: Dot("seo.description.encoding", "Use our free online encoding tools to encode and decode your data. Supports URL Encoder, Base64, Escape, Unescape, Encode URI, Decode URI."),
            label: Dot("mhWk4ddtid", "Encoding"),
            longLabel: Dot("mhWk4ddtid.long", "Encoding and Decoding Tools"),
            id: 'encoding',
            subTabs: [
                {
                    id: 'base64',
                    toolId: 'edc_base64',
                    label: Dot("2Y2Y2Yd2Y2", "Base64"),
                },
                {
                    id: 'JSONEscape',
                    toolId: 'JSONEscape',
                    label: Dot("vldqwI4", "{0} Escape", 'JSON'),
                },
                {
                    id: 'JSONUnescape',
                    toolId: 'JSONEscape',
                    label: Dot("fdtedX-", "{0} Unescape", 'JSON'),
                },
                {
                    id: 'encodeuri',
                    toolId: 'URLToEncode',
                    label: Dot("2Y2eY2dfY2Y2", "Encode {0}", 'URL'),
                },
                {
                    id: 'decodeuri',
                    toolId: 'URLToDecode',
                    label: Dot("ddf2Y2Y2", "Decode {0}", 'URL'),
                },
                {
                    id: 'base32',
                    toolId: 'edc_base32',
                },
                {
                    id: 'base45',
                    toolId: 'edc_base45',
                },
                {
                    id: 'base58',
                    toolId: 'edc_base58',
                },
                {
                    id: 'base62',
                    toolId: 'edc_base62',
                },
                {
                    id: 'base85',
                    toolId: 'edc_base85',
                },

                {
                    id: 'ToHexdump',
                    toolId: 'ToHexdump',
                    label: Dot("z2FxMaOjF", "To Hexdump"),
                },

                {
                    id: 'FromHexdump',
                    toolId: 'FromHexdump',
                    label: Dot("eYg7ZNBH6", "From Hexdump"),
                },
            ]
        },
        {
            label: Dot("str.converters", "Converters"),
            longLabel: Dot("HxTXHD3lc", "Convert Data Between Different Formats"),
            seoTitle: Dot("converters.seo", "Online Data Converters - JSON to XML, JSON to CSV, JSON to YAML, XML to JSON, YAML to JSON"),
            seoKeywords: [
                "json to xml",
                "json to csv",
                "json to yaml",
                "xml to json",
                "yaml to json",
                "online converters",
                "free converters",
                "secure converters"
            ],
            seoDescription: Dot("seo.description.converters", "Use our free online converters to convert your data between different formats. Supports JSON to XML, JSON to CSV, JSON to YAML, XML to JSON, YAML to JSON."),
            id: 'converters',
            subTabs: [
                {
                    id: 'json2xml',
                    label: Dot("json2xml.t", "JSON to XML")
                },
                {
                    id: 'json2csv',
                    toolId: 'JSONToCSV',
                    label: Dot("jsondf2csv.31", "JSON to CSV")
                },
                {
                    id: 'json2yaml',
                    label: Dot("json2yaml.t", "JSON to YAML")
                },
                {
                    id: 'xml2json',
                    label: Dot("xml2json.t", "XML to JSON")
                },
                {
                    id: 'csv2json',
                    toolId: 'CSVToJSON',
                    label: Dot("json2csv.31", "CSV to JSON")
                },
                {
                    id: 'yaml2json',
                    label: Dot("yaml2json.t", "YAML to JSON")
                },
                {
                    id: 'snakecase',
                    toolId: 'SnakeCase',
                    label: Dot("convert.snakecase", "Snake Case Conversion")
                },
                {
                    id: 'camelcase',
                    toolId: 'CamelCase',
                    label: Dot("convert.camelcase", "Camel Case Conversion")
                },
                {
                    id: 'kebabcase',
                    toolId: 'KebabCase',
                    label: Dot("convert.kebabcase", "Kebab Case Conversion")
                },
                {
                    id: 'uplowcase',
                    toolId: 'LowerCase',
                    label: Dot("fw-66JBSB", "Upper/Lower Case")
                },
                {
                    id: 'messagepack',
                    toolId: 'MessagePack',
                    label: Dot("LQQt5fQ3Q", "MessagePack Converter")
                },
                {
                    id: "charcode",
                    toolId: 'CharCode',
                    label: Dot("LmmJOduQpV", "Charcode Converter")
                },
                {
                    // binary
                    id: 'binary',
                    toolId: 'Binary',
                    label: Dot("dqw3312", "Binary Converter")
                },
                {
                    // octal
                    id: 'octal',
                    toolId: 'Octal',
                    label: Dot("dmqwm312", "Octal Converter")
                },
                {
                    id: 'decimal',
                    toolId: 'Decimal',
                    label: Dot("uX0qFUazR", "Decimal Converter")
                }
            ]
        },
        {
            label: Dot("str.parsers", "Parsers"),
            longLabel: Dot("str.parsers.long", "Parse and Analyze Common Data Formats"),
            id: 'parsers',
            seoTitle: Dot("parsers.seo", "Online SQL Parser"),
            seoKeywords: [
                "sql parser",
                "online sql parser",
                "free sql parser",
                "secure sql parser"
            ],
            seoDescription: Dot("seo.description.parsers", "Use our free online SQL parser to parse your SQL queries and improve your database performance."),
            subTabs: [
                // {
                //     id: 'sqlparser',
                //     label: Dot("2Yq2eqY2Y2", "SQL Parser"),
                // },
                {
                    id: 'fromhexdump',
                    toolId: 'FromHexdump',
                    label: Dot("eYg7ZNBH6", "From Hexdump"),
                },
                {
                    id: 'tohexdump',
                    toolId: 'ToHexdump',
                    label: Dot("z2FxMaOjF", "To Hexdump"),
                }
            ]
        },
        {
            seoTitle: Dot("generators.seo", "Online Generators - UUID Generator, GUID Generator, Random Generator"),
            seoKeywords: [
                "uuid generator",
                "guid generator",
                "random generator",
                "online generators",
                "free generators",
                "secure generators"
            ],
            seoDescription: Dot("seo.description.generators", "Use our free online generators to generate UUIDs, GUIDs, and random values for your applications."),
            label: Dot("IEFy5k39X", "Generators"),
            longLabel: Dot("IEFy5k39X.long", "Generate Code, UUIDs, GUIDs, and Random Values"),
            id: 'generator',
            subTabs: [
                {
                    id: 'uuid',
                    label: Dot("qwwqee", "UUID Generator"),
                },
                {
                    id: 'guid',
                    label: Dot("qeeqw", "GUID Generator"),
                },
                {
                    id: 'random',
                    label: Dot("eqwwew", "Random Generator"),
                },
            ]
        },
    ]
    toolsPortalDefinitions.forEach(x => {
        x.subTabs = (x.subTabs || []).map(x => {
            if (!x.label && x.toolId) {
                let obj = appToolInfoObj[x.toolId]
                if (obj) {
                    x.label = obj.LabelFn(Dot)
                }
            }
            return x;
        })
        x.secondBreadcrumbLabel = secondBCLabel
    })
    return toolsPortalDefinitions;
})


export let getUserSubCategory = ((): PortalDefinitionType[] => {
    return [
        {
            id: 'opt',
            // secondBreadcrumbLabel: Dot("jSZmia6Zl", "Control Panel"),
            label: Dot("sign.in", "User Centre"),
            longLabel: Dot("sign.in.long", "User Centre"),
            seoTitle: Dot("sign.in.title", "Sign In to Your Account"),
            seoKeywords: [
                "sign in",
                "login",
                "account",
                "secure login",
                "secure sign in",
                "secure account"
            ],
            seoDescription: Dot("sign.in.description", "Sign in to your account to access your saved data and settings."),
            subTabs: [
                {
                    id: 'sign-in',
                    label: Dot("sign.in", "Sign In"),
                },
                {
                    id: 'sign-up',
                    label: Dot("sign.up", "Sign Up"),
                },
                {
                    id: 'reset-password',
                    label: Dot("forgot.password", "Forgot Password"),
                },
            ]
        }
    ]
})


export let getResourcesSubCategory = ((): PortalDefinitionType[] => {
    return [
        {
            id: 'code',
            label: Dot("code", "Code"),
            longLabel: Dot("code", "Code"),
            seoTitle: Dot("code", "Code"),
            seoKeywords: [
                "code",
                "code snippets",
                "code examples",
                "code samples",
                "code templates",
                "code resources",
                "code tools"
            ],
            seoDescription: Dot("code", "Code"),
            subTabs: [
                {
                    id: 'code-snippets',
                    label: Dot("code.snippets", "Code Snippets"),
                },
                {
                    id: 'code-examples',
                    label: Dot("code.examples", "Code Examples"),
                },
                {
                    id: 'code-samples',
                    label: Dot("code.samples", "Code Samples"),
                },
                {
                    id: 'code-templates',
                    label: Dot("code.templates", "Code Templates"),
                },
                {
                    id: 'code-resources',
                    label: Dot("code.resources", "Code Resources"),
                },
                {
                    id: 'code-tools',
                    label: Dot("code.tools", "Code Tools"),
                },
            ]
        }
    ]
})

export let getAISubCategory = ((): PortalDefinitionType[] => {
    return [
        {
            id: 'ai-lab',
            label: Dot("AI Lab", "AI Lab"),
            longLabel: Dot("AI Lab", "AI Lab"),
            seoTitle: Dot("AI Lab", "AI Lab"),
            seoKeywords: [
                "ai lab",
                "ai tools",
                "ai models",
                "ai experiments",
                "ai research",
                "ai development"
            ],
            seoDescription: Dot("AI Lab", "AI Lab"),
            subTabs: [
                {
                    id: 'ai-models',
                    label: Dot("AI Models", "AI Models"),
                },
                {
                    id: 'ai-tools',
                    label: Dot("AI Tools", "AI Tools"),
                },
                {
                    id: 'ai-experiments',
                    label: Dot("AI Experiments", "AI Experiments"),
                },
                {
                    id: 'ai-research',
                    label: Dot("AI Research", "AI Research"),
                },
                {
                    id: 'ai-development',
                    label: Dot("AI Development", "AI Development"),
                },
            ]
        }
    ]
})

export let getDocsSubCategory = ((): PortalDefinitionType[] => {
    return [
        // provide several examples for the docs
        {
            id: 'docs',
            label: Dot("Documentation", "Documentation"),
            longLabel: Dot("Documentation", "Documentation"),
            seoTitle: Dot("Documentation", "Documentation"),
            seoKeywords: [
                "documentation",
                "docs",
                "api",
                "guides",
                "tutorials",
                "reference",
                "manuals"
            ],
            seoDescription: Dot("Documentation", "Documentation"),
            subTabs: [
                {
                    id: 'api',
                    label: Dot("API", "API"),
                },
                {
                    id: 'guides',
                    label: Dot("Guides", "Guides"),
                },
                {
                    id: 'tutorials',
                    label: Dot("Tutorials", "Tutorials"),
                },
                {
                    id: 'reference',
                    label: Dot("Reference", "Reference"),
                },
                {
                    id: 'manuals',
                    label: Dot("Manuals", "Manuals"),
                },
            ]
        }
    ]
})