import Vue from 'vue'
import Main from './pages/Main'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(Main)
}).$mount('#app')
