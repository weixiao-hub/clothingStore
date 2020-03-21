import { debounce } from './utils'
import BackTop from 'components/content/backTop/BackTop'
export const itemListenerMixin = {
  date() {
    return {
      itemImgListener: null,
      refresh: null,
    }
  },
  mounted() {
    this.refresh = debounce(this.$refs.scroll.refresh, 50)
    // 保存监听事件
    this.itemImgListener = () => {
      this.refresh()
    }
    this.bus.$on = ('imgLoad', this.itemImgListener)
  },


}

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    backTop() {
      this.$refs.scroll && this.$refs.scroll.scrollTo(0, 0, 500)
    }
  }
}