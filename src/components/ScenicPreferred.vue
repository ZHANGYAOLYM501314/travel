<template>
  <!-- 景点玩乐==>出游首选 -->
  <div id="ScenicPreferred">
    <p class="title">出游首选</p>
    <div class="swiperBox">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) of list" :key="index">
          <div class="bgImg" :style="{ 'background-image': 'url(' + item.src+ ')' }">
            <div>
              <p class="title">{{item.title}}</p>
              <p class="money">{{item.money}}</p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          src: require("../assets/img/4.png"),
          title: "成都大熊猫繁殖研究基地",
          money: "门票：55元/人"
        },
        {
          src: require("../assets/img/4.png"),
          title: "成都大熊猫繁殖研究基地",
          money: "门票：55元/人"
        },
        {
          src: require("../assets/img/4.png"),
          title: "成都大熊猫繁殖研究基地",
          money: "门票：55元/人"
        }
      ],
      swiperOption: {
        loop:'true',
        slidesPerView: "auto",
        spaceBetween: 30
      }
    };
  }
};
</script>


<style lang="less" scoped>
#ScenicPreferred {
  background: #fff;
  padding-left: 0.9375rem;
  padding-top: 1.25rem;
  padding-bottom: 0.9375rem;
  border-bottom: 0.3125rem solid rgba(11, 109, 121, 0.1);
  .title {
    margin-bottom: 0.625rem;
    font-size: 0.9375rem;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.98);
  }
  .swiperBox {
    .swiper-slide{
      width: 13.75rem;
    }
        .bgImg {
          background: url("../assets/img/4.png") center no-repeat;
          background-size: cover;
          width: 13.75rem;
          height: 6.25rem;
          position: relative;
          div {
            position: absolute;
            bottom: 0.3125rem;
            left: 0.375rem;
            .title {
              font-size: 12px;
              font-family: PingFang SC;
              font-weight: bold;
              color: rgba(255, 255, 255, 1);
            }
            .money {
              font-size: 12px;
              font-family: PingFang SC;
              font-weight: 400;
              color: rgba(255, 255, 255, 0.98);
            }
          }
        }
  }
}
</style>