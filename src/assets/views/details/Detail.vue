<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav-bar" @titleClick="titleClick" ref="nav"></detail-nav-bar>
    <scroll class="content" ref="scroll" :probeType=3 @scroll="contentScroll">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <DetailIteminfo :goods="goods"></DetailIteminfo>
      <DetailShopInfo :shopInfo="shopInfo"></DetailShopInfo>
      <DetailGoodInfo :detailInfo="detailInfo" @imgLoad="imgLoad"></DetailGoodInfo>
      <DetailGoodParams :goodsParams="goodsParams" ref="goodsParams"></DetailGoodParams>
      <DetailCommentInfo :goodRates="commentInfo" ref="goodRates"></DetailCommentInfo>
      <goodsList :goods="recommends" ref="recommends"></goodsList>
    </scroll>
    <BackTop @click.native="backTop" v-show="isActive"></BackTop>
    <DetailBottomBar @addCart="addToCart"></DetailBottomBar>
  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar'
  import DetailSwiper from './childComps/DetailSwiper'
  import DetailIteminfo from './childComps/DetailIteminfo'
  import DetailShopInfo from './childComps/DetailShopInfo'
  import DetailGoodInfo from './childComps/DetailGoodInfo'
  import DetailGoodParams from './childComps/DetailGoodParams'
  import DetailCommentInfo from './childComps/DetailCommentInfo'
  import DetailBottomBar from './childComps/DetailBottomBar'


  import { getDetail, GoodsInfo, Shop, GoodsParams, getRecommend } from 'network/detail.js'
  import { debounce } from 'common/utils'
  import { itemListenerMixin, backTopMixin } from 'common/mixin'
  import { mapActions } from 'vuex'


  import goodsList from 'components/content/goods/GoodsList'
  import BackTop from 'components/content/backTop/BackTop'

  import scroll from 'components/common/scroll/Scroll'

  export default {
    // 可以在keep-alive中用到这个文件名
    name: "detail",
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shopInfo: {},
        detailInfo: {},
        goodsParams: {},
        commentInfo: {},
        recommends: [],
        themeTopYs: [],
        getThemeTopYs: null,
      }
    },
    mixins: [itemListenerMixin, backTopMixin],
    created() {
      // 1.保存id
      this.iid = this.$route.params.iid

      // 2.根据id请求数据
      getDetail(this.iid).then(res => {
        // 1.获取顶部的轮播图数据
        const data = res.result
        this.topImages = data.itemInfo.topImages

        // 2.获取商品信息
        this.goods = new GoodsInfo(data.itemInfo, data.columns, data.shopInfo.services)

        // 3. 创建店铺信息的对象
        this.shopInfo = new Shop(data.shopInfo)

        // 4.保存商品的详情数据
        this.detailInfo = data.detailInfo

        // 5. 获取参数信息
        this.goodsParams = new GoodsParams(data.itemParams.info, data.itemParams.rule)

        // 6取出评论
        if (data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0]
          this.recommends = data.rate.list[0].image
        }

        //保存锚点的高度
        // dom更新后调用这个方法，
        // 虽然dom已经更新，但是图片没有加载完，所以offsetTop位置不对
        /* this.$nextTick(() => {
          this.themeTopYs = []
          this.themeTopYs.push(0)
          this.themeTopYs.push(this.$refs.goodsParams.$el.offsetTop)
          this.themeTopYs.push(this.$refs.goodRates.$el.offsetTop)
          this.themeTopYs.push(this.$refs.recommends.$el.offsetTop)
          console.log(this.themeTopYs);
        }) */

      })

      // 3.请求推荐数据
      getRecommend().then(res => {
        this.recommends = res.data.list
      })

      // 4.保存getThemeTopYs的值
      this.getThemeTopYs = debounce(() => {
        this.themeTopYs = []
        this.themeTopYs.push(0)
        this.themeTopYs.push(this.$refs.goodsParams.$el.offsetTop)
        this.themeTopYs.push(this.$refs.goodRates.$el.offsetTop)
        this.themeTopYs.push(this.$refs.recommends.$el.offsetTop)
        this.themeTopYs.push(Number.MAX_VALUE)
      }, 100)


    },
    mounted() {


    },
    destroyed() {
      this.bus.$off('imgLoad', this.itemImgListener)
    },
    methods: {
      ...mapActions(['addCart']),
      imgLoad() {
        this.refresh()
        // this.$refs.scroll.refresh();
        this.getThemeTopYs()

      },
      titleClick(index) {
        this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 100)
      },
      contentScroll(position) {
        // 获取滚动页面的y值
        const positionY = - position.y

        // 和主题中的值进行对比
        const length = this.themeTopYs.length
        /* for (let i = 0; i < length; i++) {
          if (this.currentIndex !== i &&
            (i < length - 1 && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i + 1]
              || (i === length - 1) && positionY >= this.themeTopYs[i])) {
            this.currentIndex = i
            this.$refs.nav.currentIndex = this.currentIndex
          }
        } */
        // hack做法
        for (let i = 0; i < length - 1; i++) {
          if (this.currentIndex !== i && (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i + 1])) {
            this.currentIndex = i
            this.$refs.nav.currentIndex = this.currentIndex
          }
        }

        // 是否显示返回顶部按钮
        this.isActive = -position.y >= 1000

      },
      addToCart() {
        // 1. 获取购物车需要展示的信息 
        const product = {}

        product.image = this.topImages[0]
        product.title = this.goods.title
        product.desc = this.goods.desc
        product.price = this.goods.realPrice
        product.iid = this.iid
        product.count = 1
        product.checked = true
        // 2.将商品添加到购物车
        /* this.$store.dispatch('addCart', product).then(res => {
          console.log(res);

        }) */
        this.addCart(product).then(res => {
          this.$toast.show(res, 2000)
        })
      },

    },
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailIteminfo,
      DetailShopInfo,
      scroll,
      DetailGoodInfo,
      DetailGoodParams,
      DetailCommentInfo,
      goodsList,
      DetailBottomBar,
    }
  }
</script>

<style scoped>
  #detail {
    position: relative;
    background-color: #fff;
    z-index: 100;
    height: 100vh;
  }

  .content {
    height: calc(100% - 44px - 44px);
    position: relative;
  }

  .detail-nav-bar {
    position: relative;
    background-color: #fff;
    z-index: 102;
  }
</style>