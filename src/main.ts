import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueCompositionAPI from '@vue/composition-api'

Vue.config.devtools = true

Vue.use(VueCompositionAPI)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
