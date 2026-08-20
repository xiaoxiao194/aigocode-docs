# Base URL

AIGoCode 各兼容协议和常见客户端的服务地址。

AIGoCode 的统一服务根地址是：

```
https://api.aigocode.app
```

不同接入方式对 Base URL 的填写方式略有不同：

| 协议 | Base URL |
|------|----------|
| OpenAI Compatible | `https://api.aigocode.app/v1` |
| Anthropic Compatible | `https://api.aigocode.app/v1` |
| Gemini Compatible | `https://api.aigocode.app/v1beta` |

很多 CLI 或桌面客户端会自己拼接 `/v1`、`/v1beta` 或具体 endpoint。遇到这类工具时，通常只填根地址：

```
https://api.aigocode.app
```

例如 Claude Code、Codex、Gemini CLI、Cherry Studio、OpenCode、OpenClaw、Hermes 的教程里都会明确写该填根地址还是协议地址。

## 常见问题

| 现象 | 常见原因 |
|------|----------|
| 404 Not Found | Base URL 多填或少填了 `/v1`、`/v1beta` |
| 401 Unauthorized | API Key 错误或请求头没有带 Bearer |
| Gemini 请求失败 | Gemini 兼容协议通常需要 `/v1beta` |

下一步阅读[第一次请求](/user/getting-started/quickstart)。
