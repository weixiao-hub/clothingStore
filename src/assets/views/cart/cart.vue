<template>
  <div class="cart">
    <navbar class="nav-bar">
      <div slot="center">购物车({{length}})</div>
    </navbar>
    <!-- 商品列表 -->
    <cartList></cartList>
    <!-- 底部汇总 -->
    <CartBottomBar></CartBottomBar>
  </div>
</template>

<script>
  import navbar from 'components/common/navbar/NavBar'
  import cartList from './childComps/cartList'
  import CartBottomBar from './childComps/CartBottomBar'
  import { mapGetters } from 'vuex'
export default {
    name: "cart",
    data() {
      return {

      }
    },
    computed: {
      // 两种语法
      /* ...mapGetters([
        'cartListLength'
      ]) */
      // 可以用对象来自定义名字
      ...mapGetters({
        length:'cartListLength'
      })
    },
    components: {
      navbar,
      cartList,
      CartBottomBar
    }
  }
</script>

<style scoped>
  .nav-bar {
    position: relative;
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 700;
    z-index: 99;
  }
</style>