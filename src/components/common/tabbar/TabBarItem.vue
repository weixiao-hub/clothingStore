<template>
  <div class="tab-bar-item">
    <div  :style="activeStyle">
      <slot name="item-icon"></slot>
    </div>
    <!-- <div v-else>
      <slot name="item-active"></slot>
    </div> -->
    <!-- 动态绑定样式  -->
    <div :style="activeStyle" @click="TabBarClick">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    data() {
      return {

      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
        return this.isActive ? { color: this.activeColor } : null
      }
    },
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'yellow',
      }
    },
    methods: {
      TabBarClick() {
        // console.log(this.path);
        if (this.$route.path != this.path) {
          this.$router.push(this.path)
        }
      }
    },
    components: {

    }
  }
</script>

<style scoped>
  .tab-bar-item {
    /*每个item均等分 */
    flex: 1;
    /* 水平居中 */
    text-align: center;
    height: 49px;
    font-size: 14px;
    margin-top: 3px;
  }

  .current {
    color: red;
  }
</style>