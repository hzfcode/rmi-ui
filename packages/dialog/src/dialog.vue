<template>
  <transition name="bs-modal">
    <div v-if="visible" class="bs-modal-wrapper">
      <div class="bs-modal-backdrop" @click="closeModal"></div>
      <div class="bs-modal" :style="style">
        <div class="bs-modal-header">
          {{ title }}
          <i class="bs-icon-close-gray bs-model-close" @click="closeModal"></i>
        </div>
        <div class="bs-modal-content">
          <slot></slot>
        </div>
        <div class="bs-modal-footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'BsDialog',
  components: {},
  props: {
    title: {
      type: String,
      default: '',
    },
    visible: {
      type: Boolean,
      default: false,
    },
    width: String,
    top: {
      type: String,
      default: '15vh',
    },
  },
  data() {
    return {}
  },
  watch: {},
  computed: {
    style() {
      let style = {}
      style.margintop = this.top
      if (this.width) {
        style.width = this.width
      }
      return style
    },
  },
  methods: {
    closeModal() {
      this.$emit('update:visible', false)
      this.$emit('close')
    },
  },
  created() {},
  mounted() {},
}
</script>
<style lang="less" scoped>
@import './index.less';
</style>
