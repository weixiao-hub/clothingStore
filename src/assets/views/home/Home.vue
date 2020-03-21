<template>
  <div id='home'>
    <nav-bar class="home-nav">
      <div slot="center">购车街</div>
    </nav-bar>
    <TabControl :titles="['流行', '新款', '精选']" @tabClick="tabClick" ref="TabControl1" v-show="isTabFixed"
      class="tab-control">
    </TabControl>
    <Scroll class="content" ref="scroll" :probeType=3 @scroll="contentScroll" :pullUpLoad=true @pullingUp="loadMore">
      <div>
        <HomeSwiper :banners="banners" @swiperImageLoad="swiperImageLoad"></HomeSwiper>
        <HomeRecommend :recommends="recommends"></HomeRecommend>
        <HomeFeature></HomeFeature>
        <TabControl :titles="['流行', '新款', '精选']" @tabClick="tabClick" ref="TabControl2">
        </TabControl>
        <GoodsList :goods="showGoods"></GoodsList>
      </div>
    </Scroll>
    <back-top @click.native="backTop" v-show="isActive" />

  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabcontrol/TabControl'
  import Scroll from 'components/common/scroll/Scroll'
  import GoodsList from 'components/content/goods/GoodsList'
  import BackTop from 'components/content/backTop/BackTop'

  import HomeSwiper from './childComponents/HomeSwiper'
  import HomeRecommend from './childComponents/HomeRecommend'
  import HomeFeature from './childComponents/HomeFeature'

  import { getHomeMultidata, getHomeGoods } from 'network/home'
  import { itemListenerMixin,backTopMixin } from 'common/mixin'


  import BScroll from 'better-scroll'
  export default {
    name: "Home",
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': { page: 0, list: [] },
          'new': { page: 0, list: [] },
          'sell': { page: 0, list: [] },
        },
        currentType: 'pop',
        tabOffsetTop: 0,
        // 吸顶
        isTabFixed: false,
        //  滚动的位置
        scrollY: 0,
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      },

    },
    activated() {
      // 设置时间为1ms，才不会自动滚回顶部
      this.$refs.scroll.scrollTo(0, this.scrollY, 1)
      this.$refs.scroll.refresh()
    },
    deactivated() {
      // 保存滚动的y值
      this.scrollY = this.$refs.scroll.getScrollY()

      // 2.取消全局事件的监听
      this.bus.$off('imageLoad', this.itemImgListener)
    },
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommend,
      HomeFeature,
      TabControl,
      GoodsList,
      Scroll,
    },
    mixins: [backTopMixin],
    created() {
      // 1.请求数据
      this.getHomeMultidata()

      // 2. 请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')


    },
    mounted() {
     
    },
    methods: {
      /* 
      事件监听相关
      */
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break;
          case 1:
            this.currentType = 'new'
            break;
          case 2:
            this.currentType = 'sell'
            break;
        }
        this.$refs.TabControl1.currentIndex = index
        this.$refs.TabControl2.currentIndex = index
      },
     
      contentScroll(position) {
        // 滚动到某一位置时，显示返回顶部按钮
        this.isActive = -position.y > 1000
        
        this.isTabFixed = (-position.y) >= this.tabOffsetTop
      },
      // 上拉加载
      loadMore() {
        this.getHomeGoods(this.currentType)
      },
      // 等待轮播图加载完成后，完成tabControl的吸顶效果
      swiperImageLoad() {
        // tabControl 吸顶效果
        // 所有的组件都有一个属性$el,用于获取组件中的元素
        // console.log(this.$refs.TabControl.$el.offsetTop)
        this.tabOffsetTop = this.$refs.TabControl2.$el.offsetTop

      },


      /* 
      网络请求相关
       */
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },
      getHomeGoods(type) {
        let page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1

          // 完成了上拉加载更多后
          this.$refs.scroll.finishPullUp()
        })
      },

    },

  }
</script>

<style scoped>
  #home {
    /* vh  视口的高度 */
    height: 100vh;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    box-shadow: -2px 0 rgba(255, 255, 255, alpha);
    /*  position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 99; */
  }


  .content {
    position: absolute;
    height: calc(100% - 96px);
    overflow: hidden;
    top: 44px;
  }

  .tab-control {
    position: relative;
    z-index: 99;
  }
</style>