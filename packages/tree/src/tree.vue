<template>
  <div class="bs-tree">
    <tree-node
      v-for="(item, index) in cloneData"
      :key="index"
      :data="item"
      :show-checkbox="showCheckbox"
    ></tree-node>
  </div>
</template>
<script>
import TreeNode from "./node.vue";
import { deepCopy } from "./model/util";
export default {
  name: "BsTree",
  components: { TreeNode },
  props: {
    data: {
      type: Array,
      default() {
        return [];
      },
    },
    showCheckbox: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      cloneData: [],
    };
  },
  methods: {
    rebuildData() {
      this.cloneData = deepCopy(this.data);
    },
    emitEvent(eventName, data) {
      this.$emit(eventName, data, this.cloneData);
    },
  },
  created() {
    this.rebuildData();
  },
  watch: {
    data() {
      this.rebuildData();
    },
  },
};
</script>