<template>
  <transition name="bs-message">
    <div v-show="show" class="bs-message" :class="type">
      <p class="bs-content">{{ message }}</p>
      <i class="bs-icon-close-gray bs-icon-close" @click="closeMessage"></i>
    </div>
  </transition>
</template>

<script>
export default {
  name: "BsMessage",
  data: function() {
    return {
      timer: null,
      show: false,
      duration: "",
      message: "",
      type: "" //info success warning
    };
  },
  computed: {},
  mounted() {
    this.startTimer();
  },
  methods: {
    closeMessage() {
      this.show = false;
    },
    startTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          this.closeMessage();
        }, this.duration);
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
