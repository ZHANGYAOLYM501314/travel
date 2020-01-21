<template>
  <!-- 搜素历史 -->
  <div id="SearchHistory">
    <!-- 顶部搜索 -->
    <div class="TopBox">
      <div class="ImgBox">
        <img src="../assets/img/left.png" alt @click="back" />
      </div>
      <div class="SearchBox">
        <img src="../assets/img/10.png" alt />
        <input type="search" />
      </div>
      <div class="Search">搜索</div>
    </div>
    <!-- 搜索历史列表 -->
    <div class="HistoryBox">
      <!-- 标题和删除 -->
      <div class="title_del_box">
        <div class="history_title">历史搜索</div>
        <div class="Del_Img">
          <img src="../assets/img/11.png" alt />
        </div>
      </div>
      <!-- 内容 -->
      <div class="History_Detail_Box">
        <van-row gutter="80">
          <van-col span="6" v-for="(item,index) of list" :key="index">
            <div class="van-ellipsis">{{item.detail}}</div>
          </van-col>
        </van-row>
        <!-- <div v-for="(item,index) of list" :key="index">{{item.detail}}</div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { detail: "成都" },
        { detail: "成都" },
        { detail: "成都" },
        { detail: "成都" },
        { detail: "成都" },
        { detail: "成都" },
      ]
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="less" scoped>
#SearchHistory {
  // 搜索部分
  .TopBox {
    height: 3rem;
    background: rgba(91, 190, 252, 1);
    display: flex;
    padding: 0 0.9375rem;
    align-items: center;
    justify-content: space-between;
    .ImgBox {
      width: 0.6875rem;
      height: 1.0625rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .SearchBox {
      position: relative;
      display: flex;
      align-items: center;
      img {
        width: 1rem;
        height: 1rem;
        position: absolute;
        left: 0.5625rem;
      }
      input {
        width: 14rem;
        background: rgba(49, 159, 228, 1);
        border: 1px solid rgba(143, 212, 255, 1);
        border-radius: 15px;
        padding-left: 1.5625rem;
        height: 1.875rem;
      }
    }
    .Search {
      width: 50px;
      height: 20px;
      background: rgba(247, 23, 53, 1);
      border-radius: 0.3125rem;
      text-align: center;
      line-height: 20px;
      font-size: 0.75rem;
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba(255, 255, 255, 0.9);
    }
  }
  // 标题和删除部分
  .HistoryBox {
    padding: 0 0.9375rem;
    padding-top: 1.25rem;
    .title_del_box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.75rem;
      .history_title {
        font-size: 13px;
        font-family: PingFang SC;
        font-weight: bold;
        color: rgba(0, 0, 0, 1);
      }
      .Del_Img {
        width: 0.9375rem;
        height: 0.9375rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    // 内容
    .History_Detail_Box {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      font-size: 13px;
      font-family: PingFang SC;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.8);
      .van-ellipsis{
        margin-bottom: 3.125rem;
      }
    }
  }
}
</style>