import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import './assets/commom.less'
import VueRouter from 'vue-router'
import axios from 'axios'
import moment from 'moment'
import { Message } from 'element-ui';
Vue.prototype.axios = axios
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.config.productionTip = false
// axios.defaults.baseURL = 'http://family.ishuangsheng.cn:8000/api'
// axios拦截器
axios.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    if (error.response.statusText) {
      Message({
        showClose: true,
        message: error.response.statusText,
        type: 'error'
      })
    }
    return Promise.reject(error.response)
  })
// 全局时间过滤器
Vue.filter('dateFormat', function (dateStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dateStr).format(pattern)
});
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
