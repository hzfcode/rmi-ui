import BsTitle from "./src/title.vue"

BsTitle.install = function (Vue) {
    Vue.component(BsTitle.name, BsTitle)
}

export default BsTitle