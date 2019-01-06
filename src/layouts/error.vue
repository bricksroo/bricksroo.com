<template>
  <section class="mt5 measure">
    <h4 class="dib mt0 mb2 fw4">
      {{ error.statusCode }} &ndash; {{ error.message }}
    </h4>
  </section>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
