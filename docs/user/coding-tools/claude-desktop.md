# Claude 桌面端接入

在 Claude Desktop 中通过第三方推理网关接入 AIGoCode。

Claude Desktop 支持通过「Configure Third-Party Inference」接入第三方推理网关。开启开发者模式后，把网关地址指向 AIGoCode，即可在桌面端使用 Claude 模型。

## 前置条件

登录 [AIGoCode 控制台](https://aigocode.app/dashboard)，在 API Key 页面创建一个 Claude API 分组的 API Key，稍后填入桌面端。

## 配置步骤

下载安装后，先启用开发者模式，再配置第三方推理网关。macOS 与 Windows 步骤基本一致，区别只在菜单入口。

### 1. 下载 Claude Desktop

打开 [https://claude.ai](https://claude.ai)，网页会按照你的系统提供对应版本，点击 **Download desktop app**。

### 2. 启用开发者模式

::: code-group

**macOS**：打开 Claude 桌面应用（先不要登录），在菜单栏选择 **Help → Troubleshooting → Enable developer mode**。

**Windows**：打开 Claude 桌面端，点击左上角，选择 **Help → Troubleshooting → Enable developer mode**。

:::

### 3. 打开第三方推理配置

::: code-group

**macOS**：在顶部菜单栏选择 **Developer → Configure Third-Party Inference…**。

**Windows**：点击左上角，选择 **Developer → Configure Third-Party Inference…**。

:::

### 4. 填写 AIGoCode 网关信息

| 字段 | 填写内容 |
|------|---------|
| Credential kind | 选择 **Static API key** |
| Gateway base URL | `https://api.aigocode.app` |
| Gateway API key | 粘贴你在 AIGoCode 生成好的 API Key |

### 5. 开始使用

新建会话即可开始使用。注意右下角的模型请选择官方支持的模型（4.6、4.7、4.8）。

遇到 401、403、429 时查看[错误码](/user/errors)。
