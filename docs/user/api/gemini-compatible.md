# Gemini Compatible

使用 Gemini 兼容协议调用 Gemini 模型。

Gemini Compatible 适合 Gemini CLI、Google 风格 SDK 或使用 Gemini endpoint 的客户端。

## Base URL

```
https://api.aigocode.app/v1beta
```

部分 CLI 工具会自动拼接 `/v1beta`，这类工具通常填写服务根地址：

```
https://api.aigocode.app
```

## 基础请求

```bash
curl "https://api.aigocode.app/v1beta/models/gemini-3.5-flash:generateContent?key=$AIGOCODE_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "contents": [
      {
        "parts": [
          {
            "text": "用一句话介绍 AIGoCode"
          }
        ]
      }
    ]
  }'
```

## 开启思考模式

```bash
curl "https://api.aigocode.app/v1beta/models/gemini-3.5-flash:generateContent?key=$AIGOCODE_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "contents": [
      {
        "role": "user",
        "parts": [
          {
            "text": "分析 AIGoCode 作为 API 中转平台的核心价值"
          }
        ]
      }
    ],
    "generationConfig": {
      "thinkingConfig": {
        "includeThoughts": true,
        "thinkingBudget": -1
      }
    }
  }'
```

开启 `includeThoughts` 后，Gemini 会在响应 `candidates[].content.parts[]` 中返回思考摘要；其中 `thought: true` 的 part 表示思考内容，正文仍然是不带 `thought` 的普通 text part。若响应包含 `thoughtSignature`，多轮对话续传历史消息时应原样带回。

完整步骤见 [Gemini CLI 接入](/user/coding-tools/gemini-cli)。
