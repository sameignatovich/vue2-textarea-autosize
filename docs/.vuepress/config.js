module.exports = {
  base: '/vue2-textarea-autosize/',
  plugins: [
    require('./plugin.js')
  ],
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Vue2TextareaAutosize',
      description: 'TextareaAutosize plugin for Vue.js 2'
    }
  },
  themeConfig: {
    repo: 'https://github.com/MediaCubeCo/vue2-textarea-autosize/',
    docsDir: 'docs',
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        nav: [{
          text: 'Release Notes',
          link: 'https://github.com/MediaCubeCo/vue2-textarea-autosize/releases'
        }],
        sidebar: [
          '/',
          '/guide.md'
        ]
      }
    }
  }
}
