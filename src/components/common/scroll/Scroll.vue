<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "scroll",
    data() {
      return {
        scroll: null
      }
    },
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false,
      }
    },
    components: {

    },

    mounted() {
      // 1. 创建scroll实例
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,  //点击事件是否生效
        probeType: this.probeType,  //监听滚动位置
        pullUpLoad: this.pullUpLoad,  //上拉
      })
      // 2. 监听滚动位置
      if (this.probeType === 2 || this.probeType === 3) {
        this.scroll.on('scroll', (p) => {
          this.$emit('scroll', p)
        })
      }
      // 3. 监听上拉到底部
      if (this.pullUpLoad) {
        this.scroll.on('pullingUp', () => {
          this.$emit('pullingUp')
        })
      }

    },
    methods: {
      //  500ms  回到顶部  es6语法，可以给形参设置初始值
      scrollTo(x, y, time) {
        this.scroll && this.scroll.scrollTo(x, y, time)
      },
      // 重新计算滚动区域的大小
      refresh() {
        this.scroll && this.scroll.refresh()
      },
      // 加载更多后
      finishPullUp() {
        this.scroll && this.scroll.finishPullUp()
      },
      // 获取滚动的y轴位置
      getScrollY() {
        return this.scroll ? this.scroll.y : 0
      }

    }
  }
</script>

<style scoped>
 
</style>