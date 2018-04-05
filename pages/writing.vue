<template>
  <section class="mt5 measure">
    <h4 class="mt0 mb2 fw4 f4 lh-copy">Writing stuff goes here.</h4>
    <p class="mt0 mb2 lh-copy">Nothing to see here, yet.</p>
  </section>
</template>
<script>
import config from '../nuxt.config'
export default {
  head() {
    return {
      title: `Writing - ${config.head.title}`
    }
  }
}
</script>

<style scoped>
.title {
  margin-top: 50px;
}
.info {
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
  margin-top: 10px;
}
.button {
  margin-top: 50px;
}
</style>
