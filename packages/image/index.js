import BsImage from "./src/main.vue"

BsImage.install = function (Vue) {
    Vue.component(BsImage.name, BsImage)
}

export default BsImage