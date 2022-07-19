import BsPagination from "./src/pagination.vue"

BsPagination.install = function (Vue) {
    Vue.component(BsPagination.name, BsPagination)
}

export default BsPagination