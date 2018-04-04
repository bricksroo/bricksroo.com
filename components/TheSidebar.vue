<template>
  <aside class="">
    <div class="social flex items-center lh-title f4">
      <h3 class="mv0 mr2 mid-gray">bricksroo</h3>
      <a class="mr2 f6">email</a>
      <a class="mr2 f6">github</a>
      <a class="mr2 f6">twitter</a>
      <a class="mr2 f6">spotify</a>
    </div>
    <h1 class="title mv0 lh-title f2">
      Mason Hahn
    </h1>
    <nav class="flex flex-column">
      <nuxt-link  to="/personal">Personal</nuxt-link>
      <nuxt-link to="/projects">Projects</nuxt-link>
      <nuxt-link to="/writing">Writing</nuxt-link>
    </nav>
  </aside>
</template>

<script>
export default {
  name: 'TheSidebar'
}
</script>
