<template>
  <div id="Home">
    <!-- 顶部标题 -->
    <TopTitile title="旅游攻略"></TopTitile>
    <!-- 搜索模块 -->
    <HomeSearch></HomeSearch>
    <!-- 列表 -->
    <HomeList></HomeList>
    <!-- 底部导航 -->
    <tabbar></tabbar>
  </div>
</template>

<script>
import tabbar from "@/components/tabbar";
import HomeSearch from "@/components/HomeSearch";
import HomeList from "@/components/HomeList";
import TopTitile from "@/components/TopTitile";
export default {
  name: "home",

  components: {
    // 顶部标题
    TopTitile,
    // 搜索模块
    HomeSearch,
    // 列表
    HomeList,
    // 底部导航
    tabbar
  }
};
</script>
<style lang="less" scoped>
#Home{
  padding-bottom: 3.125rem;
  border-bottom: 0.0625rem solid rgba(11,109,121,.1);
}
</style>
