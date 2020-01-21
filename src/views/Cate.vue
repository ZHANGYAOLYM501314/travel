<template>
  <!-- 美食 -->
  <div id="Cate">
    <backTitle :title="title" :src="src"></backTitle>
    <CateSwiper></CateSwiper>
    <!-- 推荐餐厅 -->
    <CatereCommend></CatereCommend>
  </div>
</template>

<script>
import backTitle from "../components/back_title";
import CateSwiper from "../components/CateSwiper";
import CatereCommend from "../components/CatereCommend";
export default {
  data() {
    return {
      title: "成都特色美食",
      src: require("../assets/img/left.png")
    };
  },
  components: {
    backTitle,
    CateSwiper,
    CatereCommend
  }
};
</script>

<style lang="less" scoped>
</style>