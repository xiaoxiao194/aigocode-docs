# 核心概念

在开始集成前，先了解几个关键概念，能让你更高效地使用 AIGoCode 企业端。

## 🔗 接口地址（Base URL）

接口地址是你的应用连接 AIGoCode 服务的入口。

**企业端接口地址：**
```
https://api.aigocode.team
```

**完整的 API 端点：**
```
https://api.aigocode.team/v1/chat/completions
```

:::tip 💡 提示
AIGoCode 企业端完全兼容 OpenAI API 格式，你可以无缝替换现有的 OpenAI 集成。
:::

## 🔑 API Key（密钥）

API Key 是你的应用身份凭证，用来验证请求并计费。

**如何获取：**
1. 登录 [AIGoCode 企业端](https://www.aigocode.team/)
2. 进入【管理中心】→【API 密钥】
3. 点击【创建密钥】
4. 设置名称和权限
5. 复制并保存（只显示一次）

**格式：** 通常是一串以 `sk-` 开头的字符串，例如：
```
sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

**企业特性：**
- 为不同项目创建独立密钥
- 设置每个密钥的使用限额
- 配置 IP 白名单
- 实时监控使用情况

:::warning ⚠️ 安全提示
- 永远不要在前端代码或公开仓库中暴露 API Key
- 使用环境变量或密钥管理服务存储
- 定期轮换密钥，降低泄露风险
- 如果泄露，立即在管理中心删除并重新创建
:::

## 🔐 鉴权方式

AIGoCode 使用标准的 Bearer Token 鉴权：

```bash
Authorization: Bearer YOUR_API_KEY
```

**完整示例：**
```bash
curl https://api.aigocode.team/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{
    "model": "gpt-4o",
    "messages": [{"role": "user", "content": "Hello"}]
  }'
```

## 🤖 模型（Model）

模型是实际处理请求的 AI。AIGoCode 企业端支持多个主流模型。

**常用模型：**

| 模型 | 适合场景 | 输入价格 | 输出价格 |
|------|----------|----------|----------|
| `gpt-4o` | 通用对话、分析、编程 | ¥0.015/1K tokens | ¥0.060/1K tokens |
| `gpt-4o-mini` | 轻量任务、批量处理 | ¥0.003/1K tokens | ¥0.012/1K tokens |
| `claude-3-5-sonnet` | 复杂推理、长文本 | ¥0.030/1K tokens | ¥0.120/1K tokens |
| `gemini-pro` | 平衡性能与成本 | ¥0.010/1K tokens | ¥0.040/1K tokens |

**选择建议：**
- **高质量要求**：`claude-3-5-sonnet`（最强推理能力）
- **平衡选择**：`gpt-4o`（综合性能好）
- **大规模调用**：`gpt-4o-mini`（成本低）

详细的模型列表和定价请查看 [支持的模型](/enterprise/models)。

## 📊 请求格式

AIGoCode 完全兼容 OpenAI API 格式：

```json
{
  "model": "gpt-4o",
  "messages": [
    {
      "role": "system",
      "content": "你是一个专业的助手"
    },
    {
      "role": "user",
      "content": "你好"
    }
  ],
  "temperature": 0.7,
  "max_tokens": 2000,
  "stream": false
}
```

**关键参数：**

- `model` - 模型名称（必填）
- `messages` - 对话历史（必填）
- `temperature` - 创造性（0-2，默认 1）
- `max_tokens` - 最大输出长度
- `stream` - 是否流式返回

详细的 API 参考请查看 [API 直接调用](/enterprise/api/direct)。

## 💰 计费方式

**按 Token 计费：**
- 输入和输出分别计费
- 不同模型价格不同
- 无月费，无最低消费

**Token 计算：**
- 1 个 Token ≈ 0.75 个英文单词
- 1 个 Token ≈ 1.5 个中文字符

**费用示例：**
```
模型：gpt-4o
输入：1000 tokens × ¥0.015/1K = ¥0.015
输出：500 tokens × ¥0.060/1K = ¥0.030
总计：¥0.045
```

**计费优化建议：**
1. 使用 `max_tokens` 限制输出长度
2. 只发送必要的对话历史
3. 批量任务考虑使用 `gpt-4o-mini`
4. 监控使用情况，设置预算告警

详细的计费规则请查看 [计费说明](/enterprise/pricing)。

## 🚦 频率限制

为保证服务质量，我们设置了以下限制：

- **默认限制**：100 请求/分钟
- **Token 限制**：100,000 tokens/分钟
- **并发限制**：10 个并发请求

**如何提升限额：**
1. 在【管理中心】申请提升
2. 提供业务场景说明
3. 通常 1-2 个工作日审核

**超限处理：**
- 返回 `429 Too Many Requests`
- 响应头包含 `Retry-After` 信息
- 建议实现指数退避重试

## ❓ 常见问题

### 企业端和用户端有什么区别？

**企业端**：
- 通过 API 集成到应用中
- 支持批量调用和高并发
- 提供详细的使用统计
- 支持对公转账和发票

**用户端**：
- 在 AI 客户端（Cherry Studio 等）中使用
- 适合个人使用
- 配置简单

### 如何测试连接？

使用 curl 快速测试：

```bash
curl https://api.aigocode.team/v1/chat/completions \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"model":"gpt-4o","messages":[{"role":"user","content":"你好"}]}'
```

### 支持流式输出吗？

支持。在请求中设置 `"stream": true`：

```json
{
  "model": "gpt-4o",
  "messages": [...],
  "stream": true
}
```

响应将以 Server-Sent Events (SSE) 格式返回。

### 如何处理错误？

常见错误码：

- `401` - API Key 无效或过期
- `429` - 请求频率超限
- `500` - 服务端错误（自动重试）

建议实现重试机制和错误日志。

---

**准备好了？** 选择你的集成方式开始：

- [API 直接调用](/enterprise/api/direct)
- [Python SDK](/enterprise/api/python-sdk)
- [Node.js SDK](/enterprise/api/nodejs-sdk)
