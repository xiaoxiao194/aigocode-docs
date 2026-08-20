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
          text: '开始使用',
          items: [
            { text: '快速开始', link: '/user/' },
            { text: '核心概念', link: '/user/concepts' },
          ]
        },
        {
          text: '客户端配置',
          items: [
            { text: 'Cherry Studio', link: '/user/clients/cherry-studio' },
            { text: 'ChatBox', link: '/user/clients/chatbox' },
            { text: 'Cursor', link: '/user/clients/cursor' },
            { text: '沉浸式翻译', link: '/user/clients/immersive-translate' },
            { text: 'OpenClaw', link: '/user/clients/openclaw' },
          ]
        },
        {
          text: '模型与计费',
          items: [
            { text: '支持的模型', link: '/user/models' },
            { text: '计费规则', link: '/user/pricing' },
          ]
        },
        {
          text: '帮助',
          items: [
            { text: '常见问题', link: '/user/faq' },
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
