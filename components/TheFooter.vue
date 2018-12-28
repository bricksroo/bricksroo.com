<template>
  <footer>
    <div class="border-t-2 border-grey-light py-6 grey-dark">
      <span>
        &copy; {{ thisYear }} Mason Hahn &ndash;
        <a
          href="https://github.com/bricksroo/bricksroo.com"
          target="_blank"
          class="font-semibold text-green-dark hover:text-blue-darker underline hover:no-underline"
        >
          Source
        </a>
      </span>
    </div>
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
