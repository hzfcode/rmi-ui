<template>
  <button
    class="bs-button"
    :class="[type ? type : '', size ? size : '', disabled ? 'dis' : '']"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <span><slot /></span>
  </button>
</template>

<script>
export default {
  name: "BsButton",
  components: {},
  props: {
    type: {
      //default info light
      type: String,
      default: "default"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      //large
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="less" scoped>
@import "./index.less";
</style>