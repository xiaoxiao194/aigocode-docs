# Cherry Studio 配置指南

在 Cherry Studio 中通过自定义服务商接入 AIGoCode，支持 Claude、GPT 和 Gemini 模型。

## 准备工作

1. 安装最新版本的 [Cherry Studio](https://cherry-ai.com/)
2. 登录 [AIGoCode 控制台](https://www.aigocode.app/dashboard)
3. 在 [API Key 页面](https://www.aigocode.app/dashboard/keys) 创建支持第三方调用的 API Key

:::warning 重要提示
创建 API Key 时,务必选择 **支持第三方调用** 的分组,否则配置后无法正常使用。
:::

## 配置规则

- 使用 **自定义服务商**
- API 地址统一填写: `https://api.aigocode.app`
- Claude 模型用 **Anthropic** 类型
- GPT 模型用 **OpenAI** 类型
- Gemini 模型用 **Gemini** 类型

建议按模型族分别创建服务商,方便后续管理和排查问题。

## Claude 服务商配置

| 字段 | 填写内容 |
|------|----------|
| 服务商名称 | `AIGoCode Claude` |
| 服务商类型 | `Anthropic` |
| API Key | 你的 AIGoCode API Key |
| API 地址 | `https://api.aigocode.app` |
| 模型 | `[REDACTED]` 或 `[REDACTED]` |

### 配置步骤

1. 打开 Cherry Studio,点击左下角 **设置** 图标 ⚙️
2. 进入 **模型服务** 页面
3. 点击右上角 **「+ 添加」** 按钮
4. 选择 **「Anthropic」** 类型
5. 按照上表填写配置信息
6. 点击 **「测试连接」** 验证配置
7. 保存配置

## GPT 服务商配置

| 字段 | 填写内容 |
|------|----------|
| 服务商名称 | `AIGoCode GPT` |
| 服务商类型 | `OpenAI` |
| API Key | 你的 AIGoCode API Key |
| API 地址 | `https://api.aigocode.app` |
| 模型 | `gpt-5.4` 或 `gpt-5.4-mini` |

### 配置步骤

1. 点击 **「+ 添加」** 按钮
2. 选择 **「OpenAI」** 类型
3. 按照上表填写配置信息
4. 点击 **「测试连接」** 验证配置
5. 保存配置

## Gemini 服务商配置

| 字段 | 填写内容 |
|------|----------|
| 服务商名称 | `AIGoCode Gemini` |
| 服务商类型 | `Gemini` |
| API Key | 你的 AIGoCode API Key |
| API 地址 | `https://api.aigocode.app` |
| 模型 | `gemini-3.5-flash` 或 `gemini-3.1-pro-preview` |

### 配置步骤

1. 点击 **「+ 添加」** 按钮
2. 选择 **「Gemini」** 类型
3. 按照上表填写配置信息
4. 点击 **「测试连接」** 验证配置
5. 保存配置

## 开始使用

配置完成后:

1. 回到聊天窗口
2. 点击顶部的 **模型选择器**
3. 在下拉列表中找到刚刚添加的模型
4. 选择模型后发送测试消息

:::tip 提示
常用模型可以右键置顶,后续切换会更方便。
:::

## 常见问题

### 连接失败怎么办?

1. 检查服务商开关是否开启
2. 确认 API Key 是否选了 **支持第三方调用** 的分组
3. 确认账户余额是否充足
4. 检查 API 地址是否正确填写为 `https://api.aigocode.app`

### 模型不可用怎么办?

1. 确认当前套餐是否支持该模型
2. 查看控制台是否有额度限制
3. 尝试切换其他模型测试

---

更多客户端配置教程:
- [ChatBox](/user/clients/chatbox)
- [Cursor](/user/clients/cursor)
- [沉浸式翻译](/user/clients/immersive-translate)
