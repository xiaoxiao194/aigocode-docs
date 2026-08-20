# Node.js 环境

Claude Code、Gemini CLI、Codex 等命令行工具都依赖 Node.js。建议安装 Node.js 20 或更高版本的 LTS。

## 安装

推荐直接前往 [Node.js 官网](https://nodejs.org/) 下载 LTS 安装包。也可以使用下面的包管理器方式：

::: code-group

```bash [Homebrew (macOS)]
brew install node
```

```bash [Ubuntu / Debian]
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

```bash [CentOS / RHEL]
curl -fsSL https://rpm.nodesource.com/setup_lts.x | sudo bash -
sudo yum install -y nodejs
```

```shell [Chocolatey (Windows)]
choco install nodejs-lts
```

```shell [Scoop (Windows)]
scoop install nodejs-lts
```

:::

## 验证安装

```bash
node --version
npm --version
```

如果能输出版本号，就可以继续配置 [Claude Code](/user/coding-tools/claude-code)、[Codex](/user/coding-tools/codex) 或 [Gemini CLI](/user/coding-tools/gemini-cli)。
