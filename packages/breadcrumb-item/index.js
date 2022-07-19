import BsBreadcrumbItem from "./src/breadcrumb-item.vue"

BsBreadcrumbItem.install = function (Vue) {
    Vue.component(BsBreadcrumbItem.name, BsBreadcrumbItem)
}

export default BsBreadcrumbItem