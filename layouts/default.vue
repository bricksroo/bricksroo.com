<template>
  <div class="grid">
    <the-sidebar />
    <nuxt/>
    <the-footer/>
  </div>
</template>

<script>
import TheFooter from '../components/TheFooter.vue'
import TheSidebar from '../components/TheSidebar.vue'

export default {
  components: {
    TheFooter,
    TheSidebar
  }
}
</script>

<style>
.grid {
  display: grid;
  margin: 0 auto;
  max-width: 52rem;
  grid-column-gap: 2rem;
  grid-row-gap: 8rem;
  grid-template-columns: 2fr 3fr;
  grid-template-rows: 1fr 12rem;
}
</style>
