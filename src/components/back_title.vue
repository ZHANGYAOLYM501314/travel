<template>
  <div id="back_title">
    <!-- 标题和返回 -->
    <div class="back_TitleBox">
      <div class="Titlte_ImgBox" @click="goBack">
        <img :src="src" alt />
      </div>
      <div class="title">{{title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title",'src'],
  data() {
    return {};
  },
  methods: {
    goBack() {
      this.$router.go(-1); //返回上一层
    }
  }
};
</script>

<style lang="less" scoped>
#back_title {
  .back_TitleBox {
    height: 3rem;
    width: 100%;
    background: rgba(91, 190, 252, 1);
    font-size: 1.125rem;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.98);
    display: flex;
    align-items: center;
    padding: 0 0.9375rem;
    .Titlte_ImgBox {
      width: 0.8125rem;
      height: 1.25rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .title {
      margin: 0 auto;
    }
  }
}
</style>