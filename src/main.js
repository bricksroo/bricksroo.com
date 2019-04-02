import DefaultLayout from '~/layouts/Default.vue'
import VueAnalytics from 'vue-analytics'

import '~/style/main.css'

export default function(Vue, { head, router, isServer }) {
  Vue.component('Layout', DefaultLayout)

  Vue.use(VueAnalytics, {
    id: 'UA-128745707-1',
    disabled: isServer,
    debug: {
      sendHitTask: process.env.NODE_ENV === 'production'
    },
    router
  })

  head.meta = [
    { charset: 'utf-8' },
    { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      name: 'subject',
      content: "Mason Hahn's personal website"
    },
    {
      hid: 'description',
      name: 'description',
      content:
        "Mason Hahn's personal website. Structural engineer turned front end developer in Southern California."
    },
    ...head.meta
  ]

  head.bodyAttrs = {
    ...head.bodyAttrs,
    class: 'font-sans'
  }
}
