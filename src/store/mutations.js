import { ADD_COUNTER, ADD_TO_CART } from './mutations-types'
export default {
  // mutations唯一的目的就是修改state中的状态
  // mutations中的每一个方法尽可能只做一件事
  [ADD_COUNTER](state, payload) {
    payload.count++

  },
  [ADD_TO_CART](state, payload) {
    state.cartList.push(payload)
  }
}