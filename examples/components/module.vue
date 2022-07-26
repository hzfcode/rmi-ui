<template>
  <div class="module">
    <h3>{{ title }}</h3>
    <p v-if="info">{{ info }}</p>
    <el-card class="mt">
      <slot></slot>
      <el-divider></el-divider>
      <div class="mt">
        {{ msg }}
      </div>
      <highlightjs class="mt" :language="lang" :code="code" />
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Module',
  props: {
    title: String,
    info: String,
    msg: String,
    lang: String,
    code: String,
  },
}
</script>

<style lang="less"></style>
