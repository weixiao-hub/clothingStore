<template>
  <div class="params" v-if="Object.keys(goodsParams).length !== 0">
    <div>{{goodsParams.keyI}}</div>
    <table class="infos" cellspacing="0" cellpadding="0">
      <tr v-for="(item,index) in goodsParams.infos" :key="index">
        <td>{{item.key}}</td>
        <td>{{item.value}}</td>
      </tr>
    </table>
    <div class="disclaimer">{{goodsParams.disclaimer}}</div>
    <div>{{goodsParams.keyR}}</div>
    <div v-for="(setItem,setIndex) in goodsParams.sizes" :key="setIndex">
      <table class="sizes" cellspacing="0" cellpadding="0">
        <tr v-for="(item,index) in setItem.values()" :key="index">
          <td v-for="(i,x) in item.values()" :key="x">{{i}}</td>
        </tr>
      </table>
    </div>
    <div v-if="goodsParams.image">
      <img :src="goodsParams.image"/>
    </div>




  </div>
</template>

<script>
  export default {
    name: "DetailGoodParams",
    props: {
      goodsParams: {
        type: Object,
        default(){
          return {
          }
        }
      }
    }
  }
</script>

<style scoped>
  .params{
    padding: 5px 4px;
    text-align: center;

  }
  .infos,.sizes{
    margin: 10px auto;
    width:90%;
  }
  
.infos td,.sizes td{
  border-bottom: 1px solid #eee;
  font-size: 12px;
  padding:8px 5px;
}
.infos td:nth-child(even) {
    text-align: left;
    padding-left: 20px;
    color: deeppink;
  }
  .disclaimer{
    text-align: left;
  }
  .params img{
    width: 90%;
  }
</style>
