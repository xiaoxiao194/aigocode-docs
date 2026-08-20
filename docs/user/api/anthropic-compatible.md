# Anthropic Compatible

使用 Anthropic 兼容协议调用 Claude 模型。

Anthropic Compatible 适合 Claude Code、Anthropic SDK 或 Claude 风格客户端。

## Base URL

```
https://api.aigocode.app/v1
```

部分工具会自己拼接路径。如果工具文档要求填写服务根地址，请填：

```
https://api.aigocode.app
```

## 基础请求

```bash
curl https://api.aigocode.app/v1/messages \
  -H "x-api-key: $AIGOCODE_API_KEY" \
  -H "anthropic-version: 2023-06-01" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "[REDACTED]",
    "max_tokens": 512,
    "messages": [
      {
        "role": "user",
        "content": "用一句话介绍 AIGoCode"
      }
    ]
  }'
```

## 开启思考模式

```bash
curl https://api.aigocode.app/v1/messages \
  -H "x-api-key: $AIGOCODE_API_KEY" \
  -H "anthropic-version: 2023-06-01" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "[REDACTED]",
    "max_tokens": 16000,
    "thinking": {
      "type": "adaptive"
    },
    "output_config": {
      "effort": "medium"
    },
    "messages": [
      {
        "role": "user",
        "content": "分析 AIGoCode 作为 API 中转平台的核心价值"
      }
    ]
  }'
```

## Claude Code 接入

如果你配置 Claude Code，请使用：

```bash
export ANTHROPIC_BASE_URL="https://api.aigocode.app"
export ANTHROPIC_AUTH_TOKEN="sk-your-api-key"
```

完整步骤见 [Claude Code 接入](/user/coding-tools/claude-code)。
