const postcssImport = require('postcss-import')
const tailwindcss = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')

const purgeConfig = {
  whitelist: ['html', 'body', 'markdown'],
  content: [
    './src/components/**/*.vue',
    './src/layouts/**/*.vue',
    './src/pages/**/*.vue'
  ],
  extractors: [
    {
      extractor: class TailwindExtractor {
        static extract(content) {
          return content.match(/[A-z0-9-:\/]+/g) || []
        }
      },
      extensions: ['vue', 'html']
    }
  ]
}

module.exports = {
  siteName: 'Mason Hahn',
  titleTemplate: '%s - Mason Hahn',

  // transformers: {
  //   remark: {
  //     externalLinksTarget: '_blank',
  //     externalLinksRel: ['nofollow', 'noopener', 'noreferrer']
  //   }
  // },

  // plugins: [
  //   {
  //     use: '@gridsome/source-filesystem',
  //     options: {
  //       path: 'blog/*.md',
  //       typeName: 'BlogPost',
  //       route: '/blog/:year/:month/:day/:slug'
  //     }
  //   }
  // ],

  chainWebpack: config => {
    config.module
      .rule('css') // or sass, scss, less, postcss, stylus
      .oneOf('normal') // or module
      .use('postcss-loader')
      .tap(options => {
        options.plugins.push(postcssImport)
        options.plugins.push(tailwindcss('./tailwind.js'))

        if (process.env.NODE_ENV === 'production') {
          options.plugins.push(purgecss(purgeConfig))
        }

        return options
      })
  }
}
