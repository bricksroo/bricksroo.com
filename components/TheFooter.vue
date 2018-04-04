<template>
  <footer class="f6">
    <span>&copy; {{thisYear}} Mason Hahn</span> 
    <span class="mh2">|</span>
    <span>Created with <a href="https://nuxtjs.org" target="_blank">Nuxt</a> and hosted on <a href="">Netlify</a></span>
    <span class="mh2">|</span>
    <span><a href="">Source</a></span>
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

<style>
footer {
  grid-column: 1 / -1;
}
</style>