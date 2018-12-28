<template>
  <section class="mt5 measure">
    <h4 class="mt0 mb2 fw4 f4 lh-copy">Projects go here.</h4>
    <p class="mt0 mb2 lh-copy">Nothing to see here, yet.</p>
  </section>
</template>
<script>
import config from '../nuxt.config'
export default {
  head() {
    return {
      title: `Projects - ${config.head.title}`
    }
  }
}
</script>
