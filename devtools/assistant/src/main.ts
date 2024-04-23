import { logger } from "./utils/logger.js";
import AIUtils from "./utils/ai-utils";

async function main() {
  let r = await AIUtils.say([
    {
      role: "user",
      content: `将代码转换为TS代码，要求如下：
      
1. 要求给该Operation类添加一个方法，具体实现参照【示例1】自动推导
2. 用英文概述本代码的功能和用途，并且填写到顶部注释"// Description:" 那一行里
3. 在本代码里找出所有显示给用户的自然文本(不包含http链接之类的，自然文本指的是显示给用户的文本)，用Dot函数包裹起来，具体参照【示例2】
4. 参考【示例4】将import的路径进行调整

【示例1】
  public getOptDetail(): OptDetail {
    return {
      relatedID: 'md5',
      config: {
        "module": "Crypto",
        "description": "MD5 (Message-Digest 5) is a widely used hash function. It has been used in a variety of security applications and is also commonly used to check the integrity of files.<br><br>However, MD5 is not collision resistant and it isn't suitable for applications like SSL/TLS certificates or digital signatures that rely on this property.",
        "infoURL": "https://wikipedia.org/wiki/MD5",
        "inputType": "ArrayBuffer",
        "outputType": "string",
        "flowControl": false,
        "manualBake": false,
        "args": []
      },
      infoURL: 'https://en.wikipedia.org/wiki/MD5',
      nousenouseID: 'md5',
      optName: Dot("md5.textiDjMIo", "Generate {0} Hash", "MD5"),
      optDescription: Dot(
        "md5.desc.rxsHq",
        "This operation hashes data into an {0} hash.",
        "MD5"
      ),
      exampleInput: TEXT_INPUT_EXAMPLE_HELLO_WORLD,
      exampleOutput: "ed076287532e86365e841e92bfc50d8c"
    }
  }

【示例2】
将
{
  a: "this is a text 3"
}
转换为
{
  a: Dot("teid3", "this is a text")
}
注意这个Dot函数的第一个参数是key，第二个参数是value，key是用来标识这个文本的，value是实际的文本内容


【示例4】
import { Dot } from "../../../../utils/cTranslationUtils.tsx";
import Operation, { OptDetail } from "../../../core/Operation.tsx";
import Utils from "../../../core/Utils.mjs";
import { bitOp, and, BITWISE_OP_DELIMS } from "../../../core/lib/BitwiseOp.mjs";



具体代码：

// Date: Sun, 14 Jan 2024
// Second Author: Ryan Laf
// Description:
// License: AGPLv3
// Copyright (C) 2024 - Present, https://laftools.dev and https://codegen.cc

/**
 * @author n1474335 [n1474335@gmail.com]
 * @copyright Crown Copyright 2016
 * @license Apache-2.0
 */

import Operation from "../Operation.tsx";
import Utils from "../Utils.mjs";
import { bitOp, and, BITWISE_OP_DELIMS } from "../lib/BitwiseOp.mjs";

/**
 * AND operation
 */
class AND extends Operation {
  /**
   * AND constructor
   */
  constructor() {
    super();

    this.name = "AND";
    this.module = "Default";
    this.description =
      "AND the input with the given key.<br>e.g. <code>fe023da5</code>";
    this.infoURL = "https://wikipedia.org/wiki/Bitwise_operation#AND";
    this.inputType = "byteArray";
    this.outputType = "byteArray";
    this.args = [
      {
        name: "Key",
        type: "toggleString",
        value: "",
        toggleValues: BITWISE_OP_DELIMS,
      },
    ];
  }

  /**
   * @param {byteArray} input
   * @param {Object[]} args
   * @returns {byteArray}
   */
  run(input, args) {
    const key = Utils.convertToByteArray(args[0].string || "", args[0].option);

    return bitOp(input, key, and);
  }

  /**
   * Highlight AND
   *
   * @param {Object[]} pos
   * @param {number} pos[].start
   * @param {number} pos[].end
   * @param {Object[]} args
   * @returns {Object[]} pos
   */
  highlight(pos, args) {
    return pos;
  }

  /**
   * Highlight AND in reverse
   *
   * @param {Object[]} pos
   * @param {number} pos[].start
   * @param {number} pos[].end
   * @param {Object[]} args
   * @returns {Object[]} pos
   */
  highlightReverse(pos, args) {
    return pos;
  }
}

export default AND;
    
    `,
    },
  ]);
  if (r) {
    logger.info("AI replied: " + r.output.text);
  }
}

main();
