<template>
  <section class="flex items-center justify-center min-h-screen w-full">
    <h4 class="text-sm">
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
