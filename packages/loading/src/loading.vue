<template>
  <div v-if="isShowLoading" class="loading-container">
    <div class="loading-box">
      <img class="loading-img" src="../../assets/image/icon/loading.png" />
      <!-- 这里content为双花括号 -->
      <span class="loading-txt">{{ content }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BsLoading',
  data() {
    return {
      isShowLoading: false,
      content: '',
    }
  },
}
</script>
<style lang="less" scoped>
@import './index.less';
</style>
