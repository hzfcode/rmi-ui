<template>
  <span class="bs-breadcrumb-item">
    <span class="bs-title" :class="[to ? 'is-link' : '']" @click="jumpPage">
      <slot></slot>
    </span>
    <span
      v-if="separatorClass"
      class="bs-breadcrumb-separator"
      :class="separatorClass"
    >
    </span>
    <span v-else class="bs-breadcrumb-separator">{{ separator }}</span>
  </span>
</template>

<script>
export default {
  name: 'BsBreadcrumbItem',
  components: {},
  props: {
    to: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      separator: '',
      separatorClass: '',
    }
  },
  inject: ['bsBreadcrumb'],
  watch: {},
  computed: {},
  methods: {
    jumpPage() {
      if (!this.to) return false
      this.$router.push(this.to)
    },
  },
  created() {},
  mounted() {
    console.log(this.bsBreadcrumb.separatorClass)
    this.separator = this.bsBreadcrumb.separator
    this.separatorClass = this.bsBreadcrumb.separatorClass
  },
}
</script>
<style lang="less" scoped>
@import './index.less';
</style>
