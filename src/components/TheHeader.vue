<template>
  <div class="pt-8">
    <div class="flex items-center">
      <nav>
        <ul class="list-reset flex">
          <li v-for="link in links" :key="link.copy" class="mr-4">
            <g-link
              v-if="link.type === 'g-link'"
              :to="link.to"
              class="text-lg font-semibold text-green-dark hover:text-blue-darker underline hover:no-underline"
              v-bind="link.attrs"
            >
              {{ link.copy }}
            </g-link>
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
          type: 'g-link',
          to: '/',
          copy: 'Home',
          attrs: {
            title: 'Home'
          }
        },
        // {
        //   type: 'g-link',
        //   to: '/resume',
        //   copy: 'Resume',
        //   attrs: {
        //     title: 'Resume'
        //   }
        // },
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
