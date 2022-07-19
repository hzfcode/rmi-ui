<template>
  <transition name="viewer-fade">
    <div class="bs-image-viewer__wrapper">
      <div class="bs-image-viewer__mask"></div>
      <!-- close -->
      <div class="bs-image-close" @click="hide">
        <i class="bs-icon-close-white"></i>
      </div>
      <!-- actions -->
      <div class="bs-image-viewer__actions">
        <bs-button style="width: 174px" type="light" size="ml" @click="download"
          >Download now</bs-button
        >
      </div>
      <!-- canvas -->
      <div class="el-image-viewer__canvas">
        <img :src="src" :name="name" />
      </div>
    </div>
  </transition>
</template>

<script>
import BsButton from '../../button'
import downloadFile from '../../utils/downloadcsv'
export default {
  name: '',
  components: { BsButton },
  props: {
    onClose: {
      type: Function,
      default: () => {},
    },
  },
  inject: ['image'],
  data() {
    return {
      src: '',
      name: '',
    }
  },
  watch: {},
  computed: {},
  methods: {
    hide() {
      this.onClose()
    },
    download() {
      downloadFile.downloadImage(this.src, this.name)
    },
  },
  created() {},
  mounted() {
    this.src = this.image.src
    this.name = this.image.name
  },
}
</script>
<style lang="less" scoped>
@import '../../index.less';
@import './viewer.less';
</style>
