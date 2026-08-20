# 认证方式

AIGoCode 使用 Bearer Token 认证。把你在控制台创建的 API Key 放到请求头的 `Authorization` 字段即可。

```
Authorization: Bearer YOUR_API_KEY
```

命令行里建议使用环境变量，避免把 Key 写进代码仓库：

::: code-group

```bash [macOS / Linux]
export AIGOCODE_API_KEY="sk-your-api-key"
```

```powershell [Windows PowerShell]
$env:AIGOCODE_API_KEY = "sk-your-api-key"
```

:::

然后在请求里引用它：

```bash
curl https://api.aigocode.app/v1/models \
  -H "Authorization: Bearer $AIGOCODE_API_KEY"
```

## 常见问题

| 现象 | 检查项 |
|------|--------|
| 401 Unauthorized | API Key 是否复制完整、是否带了多余空格、请求头是否使用 Bearer |
| 工具提示 Key 无效 | 工具配置里是否填到了正确字段，例如 `ANTHROPIC_AUTH_TOKEN`、`OPENAI_API_KEY`、`GEMINI_API_KEY` |
| 本地能用，部署后不能用 | 部署平台是否配置了环境变量，变量名是否一致 |

::: warning
API Key 只会在创建时完整展示一次。泄露或不确定是否安全时，请在控制台删除旧 Key 后重新创建。
:::
