<template>
  <div class="bs-breadcrumb">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BsBreadcrumb",
  props: {
    separator: {
      type: String,
      default: "/"
    },
    separatorClass: {
      type: String,
      default: ""
    },
  },
  provide() {
    return {
      bsBreadcrumb: this
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="less" scoped>
@import './index.less';
</style>