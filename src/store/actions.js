import { ADD_COUNTER, ADD_TO_CART } from './mutations-types'
export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      // 判断购物车是否已经有了这个商品，如果没有直接添加，如果有了，数量加1
      //  1.遍历购物车
      // 使用find方法
      let product = context.state.cartList.find(item => item.iid === payload.iid)

      // 对购物车中的某个商品进行操作
      if (product) {
        // 如果购物车中已经有这个商品，则数量加1
        context.commit(ADD_COUNTER, product)
        resolve('商品数量加1')
      } else {
        // 如果没有，则添加商品
        context.commit(ADD_TO_CART, payload)
        resolve('添加到购物车成功')
      }
    })


  }
}