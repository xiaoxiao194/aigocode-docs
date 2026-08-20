# OpenClaw 接入

从零部署 OpenClaw，并通过 AIGoCode Provider 接入 Claude、GPT 模型。

OpenClaw 是开源 Agent / Gateway 工具，适合把 Telegram、飞书、本地工具和多模型 provider 统一到一个入口。AIGoCode 可以作为 OpenClaw 的自定义模型提供商使用。

这篇文档分两部分：
- **快速接入**：已经装好 OpenClaw，只需要接 AIGoCode 模型。
- **从零部署**：在 Ubuntu / Debian 服务器上部署 Telegram Bot，并完成配对。

## 前置条件

- 一台 Ubuntu / Debian 服务器，推荐 Ubuntu 22.04+。
- Node.js 22+，OpenClaw 官方建议 Node.js 24。
- 一个 AIGoCode 账号，并已创建 API Key。
- 一个 Telegram 账号。

## 从零部署

### 1. 安装依赖

```bash
sudo apt update && sudo apt install -y git

curl -fsSL https://deb.nodesource.com/setup_22.x | sudo bash -
sudo apt-get install -y nodejs
```

### 2. 创建 Telegram Bot

在 Telegram 里搜索 `@BotFather`，按下面流程创建机器人：

1. 发送 `/newbot`
2. 输入机器人昵称
3. 输入唯一用户名（必须以 `bot` 结尾）
4. 复制 BotFather 返回的 Bot Token

::: warning
Bot Token 等同于机器人的最高权限密钥，不要发到公开聊天或仓库里。如果泄露，可以在 BotFather 中发送 `/revoke` 重新生成。
:::

### 3. 运行向导

```bash
openclaw onboard
```

向导问题建议选择：

| 向导问题 | 建议选择 |
|---------|---------|
| Continue? | Yes |
| Onboarding mode | QuickStart |
| Model/auth provider | **Skip for now** |
| Filter models by provider | All providers |
| Default model | Keep current |
| Channels | Telegram |
| Configure skills now? | No |
| Enable hooks? | 可全选 |
| Install Gateway service | Yes |
| Hatch your bot | Do this later |

> **Skip for now 很关键**，因为 AIGoCode 是自定义 provider，需要后面手动写入配置。

看到 `Onboarding complete` 后，基础部署就完成了。

## 快速接入：配置 AIGoCode

打开配置文件：

```bash
nano ~/.openclaw/openclaw.json
```

在配置文件最外层合并下面的 `models` 和 `agents` 片段。注意把 `sk-your-api-key` 换成你的真实 API Key：

```json
{
  "models": {
    "providers": {
      "aigocode-claude": {
        "baseUrl": "https://api.aigocode.app",
        "apiKey": "sk-your-api-key",
        "api": "anthropic-messages",
        "models": [
          {
            "id": "[REDACTED]",
            "name": "Claude Opus 4.6",
            "reasoning": true,
            "input": ["text", "image"],
            "contextWindow": 200000,
            "maxTokens": 16384
          }
        ]
      },
      "aigocode-gpt": {
        "baseUrl": "https://api.aigocode.app",
        "apiKey": "sk-your-api-key",
        "api": "openai-responses",
        "models": [
          {
            "id": "gpt-5.4",
            "name": "GPT-5.4",
            "reasoning": false,
            "input": ["text", "image"],
            "contextWindow": 400000,
            "maxTokens": 128000
          }
        ]
      }
    }
  },
  "agents": {
    "defaults": {
      "model": {
        "primary": "aigocode-claude/[REDACTED]",
        "fallbacks": ["aigocode-gpt/gpt-5.4"]
      }
    }
  }
}
```

::: tip
如果配置文件里已经有 `agents` 字段，不要粘贴第二个同名 `agents`，而是把 `defaults.model` 合并进去。JSON 同一层级出现两个同名 key 时，后面的会覆盖前面的。
:::

如果你的配置里有 `models.allowlist`，还需要把新增模型加入白名单：

```json
{
  "models": {
    "allowlist": [
      "aigocode-claude/[REDACTED]",
      "aigocode-gpt/gpt-5.4"
    ]
  }
}
```

### 重启服务

```bash
openclaw gateway restart
openclaw gateway status
```

状态为 `active (running)` 表示服务已经生效。

## 配对 Telegram Bot

给 Telegram Bot 发任意消息，第一次会返回类似下面的配对信息：

```
OpenClaw: access not configured.
Your Telegram user id: xxxxxxxx
Pairing code: XXXXXXXX
```

回到服务器终端执行：

```bash
openclaw pairing approve telegram <你的配对码>
```

看到 `Approved` 后，再给 Bot 发一条消息。如果能正常回复，部署完成。

## 常见问题

### No API key found for provider anthropic

检查 `models.providers`、`agents.defaults.model.primary` 是否一致，例如 `primary` 指向 `aigocode-claude/[REDACTED]` 时，provider 名必须是 `aigocode-claude`。

### 端口被占用

```bash
ss -tlnp | grep 18789
```

### openclaw: command not found

```bash
npm list -g openclaw
npm config get prefix
```

如果安装了但命令找不到，通常是 npm 全局 bin 目录不在 PATH。

## 参考链接

- [OpenClaw Getting Started](https://docs.openclaw.ai/start/getting-started)
- [OpenClaw Model Providers](https://docs.openclaw.ai/concepts/model-providers)
- [OpenClaw Configuration](https://docs.openclaw.ai/gateway/configuration)
