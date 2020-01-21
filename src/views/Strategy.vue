<template>
  <!-- 攻略 -->
  <div id="Strategy">
    <backTitle :title="title" :src="src"></backTitle>
    <div class="detailBox">
      <div class="Title">2019成都旅行攻略(简介、交通、景点、美食、住宿)</div>
      <div class="TextBox">
        <p class="title">1.简介</p>
        <p class="text">成都(chengdu)，简称“蓉”，四川省会。位于四川盆地西部，成都平原腹地。</p>
      </div>
      <div class="TextBox2">
        <p class="title">
          2.成都最佳旅行时间：
          <span>3月~6月或9月~11月</span>
        </p>
        <p class="text">
          建议游玩天数:
          <span>3天~5天</span>
        </p>
        <p class="text">
          消费水平：
          <span>成都消费水平</span>
        </p>
      </div>
      <div class="TextBox TextBox3">
        <p class="title">3.交通</p>
        <p class="text">成都(chengdu)，简称“蓉”，四川省会。位于四川盆地西部，成都平原腹地。</p>
      </div>
      <div class="TextBox TextBox3">
        <p class="title">4.景点</p>
        <p class="text">成都(chengdu)，简称“蓉”，四川省会。位于四川盆地西部，成都平原腹地。</p>
      </div>
      <div class="TextBox TextBox3">
        <p class="title" TextBox3>5.美食</p>
        <p class="text">成都(chengdu)，简称“蓉”，四川省会。位于四川盆地西部，成都平原腹地。</p>
      </div>
      <div class="TextBox TextBox3">
        <p class="title">6.住宿</p>
        <p class="text">成都(chengdu)，简称“蓉”，四川省会。位于四川盆地西部，成都平原腹地。</p>
      </div>
    </div>
  </div>
</template>

<script>
import backTitle from "../components/back_title";
export default {
  data() {
    return {
      title: "成都攻略",
      src: require("../assets/img/left.png")
    };
  },
  methods: {},
  components: {
    backTitle
  }
};
</script>

<style lang="less" scoped>
#Strategy {
  .detailBox {
    padding: 1.3125rem 0.9375rem;
    .Title {
      font-size: 0.9375rem;
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba(0, 0, 0, 0.98);
      line-height: 1.375rem;
      letter-spacing: 0.125rem;
    }
    .TextBox {
      font-size: 0.75rem;
      font-family: PingFang SC;
      font-weight: 400;
      .title {
        font-size: 0.75rem;
        font-weight: bold;
        margin-top: 0.9375rem;
        margin-bottom: 0.625rem;
      }
      .text {
        letter-spacing: 0.1rem;
        line-height: 20px;
      }
    }
    .TextBox2 {
      margin: 1.5625rem 0;
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba(0, 0, 0, 0.98);
      font-size: 0.75rem;
      span {
        font-weight: 400;
      }
      .text {
        text-indent: 1em;
      }
      .text:nth-child(2) {
        margin: 0.625rem 0;
      }
    }
    .TextBox3{
      margin-bottom: 1.0625rem;
    }
  }
}
</style>