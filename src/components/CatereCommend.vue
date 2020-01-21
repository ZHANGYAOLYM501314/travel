<template>
  <!-- 美食==>推荐餐厅 -->
  <div id="CatereCommend">
    <p class="title">推荐餐厅</p>
    <div class="ListBox">
      <div class="Box" v-for="(item,index) of list" :key="index" @click="jump">
        <div class="ImgBox">
          <img :src="item.src" alt />
        </div>
        <div class="DetailBox">
          <p class="title1">{{item.title}}</p>
          <div>
            <span class="score">评分：{{item.score}}</span>
            <span class="money">人均：{{item.money}}</span>
          </div>
          <div class="detail">{{item.detail}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          src: require("../assets/img/7.png"),
          title: "夫妻肺片",
          score: "4.8分",
          money: "64元",
          detail:
            "这是一家位于春熙路商圈的老字号，招牌菜夫妻肺片麻辣入味，让你欲罢不"
        },
        {
          src: require("../assets/img/7.png"),
          title: "夫妻肺片",
          score: "4.8分",
          money: "64元",
          detail:
            "这是一家位于春熙路商圈的老字号，招牌菜夫妻肺片麻辣入味，让你欲罢不"
        },
        {
          src: require("../assets/img/7.png"),
          title: "夫妻肺片",
          score: "4.8分",
          money: "64元",
          detail:
            "这是一家位于春熙路商圈的老字号，招牌菜夫妻肺片麻辣入味，让你欲罢不"
        },
        {
          src: require("../assets/img/7.png"),
          title: "夫妻肺片",
          score: "4.8分",
          money: "64元",
          detail:
            "这是一家位于春熙路商圈的老字号，招牌菜夫妻肺片麻辣入味，让你欲罢不"
        }
      ]
    };
  },
  methods: {
    jump() {
      this.$router.push({ name: "CateDetail" });
    }
  }
};
</script>

<style lang="less" scoped>
#CatereCommend {
  padding: 0.9375rem;
  padding-bottom: 0;
  .title {
    font-size: 0.9375rem;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(0, 0, 0, 1);
    margin-bottom: 0.9375rem;
  }
  .ListBox {
    font-size: 0.625rem;
    font-family: PingFang SC;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.8);
    .Box {
      display: flex;
      align-items: center;
      //   justify-content: space-between;
      margin-bottom: 1.25rem;
      .ImgBox {
        width: 8.125rem;
        height: 5.625rem;
        margin-right: 0.9375rem;
        flex: 2.6;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .DetailBox {
        width: 0;
        flex: 4;
        line-height: 1.375rem;
        .title1 {
          font-size: 0.8125rem;
          font-family: PingFang SC;
          font-weight: bold;
          color: rgba(0, 0, 0, 1);
        }
        div {
          .score {
            margin-right: 1.875rem;
          }
        }
        .detail {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          letter-spacing: 2px;
        }
      }
    }
  }
}
</style>