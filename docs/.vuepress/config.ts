import { defineUserConfig, defaultTheme } from "vuepress";
import { copyCodePlugin } from "vuepress-plugin-copy-code2"; // 代码复制插件
import { externalLinkIconPlugin } from "@vuepress/plugin-external-link-icon"; //外部链接添加一个图标
import { searchPlugin } from '@vuepress/plugin-search' // 提供本地搜索能力

export default defineUserConfig({
  // 站点配置
  base: "/wx-blog/",
  lang: "zh-CN",
  // head: [["link", { rel: "icon", href: "/imgs/favicon.ico" }]], // 设置头link
  title: "星的前端之路",
  description: "记录和分享学习中的点滴！",
  // 主题配置
  theme: defaultTheme({
    // logo: "/imgs/favicon.ico",
    lastUpdated: false,
    navbar: [
      // 右上角
      {
        text: "Vue学习",
        link: "/vue/",
      },
      // {
      //   text: "JavaScript",
      //   link: "/js/",
      // },
      // {
      //   text: "项目",
      //   link: "/project/",
      // },
      // {
      //   text: "原理",
      //   link: "/origin/",
      // },
    ],
    sidebar: {
      "/vue/": [
        {
          text: "Vue学习",
          children: ["/vue/index.md"],
        },
      ],
      // "/senior/": [
      //   {
      //     text: "高级优化",
      //     children: ["/senior/README.md", "/senior/enhanceExperience.md", "/senior/liftingSpeed.md", "/senior/reduceVolume.md", "/senior/optimizePerformance.md", "/senior/summary.md"],
      //   },
      // ],
      // "/project/": [
      //   {
      //     text: "项目配置",
      //     children: ["/project/README.md", "/project/react-cli.md", "/project/vue-cli.md", "/project/summary.md"],
      //   },
      // ],
      // "/origin/": [
      //   {
      //     text: "原理分析",
      //     children: ["/origin/README.md", "/origin/loader.md", "/origin/plugin.md", "/origin/summary.md"],
      //   },
      // ],
    },
  }),
  plugins: [
    // https://vuepress-theme-hope.github.io/v2/copy-code/zh/
    copyCodePlugin({
      // 插件选项
      pure: true,
    }),
    searchPlugin({
      locales: {
        '/': {
          placeholder: 'Search',
        },
        '/zh/': {
          placeholder: '搜索',
        },
      },
    }),
    externalLinkIconPlugin({
      locales: {
        "/": {
          openInNewWindow: "open in new window",
        },
        "/zh/": {
          openInNewWindow: "在新窗口打开",
        },
      },
    }),
  ],
});
