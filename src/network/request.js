import axios from 'axios'


export function request(config) {
  // 1. 创建 axios实例
  const instance1 = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000,
  })

  // 请求拦截器
  instance1.interceptors.request.use(res => {
    return res
  },
    err => {
      console.log(err);
    })
  // 响应拦截
  instance1.interceptors.response.use(res => {
    // 拦截后，要返回
    return res.data
  }, 
  err => {
    console.log(err);
    
  })

  // 发送真正的网络请求
  // instance1(config) 实际上就是返回的promise
  return instance1(config)
}