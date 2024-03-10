// LafTools - The Leading All-In-One ToolBox for Programmers.
// 
// Date: Wed, 17 Jan 2024
// Author: LafTools Team - FX <work7z@outlook.com>
// Description: 
// Copyright (C) 2024 - Present, https://laftools.dev and https://codegen.cc
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

import { Dot } from "@/app/[lang]/client/src/utils/cTranslationUtils";
import { FileValueMatcher } from "../purejs-types";
export default (): FileValueMatcher[] => {

  let langList = [
    { Label: Dot("l3akoa", "Amharic"), Value: "am" },
    { Label: Dot("z79b1a", "Arabic"), Value: "ar" },
    { Label: Dot("t84q1z", "Armenian"), Value: "hy" },
    { Label: Dot("svqh06", "Azerbaijani"), Value: "az" },
    { Label: Dot("ssm80i", "Basque"), Value: "eu" },
    { Label: Dot("eu5mh0", "Belarusian"), Value: "be" },
    { Label: Dot("1507oa", "Bengali"), Value: "bn" },
    { Label: Dot("cjzqj9", "Bosnian"), Value: "bs" },
    { Label: Dot("ryhkqb", "Bulgarian"), Value: "bg" },
    { Label: Dot("eifoni", "Catalan"), Value: "ca" },
    { Label: Dot("zzcepr", "Cebuano"), Value: "ceb" },
    { Label: Dot("nrix6l", "Chichewa"), Value: "ny" },
    { Label: Dot("yc7dqiu", "Simplified Chinese"), Value: "zh-cn" },
    { Label: Dot("bhojei1", "Traditional Chinese"), Value: "zh-tw" },
    { Label: Dot("w6otqn", "Corsican"), Value: "co" },
    { Label: Dot("tn7duf", "Croatian"), Value: "hr" },
    { Label: Dot("k2ku5p", "Czech"), Value: "cs" },
    { Label: Dot("os8h6u", "Danish"), Value: "da" },
    { Label: Dot("kv4wag", "Dutch"), Value: "nl" },
    { Label: Dot("zpyd34", "English"), Value: "en" },
    { Label: Dot("htt1d2", "Esperanto"), Value: "eo" },
    { Label: Dot("euhy9v", "Estonian"), Value: "et" },
    { Label: Dot("b6sx9b", "Filipino"), Value: "tl" },
    { Label: Dot("vr93oi", "Finnish"), Value: "fi" },
    { Label: Dot("lkuulh", "French"), Value: "fr" },
    { Label: Dot("i27qmr", "Frisian"), Value: "fy" },
    { Label: Dot("7k56u3", "Galician"), Value: "gl" },
    { Label: Dot("441oja", "Georgian"), Value: "ka" },
    { Label: Dot("mnb19i", "German"), Value: "de" },
    { Label: Dot("mslw4o", "Greek"), Value: "el" },
    { Label: Dot("30eo2v", "Gujarati"), Value: "gu" },
    { Label: Dot("ppmz8e", "Haitian Creole"), Value: "ht" },
    { Label: Dot("1e3e5n", "Hausa"), Value: "ha" },
    { Label: Dot("97um9v", "Hawaiian"), Value: "haw" },
    { Label: Dot("s0vrf9", "Hebrew"), Value: "iw" },
    { Label: Dot("z0j2nf", "Hindi"), Value: "hi" },
    { Label: Dot("5v8jl7", "Hmong"), Value: "hmn" },
    { Label: Dot("4tqb4x", "Hungarian"), Value: "hu" },
    { Label: Dot("6j13s3", "Icelandic"), Value: "is" },
    { Label: Dot("2e4fb7", "Igbo"), Value: "ig" },
    { Label: Dot("it8ths", "Indonesian"), Value: "id" },
    { Label: Dot("ocxsw3", "Irish"), Value: "ga" },
    { Label: Dot("d5fmq2", "Italian"), Value: "it" },
    { Label: Dot("ulah0q", "Japanese"), Value: "ja" },
    { Label: Dot("tyhgpr", "Javanese"), Value: "jw" },
    { Label: Dot("01do0y", "Kannada"), Value: "kn" },
    { Label: Dot("dtjdt4", "Kazakh"), Value: "kk" },
    { Label: Dot("zkv375", "Khmer"), Value: "km" },
    { Label: Dot("jlxvpk", "Korean"), Value: "ko" },
    { Label: Dot("x5alzu", "Kurdish (Kurmanji)"), Value: "ku" },
    { Label: Dot("e5rycw", "Kyrgyz"), Value: "ky" },
    { Label: Dot("oqjbcj", "Lao"), Value: "lo" },
    { Label: Dot("20nmcv", "Latin"), Value: "la" },
    { Label: Dot("9gqo8x", "Latvian"), Value: "lv" },
    { Label: Dot("46bksi", "Lithuanian"), Value: "lt" },
    { Label: Dot("o8xyzu", "Luxembourgish"), Value: "lb" },
    { Label: Dot("hcnt1k", "Macedonian"), Value: "mk" },
    { Label: Dot("5rg5mt", "Malagasy"), Value: "mg" },
    { Label: Dot("ya0cwu", "Malay"), Value: "ms" },
    { Label: Dot("cmxzpg", "Malayalam"), Value: "ml" },
    { Label: Dot("wgkk6y", "Maltese"), Value: "mt" },
    { Label: Dot("f3ttw8", "Maori"), Value: "mi" },
    { Label: Dot("z2jzej", "Marathi"), Value: "mr" },
    { Label: Dot("myxedr", "Mongolian"), Value: "mn" },
    { Label: Dot("cxqhqa", "Myanmar (Burmese)"), Value: "my" },
    { Label: Dot("6ulj8i", "Nepali"), Value: "ne" },
    { Label: Dot("7g5w22", "Norwegian"), Value: "no" },
    { Label: Dot("2khdsv", "Pashto"), Value: "ps" },
    { Label: Dot("a3yqoz", "Persian"), Value: "fa" },
    { Label: Dot("q29t31", "Polish"), Value: "pl" },
    { Label: Dot("9qy1xn", "Portuguese"), Value: "pt" },
    { Label: Dot("w9qudj", "Punjabi"), Value: "pa" },
    { Label: Dot("fdxluz", "Romanian"), Value: "ro" },
    { Label: Dot("346qid", "Russian"), Value: "ru" },
    { Label: Dot("lpzg83", "Samoan"), Value: "sm" },
    { Label: Dot("3ii2tt", "Scots Gaelic"), Value: "gd" },
    { Label: Dot("yqrxl4", "Serbian"), Value: "sr" },
    { Label: Dot("9m85mf", "Sesotho"), Value: "st" },
    { Label: Dot("27j7sy", "Shona"), Value: "sn" },
    { Label: Dot("sc49my", "Sindhi"), Value: "sd" },
    { Label: Dot("1th2nw", "Sinhala"), Value: "si" },
    { Label: Dot("7u4vzu", "Slovak"), Value: "sk" },
    { Label: Dot("k4s5rx", "Slovenian"), Value: "sl" },
    { Label: Dot("t8c6xc", "Somali"), Value: "so" },
    { Label: Dot("vo1prl", "Spanish"), Value: "es" },
    { Label: Dot("c5meku", "Sundanese"), Value: "su" },
    { Label: Dot("bqqrij", "Swahili"), Value: "sw" },
    { Label: Dot("hyirc0", "Swedish"), Value: "sv" },
    { Label: Dot("piih4x", "Tajik"), Value: "tg" },
    { Label: Dot("9e4fcl", "Tamil"), Value: "ta" },
    { Label: Dot("fgj880", "Telugu"), Value: "te" },
    { Label: Dot("v7q3db", "Thai"), Value: "th" },
    { Label: Dot("bors14", "Turkish"), Value: "tr" },
    { Label: Dot("pmnp4b", "Ukrainian"), Value: "uk" },
    { Label: Dot("qzshys", "Urdu"), Value: "ur" },
    { Label: Dot("0pfdz7", "Uzbek"), Value: "uz" },
    { Label: Dot("56ibcj", "Vietnamese"), Value: "vi" },
    { Label: Dot("q9iuti", "Welsh"), Value: "cy" },
    { Label: Dot("t6wczq", "Xhosa"), Value: "xh" },
    { Label: Dot("kqv5ht", "Yiddish"), Value: "yi" },
    { Label: Dot("nmb1wx", "Yoruba"), Value: "yo" },
    { Label: Dot("mwn7iv", "Zulu"), Value: "zu" },
  ];

  let value: FileValueMatcher[] = [
    {
      Name: "translation-lang.json",
      Value: langList,
    },
  ];
  return value;

}