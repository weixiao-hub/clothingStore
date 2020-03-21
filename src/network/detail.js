import { request } from "./request"
export function getDetail(iid) {
  return request({
    url: '/api/wh/detail',
    params: {
      // 这个参数不要写错
      iid
    }
  })
}

export class GoodsInfo {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}

export class Shop {
  constructor(shopInfo) {
    this.cGoods = shopInfo.cGoods
    this.cSells = shopInfo.cSells
    this.name = shopInfo.name
    this.score = shopInfo.score
    this.shopLogo = shopInfo.shopLogo
    this.shopUrl = shopInfo.shopUrl

  }
}

export class GoodsParams {
  constructor(info, rule) {
    this.image = info.image ? info.image[0] : ''
    this.keyI = info.key ? info.key : ''
    this.infos = info.set
    this.disclaimer = rule.disclaimer
    this.keyR = rule.key
    this.sizes = rule.tables
  }
}

export function getRecommend() {
  return request({
    url: '/api/wh/recommend'
  })
}


