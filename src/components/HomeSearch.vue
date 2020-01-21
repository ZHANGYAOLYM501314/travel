<template>
  <!-- 首页搜索模块 -->
  <div id="HomeSearch">
    <!-- 搜索部分 -->
    <div id="search">
      <!-- 城市选择 -->
      <div class="cityBox">
        <div class="city">城市</div>
        <div class="cityBoxImg"></div>
      </div>
      <!-- 搜索框 -->
      <div class="searchBox" @click="search">
        <img src="../assets/img/search.png" alt />
        <input type="search" placeholder="搜索目的地、景点、餐馆" />
      </div>
    </div>
    <!-- 搜索下面攻略等 -->
    <div class="strategyBox">
      <div v-for="(item,index) of strategyList" :key="index" @click="jump(item)">
        <div class="imgBox">
          <img :src="item.src" />
        </div>
        <div class="title">{{item.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 搜索下面攻略
      strategyList: [
        {
          src: require("../assets/img/1.png"),
          title: "攻略",
          name: "Strategy"
        },
        {
          src: require("../assets/img/1.png"),
          title: "景点玩乐",
          name: "Scenic"
        },
        { src: require("../assets/img/1.png"), title: "美食", name: "Cate" },
        { src: require("../assets/img/1.png"), title: "游记", name: "Travel" }
      ]
    };
  },
  methods: {
    jump(item) {
      this.$router.push({ name: item.name});
    },
    search(){
      this.$router.push({name:"SearchHistory"})
    }
  }
};
</script>

<style lang="less" scoped>
#HomeSearch {
  background: #ffffff;
  padding: 0.9375rem;
  padding-top: 0.625rem;
  font-size: 0.9375rem;
  font-family: PingFang SC;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.98);
  // 搜索部分
  #search {
    display: flex;
    align-items: center;
    justify-content: space-between;
    // 城市选择
    .cityBox {
      display: flex;
      align-items: center;
      margin-right: 0.625rem;
      font-size: 0.9375rem;
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba(0, 0, 0, 1);
      flex: 1;
      .city {
        margin-right: 0.125rem;
      }
      .cityBoxImg {
        background: url("../assets/img/down.png") center no-repeat;
        background-size: cover;
        width: 0.75rem;
        height: 0.5rem;
      }
    }
    // 搜索框
    .searchBox {
      width: 0;
      height: 1.875rem;
      flex: 5;
      text-align: center;
      line-height: 1.875rem;
      position: relative;
      display: flex;
      align-items: center;
      input {
        border: 0.0625rem solid rgba(91, 190, 252, 1);
        border-radius: 0.9375rem;
        width: 100%;
        height: 100%;
        padding-left: 2.25rem;
      }
      ::-webkit-input-placeholder {
        font-size: 0.75rem;
        font-family: PingFang SC;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
      }
      img {
        width: 1rem;
        height: 1rem;
        position: absolute;
        left: 0.5625rem;
      }
    }
  }
  // 搜索下面攻略部分
  .strategyBox {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0.9375rem 0;
    margin-bottom: 0;
    div {
      text-align: center;
      font-size: 0.9375rem;
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba(0, 0, 0, 1);
      width: 4.6875rem;
      .imgBox {
        width: 100%;
        height: 4.6875rem;
        margin-bottom: 0.4375rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>