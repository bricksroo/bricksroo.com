<template>
  <div class="bg-near-white">
    <div class="flex flex-column mw7 center ph3 min-vh-100">
      <the-header/>
      <nuxt class="flex-auto"/>
      <the-footer/>
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
