import BsTree from "./src/tree.vue"

BsTree.install = function (Vue) {
    Vue.component(BsTree.name, BsTree)
}

export default BsTree