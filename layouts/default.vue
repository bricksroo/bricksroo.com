<template>
  <div class="bg-near-white">
    <div class="flex flex-column mw7 center ph3 min-vh-100">
      <TheHeader />
      <Nuxt class="flex-auto" />
      <TheFooter />
    </div>
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader.vue'
import TheFooter from '../components/TheFooter.vue'

export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>
