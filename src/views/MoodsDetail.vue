<template>
  <!-- 人气榜详情 -->
  <div id="MoodsDetail">
    <div class="bg_imgBox">
      <img src="../assets/img/left.png" class="back_img" @click="back" />
    </div>
    <div class="DetailBox">
      <div
        class="TxtBox"
      >传说中锦里曾是西蜀历史上最古老，最具有商业气息的街道之 一。早在秦汉、三国时期便文明全国，现在，锦里30000余平 方米，建筑面积14000余平方米，街道全长550米，以明末清 初川西民居作外衣，三国文化和成都民俗作内涵，集旅游购物， 休闲娱乐为一体。</div>
      <div class="TxtBox">
        <p>地址：成都市武侯区武侯祠大街231号</p>
        <p>交通：公交1路、52路、86路、334路</p>
        <p>电话：028-66311313</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="less" scoped>
#MoodsDetail {
  .bg_imgBox {
    background: url("../assets/img/13.png") center no-repeat;
    background-size: cover;
    width: 100%;
    height: 14.0625rem;
    position: relative;
    .back_img {
      position: absolute;
      width: 0.6875rem;
      height: 1.0625rem;
      left: 0.9375rem;
      top: 0.9375rem;
    }
  }
  .DetailBox {
    position: relative;
    bottom: 1.27rem;
    background: rgba(255, 255, 255, 1);
    //   box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.2);
    background: #ffffff;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 0 0.9375rem;
    padding-bottom: 0;
    font-size: 12px;
    font-family: PingFang SC;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.8);
    .TxtBox {
      border-bottom: 1px solid rgba(11, 109, 121, 0.1);
      line-height: 1.1875rem;
      padding: 0.9375rem 0;
      text-align: justify;
    }
  }
}
</style>