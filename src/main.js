import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import './components/common/api.js'
import store from './store/index.js'
import Vuex from 'vuex'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(router)
Vue.use(Vuex)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
