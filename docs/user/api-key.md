# 获取 API Key

创建并保存可用于 API 与第三方工具的 AIGoCode API Key。

## 什么是 API Key？

API Key 是你调用 AIGoCode API、配置 Claude Code、Codex、Gemini CLI、桌面客户端和 API 接入工具时使用的密钥。

## 创建步骤

1. 登录 [AIGoCode 控制台](https://www.aigocode.app/dashboard)
2. 打开 [API Key 页面](https://www.aigocode.app/dashboard/keys)
3. 创建新的 API Key
4. 复制生成的 Key，并保存到本地安全位置
5. 在工具或代码中使用这个 Key

## 使用建议

- ✅ 使用环境变量存储 API Key
- ✅ 定期轮换密钥
- ❌ 不要把 API Key 提交到 Git 仓库
- ❌ 不要把 API Key 放到前端公开代码里
- ❌ 发现 Key 泄露时，立即删除旧 Key 并创建新 Key

### 环境变量示例

```bash
# .env.local
AIGOCODE_API_KEY=your_api_key_here
```

## 第三方工具分组

:::warning 重要提示
如果你要在 **Claude Code、Codex、Gemini CLI、Cherry Studio、OpenCode、OpenClaw 或 Hermes** 里使用 AIGoCode，请在创建 Key 时选择 **支持第三方调用** 的分组。

否则可能会出现工具鉴权通过但模型请求失败的情况。
:::

## 下一步

创建好 API Key 后，继续阅读：
- [Base URL 配置](/user/base-url) - 了解服务地址
- [第一次请求](/user/quickstart) - 测试 API 连接
