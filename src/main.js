import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import Qs from 'qs'
import VueRouter from 'vue-router'
import RouterConfig from './router/RouterConfig'   //引入路由配置
import ossFn from './js/ossFn'    //引入ajax方法
require('!style-loader!css-loader!less-loader!./less/common.less')

import 'element-ui/lib/theme-chalk/index.css';

import ElementUi from 'element-ui';

Vue.use(ElementUi);
// Vue.use(Button);

//引入iconFont字体图标：
import './assets/iconFont/iconfont.css'
import './assets/iconFont/iconfont.js'

// Vue.prototype.baseUrl='http://192.169.10.134:8080/topcheer-oss/';
Vue.prototype.baseUrl = 'http://192.169.2.250:8880/OSS';

Vue.prototype.axios = Axios;
Vue.prototype.qs = Qs;
Vue.prototype.oss = ossFn;

Vue.use(VueRouter);

const router = new VueRouter(RouterConfig);

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
