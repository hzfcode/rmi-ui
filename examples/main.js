import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './utils/elemUI'

import rmi_ui from '../packages'

Vue.use(rmi_ui)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
