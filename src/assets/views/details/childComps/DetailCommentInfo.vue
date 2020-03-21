<template>
  <div v-if="Object.keys(goodRates).length !==0">
    <div id="good-rates">
      <div class="title clearfix">
        <div class="left">用户评价</div>
        <a href="" class="right"> <span>更多</span></a>
      </div>

      <div class="user">
        <img :src="goodRates.user.avatar" alt="">
        <span>{{goodRates.user.uname}}</span>
      </div>

      <div class="user-rates">
        <p>{{goodRates.content}}</p>
        <div class="user-detail">
          <span>{{goodRates.created | showDate}}</span>
          <span>{{goodRates.style}}</span>
        </div>
      </div>

      <div class="info-imgs">
        <img :src="item" alt="" v-for="(item, index) in goodRates.images" :key="index">
      </div>


    </div>
  </div>
</template>

<script>
  import { formatDate } from "common/utils";

  export default {
    name: "DetailGoodRates",
    props: {
      goodRates: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {

    },
    filters: {
      showDate(value) {
        let date = new Date(value * 1000)
        return formatDate(date, 'yyyy-MM-dd hh:mm:ss')
      }
    }
  }
</script>

<style scoped>
  #good-rates {
    padding: 10px;
    border-bottom: #eee solid 10px;
  }

  #good-rates span {
    font-size: 12px;

  }

  .title {
    border-top: 3px solid #eee;
    border-bottom: 3px solid #eee;
    line-height: 40px;
  }

  .left {
    float: left;

  }

  .right {
    float: right;
  }

  .clearfix:after {
    content: '';
    height: 0;
    clear: both;
    display: block;
    visibility: hidden;
  }

  .user,
  .user-detail {
    display: flex;
    align-items: center;
  }

  .user img {
    height: 30px;
    border-radius: 15px;

  }

  .user span {
    line-height: 60px;
    padding: 0 5px;
  }

  .user-rates {
    line-height: 20px;

  }

  .user-detail {
    line-height: 26px;
    color: #aaa;
  }

  .user-detail span {
    margin-right: 15px;
  }
  .info-imgs {
    width: 100%;
    height: 150px;
    
  }
  .info-imgs img{
    height: 20vh;
  }
</style>