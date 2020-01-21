<template>
  <!-- 首页==>美食==美食详情页 -->
  <div id="CateDetail">
    <div class="bg_Box">
      <img src="../assets/img/left.png" alt class="back_img" @click="back" />
      <div class="NameBox">
        <div class="name">川西坝子(清江东路直营店)</div>
        <div class="ScoreBox">
          <div class="Score">
            <p>评分：4.8分</p>
            <p>人均：101元</p>
          </div>
          <div class="number" @click="jump">54张</div>
        </div>
      </div>
    </div>
    <div class="DetailBox">
      <p class="title">名震全国的火锅店，拥有霸气三层建筑</p>
      <div class="TimeBox">
        <p>营业时间</p>
        <p>周一至周日，11:00~3:00</p>
      </div>
      <div class="AddressBox">
        <div class="Img_Box">
          <img src="../assets/img/phone.png" alt />
        </div>
        <div class="phone">028-87799517</div>
      </div>
      <div class="AddressBox">
        <div class="Img_Box">
          <img src="../assets/img/address.png" alt />
        </div>
        <div class="phone">清江东路8号3栋1楼46，48号</div>
      </div>
      <div class="TimeBox">
        <p>交通</p>
        <p>乘坐地铁2号线至一平天下站下车步行到达</p>
      </div>
      <div class="TimeBox">
        <p>简介</p>
        <p
          class="detailtxt"
        >当地非常受欢迎的火锅店，店铺装修古朴，颇有蜀汉味道，有 露天桌位，尤其是在夏天的夜晚，三两好友，吹着夏夜的冷风， 吃着地道的火锅，聊着天，喝着酒，是何等惬意啊！</p>
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
    },
    jump(){
        this.$router.push({name:'CateImgDetail'})
    }
  }
};
</script>

<style lang="less" scoped>
#CateDetail {
  .bg_Box {
    background: url("../assets/img/16.png") center no-repeat;
    background-size: cover;
    width: 100%;
    height: 14.0625rem;
    position: relative;
    .back_img {
      width: 0.6875rem;
      height: 1.0625rem;
      position: absolute;
      top: 0.9375rem;
      left: 0.9375rem;
    }
    .NameBox {
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba(255, 255, 255, 0.9);
      position: relative;
      bottom: -8.875rem;
      padding: 0 0.9375rem;

      .name {
        font-size: 0.9375rem;
      }
      .ScoreBox {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.75rem;
        margin-top: 0.625rem;
        .Score {
          display: flex;
        }
        .number {
          width: 3.125rem;
          height: 1.25rem;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 0.3125rem;
          text-align: center;
          line-height: 1.25rem;
        }
      }
    }
  }
  .DetailBox {
    width: 100%;
    background: rgba(255, 255, 255, 1);
    border-top-left-radius: 0.625rem;
    border-top-right-radius: 0.625rem;
    position: relative;
    top: -1.6875rem;
    padding: 0 0.9375rem;
    .title {
      font-size: 0.9375rem;
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba(0, 0, 0, 0.9);
      padding: 0.9375rem 0;
      border-bottom: 0.0625rem solid rgba(11, 109, 121, 0.1);
    }
    .TimeBox {
      padding: 0.9375rem 0;
      border-bottom: 0.0625rem solid rgba(11, 109, 121, 0.1);
      p:first-child {
        font-size: 0.75rem;
        font-family: PingFang SC;
        font-weight: bold;
        color: rgba(0, 0, 0, 0.8);
        margin-bottom: 0.6875rem;
      }
      p:last-child {
        font-size: 0.75rem;
        font-family: PingFang SC;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.8);
      }
      .detailtxt {
        line-height: 1.1875rem;
        letter-spacing: 0.0625rem;
        text-align: justify;
      }
    }
    .AddressBox {
      display: flex;
      align-items: center;
      font-size: 0.75rem;
      font-family: PingFang SC;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.8);
      padding: 0.9375rem 0;
      border-bottom: 0.0625rem solid rgba(11, 109, 121, 0.1);
      .Img_Box {
        width: 1.375rem;
        height: 1.375rem;
        margin-right: 0.6875rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .phone {
        font-size: 0.75rem;
        font-family: PingFang SC;
        font-weight: 400;
        letter-spacing: 0.0625rem;
      }
    }
  }
}
</style>