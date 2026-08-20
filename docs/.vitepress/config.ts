import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AIGoCode 文档',
  description: 'AI 模型中转服务配置指南',
  lang: 'zh-CN',
  ignoreDeadLinks: true,
  
  themeConfig: {
    logo: '/logo.svg',
    
    nav: [
      { text: '👤 用户端', link: '/user/' },
      { text: '🏢 企业端', link: '/enterprise/' },
    ],

    sidebar: {
      // 用户端侧边栏
      '/user/': [
        {
          text: '快速开始',
          items: [
            { text: '概览', link: '/user/' },
            { text: '获取 API Key', link: '/user/api-key' },
            { text: 'Base URL', link: '/user/getting-started/base-url' },
            { text: '第一次请求', link: '/user/getting-started/quickstart' },
            { text: '认证方式', link: '/user/getting-started/authentication' },
          ]
        },
        {
          text: '客户端配置',
          items: [
            { text: 'Cherry Studio', link: '/user/clients/cherry-studio' },
            { text: 'Claude Code', link: '/user/coding-tools/claude-code' },
            { text: 'Claude Desktop', link: '/user/coding-tools/claude-desktop' },
            { text: 'Codex', link: '/user/coding-tools/codex' },
            { text: 'Gemini CLI', link: '/user/coding-tools/gemini-cli' },
            { text: 'OpenClaw', link: '/user/coding-tools/openclaw' },
            { text: 'OpenCode', link: '/user/coding-tools/opencode' },
            { text: 'Hermes', link: '/user/coding-tools/hermes' },
          ]
        },
        {
          text: 'API 协议',
          items: [
            { text: 'OpenAI Compatible', link: '/user/api/openai-compatible' },
            { text: 'Anthropic Compatible', link: '/user/api/anthropic-compatible' },
            { text: 'Gemini Compatible', link: '/user/api/gemini-compatible' },
          ]
        },
        {
          text: '模型与计费',
          items: [
            { text: '支持的模型', link: '/user/models' },
            { text: '计费规则', link: '/user/pricing' },
            { text: '额度与限制', link: '/user/account/limits-and-credits' },
          ]
        },
        {
          text: '帮助',
          items: [
            { text: '常见问题', link: '/user/faq' },
            { text: '错误码', link: '/user/errors' },
            { text: '退款说明', link: '/user/billing/refunds' },
            { text: '合规与政策', link: '/user/policies' },
          ]
        }
      ],

      // 企业端侧边栏
      '/enterprise/': [
        {
          text: '开始使用',
          items: [
            { text: '快速开始', link: '/enterprise/' },
            { text: '核心概念', link: '/enterprise/concepts' },
          ]
        },
        {
          text: 'API 集成',
          items: [
            { text: 'API 直接调用', link: '/enterprise/api/direct' },
            { text: 'Python SDK', link: '/enterprise/api/python-sdk' },
            { text: 'Node.js SDK', link: '/enterprise/api/nodejs-sdk' },
          ]
        },
        {
          text: '模型与计费',
          items: [
            { text: '支持的模型', link: '/enterprise/models' },
            { text: '计费规则', link: '/enterprise/pricing' },
          ]
        },
        {
          text: '帮助',
          items: [
            { text: '常见问题', link: '/enterprise/faq' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/aigocode' }
    ],

    footer: {
      message: 'AIGoCode - AI 模型中转服务',
      copyright: 'Copyright © 2024-present'
    },

    search: {
      provider: 'local'
    }
  }
})
