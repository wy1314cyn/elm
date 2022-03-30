import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'font-awesome/css/font-awesome.min.css'
import axios from 'axios'
import qs from 'qs'
import ElementUI from 'element-ui' //element-ui的全部组件
import 'element-ui/lib/theme-chalk/index.css'//element-ui的css
Vue.use(ElementUI) //使用elementUI
import{
  getCurDate,
  setSessionStorage,
  getSessionStorage,
  removeSessionStorage,
  setLocalStorage,
  getLocalStorage,
  removeLocalStorage
} from './common.js'
Vue.config.productionTip = false
//设置全局路径
axios.defaults.baseURL= 'http://localhost:8082'
//将axios和qs挂载到Vue原型上
Vue.prototype.$axios = axios
Vue.prototype.$qs = qs
Vue.prototype.$getCurDate = getCurDate
Vue.prototype.$setSessionStorage = setSessionStorage
Vue.prototype.$getSessionStorage = getSessionStorage
Vue.prototype.$removeSessionStorage = removeSessionStorage
Vue.prototype.$setLocalStorage = setLocalStorage
Vue.prototype.$getLocalStorage = getLocalStorage
Vue.prototype.$removeLocalStorage = removeLocalStorage
router.beforeEach(function(to, from, next) {
  let user = sessionStorage.getItem('user');
  //除了登陆、注册、首页、商家列表、商家信息之外，都需要判断是否登陆了
  if (!(to.path == '/' || to.path == '/index' || to.path == '/businessList' || to.path == '/businessInfo' || to.path ==
          '/login' || to.path == '/register')) {
      if (user == null) {
          router.push('/login');
          location.reload();
      }
  }
  next();
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
