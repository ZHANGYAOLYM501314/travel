<template>
  <!-- 景点玩乐 -->
  <div id="Scenic">
    <!-- 顶部搜索 -->
    <ScenicTop></ScenicTop>
    <!-- 出游首选 -->
    <ScenicPreferred></ScenicPreferred>
    <!-- 类型选择 -->
    <Scenictype></Scenictype>
  </div>
</template>

<script>
import ScenicTop from "../components/ScenicTop";
import ScenicPreferred from "../components/ScenicPreferred";
import Scenictype from "../components/Scenictype";
export default {
  components: {
    // 顶部搜索
    ScenicTop,
    // 出游首选
    ScenicPreferred,
    // 类型选择
    Scenictype
  }
};
</script>

<style lang="less" scoped>
</style>