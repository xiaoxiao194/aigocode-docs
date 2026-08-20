# Gemini CLI 接入

Gemini CLI 使用 `GOOGLE_GEMINI_BASE_URL`、`GEMINI_API_KEY` 和 `GEMINI_MODEL` 三个环境变量连接 AIGoCode。

## 安装

```bash
npm install -g @google/gemini-cli
gemini --version
```

如果你还没有 Node.js，请先阅读 [Node.js 环境](/user/coding-tools/nodejs)。

## 配置

::: code-group

```bash [macOS / Linux (临时)]
export GOOGLE_GEMINI_BASE_URL="https://api.aigocode.app"
export GEMINI_API_KEY="sk-your-api-key"
export GEMINI_MODEL="gemini-3.5-flash"
gemini
```

```bash [macOS zsh (永久)]
echo 'export GOOGLE_GEMINI_BASE_URL="https://api.aigocode.app"' >> ~/.zshrc
echo 'export GEMINI_API_KEY="sk-your-api-key"' >> ~/.zshrc
echo 'export GEMINI_MODEL="gemini-3.5-flash"' >> ~/.zshrc
source ~/.zshrc
```

```powershell [Windows PowerShell (永久)]
[System.Environment]::SetEnvironmentVariable("GOOGLE_GEMINI_BASE_URL", "https://api.aigocode.app", [System.EnvironmentVariableTarget]::User)
[System.Environment]::SetEnvironmentVariable("GEMINI_API_KEY", "sk-your-api-key", [System.EnvironmentVariableTarget]::User)
[System.Environment]::SetEnvironmentVariable("GEMINI_MODEL", "gemini-3.5-flash", [System.EnvironmentVariableTarget]::User)
```

:::

## 验证

启动后发一条消息，能正常收到回复说明接入成功。遇到 401、403、429 时查看[错误码](/user/errors)。
