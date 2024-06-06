import dayjs from 'dayjs'
const nav = require('./config/nav.js')

module.exports = {
  theme: 'vuepress-theme-vdoing', // 使用依赖包主题
  title: "myblog",  // 站点的标题，它将会作为所有页面标题的后缀，并且在默认主题的导航栏中显示。
  description: "一些教程文档",
  head: [
    ['link', { rel: 'icon', href: '/img/syue.ico' }], //favicons，资源放在public文件夹
  ],

  // 主题配置
  themeConfig: {
    logo: '/img/syue.png', // 导航栏logo
    //repo: 'https://github.com/syueya/myblog',  // 导航栏右侧生成Github链接
    nav, // 插入导航页模块
    sidebarDepth: 2, //设置根据页面标题自动生成的侧边栏的最大深度。默认值： 2，类型： number
    searchMaxSuggestions: 5, // 搜索结果显示最大数
    lastUpdated: "上次更新", // 更新的时间，及前缀文字   string | boolean (取值为git提交时间)
    notFound: ['出错啦！'],  //404 页面的提示信息，类型： string[]，默认值： ['How did we get here?']
    backToHome: '返回首页', //404 页面中 返回首页 链接的文字，类型： string，默认值： 'Take me home'
    docsDir: "docs", // 编辑的文件夹
    docsBranch: "main",
    editLinks: true, // 是否启用 编辑此页 链接，类型： boolean，默认值： true
    editLinkText: "帮助我们改善此页面！", //编辑此页 链接的文字。类型： string。默认值： 'Edit this page'

    // 以下配置是Vdoing主题改动的和新增的配置
    sidebar: { mode: 'structuring', collapsable: false }, // 侧边栏,温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
    category: true, // 是否打开分类功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含分类字段 2.页面中显示与分类相关的信息和模块 3.自动生成分类页面（在@pages文件夹）。如关闭，则反之。
    tag: true, // 是否打开标签功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含标签字段 2.页面中显示与标签相关的信息和模块 3.自动生成标签页面（在@pages文件夹）。如关闭，则反之。

    author: {
      // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, href: String}
      name: "夏夏子", // 必需
      href: "", // 可选的
    },

    footer: {
      // 页脚信息
      createYear: 2023, // 博客创建年份
      copyrightInfo: "myblog | MIT License", // 博客版权信息，支持a标签
    },

  },

  // 插件
  plugins: [

    ["fulltext-search"], // 全文搜索

    [
      "one-click-copy",
      {
        // 代码块复制按钮
        copySelector: [
          'div[class*="language-"] pre',
          'div[class*="aside-code"] aside',
        ], // String or Array
        copyMessage: "复制成功", // default is 'Copy successfully and then paste it for use.'
        toolTipMessage: '点击复制', //  默认是'Copy to clipboard'
        duration: 1000, // prompt message display time.
        showInMobile: false, // whether to display on the mobile side, default: false.
      },
    ],

    [
      "vuepress-plugin-zooming", // 放大图片
      {
        selector: ".theme-vdoing-content img:not(.no-zoom)",
        options: {
          bgColor: "rgba(0,0,0,0.6)",
        },
      },
    ],

    [
      "@vuepress/last-updated", // "上次更新"时间格式
      {
        transformer: (timestamp, lang) => {
          return dayjs(timestamp).format("YYYY/MM/DD, HH:mm:ss")
        },
      },
    ],


    [
      'vuepress-plugin-comment', // 评论
      {
        choosen: 'valine',
        options: {
          el: '#valine-vuepress-comment',
          appId: 'aQjGpWecvvg4dhtuFvbPNUM1-gzGzoHsz',
          appKey: '8qergMZ9vsdvAXwiJhrpWUBp',
          path: '<%- frontmatter.commentid || frontmatter.permalink %>'
        }
      }
    ],



  ],



  markdown: {
    // lineNumbers: true,
    extractHeaders: ['h2', 'h3'], // 提取标题到侧边栏的级别，默认['h2', 'h3']
    lineNumbers: true, // 显示行号
  },

  // 监听文件变化并重新构建
  extraWatchFiles: [".vuepress/config.js"],
}