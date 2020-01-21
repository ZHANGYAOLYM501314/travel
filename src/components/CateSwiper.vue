<template>
  <!-- 美食swiper -->
  <div id="CateSwiper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item,index) of list" :key="index">
        <div class="ImgBox">
          <img :src="item.src" alt />
        </div>
        <p class="title">{{item.title}}</p>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { src: require("../assets/img/7.png"), title: "夫妻肺片" },
        { src: require("../assets/img/7.png"), title: "夫妻肺片" },
        { src: require("../assets/img/7.png"), title: "夫妻肺片" },
        { src: require("../assets/img/7.png"), title: "夫妻肺片" }
      ],
      swiperOption: {
        loop: "true",
        slidesPerView: "auto",
        spaceBetween: 20
      }
    };
  }
};
</script>
<style lang="less" scoped>
#CateSwiper {
  background: #fff;
  border-bottom: 0.3125rem solid rgba(11, 109, 121, 0.1);
  padding: 1.1875rem 0.9375rem;
  padding-right: 0;
  .swiper-slide {
      width: 8.125rem;
    .ImgBox {
      width: 100%;
      height: 5.625rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .title {
      font-size: 0.8125rem;
      font-family: PingFang SC;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.98);
      text-align: center;
      margin-top: 0.75rem;
    }
  }
}
</style>