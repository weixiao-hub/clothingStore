<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "recommend",
    data() {
      return {

      }
    },
    props: {
      recommends: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {

    }
  }
</script>

<style scoped>
  .recommend {
    display: flex;
    width: 100%;
    padding: 10px 0 30px;
    border-bottom: 10px solid#eae9e9;
  }

  .recommend-item {
    text-align: center;
    font-size: 14px
  }

  .recommend-item img {
    width: 100%;
    padding: 5px;

  }
</style>