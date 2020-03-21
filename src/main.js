import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/toast'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
// 创建事件总线：
Vue.prototype.bus = new Vue()
// 安装toast 插件
Vue.use(toast)
// 解决移动端300ms
FastClick.attach(document.body)
// 使用图片懒加载,
// 这个对象里，设置加载时的一些操作，比如占位图，具体看官方文档
Vue.use(VueLazyLoad,{
  loading: require('./assets/img/common/placeholder.png')
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
