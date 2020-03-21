import Toast from 'components/common/toast/Toast'
const obj = {}

obj.install = function (Vue) {
  // 1.创建组件构造器
  const toastConstruct = Vue.extend(Toast)

  // 2.创建一个组件对象
  const toast = new toastConstruct()

  // 3.挂载到一个元素上
  toast.$mount(document.createElement('div'))

  // 4.toast.$el 就是对应的div
  document.body.appendChild(toast.$el)
  Vue.prototype.$toast = toast
}
export default obj