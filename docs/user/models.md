# 支持的模型

AIGoCode 支持多个主流 AI 模型，涵盖 Claude、GPT、Gemini 等系列。

:::tip 提示
不同套餐和分组可能影响实际可用模型，以控制台显示为准。
:::

## Claude 系列

| 模型 ID | 展示名称 | 适用场景 |
|---------|----------|----------|
| `[REDACTED]` | Claude Opus 4.8 | 复杂推理、长上下文 |
| `[REDACTED]` | Claude Opus 4.7 | 复杂推理、长上下文 |
| `[REDACTED]` | Claude Opus 4.6 | 复杂推理、长上下文 |
| `[REDACTED]` | Claude Sonnet 4.6 | 代码任务、日常对话 |
| `[REDACTED]` | Claude Haiku 4.5 | 快速响应、成本敏感 |

## GPT / OpenAI 系列

| 模型 ID | 展示名称 | 适用场景 |
|---------|----------|----------|
| `gpt-5.5` | GPT-5.5 | 复杂推理、长上下文 |
| `gpt-5.4` | GPT-5.4 | 代码任务、日常对话 |
| `gpt-5.4-mini` | GPT-5.4 Mini | 快速响应、成本敏感 |

## Gemini 系列

| 模型 ID | 展示名称 | 适用场景 |
|---------|----------|----------|
| `gemini-3.5-flash` | Gemini 3.5 Flash | 快速响应、多模态 |
| `gemini-3.1-pro-preview` | Gemini 3.1 Pro Preview | 复杂推理、预览版本 |
| `gemini-3-flash-preview` | Gemini 3 Flash Preview | 快速响应、预览版本 |

## 图像生成模型

| 模型 ID | 展示名称 | 适用场景 |
|---------|----------|----------|
| `image-2` | Image 2 | 图像生成 |

## 选择建议

- **代码任务**：优先 `gpt-5.4` 或 `[REDACTED]`
- **复杂推理/长上下文**：优先 Opus、GPT-5.5 或 Gemini Pro
- **成本敏感**：优先 Mini、Flash 或 Haiku 类模型

:::warning 注意
模型 ID 必须完整匹配，大小写敏感。如果模型不可用，请检查：
1. 账户余额是否充足
2. 当前套餐是否支持该模型
3. 是否在支持第三方调用的分组下
:::
