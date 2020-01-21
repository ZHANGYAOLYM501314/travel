<template>
  <!-- 首页列表 -->
  <div id="HomeList">
    <div class="ListBox" v-for="(item,index) of list" :key="index" @click="jump">
      <!-- 左边 -->
      <div class="ImgBox">
        <!-- 左边图片 -->
        <div class="img" :style="{ 'background-image': 'url(' + item.src+ ')' }">
          <div>
            <p>{{item.title1}}</p>
            <p>{{item.title2}}</p>
          </div>
        </div>
        <!-- 列表 -->
        <div class="detailBox">
          <p v-for="(item,index) of detailList" :key="index">{{item.title}}</p>
        </div>
      </div>
      <!-- 右边箭头 -->
      <div class="right">
        <img src="../assets/img/right.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 列表背景图
      list: [
        {
          src: require("../assets/img/2.png"),
          title1: "景点",
          title2: "人气榜"
        },
        {
          src: require("../assets/img/2.png"),
          title1: "景点",
          title2: "人气榜"
        },
        {
          src: require("../assets/img/2.png"),
          title1: "景点",
          title2: "人气榜"
        }
      ],
      //   列表
      detailList: [
        { title: "1 .锦里" },
        { title: "1 .锦里" },
        { title: "1 .锦里" }
      ]
    };
  },
  methods: {
    jump(){
      this.$router.push({name:"HomeMoods"})
    }
  }
};
</script>

<style lang="less" scoped>
#HomeList {
  background: #fff;
  padding: 0.9375rem;
  // margin-bottom: 5px;
  border-top: 0.3125rem solid rgba(11, 109, 121, 0.1);
  border-bottom: 0.3125rem solid rgba(11, 109, 121, 0.1);
  .ListBox {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.9375rem;
    .ImgBox {
      display: flex;
      align-items: center;
      justify-content: space-around;
      .img {
        // background: url("../assets/img/2.png") center no-repeat;
        background-size: cover;
        width: 4.6875rem;
        height: 4.6875rem;
        justify-content: center;
        display: flex;
        align-items: center;
        margin-right: 1.3125rem;
        div {
          text-align: center;
          p {
            letter-spacing: 0.2rem;
            font-size: 0.9375rem;
            font-family: PingFang SC;
            font-weight: bold;
            color: rgba(255, 255, 255, 1);
          }
        }
      }
      .detailBox {
        p {
          font-size: 0.8125rem;
          font-family: PingFang SC;
          font-weight: bold;
          color: rgba(0, 0, 0, 1);
          line-height: 1.6875rem;
        }
      }
    }
    .right {
      width: 0.8125rem;
      height: 1.25rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .ListBox:first-child {
    border-bottom: 0.0625rem solid rgba(11, 109, 121, 0.1);
    padding-bottom: 0.9375rem;
    margin-bottom: 0.9375rem;
  }
  .ListBox:last-child {
    margin-bottom: 0;
  }
}
</style>