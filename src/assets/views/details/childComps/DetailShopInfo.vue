<template>
  <div class="detail-shop-info" v-if="Object.keys(shopInfo).length !== 0">
    <div class="shop-logo">
      <a :href="shopInfo.shopUrl">
        <img :src="shopInfo.shopLogo" />
        <span>{{shopInfo.name}}</span>
      </a>
    </div>

    <div class="desc">
      <ul class="desc-sells desc-item">
        <li>
          <p>{{shopInfo.cSells | sellCountFilter}} </p>
          <p>总销量</p>
        </li>
        <li>
          <p>{{shopInfo.cGoods}}</p>
          <p>全部宝贝</p>
        </li>
      </ul>
      <table class="desc-item desc-score" v-if="shopInfo.score" cellpadding="0" cellspacing="0">
        <tr v-for="(item,index) in shopInfo.score" :key="index">
          <td class="desc-score-name">{{item.name}}</td>
          <td class="desc-score-score" :class="{cor1:item.isBetter, cor2:(!item.isBetter)}">{{item.score}}</td>
          <td><span :class="{bg1:item.isBetter,bg2:!item.isBetter}">{{item.isBetter? '高':'低'}}</span></td>
        </tr>
      </table>

    </div>

    <div class="enter"><a :href="shopInfo.shopUrl"><span>进店逛逛</span></a></div>

  </div>
</template>

<script>
  export default {
    name: "DetailShopInfo",
    props: {
      shopInfo: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    filters: {
      sellCountFilter(value){
        let result = value
        if(result > 1000){
          result = (result/1000).toFixed(1) + '万'
        }
        return result
      }
    }
  }
</script>

<style scoped>
  .detail-shop-info{
    padding: 20px 5px;
    border-bottom: 5px solid #eee;
    border-top: 5px solid #eee;
    font-size: 12px;
  }
  .shop-logo{
    margin-bottom: 15px;
  }
  .shop-logo img{
    width: 30px;
    border-radius: 15px;
    vertical-align: middle;
    border: 1px solid #eee;
  }
  .shop-logo span{
    font-weight: bold;
    font-size: 14px;
    margin:0 5px;
  }


  .desc{
    display: flex;
    align-items: center;
  }

  .desc-item{
    flex: 1;
    padding: 0 10px;
  }
  .desc-item li{
    list-style-type: none;
  }

  .desc-sells{
    display: flex;
    border-right: 1px solid #eee;
  }
  .desc-sells li{
    flex: 1;
    text-align: center;
    line-height: 20px;
  }
  .bg1 ,.bg2 {
    font-size: 14px;
  }

  .bg1{
    background: #ec5c52;
    color: #fff;
  }
  .bg2{
    background: #7bac56;
    color: #fff;
  }
  .cor1{
    color:#ec5c52 ;
  }
  .cor2{
    color: #7bac56;
  }
  .desc-score{
    line-height: 18px;
  }
  .desc-score span{
    border-radius: 2px;
  }
  .desc-score-name{
    width: 40%;
  }
  .desc-score-score{
    width: 25%;
  }

  .enter{
    text-align: center;
    margin-top: 10px;
  }
  .enter span{
    background: #eee;
    line-height: 24px;
    border-radius: 15px;
    background: #eee;
    padding: 4px 30px;
  }

</style>
