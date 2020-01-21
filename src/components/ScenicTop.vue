<template>
  <div id="ScenicTop">
    <!-- 景点玩乐顶部搜索框 -->
    <div class="SearchBox">
      <div class="ImgBox" @click="goback">
        <img src="../assets/img/left.png" alt />
      </div>
      <div class="search">
        <div class="search_img">
          <img src="../assets/img/3.png" alt />
        </div>
        <div>
          <input type="search" />
        </div>
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
    goback() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="less" scoped>
#ScenicTop {
  .SearchBox {
    background: rgba(91, 190, 252, 1);
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
    position: relative;
    padding-left: 0.9375rem;
    .ImgBox {
      width: 0.6875rem;
      height: 1.0625rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .search {
      margin: 0 auto;
      position: relative;
      display: flex;
      align-items: center;
      .search_img {
        width: 1rem;
        height: 1.125rem;
        position: absolute;
        left: 0.5625rem;
        img {
          width: 100%;
          height: 100%;
        }
      }

      input {
        width: 290px;
        height: 30px;
        background: rgba(49, 159, 228, 1);
        border: 1px solid rgba(143, 212, 255, 1);
        border-radius: 15px;
        padding: 0.4375rem 0;
        padding-left: 1.875rem;
      }
    }
  }
}
</style>