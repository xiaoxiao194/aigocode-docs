# Claude Code 接入

Claude Code 使用 `ANTHROPIC_BASE_URL` 和 `ANTHROPIC_AUTH_TOKEN` 连接 AIGoCode。

## 安装

```bash
npm install -g @anthropic-ai/claude-code
claude --version
```

如果你还没有 Node.js，请先阅读 [Node.js 环境](/user/coding-tools/nodejs)。

## 临时配置

临时配置只对当前终端窗口有效，适合先测试。

::: code-group

```bash [macOS / Linux]
export ANTHROPIC_BASE_URL="https://api.aigocode.app"
export ANTHROPIC_AUTH_TOKEN="sk-your-api-key"
claude
```

```powershell [Windows PowerShell]
$env:ANTHROPIC_BASE_URL = "https://api.aigocode.app"
$env:ANTHROPIC_AUTH_TOKEN = "sk-your-api-key"
claude
```

:::

## 永久配置

::: code-group

```bash [zsh (macOS 默认)]
echo 'export ANTHROPIC_BASE_URL="https://api.aigocode.app"' >> ~/.zshrc
echo 'export ANTHROPIC_AUTH_TOKEN="sk-your-api-key"' >> ~/.zshrc
source ~/.zshrc
```

```bash [bash]
echo 'export ANTHROPIC_BASE_URL="https://api.aigocode.app"' >> ~/.bashrc
echo 'export ANTHROPIC_AUTH_TOKEN="sk-your-api-key"' >> ~/.bashrc
source ~/.bashrc
```

```powershell [Windows PowerShell (永久)]
[System.Environment]::SetEnvironmentVariable("ANTHROPIC_BASE_URL", "https://api.aigocode.app", [System.EnvironmentVariableTarget]::User)
[System.Environment]::SetEnvironmentVariable("ANTHROPIC_AUTH_TOKEN", "sk-your-api-key", [System.EnvironmentVariableTarget]::User)
```

:::

## 验证

进入一个代码项目目录后运行：

```bash
claude
```

如果 Claude Code 能正常读取项目并回复，说明接入完成。遇到 401、403、429 时查看[错误码](/user/errors)。
