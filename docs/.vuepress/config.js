const { defaultTheme } = require('vuepress')
const { searchPlugin } = require('@vuepress/plugin-search')
const { pwaPlugin } = require('@vuepress/plugin-pwa')
const { pwaPopupPlugin } = require('@vuepress/plugin-pwa-popup')
module.exports = {
  lang: 'zh-CN',
  plugins: [
    searchPlugin({
      isSearchable: (page) => page.path !== '/',
      locales: {
        '/': {
          placeholder: '搜索',
        },
      },
    }),
    pwaPlugin({
      skipWaiting: false,
    }),
    pwaPopupPlugin({
      locales: {
        '/': {
          message: '发现新内容可用',
          buttonText: '刷新',
        },
      },
    }),
  ],
  theme: defaultTheme({
    logo: '/favicon.png',
    sidebar: {
      '/mss/': [
          ['/mss/', '首页'],
          '/mss/introducing.html',
          '/mss/about-whitelist.html',
          '/mss/commands.html',
          '/mss/troubleshooting.html'
          /* '/mss/how-to-play.html', */
          /* '/mss/q&a.html' */
        ],
      '/rules/': [ 
          ['/rules/', '首页'],
         /* '/rules/qq-group.html', */
          '/rules/mss.html',
          '/rules/ops-server.html'
         /* '/rules/ask-questions.html' */
        ] 
    },
    navbar: [
      { text: '主页', link: '/', },
      { text: '生存服', link: '/mss/', },
      { text: '服务器规则', link: '/rules/', },
      { text: 'GitHub', link: 'https://github.com/Big-Cake-jpg/mss-docs', target:'_blank', }
    ],
    displayAllHeaders: true,
    sidebarDepth: 2,
    docsRepo: 'Big-Cake-jpg/mss-docs',
    docsBranch: 'main',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '帮助我们改善此页面',
    nextLinks: true,
    prevLinks: true,
    lastUpdated: '最后更新于',
    smoothScrool: true
  }),
  title: 'MSS 服务器帮助文档',
  description: '社区维护的 MSS 服务器帮助文档 兼 脑溢血治疗中心',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/favicon.png' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ]
}
