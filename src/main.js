import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../mock/mock.js'
import axios from "axios"
import VueCookies from 'vue-cookies'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入echarts
import echarts from "echarts"
import './permission'


Vue.use(ElementUI)
Vue.use(VueCookies)
//配置默认过期日期:7天
VueCookies.config("7d");
Vue.prototype.$axios = axios;
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
  