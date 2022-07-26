import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'highlight.js/styles/atom-one-dark.css'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import xml from 'highlight.js/lib/languages/xml'
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('xml', xml)
import vuePlugin from '@highlightjs/vue-plugin'
Vue.use(vuePlugin)

import './utils/elemUI'
import '../assets/css/index.less'
import './less/index.less'

import rmi_ui from '../packages'

Vue.use(rmi_ui)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
