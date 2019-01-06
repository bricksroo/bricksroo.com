<template>
  <div class="flex flex-col min-h-screen max-w-lg mx-auto px-6">
    <TheHeader />
    <div class="flex-auto"><slot /></div>
    <TheFooter />
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
