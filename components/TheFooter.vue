<template>
  <footer>
    <div class="bt bw1 b--moon-gray pv3 lh-copy gray f6">
      <span>
        &copy; {{ thisYear }} Mason Hahn &ndash;
        <a
          href="https://github.com/bricksroo/bricksroo.com"
          target="_blank"
          class="green fw6 hover-navy"
        >
          Source
        </a>
      </span>
      <span class="mh3 br bw1 b--moon-gray" />
      <span>
        Created with
        <a
          href="https://nuxtjs.org"
          target="_blank"
          class="green fw6 hover-navy"
        >
          Nuxt
        </a>
        and hosted on
        <a
          href="https://www.netlify.com/"
          target="_blank"
          class="green fw6 hover-navy"
        >
          Netlify
        </a>
        .
      </span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
  computed: {
    thisYear() {
      const today = new Date()
      return today.getFullYear()
    }
  }
}
</script>
