<template>
  <div class="pt-8">
    <div class="flex items-center">
      <nav>
        <ul class="list-reset flex">
          <li v-for="link in links" :key="link.copy" class="mr-4">
            <nuxt-link
              v-if="link.type === 'nuxt-link'"
              :to="link.to"
              class="text-lg font-semibold text-green-dark hover:text-blue-darker underline hover:no-underline"
              v-bind="link.attrs"
            >
              {{ link.copy }}
            </nuxt-link>
            <a
              v-if="link.type === 'link'"
              :href="link.to"
              class="text-lg font-semibold text-green-dark hover:text-blue-darker hover:no-underline"
              v-bind="link.attrs"
            >
              {{ link.copy }}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          type: 'nuxt-link',
          to: '/',
          copy: 'Home',
          attrs: {
            title: 'Home'
          }
        },
        {
          type: 'nuxt-link',
          to: '/resume',
          copy: 'Resume',
          attrs: {
            title: 'Resume'
          }
        },
        {
          type: 'link',
          to: 'mailto:mason@bricksroo.com',
          copy: 'Email',
          attrs: {
            title: 'mason@bricksroo.com'
          }
        },
        {
          type: 'link',
          to: 'https://github.com/bricksroo',
          copy: 'GitHub',
          attrs: {
            title: '@bricksroo on GitHub'
          }
        },
        {
          type: 'link',
          to: 'https://twitter.com/bricksroo',
          copy: 'Twitter',
          attrs: {
            title: '@bricksroo on Twitter'
          }
        }
      ]
    }
  }
}
</script>
