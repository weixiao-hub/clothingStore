<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cartListItem v-for="(item, index) in cartList" :key="index" :product="item"></cartListItem>
    </scroll>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import scroll from 'components/common/scroll/Scroll'
  import cartListItem from './cartListItem'
  export default {
    name: 'cartList',
    data() {
      return {

      }
    },
    computed: {
      ...mapGetters(['cartList'])
    },
    activated(){
      this.$refs.scroll.refresh()
    },
    components: {
      scroll,
      cartListItem
    }
  }
</script>

<style scoped>
  .cart-list {
    /* height: 100vh */
    height:100vh
  }

  .content {
    /* height: calc(100% - 44px - 52px); */
    height: calc(100% - 52px - 44px - 40px);
    overflow: hidden;
  }
</style>