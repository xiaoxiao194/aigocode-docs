# OpenAI Compatible

使用 OpenAI 兼容协议调用 GPT、图像等模型。

## Base URL

```
https://api.aigocode.app/v1
```

## 聊天请求

```bash
curl https://api.aigocode.app/v1/chat/completions \
  -H "Authorization: Bearer $AIGOCODE_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-5.4",
    "messages": [
      {
        "role": "user",
        "content": "用一句话介绍 AIGoCode"
      }
    ]
  }'
```

## 图像生成

```javascript
import { writeFile } from "node:fs/promises";

const response = await fetch("https://api.aigocode.app/v1/images/generations", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${process.env.AIGOCODE_API_KEY}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    model: "image-2",
    prompt: "一张未来感城市夜景海报，霓虹灯，电影级光影",
    size: "1024x1024",
    n: 1,
    response_format: "b64_json",
  }),
});

if (!response.ok) {
  throw new Error(await response.text());
}

const result = await response.json();
const imageBase64 = result.data?.[0]?.b64_json;

if (!imageBase64) {
  throw new Error("No image returned");
}

await writeFile("image-2.png", Buffer.from(imageBase64, "base64"));
```

## SDK 接入

使用官方 OpenAI SDK 时，把 `baseURL` 指向 AIGoCode 即可：

```javascript
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.AIGOCODE_API_KEY,
  baseURL: "https://api.aigocode.app/v1",
});

const response = await client.chat.completions.create({
  model: "gpt-5.4",
  messages: [{ role: "user", content: "Hello" }],
});
```
