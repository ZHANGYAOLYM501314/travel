<template>
  <div>
      <!-- 底部导航组件 -->
    <van-tabbar v-model="active" inactive-color="#999999" active-color="#5BBEFC">
      <van-tabbar-item v-for="(item,index) in tabbars" :key="index" :to="(item.name)">
        <span>{{item.title}}</span>
        <img slot="icon" slot-scope="props" :src="props.active ? item.active : item.normal" />
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      tabbars: [
        {
          name: "/",
          title: "首页",
          normal: require("../assets/img/homeactive.png"),
          active: require("../assets/img/homeisactive.png")
        },
        {
          name: "/Destination",
          title: "目的地",
          normal: require("../assets/img/addressactive.png"),
          active: require("../assets/img/addressisactive.png")
        },
        {
          name: "/My",
          title: "我的",
          normal: require("../assets/img/myactive.png"),
          active: require("../assets/img/myisactive.png")
        }
      ]
    };
  },
  methods: {},
  //通过路由跳转判断选中的样式
  created() {
    if (this.$route.name == "Home") {
      this.active = 0;
    } else if (this.$route.name == "Destination") {
      this.active = 1;
    } else if (this.$route.name == "My") {
      this.active = 2;
    }
  }
};
</script>

<style lang="less" scoped>
</style>