<template>
  <div class="detail-info" v-if="Object.keys(detailInfo).length !== 0 ">
    <div class="start clearfix"></div>
    <div class="detail-info-desc" >{{detailInfo.desc}}</div>
    <div class="end"></div>
    <div v-for="(detailInfoItem,detailInfoIndex) in detailInfo.detailImage" :key="detailInfoIndex">
      <div>{{detailInfoItem.key}}</div>
      <div v-for="(item,index) in detailInfoItem.list" :key="index">
        <img :src="item" @load="imgLoad"/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailInfo",
    props: {
      detailInfo: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    data(){
      return {
        count: 0,
        imgLength: 0
      }
    },
    methods: {
      imgLoad(){
          this.$emit('imgLoad')
      }
    },
    watch: {
      detailInfo(){
        // 获取图片的个数
        // for(let item of this.detailInfo.detailImage){
        //   this.imgLength = (this.imgLength - item.list.length) > 0 ? this.imgLength : item.list.length
        //   // console.log(this.imgLength);
        // }
        this.imgLength = this.detailInfo.detailImage[0].list.length
      }
    }
  }
</script>

<style scoped>
  .detail-info{
    padding:20px 6px;
    font-size: 14px;
    line-height: 24px;
  }
  .detail-info img{
    width: 100%
  }
  .start,.end{
    width: 20%;
    height: 1px;
    background: #a3a3a3;
    position: relative;

  }
  .start{
    float: left;
  }
  .end{
    float: right;
  }
  .start::before,.end::after{
    width: 3px;
    height: 3px;
    background: #333;
    position: absolute;
    bottom: 0;
    content: '';
  }
  .end::after{
    right: 0;
  }
  .detail-info-desc{
    clear:both;
    margin: 15px 0;
    text-indent: 2em;
  }
</style>
