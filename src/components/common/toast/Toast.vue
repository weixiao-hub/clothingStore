<template>
  <div class="toast" v-show="isShow">
    {{message}}
  </div>
</template>

<script>
  export default {
    name: "Toast",
    data() {
      return {
        message: '',
        isShow: false
      }
    },
    methods: {
      show(text = '默认文字', duration = 15000) {
        this.message = text
        this.isShow = true
        setTimeout(() => {
          this.isShow = false
          this.message = ''
        }, duration)
      }
    }
  }
</script>

<style scoped>
  .toast {
    color: #fff;
    background: rgba(0, 0, 0, 0.6);
    font-size: 14px;
    padding: 2px 10px;
    position: absolute;
    border-radius: 5px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999999999999;
  }
</style>