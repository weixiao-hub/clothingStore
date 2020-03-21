<template>
  <div class="check-button" :class="{check:isChecked}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
  export default {
    name: 'CheckButton',
    data() {
      return {

      }
    },
    props: {
      isChecked: {
        type: Boolean,
        default: false
      }
    },
    methods: {
     
    },
    components: {

    }
  }
</script>

<style scoped>
 
  .check {
    border-color: #aaa;
    background-color: red;
  }
</style>