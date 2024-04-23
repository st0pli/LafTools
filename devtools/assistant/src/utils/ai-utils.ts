import { logger } from "./logger";
import axios from "axios";

export type AIResponse = {
  output: {
    finish_reason: string;
    text: string;
  };
  usage: {
    total_tokens: number;
    output_tokens: number;
    input_tokens: number;
  };
  request_id: string;
};
let AIUtils = {
  say: async function (
    input: {
      role: "system" | "user" | "assistant";
      content: string;
    }[],
  ): Promise<AIResponse | null> {
    let token = process.env.TYKEY;
    let option = "qwen-max-longcontext";
    if (!token) {
      logger.error("AIUtils.say: token not found");
      return null;
    }

    logger.info("AIUtils.say: input: " + input);

    // 发起请求
    let resp = await axios({
      method: "POST",
      url: "https://dashscope.aliyuncs.com/api/v1/services/aigc/text-generation/generation",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      data: JSON.stringify({
        model: option,
        input: {
          messages: input,
          // [
          //   // { role: "system", content: chatMgs.getSystemMsg() },
          //   // { role: "user", content: chatMgs.getUserMsg("hello") },
          //   // { role: "assistant", content: "你好" },
          //   // { role: "user", content: origin },
          //   { role: "user", content: input },
          // ],
        },
        parameters: {},
      }),
    });
    let rdata = resp.data;
    let responseText = rdata;
    logger.info("rdata: " + JSON.stringify(rdata));
    logger.info("response text:" + responseText);
    return responseText as AIResponse;
  },
};

logger.info("AI Utils loaded successfully");

export default AIUtils;
