<template>
  <div class="cart-list-item">
    <!-- <div class="btn" :class="{selected:product.check}" @click.stop="btnClick">
      <img src="~assets/img/cart/selected.png" />
    </div> -->
    <div class="btn">
      <CheckButton :isChecked="product.checked" @click.native="checkClick"></CheckButton>
    </div>
    <img :src="product.image" class="item-img" />
    <div class="item-info">
      <p class="title">{{product.title}}</p>
      <p class="desc">{{product.desc}}</p>
      <div class="item-info-bottom">
        <span class="price">{{ product.price}}</span>
        <span class="count">x {{product.count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import CheckButton from 'components/content/checkButton/CheckButton'
  export default {
    name: 'cartListItem',
    data() {
      return {

      }
    },
    props: {
      product: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      checkClick() {
        // 选中取消商品
        this.product.checked = !this.product.checked
      }
    },
    components: {
      CheckButton
    }
  }
</script>

<style scoped>
  .cart-list-item {
    padding: 4px 5px;
    border-bottom: 1px solid #eee;
    display: flex;
    font-size: 12px;
    width: 100%;
    align-items: center;
    justify-content: center;
  }

  .btn {
    border: 1px solid #aaa;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .btn img {
    width: 100%;
  }

  .selected {
    background: #ff5777;
    border: 1px solid #ff5777;
  }

  .item-img {
    width: 80px;
    height: 100px;
    margin: 0 5px;
    display: block;
    border-radius: 5px;

  }

  .item-info {
    height: 100px;
    position: relative;
    width: 60%;
    float: right;
  }

  .title,
  .desc {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 14px;
    line-height: 24px;
  }

  .desc {
    font-size: 12px;
  }

  .item-info-bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    line-height: 30px;
  }



  .price {
    color: orange;
    float: left;
    font-size: 14px;
  }

  .count {
    color: gray;
    float: right;
  }
</style>