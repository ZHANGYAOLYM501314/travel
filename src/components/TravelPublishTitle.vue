<template>
  <div id="TravelPublishTitle">
    <div class="backImg" @click="goBack">
      <img :src="src" alt />
    </div>
    <div class="title">{{title}}</div>
    <div class="publishBox" @click="jump">{{publish}}</div>
  </div>
</template>

<script>
export default {
  props: ["title", "src", "publish"],
  data() {
    return {};
  },
  methods: {
    goBack() {
      this.$router.go(-1); //返回上一层
    },
    jump(){
      this.$router.push({name:"TravelPublish"})
    }
  }
};
</script>

<style lang="less" scoped>
#TravelPublishTitle {
  width: 100%;
  height: 3rem;
  background: rgba(91, 190, 252, 1);
  font-size: 1.125rem;
  font-family: PingFang SC;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.98);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.9375rem;
  .backImg {
    width: 0.6875rem;
    height: 1.0625rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .title {
    font-size: 1.125rem;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.8);
  }
  .publishBox {
    width: 3.125rem;
    height: 1.25rem;
    background: rgba(247, 23, 53, 1);
    border-radius: 0.3125rem;
    line-height: 1.25rem;
    text-align: center;
    font-size: 0.75rem;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(255, 255, 255, 1);
  }
}
</style>