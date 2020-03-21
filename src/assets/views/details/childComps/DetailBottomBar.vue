<template>
  <div class="bottom-bar">
    <div>
      <div class="customer-services">
        <i class="icon"></i>
        <span>客服</span>
      </div>
      <div class="store">
        <i class="icon"></i>
        <span>店铺</span>
      </div>
      <div class="collect">
        <i class="icon" :class="{active: isActive}"></i>
        <span>收藏</span>
      </div>
    </div>
    <div>
      <div class="to-cart" @click="addToCart">加入购物车</div>
      <div class="purchase">购买</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailBottomBar',
    data() {
      return {
        isActive:false
      }
    },
    methods: {
      addToCart() {
        this.$emit('addCart')        
      }
    },
    components: {

    }
  }
</script>

<style scoped>
  .bottom-bar {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 44px;
    font-size: 12px;
    background-color: #fff;
    box-shadow: -1px 0 1px rgba(100,100,100,0.9);
  }

  .bottom-bar>div {
    flex: 1;
    text-align: center;
    display: flex;
  }

  .bottom-bar>div>div {
    flex: 1;
  }

  .to-cart {
    background: #ffde0e;
    line-height: 44px;
  }

  .purchase {
    background: #ff789a;
    line-height: 44px;
    color: #fff;
    font-size: 14px;
  }

  .icon {
    display: block;
    width: 22px;
    height: 22px;
    overflow: hidden;
    margin: 3px auto 4px;
    background: url("~assets/img/detail/detail_bottom.png") no-repeat;
    background-size: 100% auto;
  }

  .customer-services .icon {
    background-position: 0 -96px;
  }

  .store .icon {
    background-position: 0 -52px;
  }

  .collect .icon {
    background-position: 0 2px;
  }

  .collect .active {
    background-position: 0 -26px;
  }
</style>