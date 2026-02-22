import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/documentation/',
  title: 'MC23hub',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/index' },
      { text: 'Guide', link: '/guide/getting-started' }
    ],
    sidebar: [
      {
        items: [
          { text: 'Planned Features', link: '/guide/planned-features' },
          { text: 'Changelog', link: '/guide/changelog' }
        ]
      },
    ]
  }
})