# 企业端快速开始

欢迎使用 AIGoCode 企业端！通过 API 接入，轻松将 GPT-4、Claude 等主流 AI 模型集成到您的应用中。

## 📦 配置信息（直接复制）

```
接口地址：https://api.aigocode.team
推荐模型：gpt-4o / claude-3-5-sonnet / gemini-pro
```

## 🚀 三步开始

### 1. 获取 API Key

1. 访问 [AIGoCode 企业端](https://www.aigocode.team/)
2. 注册企业账号并登录
3. 进入【管理中心】→【API 密钥】
4. 点击【创建密钥】，复制保存

:::tip 💡 提示
- 企业端支持为不同项目创建独立的 API Key
- 可以为每个密钥设置使用限额和权限
- API Key 只显示一次，请妥善保管
:::

### 2. 选择集成方式

我们提供多种集成方式：

- [API 直接调用](/enterprise/api/direct) - 使用 HTTP 请求直接调用
- [Python SDK](/enterprise/api/python-sdk) - Python 应用快速集成
- [Node.js SDK](/enterprise/api/nodejs-sdk) - JavaScript/TypeScript 应用集成

### 3. 快速测试

使用 curl 测试连接：

```bash
curl https://api.aigocode.team/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{
    "model": "gpt-4o",
    "messages": [
      {
        "role": "user",
        "content": "你好，请介绍一下你自己"
      }
    ]
  }'
```

将 `YOUR_API_KEY` 替换为你的实际密钥。

如果收到正常的 JSON 响应，说明配置成功了！🎉

## 💰 企业计费

- **按量计费**：根据实际 Token 使用量计费
- **批量优惠**：大量使用可申请折扣
- **月度账单**：支持对公转账和发票开具
- **灵活充值**：支持预付费和后付费模式

详细的计费规则请查看 [计费说明](/enterprise/pricing)。

## 🔒 安全建议

1. **保护 API Key**：不要在前端代码或公开仓库中暴露密钥
2. **使用环境变量**：将密钥存储在环境变量或密钥管理服务中
3. **设置访问限制**：在管理中心为密钥设置 IP 白名单或请求频率限制
4. **定期轮换**：定期更换 API Key，降低泄露风险

## ❓ 常见问题

- **401 错误** → API Key 填错或已过期，检查并重新创建
- **429 错误** → 请求频率超限，降低请求频率或申请提升限额
- **模型不存在** → 检查模型名是否正确，参考[支持的模型](/enterprise/models)

更多问题请查看 [常见问题](/enterprise/faq)

## 📚 接下来

- 了解 [核心概念](/enterprise/concepts)（API 地址、鉴权、模型）
- 查看 [API 直接调用](/enterprise/api/direct) 的详细文档
- 阅读 [支持的模型列表](/enterprise/models)
- 探索 [计费规则](/enterprise/pricing)

---

**需要技术支持？** 联系企业客服或查看 [常见问题](/enterprise/faq)
