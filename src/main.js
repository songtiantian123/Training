// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import vueRsource from 'vue-resource'
// Vue.use(vueRsource);

Vue.config.productionTip = false
import 'default-passive-events'
// 引入elementUI
import ElementUI from 'element-ui';
// 引入element样式
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI); // 安装插件

// 安装axios
// import axios from 'axios'
// Vue.use(VueAxios,axios)
// Vue.prototype.axios = axios



import HttpRequest from "./api/HttpRequest.js"
Vue.http = Vue.prototype.$http = HttpRequest
// Vue.http = Vue.prototype.$http = HttpRequest
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  // data:{
  //   bus:new Vue()
  // }
})