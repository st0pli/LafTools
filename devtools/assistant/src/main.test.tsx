import { expect, test } from 'vitest'
import { DataTypes, Model } from 'sequelize'
import { logger } from "./utils/logger.js";
import AIUtils from "./utils/ai-utils";
import path from 'path';
import shelljs from 'shelljs';
import fs from 'fs'
let postProcessFolder = path.join(__dirname, 'post-process');
shelljs.mkdir('-p', postProcessFolder);

test('run-conversions-ai-fetch-case', async () => {
    let currentFolder = path.join(postProcessFolder, "op-run-mjs-to-ts")
    shelljs.mkdir('-p', currentFolder)
    let sourceMJSFolder = path.join(
        process.env.LAFTOOLS_ROOT as string,
        ...'modules/web2/app/[lang]/client/src/impl/core/operations'.split("/")
    );
    logger.info("sourceMJSFolder: " + sourceMJSFolder)
    let allMJSFiles = shelljs.ls(sourceMJSFolder);
    for (let file of allMJSFiles) {
        let targetFile = path.join(currentFolder, "response__" + file)
        // if targetFile exist and non-empty, then continue
        if (fs.existsSync(targetFile) && fs.statSync(targetFile).size > 0) {
            logger.info("file exists: " + targetFile)
            continue;
        }
        let content = shelljs.cat(file);
        let fileContent = content.toString();
        logger.info("file: " + file)

        let requireText = `将代码转换为TS代码，要求如下：
      
1. 要求给该Operation类添加一个方法，具体实现参照【示例1】自动推导，不能照抄，要按照当前Operation自动替换，并提供exampleInput和exampleOutput（假如你的exampleOutput无法提供具体值，请用<>把它包起来
2. 用英文概述本代码的功能和用途，并且填写到顶部注释"// Description:" 那一行里
3. 在本代码里找出所有显示给用户的自然文本(
    不包含http链接之类，也不包括exampleInput、exampleOutput、inputType、outputType、module、type字段，自然文本指的是显示给用户的文本

)，用Dot函数包裹起来，具体参照【示例2】
4. 源代码的所有import语句，不能有变动或者省略，输出之前记得再三检查


【示例1】
  public getOptDetail(): OptDetail {
    return {
      relatedID: 'nothing', // keep it, don't change
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
      exampleInput: "", // Fill it if possible
      exampleOutput: "", // Fill it if possible
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



【具体代码】
${fileContent}
`;
        try {
            let r = await AIUtils.askZhipu([
                {
                    role: "user",
                    content: requireText,
                },
            ]);
            if (r && r.result) {
                logger.info("AI " + file + " replied: " + r.result);
                fs.writeFileSync(targetFile, JSON.stringify(r, null, 2));
            } else {
                throw new Error("AI " + file + " replied null")
            }
            await new Promise((resolve) => setTimeout(resolve, 1000));
        } catch (e) {
            logger.error(e);
        }
    }
    return;
}, {
    timeout: -1
})
