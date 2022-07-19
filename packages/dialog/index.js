import BsModal from "./src/dialog.vue"

BsModal.install = function (Vue) {
    Vue.component(BsModal.name, BsModal)
}

export default BsModal