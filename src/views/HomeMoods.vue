<template>
  <!-- 首页==>人气榜 -->
  <div id="HomeMoods">
    <!-- 导航栏 -->
    <backTitle :title="title" :src="src"></backTitle>
    <!-- 地图 -->
    <Map class="MyMap"></Map>
    <!-- 列表 -->
    <HomeMoodsList></HomeMoodsList>
  </div>
</template>

<script>
import backTitle from "../components/back_title";
import Map from "../components/map";
import HomeMoodsList from "../components/HomeMoodsList";
export default {
  data() {
    return {
      title: "人气榜",
      src: require("../assets/img/left.png")
    };
  },
  components: {
    backTitle,
    Map,
    HomeMoodsList
  }
};
</script>

<style lang="less" scoped>
</style>