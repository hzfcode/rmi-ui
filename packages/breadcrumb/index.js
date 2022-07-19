import BsBreadcrumb from "./src/breadcrumb.vue"

BsBreadcrumb.install = function (Vue) {
    Vue.component(BsBreadcrumb.name, BsBreadcrumb)
}

export default BsBreadcrumb