import Vue from 'vue'
import App from './App.vue'
import router from './router'
import hljs from 'highlight.js'
import 'highlight.js/styles/agate.css'
import './utils/elemUI'

// 增加自定义命令v-highlight
Vue.directive('highlight', function (el) {
  let blocks = el.querySelectorAll('pre code')
  blocks.forEach(block => {
    hljs.highlightBlock(block)
  })
})
// 增加组定义属性，用于在代码中预处理代码格式
Vue.prototype.$hljs = hljs

import rmi_ui from '../packages'

Vue.use(rmi_ui)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
