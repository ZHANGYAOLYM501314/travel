import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  // 首页
  {
    path: '/',
    name: 'home',
    component: Home
  },
  // 社区
  {
    path: '/Destination',
    name: 'Destination',
    component: () => import('../views/Destination')
  },
  // 社区详情
  {
    path: '/DestinationDetail',
    name: 'DestinationDetail',
    component: () => import('../views/DestinationDetail')
  },
  // 我的
  {
    path: '/My',
    name: 'My',
    component: () => import('../views/My')
  },
  // 我的收藏
  {
    path: '/MyCollect',
    name: 'MyCollect',
    component: () => import('../views/MyCollect')
  },
  // 我的动态
  {
    path: '/MyDynamic',
    name: 'MyDynamic',
    component: () => import('../views/MyDynamic')
  },
  // 我的游记
  {
    path: '/MyTravel',
    name: 'MyTravel',
    component: () => import('../views/MyTravel')
  },
  // 我的浏览历史
  {
    path: '/MyBrowsingHistory',
    name: 'MyBrowsingHistory',
    component: () => import('../views/MyBrowsingHistory')
  },
  // 我的消息
  {
    path: '/MyMssage',
    name: 'MyMssage',
    component: () => import('../views/MyMssage')
  },
  // 我的清除缓存
  {
    path: '/MyClearCache',
    name: 'MyClearCache',
    component: () => import('../views/MyClearCache')
  },
  // 我的意见反馈
  {
    path: '/MyFeedback',
    name: 'MyFeedback',
    component: () => import('../views/MyFeedback')
  },
  // 攻略
  {
    path: '/Strategy',
    name: "Strategy",
    component: () => import('../views/Strategy')
  },
  // 景点玩乐
  {
    path: '/Scenic',
    name: "Scenic",
    component: () => import('../views/Scenic')
  },
  // 美食
  {
    path: '/Cate',
    name: "Cate",
    component: () => import('../views/Cate')
  },
  // 美食详情
  {
    path: '/CateDetail',
    name: "CateDetail",
    component: () => import('../views/CateDetail')
  },
  // 美食图片详情
  {
    path: '/CateImgDetail',
    name: "CateImgDetail",
    component: () => import('../views/CateImgDetail')
  },
  // 游记
  {
    path: '/Travel',
    name: "Travel",
    component: () => import('../views/Travel')
  },
  // 游记发表
  {
    path: '/TravelPublish',
    name: "TravelPublish",
    component: () => import('../views/TravelPublish')
  },
  // 游记详情页
  {
    path: '/TravelDetail',
    name: "TravelDetail",
    component: () => import('../views/TravelDetail')
  },
  // 人气榜
  {
    path: '/HomeMoods',
    name: "HomeMoods",
    component: () => import('../views/HomeMoods')
  },
  // 人气榜详情
  {
    path: '/MoodsDetail',
    name: "MoodsDetail",
    component: () => import('../views/MoodsDetail')
  },
  // 搜索历史
  {
    path: '/SearchHistory',
    name: 'SearchHistory',
    component: () => import('../views/SearchHistory.vue')
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router