<template>
  <!-- 游记 -->
  <div id="Travel">
    <TravelPublishTitle :src="src" :title="title" :publish="publish"></TravelPublishTitle>
    <van-tabs v-model="active">
      <van-tab v-for="(item,index) of list" :key="index" :title="item.title">
        <!-- 近期热门 -->
        <div class="ListBox" v-if="active===0">
          <div class="DetailBox" v-for="(item,index) of listBox" :key="index" @click="jump">
            <div class="ImgBox">
              <img :src="item.src" />
            </div>
            <div class="TxtBox">
              <p class="title">{{item.title}}</p>
              <p class="address">{{item.address}}</p>
              <p class="people">发布人：{{item.people}}</p>
              <p class="time">发布时间：{{item.time}}</p>
            </div>
          </div>
        </div>
        <!-- 综合排序 -->
        <div class="ListBox" v-if="active===1"></div>
        <!-- 攻略文章 -->
        <div class="ListBox" v-if="active===2"></div>
        <!-- 最新发布 -->
        <div class="ListBox" v-if="active===3"></div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import TravelPublishTitle from "../components/TravelPublishTitle";
export default {
  data() {
    return {
      src: require("../assets/img/left.png"),
      title: "游记",
      publish: "发表",
      list: [
        { title: "近期热门" },
        { title: "综合排序" },
        { title: "攻略文章" },
        { title: "最新发布" }
      ],
      active: 0,
      // 近期热门
      listBox: [
        {
          src: require("../assets/img/8.png"),
          title: "2019峨眉山旅行攻略简介",
          address: "交通景点游记交通景点游记交通景",
          people: "阿树",
          time: "2019.12.25"
        },
        {
          src: require("../assets/img/8.png"),
          title: "2019峨眉山旅行攻略简介",
          address: "交通景点游记交通景点游记交通景",
          people: "阿树",
          time: "2019.12.25"
        },
        {
          src: require("../assets/img/8.png"),
          title: "2019峨眉山旅行攻略简介",
          address: "交通景点游记交通景点游记交通景",
          people: "阿树",
          time: "2019.12.25"
        }
      ]
    };
  },
  components: {
    TravelPublishTitle
  },
  methods: {
    jump(){
      this.$router.push({name:'TravelDetail'})
    }
  }
};
</script>

<style lang="less">
#Travel {
  .van-tabs__line {
    bottom: 1.375rem;
    background: #5bbefc;
    height: 0.125rem;
    border-radius: 0.0625rem;
  }
}
</style>
<style lang="less" scoped>
#Travel {
  .van-tab {
    font-size: 0.9375rem;
    font-family: PingFang SC;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.8);
  }
  .van-tab--active {
    font-size: 15px;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(0, 0, 0, 1);
  }
  .ListBox {
    background: #fff;
    padding: 0.9375rem;
    padding-bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    .DetailBox {
      width: 48%;
      box-shadow: 0px 2px 3px #dfdfdf;
      margin-bottom: 0.9375rem;
      .ImgBox {
        width: 100%;
        height: 6.25rem;
        margin-bottom: 0.9375rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .TxtBox {
        font-family: PingFang SC;
        font-weight: 400;
        color: rgba(0, 0, 0, 1);
        background: #fff;
        padding-left: 3px;
        p {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          overflow: hidden;
          font-size: 10px;
          font-family: PingFang SC;
          font-weight: 400;
          color: rgba(0, 0, 0, 0.8);
          margin-bottom: 0.5rem;
        }
        .title {
          font-size: 12px;
          font-family: PingFang SC;
          font-weight: bold;
          color: rgba(0, 0, 0, 1);
        }
      }
    }
  }
}
</style>