<template>
  <section class="container">
    <h1 class="title">
      projects
    </h1>
    <h2 class="info" v-if="name === 'client'">
      Please refresh the page
    </h2>
    <nuxt-link class="button" to="/">
      Home page
    </nuxt-link>
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

<style scoped>

</style>
