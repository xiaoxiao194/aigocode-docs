# 核心概念

在开始配置前，先了解几个关键概念，能让你更顺利地使用 AIGoCode。

## 🔗 接口地址（Base URL）

接口地址是你的客户端连接 AIGoCode 服务的入口。

**用户端接口地址：**
```
https://api.aigocode.app
```

:::tip 💡 提示
大部分工具要求填写完整的 API 地址，通常是：
```
https://api.aigocode.app/v1
```
或者
```
https://api.aigocode.app/v1/chat/completions
```
具体格式请参考对应工具的配置指南。
:::

## 🔑 API Key（密钥）

API Key 是你的身份凭证，用来验证你的请求。

**如何获取：**
1. 登录 [AIGoCode 用户端](https://www.aigocode.app/)
2. 进入【个人中心】→【API 密钥】
3. 点击【创建密钥】
4. 复制并保存（只显示一次）

**格式：** 通常是一串以 `sk-` 开头的字符串，例如：
```
sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

:::warning ⚠️ 安全提示
- API Key 相当于你的密码，不要分享给别人
- 如果泄露，立即在个人中心删除并重新创建
- 每个密钥可以设置名称，方便管理多个设备
:::

## 🤖 模型（Model）

模型是实际处理你请求的 AI。AIGoCode 支持多个主流模型，你可以根据需求选择。

**常用模型：**

| 模型 | 适合场景 | 速度 | 价格 |
|------|----------|------|------|
| `gpt-4o` | 日常对话、写作、编程 | ⚡️⚡️⚡️ | 💰💰 |
| `gpt-4o-mini` | 轻量任务、快速回复 | ⚡️⚡️⚡️⚡️ | 💰 |
| `claude-3-5-sonnet` | 复杂推理、长文本分析 | ⚡️⚡️ | 💰💰💰 |
| `gemini-pro` | 平衡性能与成本 | ⚡️⚡️⚡️ | 💰💰 |

**怎么选？**
- **新手推荐**：`gpt-4o`（综合性能好，价格适中）
- **省钱首选**：`gpt-4o-mini`（日常够用，便宜）
- **专业用途**：`claude-3-5-sonnet`（处理复杂问题更强）

详细的模型列表和定价请查看 [支持的模型](/user/models)。

## 💰 计费方式

AIGoCode 采用**按实际使用付费**的方式：

- **无月费**：不用每月固定付费
- **按 Token 计费**：只为实际的 API 调用计费
- **充值灵活**：随用随充，无最低消费

**Token 是什么？**  
简单理解：1 个 Token ≈ 0.75 个英文单词 ≈ 1.5 个中文字符。

例如："你好世界" ≈ 6 个 Token

**费用示例：**
- 一次普通对话（200 Token）：约 ¥0.002
- 写一篇 500 字文章：约 ¥0.01
- 一天正常使用（100 次对话）：约 ¥0.2

详细的计费规则请查看 [计费说明](/user/pricing)。

## ❓ 常见问题

### 接口地址填哪个？
大部分工具填 `https://api.aigocode.app/v1`，具体请看对应工具的配置指南。

### API Key 在哪里填？
每个工具的位置不同，通常在【设置】→【API 配置】里。详见各工具的配置指南。

### 为什么提示 401 错误？
API Key 填错了，重新复制粘贴，注意不要有多余的空格。

### 模型名写错了会怎样？
会报"模型不存在"的错误。确保拼写正确，参考[支持的模型](/user/models)。

---

**准备好了？** 选择你的工具开始配置：

- [Cherry Studio](/user/clients/cherry-studio)
- [ChatBox](/user/clients/chatbox)
- [Cursor](/user/clients/cursor)
- [沉浸式翻译](/user/clients/immersive-translate)
- [OpenClaw](/user/clients/openclaw)
