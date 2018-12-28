const purgeConfig = {
  whitelist: ['html', 'body'],
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

const plugins = []

plugins.push(require('tailwindcss')('./tailwind.js'))

if (process.env.NODE_ENV === 'production') {
  plugins.push(require('@fullhuman/postcss-purgecss')(purgeConfig))
}

plugins.push(require('autoprefixer'))

module.exports = {
  plugins
}
