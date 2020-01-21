<template>
  <!-- 美食详情图片 -->
  <div id="CateImgDetail">
    <BackTitle :src="src" :title="title"></BackTitle>
    <div class="ImgBox">
      <p class="All">全部：55张</p>
      <div class="Box">
        <div v-for="(item,index) of list" :key="index">
          <img :src="item.src" alt srcset />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BackTitle from "../components/back_title";
export default {
  data() {
    return {
      title: "图片",
      src: require("../assets/img/left.png"),
      list: [
          { src: require("../assets/img/17.png") },
          { src: require("../assets/img/17.png") },
          { src: require("../assets/img/17.png") },
          { src: require("../assets/img/17.png") },
          ]
    };
  },
  components: { BackTitle }
};
</script>

<style lang="less" scoped>
#CateImgDetail {
  .ImgBox {
    padding: 0 0.9375rem;
    .All {
      margin: 0.9375rem 0;
      font-size: 0.9375rem;
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba(0, 0, 0, 1);
    }
    .Box {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      div {
        width: 6.25rem;
        height: 6.25rem;
        border-radius: 0.4375rem;
        margin-bottom: 0.9375rem;
        img {
          width: 100%;
          height: 100%;
          border-radius: 0.4375rem;
        }
      }
    }
  }
}
</style>