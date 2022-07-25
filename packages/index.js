import BsButton from './button/index.js'
import BsInput from './input/index.js'
import BsDialog from './dialog/index.js'
import BsMessage from './message/index.js'
import BsBreadcrumb from './breadcrumb/index.js'
import BsBreadcrumItem from './breadcrumb-item/index.js'
import BsLoading from './loading/index.js'
import BsPagination from './pagination/index.js'
import BsSelect from './select/index.js'
import BsTitle from './title/index.js'
import BsImage from './image/index.js'
import BsTree from './tree/index.js'
const components = {
  BsButton,
  BsInput,
  BsDialog,
  BsBreadcrumb,
  BsBreadcrumItem,
  BsPagination,
  BsSelect,
  BsTitle,
  BsImage,
  BsTree,
}
const install = function (Vue) {
  Object.values(components).forEach(component => {
    Vue.component(component.name, component)
  })
  Vue.prototype.$BsMessage = BsMessage
  Vue.prototype.$BsLoading = BsLoading
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
// 按需引入组件不支持 需要全局引入
export default {
  install,
  ...components,
  BsMessage,
}
