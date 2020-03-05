<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" class="tab-control-item" 
    :class="{active: index===currentIndex}"
    @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabContrl",
    data() {
      return {
        currentIndex: 0
      }
    },
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index
        this.$emit('tabClick',index)
      }
    },
    components: {

    }
  }
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    background-color: #ffffff;
    margin-top: -5px;
  }

  .tab-control-item {
    flex: 1;


  }

  .tab-control .tab-control-item span {
    font-size: 15px;
    padding: 5px;
  }

  .active {
    color: deeppink;
  }
  .active span {
    border-bottom: deeppink solid 2px;
  }
</style>