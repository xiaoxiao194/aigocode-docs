# API 直接调用

通过 HTTP 请求直接调用 AIGoCode API，适合任何支持 HTTP 的编程语言。

## 📦 基础信息

```
接口地址：https://api.aigocode.team/v1/chat/completions
鉴权方式：Bearer Token
请求方式：POST
内容类型：application/json
```

## 🚀 快速开始

### 最简示例（curl）

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

**响应示例：**

```json
{
  "id": "chatcmpl-123",
  "object": "chat.completion",
  "created": 1677652288,
  "model": "gpt-4o",
  "choices": [{
    "index": 0,
    "message": {
      "role": "assistant",
      "content": "你好！我是一个AI助手..."
    },
    "finish_reason": "stop"
  }],
  "usage": {
    "prompt_tokens": 9,
    "completion_tokens": 12,
    "total_tokens": 21
  }
}
```

## 📋 完整请求示例

### Python

```python
import requests

API_KEY = "YOUR_API_KEY"
BASE_URL = "https://api.aigocode.team/v1"

headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {API_KEY}"
}

data = {
    "model": "gpt-4o",
    "messages": [
        {
            "role": "system",
            "content": "你是一个专业的编程助手"
        },
        {
            "role": "user",
            "content": "如何用 Python 读取 JSON 文件？"
        }
    ],
    "temperature": 0.7,
    "max_tokens": 2000
}

response = requests.post(
    f"{BASE_URL}/chat/completions",
    headers=headers,
    json=data
)

result = response.json()
print(result["choices"][0]["message"]["content"])
```

### Node.js / JavaScript

```javascript
const API_KEY = "YOUR_API_KEY";
const BASE_URL = "https://api.aigocode.team/v1";

async function chat(message) {
  const response = await fetch(`${BASE_URL}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      model: "gpt-4o",
      messages: [
        {
          role: "user",
          content: message
        }
      ]
    })
  });

  const data = await response.json();
  return data.choices[0].message.content;
}

// 使用
chat("你好").then(console.log);
```

### Go

```go
package main

import (
    "bytes"
    "encoding/json"
    "fmt"
    "io"
    "net/http"
)

const (
    APIKey  = "YOUR_API_KEY"
    BaseURL = "https://api.aigocode.team/v1"
)

type Message struct {
    Role    string `json:"role"`
    Content string `json:"content"`
}

type ChatRequest struct {
    Model    string    `json:"model"`
    Messages []Message `json:"messages"`
}

type ChatResponse struct {
    Choices []struct {
        Message Message `json:"message"`
    } `json:"choices"`
}

func main() {
    reqBody := ChatRequest{
        Model: "gpt-4o",
        Messages: []Message{
            {Role: "user", Content: "你好"},
        },
    }

    jsonData, _ := json.Marshal(reqBody)
    
    req, _ := http.NewRequest("POST", BaseURL+"/chat/completions", bytes.NewBuffer(jsonData))
    req.Header.Set("Content-Type", "application/json")
    req.Header.Set("Authorization", "Bearer "+APIKey)

    client := &http.Client{}
    resp, _ := client.Do(req)
    defer resp.Body.Close()

    body, _ := io.ReadAll(resp.Body)
    
    var chatResp ChatResponse
    json.Unmarshal(body, &chatResp)
    
    fmt.Println(chatResp.Choices[0].Message.Content)
}
```

## 📊 请求参数说明

### 必填参数

| 参数 | 类型 | 说明 |
|------|------|------|
| `model` | string | 模型名称，如 `gpt-4o` |
| `messages` | array | 对话消息数组 |

### 可选参数

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `temperature` | number | 1.0 | 创造性（0-2） |
| `max_tokens` | number | 无限制 | 最大输出长度 |
| `top_p` | number | 1.0 | 核采样参数 |
| `frequency_penalty` | number | 0.0 | 频率惩罚 |
| `presence_penalty` | number | 0.0 | 存在惩罚 |
| `stream` | boolean | false | 是否流式返回 |
| `stop` | string/array | null | 停止词 |

### messages 格式

```json
{
  "messages": [
    {
      "role": "system",
      "content": "你是一个专业助手"
    },
    {
      "role": "user",
      "content": "用户的问题"
    },
    {
      "role": "assistant",
      "content": "助手的回复"
    },
    {
      "role": "user",
      "content": "继续对话"
    }
  ]
}
```

**角色说明：**
- `system` - 系统提示词，设置助手的行为和角色
- `user` - 用户消息
- `assistant` - 助手的历史回复（用于多轮对话）

## 🌊 流式输出

设置 `"stream": true` 可以实时获取响应：

### Python 示例

```python
import requests
import json

API_KEY = "YOUR_API_KEY"
BASE_URL = "https://api.aigocode.team/v1"

headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {API_KEY}"
}

data = {
    "model": "gpt-4o",
    "messages": [{"role": "user", "content": "写一首诗"}],
    "stream": True
}

response = requests.post(
    f"{BASE_URL}/chat/completions",
    headers=headers,
    json=data,
    stream=True
)

for line in response.iter_lines():
    if line:
        line = line.decode('utf-8')
        if line.startswith('data: '):
            line = line[6:]  # 去掉 'data: ' 前缀
            if line == '[DONE]':
                break
            try:
                chunk = json.loads(line)
                content = chunk['choices'][0]['delta'].get('content', '')
                if content:
                    print(content, end='', flush=True)
            except json.JSONDecodeError:
                pass
```

### JavaScript 示例

```javascript
const response = await fetch(`${BASE_URL}/chat/completions`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${API_KEY}`
  },
  body: JSON.stringify({
    model: "gpt-4o",
    messages: [{ role: "user", content: "写一首诗" }],
    stream: true
  })
});

const reader = response.body.getReader();
const decoder = new TextDecoder();

while (true) {
  const { done, value } = await reader.read();
  if (done) break;
  
  const chunk = decoder.decode(value);
  const lines = chunk.split('\n');
  
  for (const line of lines) {
    if (line.startsWith('data: ')) {
      const data = line.slice(6);
      if (data === '[DONE]') break;
      
      try {
        const parsed = JSON.parse(data);
        const content = parsed.choices[0]?.delta?.content || '';
        if (content) {
          process.stdout.write(content);
        }
      } catch (e) {}
    }
  }
}
```

## ⚠️ 错误处理

### 常见错误码

| 错误码 | 含义 | 解决方法 |
|--------|------|----------|
| `401` | API Key 无效 | 检查密钥是否正确、是否过期 |
| `429` | 请求频率超限 | 降低请求频率或申请提升限额 |
| `400` | 请求参数错误 | 检查请求格式和参数 |
| `500` | 服务端错误 | 稍后重试，或联系技术支持 |

### Python 错误处理示例

```python
import requests
import time

def chat_with_retry(messages, max_retries=3):
    for i in range(max_retries):
        try:
            response = requests.post(
                f"{BASE_URL}/chat/completions",
                headers=headers,
                json={"model": "gpt-4o", "messages": messages},
                timeout=30
            )
            
            if response.status_code == 200:
                return response.json()
            elif response.status_code == 429:
                # 频率限制，等待后重试
                retry_after = int(response.headers.get('Retry-After', 5))
                print(f"频率限制，{retry_after}秒后重试...")
                time.sleep(retry_after)
            elif response.status_code == 401:
                raise Exception("API Key 无效")
            else:
                print(f"请求失败: {response.status_code}")
                time.sleep(2 ** i)  # 指数退避
                
        except requests.exceptions.Timeout:
            print(f"请求超时，重试 {i+1}/{max_retries}")
            time.sleep(2 ** i)
        except requests.exceptions.RequestException as e:
            print(f"请求错误: {e}")
            time.sleep(2 ** i)
    
    raise Exception("达到最大重试次数")
```

## 💡 最佳实践

### 1. 使用环境变量存储密钥

```bash
# .env 文件
AIGOCODE_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

```python
import os
from dotenv import load_dotenv

load_dotenv()
API_KEY = os.getenv("AIGOCODE_API_KEY")
```

### 2. 设置超时

```python
response = requests.post(
    url,
    headers=headers,
    json=data,
    timeout=30  # 30秒超时
)
```

### 3. 记录使用量

```python
result = response.json()
usage = result['usage']
print(f"输入 tokens: {usage['prompt_tokens']}")
print(f"输出 tokens: {usage['completion_tokens']}")
print(f"总计 tokens: {usage['total_tokens']}")
```

### 4. 实现指数退避重试

```python
import time
from functools import wraps

def retry_with_backoff(max_retries=3):
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            for i in range(max_retries):
                try:
                    return func(*args, **kwargs)
                except Exception as e:
                    if i == max_retries - 1:
                        raise
                    wait_time = 2 ** i
                    print(f"错误: {e}，{wait_time}秒后重试...")
                    time.sleep(wait_time)
        return wrapper
    return decorator

@retry_with_backoff()
def chat(message):
    # API 调用代码
    pass
```

## 📚 更多示例

- [Python SDK](/enterprise/api/python-sdk) - 使用官方 Python SDK
- [Node.js SDK](/enterprise/api/nodejs-sdk) - 使用官方 Node.js SDK
- [支持的模型](/enterprise/models) - 查看所有可用模型

---

**需要帮助？** 查看 [常见问题](/enterprise/faq) 或联系技术支持
