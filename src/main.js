import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './plugins/element.js'
import {post,get,del,put} from './request'

Vue.config.productionTip = false
Vue.prototype.$get=get;
Vue.prototype.$post=post;
Vue.prototype.$put=put;
Vue.prototype.$del=del;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

/*访问页面之前验证token*/
// router.beforeEach((to, from, next) => {
//   if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
//     if (store.getters.token) {  // 获取当前的token是否存在
//       next();
//     }
//     else {
//       Vue.prototype.$message.warning('登录过期，请重新登录');
//       next({
//           path: '/',
//       })
//     }
//   }
//   else {
//     next();
//   }
// })
