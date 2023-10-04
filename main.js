import App from './App'
import uView from 'uview-ui'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
import store from 'src/store/index.js'
Vue.config.productionTip = false
App.mpType = 'app'
Vue.use(store)
Vue.use(uView);
Vue.prototype.$store = store
const app = new Vue({
  ...App,
  store
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app,
  }
}
// #endif