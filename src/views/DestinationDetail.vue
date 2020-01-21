<template>
  <!-- 社区详情页 -->
  <div id="DestinationDetail">
    <div class="SwiperBox">
      <van-swipe @change="onChange" class="swiper">
        <van-swipe-item
          class="bg_img"
          v-for="(item,i) of i"
          :key="i"
          :style="{backgroundImage: 'url(' + item.src + ')' }"
        >
          <div class="imgBox">
            <img src="../assets/img/left.png" class="img1" @click="back" />
            <img src="../assets/img/20.png" v-show="downIcon" class="img2" @click="sort" />
            <img src="../assets/img/22.png" v-show="!downIcon" class="img2" @click="sort" />
          </div>
        </van-swipe-item>
        <div class="custom-indicator" slot="indicator">{{ current + 1 }}/{{i.length}}</div>
      </van-swipe>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 0,
      downIcon: true,
      i: [
        { src: require("../assets/img/21.png") },
        { src: require("../assets/img/21.png") },
        { src: require("../assets/img/21.png") }
      ]
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    sort() {
      this.downIcon = !this.downIcon;
    },
    back(){
      this.$router.go(-1)
    }
  }
};
</script>

<style lang="less" scoped>
#DestinationDetail {
  .SwiperBox {
    width: 100%;
    height: 14rem;
    .swiper {
      position: relative;
      .bg_img {
        width: 100%;
        height: 14rem !important;
        background: url("../assets/img/21.png") center no-repeat;
        background-size: cover;
        .imgBox {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.9375rem;
          .img1 {
            width: 0.6875rem;
            height: 1.0625rem;
          }
          .img2 {
            width: 1.375rem;
            height: 1.25rem;
          }
        }
      }
      .custom-indicator {
        text-align: center;
        position: absolute;
        bottom: 0.6875rem;
        color: #fff;
        margin: 0 auto;
        left: 50%;
        margin-left: -1.5625rem;
      }
    }
  }
}
</style>