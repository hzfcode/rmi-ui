<template>
  <div class="title">
    <h2>{{ title }}</h2>
    <p>{{ info }}</p>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String,
    info: String,
  },
}
</script>

<style></style>
