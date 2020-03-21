<template>
  <div class="goods-item-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span v-for="column in goods.columns">{{column}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="(item,index) in goods.services" v-if="index< 3">
        <img :src=" goods.services[index].icon" alt="">
        <span>{{goods.services[index].name}}</span>
      </span>
    </div>
    
  </div>
  
</template>

<script>
  export default {
    name: "DetailIteminfo",
    data() {
      return {

      }
    },
    props: {
      goods: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    components: {

    }
  }
</script>

<style scoped>
  .goods-item-info {}

  .info-title {
    font-size: 18px;
    text-indent: 2em;
    margin-bottom: 10px;
  }

  .info-price {
    /* display: flex; */
    position: relative;
    margin-bottom: 10px;

  }

  .info-price .n-price {
    font-size: 24px;
    color: deeppink;
    margin: 0 15px;
  }

  .info-price .o-price {
    font-size: 16px;
    text-decoration-line: line-through;
    color: gray;
  }

  .info-price .discount {
    position: absolute;
    font-size: 12px;
    background-color: #ff5e82;
    border: 1px solid #ff5e82;
    border-radius: 6px;
    color: #ffffff;
  }

  .info-other {
    display: flex;
    margin: 0 5px;
    justify-content: space-between;
    padding-bottom: 10px;
    border-bottom: 1px solid #f1f0f2;

  }

  .info-other span {
    font-size: 8px;
  }

  .info-service {
    display: flex;
    justify-content: space-between;    
    padding:15px 5px 15px ;
    border-bottom: solid 3px #f1f0f2;
  }

  .info-service-item span {
    font-size: 13px;
  }

  .info-service-item img {
    width: 13px;
    vertical-align: middle;
  }
</style>