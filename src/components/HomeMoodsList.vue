<template>
  <!-- 首页==>人气榜列表 -->
  <div id="HomeMoodsList">
    <div class="NavBox">
      <van-tabs v-model="active">
        <van-tab :title="item.title" v-for="(item,index) of TitleList" :key="index">
          <div
            class="ListBox"
            v-if="active===0"
            v-for="(item,index) of list"
            :key="index"
            @click="jump"
          >
            <div class="ImgBox">
              <img :src="item.src" alt />
            </div>
            <div class="TxtBox">
              <p class="title">{{item.title}}</p>
              <p class="address">{{item.address}}</p>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      TitleList: [
        { title: "景点" },
        { title: "美食" },
        { title: "购物" },
        { title: "活动" }
      ],
      list: [
        {
          src: require("../assets/img/9.png"),
          title: "锦里",
          address: "成都市武侯区武侯祠大街231号"
        },
        {
          src: require("../assets/img/9.png"),
          title: "锦里",
          address: "成都市武侯区武侯祠大街231号"
        },
        {
          src: require("../assets/img/9.png"),
          title: "锦里",
          address: "成都市武侯区武侯祠大街231号"
        }
      ]
    };
  },
  methods: {
    jump() {
      this.$router.push({name:'MoodsDetail'})
    }
  }
};
</script>

<style lang="less" scoped>
#HomeMoodsList {
  position: relative;
  top: -1.375rem;
  background: #fff;
  width: 100%;
  background: rgba(255, 255, 255, 1);
  // box-shadow: 2px 0px 13px 0px rgba(0, 0, 0, 0.2);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 0.9375rem;
  padding-bottom: 0;
  .NavBox {
    .van-tabs {
      width: 100%;
      .ListBox {
        height: 3.75rem;
        border-bottom: 0.0625rem solid rgba(11, 109, 121, 0.1);
        display: flex;
        align-items: center;
        .ImgBox {
          width: 2rem;
          height: 1.875rem;
          margin-right: 0.625rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .TxtBox {
          line-height: 1.3125rem;
          .title {
            font-size: 0.75rem;
            font-family: PingFang SC;
            font-weight: bold;
            color: rgba(0, 0, 0, 1);
          }
          .address {
            font-size: 0.75rem;
            font-family: PingFang SC;
            font-weight: 400;
            color: rgba(0, 0, 0, 0.8);
          }
        }
      }
    }
  }
}
</style>
<style lang="less">
#HomeMoodsList {
  .van-tab,
  .van-tab--active {
    font-size: 0.9375rem;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(0, 0, 0, 1);
  }
  .van-tab {
    line-height: normal;
    height: fit-content;
    flex: unset;
  }
  .van-tabs__line {
    width: 1.25rem !important;
    height: 0.0625rem;
    background: rgba(91, 190, 252, 1);
  }
  .van-tabs__nav--line {
    padding-bottom: 1.1875rem;
    display: flex;
    justify-content: space-between;
  }
  .van-tabs--line .van-tabs__wrap {
    height: fit-content;
  }
}
</style>