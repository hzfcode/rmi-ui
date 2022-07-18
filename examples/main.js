import Vue from 'vue'
import App from './App.vue'

import rmi_ui from '../packages'

Vue.use(rmi_ui)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
