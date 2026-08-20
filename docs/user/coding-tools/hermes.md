# Hermes 接入

在 Windows 上部署 Hermes，并通过自定义 endpoint 接入 AIGoCode。

Hermes Agent 是 Nous Research 推出的开源 Agent 工具，支持通过自定义 OpenAI Compatible endpoint 连接远程推理服务或多模型网关。AIGoCode 可以作为 custom provider 接入 Hermes。

## 前置条件

- 一个 AIGoCode 账号，已创建好的 API Key。
- Windows PowerShell。
- 已安装 `git` 和 `uv`。

## 安装

在 PowerShell 里执行：

```powershell
git clone --depth=1 --recurse-submodules https://github.com/NousResearch/hermes-agent.git "$env:LOCALAPPDATA\hermes\hermes-agent"

cd "$env:LOCALAPPDATA\hermes\hermes-agent"
uv venv .venv
.venv\Scripts\Activate.ps1
uv pip install -e ".[all]"
```

如果依赖下载很慢，可以临时使用镜像：

```powershell
uv pip install -e ".[all]" --index-url https://pypi.tuna.tsinghua.edu.cn/simple
```

安装完成后启动：

```powershell
hermes
```

以后重新打开终端时，进入目录并激活虚拟环境即可：

```powershell
cd "$env:LOCALAPPDATA\hermes\hermes-agent"
.venv\Scripts\Activate.ps1
hermes
```

## 交互式配置

Hermes 第一次启动会进入配置流程。先输入 `Y` 继续，然后选择 **Full setup**，接下来选择 **Custom endpoint**。

按下面参数填写：

| 配置项 | 值 |
|--------|-----|
| API 地址 | `https://api.aigocode.app/v1` |
| API Key | `sk-your-api-key` |
| 模型 | `gpt-5.4` |

> 输入 API Key 时看不到字符是正常现象，直接粘贴后按 Enter。

遇到 `Keep current settings` 或 `Skip - keep defaults` 时，优先保留当前设置；遇到空选项时直接回车。

配置完成后，有些 TUI 在 Windows PowerShell 里首次渲染会卡几秒到几十秒，可以关闭当前终端再重新打开。

## 重新配置

如果需要重新配置模型，退出 Hermes 后执行：

```powershell
cd "$env:LOCALAPPDATA\hermes\hermes-agent"
.venv\Scripts\Activate.ps1
hermes setup
```

仍然选择 **Full setup** 和 **Custom endpoint**，再填入新的模型信息。

## 手动配置（config.yaml）

如果你更喜欢直接写配置，可以编辑 `~/.hermes/config.yaml`：

```yaml
model:
  provider: custom
  default: gpt-5.4
  base_url: https://api.aigocode.app/v1
  api_key: sk-your-api-key
```

如果你同时接多个服务，建议用 named custom provider，这样可以在会话里通过 `/model` 切换：

```yaml
custom_providers:
  - name: aigocode
    base_url: https://api.aigocode.app/v1
    key_env: AIGOCODE_API_KEY
    api_mode: chat_completions

model:
  provider: custom:aigocode
  default: gpt-5.4
```

同时在 `~/.hermes/.env` 里保存 Key：

```
AIGOCODE_API_KEY=sk-your-api-key
```

启动后可在会话里切换模型：

```
/model custom:aigocode:gpt-5.4
/model custom:aigocode:gpt-5.4-mini
```

## 常见问题

**endpoint 怎么填？**
通常填写 `https://api.aigocode.app/v1`，不要漏掉 `/v1`。

**API Key 输入时不显示，是不是没粘贴成功？**
这是隐藏输入模式，PowerShell 里不显示字符是正常的，粘贴后直接按 Enter。

**配置完后界面卡住怎么办？**
退出当前终端窗口，重新打开 PowerShell，再执行：

```powershell
cd "$env:LOCALAPPDATA\hermes\hermes-agent"
.venv\Scripts\Activate.ps1
hermes
```

## 参考链接

- [Hermes Agent Installation](https://hermes-agent.nousresearch.com/docs/getting-started/installation/)
- [Hermes AI Providers](https://hermes-agent.nousresearch.com/docs/integrations/providers/)
