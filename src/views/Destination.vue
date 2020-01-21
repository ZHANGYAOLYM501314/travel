<template>
  <!-- 社区 -->
  <div id="Destination">
    <!-- 顶部标题 -->
    <TopTitile title="社区"></TopTitile>
    <!-- 列表 -->
    <DestinationList/>
    <!-- 底部导航 -->
    <tabbar></tabbar>
  </div>
</template>

<script>
import TopTitile from "@/components/TopTitile";
import tabbar from "@/components/tabbar";
import DestinationList from "../components/DestinationList";
export default {
  components: {
    // 顶部标题
    TopTitile,
    // 列表
    DestinationList,
    // 底部导航
    tabbar
  }
};
</script>

<style lang="less" scoped>
</style>