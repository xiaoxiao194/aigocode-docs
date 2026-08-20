# 常见问题

AIGoCode 常见问题汇总。

## Claude Code 连接失败

优先检查：

- `ANTHROPIC_BASE_URL` 是否为 `https://api.aigocode.app`
- `ANTHROPIC_AUTH_TOKEN` 是否为完整 API Key
- 创建 Key 时是否选择了支持第三方调用的分组
- 当前套餐是否还有额度

完整步骤见 [Claude Code 接入](/user/coding-tools/claude-code)。

## Codex 连接失败

检查 `~/.codex/auth.json` 是否包含：

```json
{
  "OPENAI_API_KEY": "sk-your-api-key"
}
```

再检查 `~/.codex/config.toml` 里的 `base_url` 是否为 `https://api.aigocode.app`。

## Gemini 请求失败

Gemini 兼容协议使用 `/v1beta`。如果是 Gemini CLI，通常填写根地址 `https://api.aigocode.app`；如果是直接 HTTP 请求，使用 `https://api.aigocode.app/v1beta`。

## 为什么消耗比预期多？

长上下文、大输出、缓存写入、多工具并发、客户端自动重试都可能增加消耗。建议在控制台查看用量记录，并减少不必要的上下文。

## 模型回复质量问题

这类问题通常和上游模型、工具客户端或上下文格式有关。先切换模型或重新开启会话；如果持续出现，请保留工具名称、模型 ID、报错文本和发生时间联系支持。

## 如何联系支持

通过主站[售后支持](https://aigocode.app/contact-support)提交问题。为了更快定位，请附上工具名称、模型 ID、错误码、发生时间和是否已消耗额度。
