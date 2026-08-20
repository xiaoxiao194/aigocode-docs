# Codex 接入

Codex 使用配置文件连接 OpenAI 兼容模型。下面示例会创建 `~/.codex/config.toml` 和 `~/.codex/auth.json`。

## 安装

```bash
npm install -g @openai/codex@latest
codex --version
```

## 配置文件

::: code-group

```bash [macOS / Linux]
rm -rf ~/.codex && mkdir -p ~/.codex

cat > ~/.codex/config.toml << 'EOF'
model_provider = "aigocode"
model = "gpt-5.4"
model_reasoning_effort = "high"
disable_response_storage = true
preferred_auth_method = "apikey"

[model_providers.aigocode]
name = "aigocode"
base_url = "https://api.aigocode.app"
wire_api = "responses"
requires_openai_auth = true
EOF

cat > ~/.codex/auth.json << 'EOF'
{
  "OPENAI_API_KEY": "sk-your-api-key"
}
EOF
```

```powershell [Windows PowerShell]
if (Test-Path "$env:USERPROFILE\.codex") {
  Remove-Item -Recurse -Force "$env:USERPROFILE\.codex"
}
mkdir "$env:USERPROFILE\.codex"

@"
model_provider = "aigocode"
model = "gpt-5.4"
model_reasoning_effort = "high"
disable_response_storage = true
preferred_auth_method = "apikey"

[model_providers.aigocode]
name = "aigocode"
base_url = "https://api.aigocode.app"
wire_api = "responses"
requires_openai_auth = true
"@ | Out-File -FilePath "$env:USERPROFILE\.codex\config.toml" -Encoding utf8

@"
{
  "OPENAI_API_KEY": "sk-your-api-key"
}
"@ | Out-File -FilePath "$env:USERPROFILE\.codex\auth.json" -Encoding utf8
```

:::

## 启动

```bash
codex
```

如果模型不可用，先确认模型名称是否正确，再检查 API Key 和 Base URL。
