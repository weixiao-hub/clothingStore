<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>


  export default {
    name: "TabBar",

    data() {
      return {

      }
    },
    components: {

    }
  }
</script>

<style scoped>
  #tab-bar {
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    bottom: 0;
    /* 要想左右撑开，需要设置左右属性 */
    left: 0;
    right: 0;
    box-shadow: 0 -2px 1px rgba(100, 100, 100, .2);
  }
</style>