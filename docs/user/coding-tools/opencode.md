# OpenCode 接入

通过配置文件将 OpenCode 接入 AIGoCode。

OpenCode 适合通过配置文件一次性接入多个模型族。不同模型族的 API 后缀不同：

| 模型族 | Base URL |
|--------|----------|
| Claude / Anthropic | `https://api.aigocode.app/v1` |
| GPT / OpenAI | `https://api.aigocode.app/v1` |
| Gemini | `https://api.aigocode.app/v1beta` |

OpenCode 常用配置路径：
- 模型配置：`~/.config/opencode/opencode.jsonc`
- 认证配置：`~/.local/share/opencode/auth.json`

你可以把 API Key 写在 `opencode.jsonc` 的 `options.apiKey` 中，这样 `auth.json` 保持空对象即可。

## 配置示例

把下面内容写入 `~/.config/opencode/opencode.jsonc`，把 `sk-your-api-key` 换成你的真实 Key：

```jsonc
{
  "$schema": "https://opencode.ai/config.json",
  "provider": {
    "anthropic": {
      "options": {
        "baseURL": "https://api.aigocode.app/v1",
        "apiKey": "sk-your-api-key"
      },
      "npm": "@ai-sdk/anthropic"
    },
    "openai": {
      "options": {
        "baseURL": "https://api.aigocode.app/v1",
        "apiKey": "sk-your-api-key"
      },
      "models": {
        "gpt-5.4": {
          "name": "GPT-5.4",
          "limit": {
            "context": 400000,
            "output": 128000
          },
          "options": {
            "store": false
          },
          "variants": {
            "low": {},
            "medium": {},
            "high": {},
            "xhigh": {}
          }
        }
      }
    },
    "gemini": {
      "options": {
        "baseURL": "https://api.aigocode.app/v1beta",
        "apiKey": "sk-your-api-key"
      },
      "npm": "@ai-sdk/google",
      "models": {
        "gemini-3.5-flash": {
          "name": "Gemini 3.5 Flash",
          "limit": {
            "context": 1048576,
            "output": 65536
          },
          "modalities": {
            "input": ["text", "image", "pdf"],
            "output": ["text"]
          }
        }
      }
    }
  }
}
```

`~/.local/share/opencode/auth.json` 保持空对象即可：

```json
{}
```

## 注意事项

- Claude 和 GPT 使用 `/v1`，Gemini 使用 `/v1beta`。
- 模型 ID 必须和模型名称列表完全一致。
- JSON / JSONC 语法错误会导致 OpenCode 读取失败。

配置完成后，重新打开 OpenCode，确认模型列表里能看到刚刚添加的模型，发送测试消息验证接入。
