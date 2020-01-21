<template>
  <!-- 景点玩乐==>类型选择 -->
  <div id="Scenictype">
    <div class="selectBox">
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
        <van-dropdown-item v-model="value3" :options="option3" />
        <van-dropdown-item v-model="value4" :options="option4" />
      </van-dropdown-menu>
    </div>
    <div class="Scenictype-List">
      <!-- 列表 -->
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <van-cell class="List-Box" v-for="(item,index) of list" :key="index" @click="jump">
          <div class="Box">
            <div class="ImgBox">
              <img :src="item.src" alt />
            </div>
            <div class="BoxDetail">
              <p class="title">{{item.title}}</p>
              <p class="txt">{{item.score}}</p>
              <p class="txt">{{item.address}}</p>
              <p class="txt">{{item.distance}}</p>
            </div>
          </div>
          <div class="money">{{item.money}}</div>
        </van-cell>
      </van-list>
      <!-- < v-for="(item,index) of list" :key="index" /> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 0,
      value2: "a",
      value3: "a",
      value4: "a",
      option1: [
        { text: "全部类型", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 }
      ],
      option2: [
        { text: "区域", value: "a" },
        { text: "好评排序", value: "b" },
        { text: "销量排序", value: "c" }
      ],
      option3: [
        { text: "距离不限", value: "a" },
        { text: "好评排序", value: "b" },
        { text: "销量排序", value: "c" }
      ],
      option4: [
        { text: "全部类型", value: "a" },
        { text: "好评排序", value: "b" },
        { text: "销量排序", value: "c" }
      ],
      // list:[],
      list: [
        {
          src: require("../assets/img/6.png"),
          title: "天堂鸟海洋公园",
          score: "评分：4.8分",
          address: "乐园 温泉",
          distance: "距离您2.6km",
          money: "￥88元起"
        },
        {
          src: require("../assets/img/6.png"),
          title: "天堂鸟海洋公园",
          score: "评分：4.8分",
          address: "乐园 温泉",
          distance: "距离您2.6km",
          money: "￥88元起"
        },
        {
          src: require("../assets/img/6.png"),
          title: "天堂鸟海洋公园",
          score: "评分：4.8分",
          address: "乐园 温泉",
          distance: "距离您2.6km",
          money: "￥88元起"
        },
        {
          src: require("../assets/img/6.png"),
          title: "天堂鸟海洋公园",
          score: "评分：4.8分",
          address: "乐园 温泉",
          distance: "距离您2.6km",
          money: "￥88元起"
        }
      ],
      loading: false,
      finished: false
    };
  },
  methods: {
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 4; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
    },
    jump() {
      this.$router.push({ name: "MoodsDetail" });
    }
  }
};
</script>
<style lang="less">
#Scenictype {
  .van-ellipsis {
    font-size: 0.75rem;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(0, 0, 0, 1);
  }
  .van-dropdown-menu__item {
    padding: 7px 10px;
    border: 1px solid rgba(191, 191, 191, 1);
    border-radius: 5px;
    padding-left: 0;
    margin-left: 0.5rem;
  }
  .van-dropdown-menu__item:first-child {
    margin-left: 0;
  }
  .van-dropdown-menu__item:nth-child(2) {
    width: 60px;
    margin-left: 0.5rem;
  }
  .van-dropdown-menu__title {
    padding: 0;
  }
  .van-dropdown-menu__title::after {
    right: -0.5625rem;
  }
  .van-cell__value--alone {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
<style lang="less" scoped>
#Scenictype {
  padding: 0.9375rem;
  padding-bottom: 0;
  .selectBox {
    height: 1.5625rem;
    .van-dropdown-menu {
      height: 100%;
    }
  }
  .Scenictype-List {
    .List-Box {
      display: flex;
      margin-top: 1.25rem;
      justify-content: space-between;
      align-items: center;
      .Box {
        display: flex;
        align-items: center;
        .ImgBox {
          width: 8.125rem;
          height: 5.625rem;
          margin-right: 0.9375rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .BoxDetail {
          font-size: 0.75rem;
          font-family: PingFang SC;
          font-weight: 400;
          color: rgba(0, 0, 0, 0.98);
          line-height: 1.3125rem;
          .title {
            font-size: 0.8125rem;
            font-family: PingFang SC;
            font-weight: bold;
          }
        }
      }
      .money {
        font-size: 0.9375rem;
        font-family: PingFang SC;
        font-weight: bold;
        color: rgba(0, 0, 0, 1);
        opacity: 0.98;
        letter-spacing: 0.125rem;
      }
    }
  }
}
</style>