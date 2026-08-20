# 第一次请求

使用 OpenAI Compatible 接口完成一次聊天请求。

下面用 OpenAI Compatible 的 `chat/completions` 接口完成一次最小请求。先把环境变量里的 `AIGOCODE_API_KEY` 换成你的真实密钥。

```bash
export AIGOCODE_API_KEY="sk-your-api-key"

curl https://api.aigocode.app/v1/chat/completions \
  -H "Authorization: Bearer $AIGOCODE_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-5.4",
    "messages": [
      {
        "role": "user",
        "content": "Hello from AIGoCode"
      }
    ]
  }'
```

成功后会返回 OpenAI Compatible 格式的响应，其中 `choices[0].message.content` 是模型回复内容：

```json
{
  "id": "chatcmpl_xxx",
  "object": "chat.completion",
  "model": "gpt-5.4",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "Hello! AIGoCode is ready."
      },
      "finish_reason": "stop"
    }
  ]
}
```

- 如果返回 401，检查[认证方式](/user/getting-started/authentication)。
- 如果返回 403 或余额相关错误，查看[账户与额度](/user/account/limits-and-credits)。
- 如果你想直接配置工具，查看 [Claude Code](/user/coding-tools/claude-code)、[Codex](/user/coding-tools/codex)、[Gemini CLI](/user/coding-tools/gemini-cli) 或其他客户端配置。
