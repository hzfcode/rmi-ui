// 为组件提供 install 方法，供组件对外按需引入
import XrInput from './src/input'
XrInput.install = Vue => {
  Vue.component(XrInput.name, XrInput)
}
export default XrInput
