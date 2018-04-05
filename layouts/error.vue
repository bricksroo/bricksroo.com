
<template>
  <section class="mt5 measure">
    <h3 class="mt0 mb2 fw4 f4 lh-copy">Nooooooooope, that didn't work.</h3>
    <h4 class="dib mt0 mb2 fw4">
      {{ error.statusCode }} &ndash; {{ error.message }}
    </h4>
  </section>
</template>

<script>
export default {
  props: ['error']
}
</script>

