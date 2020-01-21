<template>
  <!-- 我的 -->
  <div id="My">
    <!-- 顶部标题 -->
    <TopTitile title="我的"></TopTitile>
    <!-- 头像部分 -->
    <div class="MyBox">
      <!-- 头像 -->
      <div class="Avater">
        <img :src="avater" alt />
      </div>
      <!-- 资料 -->
      <div class="AvaterDetail">
        <div class="nameBox">
          <div class="name">{{avatername}}</div>
          <div class="alterBox">修改</div>
        </div>
        <div class="fansBox">
          <div>
            获赞：
            <span>400</span>
          </div>
          <div>
            关注：
            <span>45</span>
          </div>
          <div>
            粉丝：
            <span>111</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 列表部分 -->
    <div class="ListBox">
      <transition name="van-slide-left" v-for="(item,index) of TitleList" :key="index">
        <van-cell :title="item.title" is-link :to="item.url" />
      </transition>
    </div>
    <!-- 底部导航 -->
    <tabbar></tabbar>
  </div>
</template>

<script>
import TopTitile from "@/components/TopTitile";
import tabbar from "@/components/tabbar";
export default {
  components: {
    // 顶部标题
    TopTitile,
    // 底部导航
    tabbar
  },
  data() {
    return {
      avater: require("../assets/img/avater.png"),
      avatername: "阿树",
      TitleList: [
        { title: "我的收藏", url: "/MyCollect" },
        { title: "动态", url: "/MyDynamic" },
        { title: "游记", url: "/MyTravel" },
        { title: "浏览历史", url: "/MyBrowsingHistory" },
        { title: "我的消息", url: "/MyMssage" },
        { title: "清除缓存", url: "/MyClearCache" },
        { title: "意见反馈", url: "/MyFeedback" }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
#My {
  .MyBox {
    background: #fff;
    padding: 0 0.9375rem;
    padding-top: 1.25rem;
    padding-bottom: 0.625rem;
    display: flex;
    border-bottom: 0.3125rem solid rgba(11, 109, 121, 0.1);
    .Avater {
      width: 3.125rem;
      height: 3.125rem;
      margin-right: 0.625rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .AvaterDetail {
    .nameBox {
      display: flex;
      margin-bottom: 0.375rem;
      .name {
        margin-right: 0.625rem;
        font-size: 0.9375rem;
        font-family: PingFang SC;
        font-weight: bold;
        color: rgba(0, 0, 0, 1);
      }
      .alterBox {
        width: 3.125rem;
        height: 1.25rem;
        background: rgba(247, 23, 53, 1);
        border-radius: 0.3125rem;
        text-align: center;
        line-height: 1.25rem;
        font-size: 0.75rem;
        font-family: PingFang SC;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
        opacity: 0.98;
      }
    }
    .fansBox {
      display: flex;
      div {
        font-size: 0.75rem;
        font-family: PingFang SC;
        font-weight: bold;
        color: rgba(0, 0, 0, 1);
        span {
          font-weight: 400;
          color: rgba(0, 0, 0, 0.8);
        }
      }
      div:nth-child(2) {
        margin: 0 0.9375rem;
      }
    }
  }
  .ListBox {
    .van-cell {
      border-bottom: 0.0625rem solid rgba(11, 109, 121, 0.1);
      padding: 0.9375rem;
      // margin-bottom: 0.3125rem;
    }
    .van-cell__title {
      span {
        font-size: 12px;
        font-family: PingFang SC;
        font-weight: bold;
        color: rgba(0, 0, 0, 1);
      }
    }
    .van-cell__right-icon {
      color: #000;
    }
  }
}
</style>