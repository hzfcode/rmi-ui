<template>
  <div class="bs-input">
    <input
      :type="showPassword?(passwordVisible?'text':'password'):type"
      class="bs-input-inner"
      :class="[types?types:'',inputClass]"
      :placeholder="placeholder"
      :value="value"
      :readonly="readonly"
      v-bind="$attrs"
      @input="$emit('input', $event.target.value)"
      @change="$emit('change', $event.target.value)"
      @blur="$emit('blur', $event.target.value)"
      @focus="$emit('focus', $event.target.value)"
      @click="$emit('click')"
    />
    <!-- 后置内容 -->
    <i v-if="suffixIcon" class="bs-input-suffix" >
      <i v-if="showPassword" class="bs-input-suffix-inner" :class="[suffixIcon]" @click="handlePasswordVisible"></i>
      <i v-if="!showPassword" class="bs-input-suffix-inner" :class="[isReverseIcon?'is_reverse':'',suffixIcon]"></i>
    </i>
  </div>
</template>

<script>
export default {
  name: "BsInput",
  components: {},
  // model:{
  //   event:'input',
  //   value:'value',
  // },
  props: {
    value: [String, Number],
    placeholder: {
      type: String,
      default: ""
    },
    suffixIcon: {
      type: String,
      default: ""
    },
    readonly:Boolean,
    inputClass:String,
    types:String,
    type:{
      type:String,
      default:'text'
    },
    isReverseIcon:Boolean,
    showPassword:{
      type:Boolean,
      default:false,
    }
  },
  data() {
    return {
      passwordVisible: false
    };
  },
  watch: {},
  computed: {},
  methods: {
    handlePasswordVisible(){
      console.log(1)
      this.passwordVisible=!this.passwordVisible
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="less" scoped>
@import "./index.less";
</style>