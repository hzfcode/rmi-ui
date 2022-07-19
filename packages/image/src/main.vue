<template>
  <div
    class="bs-image"
    @mouseenter="showHover = true"
    @mouseleave="showHover = false"
  >
    <img
      class="bs-image-inner"
      v-bind="$attrs"
      :src="src"
      :name="name"
      :style="{ 'object-fit': fit }"
    />
    <!-- hover -->
    <div class="bs-image-hover" v-if="showHover">
      <div class="bs-image-hover-bottom">
        <bs-button type="gray-nb" style="width: 50%" size="ml" @click="preview"
          >Click to view</bs-button
        ><span></span
        ><bs-button type="light" style="width: 50%" size="ml" @click="download"
          >Download now</bs-button
        >
      </div>
    </div>
    <!-- preview -->
    <template>
      <image-viewer v-if="showPreview" :on-close="closeViewer"></image-viewer>
    </template>
  </div>
</template>

<script>
import BsButton from '../../button'
import ImageViewer from './image-viewer'
import downloadFile from '../../utils/downloadcsv'
export default {
  name: 'BsImage',
  components: { BsButton, ImageViewer },
  props: {
    src: String,
    fit: { type: String, default: 'fill' },
    name: String,
  },
  data() {
    return {
      showHover: false,
      showPreview: false,
    }
  },
  provide() {
    return {
      image: this,
    }
  },
  watch: {},
  computed: {},
  methods: {
    preview() {
      // prevent body scroll
      // document.body.style.overflow = "hidden";
      this.showPreview = true
    },
    download() {
      downloadFile.downloadImage(this.src, this.name)
    },
    closeViewer() {
      this.showPreview = false
      this.showHover = false
    },
  },
  created() {},
  mounted() {},
}
</script>
<style lang="less" scoped>
@import '../../index.less';
@import './index.less';
</style>
