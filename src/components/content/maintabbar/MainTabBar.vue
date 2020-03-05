<template>
  <div class="MainTabBar">
    <tab-bar>
      <tab-bar-item path="/home" activeColor="red"><span slot="item-icon"></span>
        <div slot="item-text">首页</div><!-- <span slot="item-active"></span> -->
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="red"><span slot="item-icon"></span>
        <div slot="item-text">分类</div><!-- <span slot="item-active"></span> -->
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="red"><span slot="item-icon"></span>
        <div slot="item-text">购物车</div><!-- <span slot="item-active"></span> -->
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="red"><span slot="item-icon"></span>
        <div slot="item-text">我的</div><!-- <span slot="item-active"></span> -->
      </tab-bar-item>
    </tab-bar>
    
  </div>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem'
  import 'assets/css/icommoonstyle.css'
  import "assets/css/base.css"


  export default {
    name: "MainTabBar",
    data() {
      return {

      }
    },
    components: {
      TabBar,
      TabBarItem 
    }
  }
</script>

<style scoped>
  /* 引用css */
  .MainTabBar {
    position: fixed;
    z-index: 99;
  }
</style>