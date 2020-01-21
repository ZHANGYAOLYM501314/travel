<template>
  <!-- 主页面顶部标题 -->
  <div id="TopTitle">{{title}}</div>
</template>

<script>
export default {
    props:['title']
};
</script>
<style lang="less">
#TopTitle {
  width: 100%;
  height: 3rem;
  background: rgba(91, 190, 252, 0.98);
  text-align: center;
  line-height: 3rem;
  font-size: 1.125rem;
  font-family: PingFang SC;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
}
</style>