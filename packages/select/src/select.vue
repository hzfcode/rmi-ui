<template>
  <div class="bs-select" @click.capture="toggleMenu" ref="sel">
    <div>
      <bs-input
        :readonly="true"
        :placeholder="placeholder"
        :value="inputValue"
        style="width: 100%"
        :is-reverse-icon="menuVisible"
        :suffix-icon="suffixIcon"
        :type="type"
      ></bs-input>
    </div>
    <ul class="bs-select-menu" v-if="menuVisible" ref="selmenu">
      <li
        v-if="selectAll"
        :selectAll="selectAll"
        @click="changeSelect(select0, -1)"
      >
        Please Select
      </li>
      <li
        v-for="(item, index) in options"
        :key="item.id"
        :label="item.name"
        :value="item.id"
        @click="changeSelect(item, index)"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import BsInput from '../../input/src/input.vue'
export default {
  name: 'BsSelect',
  components: {
    BsInput,
  },
  props: {
    options: Array,
    value: [Number, String],
    suffixIcon: { type: String, default: 'bs-icon-arrow-down' },
    type: String,
    placeholder: String,
    selectAll: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      menuVisible: false,
      select0: { id: -1, name: 'Please Select' },
      // inputValue: ""
    }
  },
  watch: {},
  computed: {
    inputValue() {
      //根据id计算选中的值
      if (this.value == -1 || !this.value) return this.select0.name
      // console.log(this.options,"options")
      if (this.options.length > 0) {
        let index = this.options.findIndex(item => {
          return item.id == this.value
        })
        // console.log(index,"index")
        return this.options[index].name
      }
      return ''
    },
  },
  methods: {
    showSel() {
      // console.log("showSel")
      this.menuVisible = true
      document.addEventListener('click', this.hideSel, true)
    },
    hideSel(e) {
      // console.log("hideSel")
      this.menuVisible = false
      //如果是子元素，则阻止事件冒泡
      if (
        this.$refs.sel &&
        this.$refs.sel.contains(e.target) &&
        this.$refs.selmenu &&
        !this.$refs.selmenu.contains(e.target)
      ) {
        // console.log(e.target,"e.target")
        // console.log(this.$refs,"this.$refs")
        e.stopPropagation()
      }
      document.removeEventListener('click', this.hideSel, true)
    },
    toggleMenu() {
      // console.log("toggleMenu")
      this.menuVisible ? this.hideSel() : this.showSel()
      // if(this.menuVisible){
      //   this.hideSel()
      // }else{
      //   this.showSel()
      // }
    },
    changeSelect(item, index) {
      // console.log("changeSelect")
      this.menuVisible = false
      this.$emit('update:value', item.id)
      this.$emit('change', { id: item.id, index: index })
    },
    // inputToggle(){
    //   this.menuVisible=!this.menuVisible
    // }
  },
  created() {},
  mounted() {},
}
</script>
<style lang="less" scoped>
@import './index.less';
</style>
