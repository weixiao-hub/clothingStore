<template>
  <div class="bottom-bar">
    <div class="check-content">
      <CheckButton class="checkAll" :isChecked="isSelectAll" @click.native="checkClick"></CheckButton>
      <span>全选</span>
    </div>
    <div class="price">
      合计：{{ totalPrice}}
    </div>
    <div class="buy" @click="buyGoods">
      购买：{{checkLength}}
    </div>
  </div>
</template>

<script>
  import CheckButton from 'components/content/checkButton/CheckButton'
  export default {
    name: 'CartBottomBar',
    data() {
      return {

      }
    },
    computed: {
      totalPrice() {
        return '￥' + this.$store.getters.cartList.filter(item => {
          return item.checked
        }).reduce((preValue, item) => {
          return preValue + item.price * item.count
        }, 0)
      },
      checkLength() {
        return this.$store.state.cartList.filter(item => item.checked).length
      },
      isSelectAll() {
        if (this.$store.state.cartList.length === 0) return false
        /* return !this.$store.state.cartList.find(item => !item.checked) */

        // 遍历
        for (let item of this.$store.state.cartList) {
          if (!item.checked) {
            return false
          }
        }
        return true
      }
    },
    methods: {
      checkClick() {
        if (this.isSelectAll) {
          this.$store.state.cartList.forEach(item => item.checked = false)
        } else {
          this.$store.state.cartList.forEach(item => item.checked = true)
        }

      },
      buyGoods() {
        if (!this.isSelectAll) {
          this.$toast.show('至少选一件商品', 2000)
        }
      }
    },
    components: {
      CheckButton
    }
  }
</script>

<style scoped>
  .bottom-bar {
    display: flex;
    height: 40px;
    line-height: 40px;
    background-color: #eee;
    position: relative;
    bottom: 134px;
  }

  .check-content {
    height: 100%;
    width: 20%;
    display: flex;
    align-items: center;
    margin-left: 10px;
  }

  .checkAll {
    display: flex;
    width: 20px;
    height: 20px;
    line-height: 20px;
    align-items: center;
    justify-content: center;
    border: solid #aaa 1px;
    border-radius: 50%;
    margin-right: 5px;
  }

  .price {
    width: 40%;
  }

  .buy {

    display: flex;
    justify-content: center;
    flex-grow: 1;
    color: #fff;
    background-color: red;
  }
</style>