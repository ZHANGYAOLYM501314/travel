<template>
  <!-- 游记==详情页面 -->
  <div id="TravelDetail">
    <div class="bg_Box">
      <img src="../assets/img/left.png" alt class="backimg" @click="back" />
      <div class="DetailBox">
        <div class="PublicBox">
          <div>发布单位：阿树</div>
          <div>地点：成都</div>
        </div>
        <div class="TableBox">
          <table>
            <tr>
              <th v-for="(item,index) of TitleList" :key="index">{{item.title}}</th>
            </tr>
            <tr>
              <td v-for="(item,index) of List" :key="index">{{item.title}}</td>
            </tr>
          </table>
        </div>
        <div class="TitleBox">
          <p>标题：</p>
          <p>成都周末必打卡的网红创意园</p>
        </div>
        <div class="TxtBox">
          <p>正文：</p>
          <p>111111111111111</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      TitleList: [
        { title: "出发时间" },
        { title: "离开时间" },
        { title: "人均消费" }
      ],
      List: [
        { title: "2019.12.25" },
        { title: "2019.12.25" },
        { title: "2020元" }
      ]
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="less" scoped>
#TravelDetail {
  .bg_Box {
    position: relative;
    background: url("../assets/img/18.png") center no-repeat;
    background-size: cover;
    height: 14.0625rem;
    width: 100%;
    .backimg {
      width: 0.6875rem;
      height: 1.0625rem;
      margin-top: 1.125rem;
      margin-left: 0.9375rem;
    }
    .DetailBox {
      border-top-left-radius: 0.625rem;
      border-top-right-radius: 0.625rem;
      width: 100%;
      position: relative;
      bottom: -10.3125rem;
      background: #fff;
      padding: 0 0.9375rem;
      padding-top: 0.9375rem;
      .PublicBox {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 10px;
        font-family: PingFang SC;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.8);
        margin-bottom: 0.3125rem;
      }
      .TableBox {
        table {
          border-collapse: collapse;
          width: 100%;
        }
        th {
          font-size: 12px;
          font-family: PingFang SC;
          font-weight: bold;
          color: rgba(0, 0, 0, 1);
        }
        td {
          font-size: 12px;
          font-family: PingFang SC;
          font-weight: 400;
          color: rgba(0, 0, 0, 0.8);
          letter-spacing: 0.0625rem;
        }
        table,
        tr,
        th,
        td {
          border: 1px solid rgba(11, 109, 121, 0.1);
          text-align: center;
          vertical-align: center;
          padding: 0.9375rem;
        }
      }
      .TitleBox {
        display: flex;
        margin: 0.9375rem 0;
        p:first-child {
          font-size: 0.75rem;
          font-family: PingFang SC;
          font-weight: bold;
          color: rgba(0, 0, 0, 1);
        }
        p:last-child {
          font-size: 12px;
          font-family: PingFang SC;
          font-weight: 400;
          color: rgba(0, 0, 0, 0.8);
        }
      }
      .TxtBox {
        p:first-child {
          font-size: 0.75rem;
          font-family: PingFang SC;
          font-weight: bold;
          color: rgba(0, 0, 0, 1);
        }
        p:last-child {
          font-size: 12px;
          font-family: PingFang SC;
          font-weight: 400;
          color: rgba(0, 0, 0, 0.8);
          white-space: normal;
          word-break: break-all;
          word-wrap: break-word;
          text-decoration: 2em;
        }
      }
    }
  }
}
</style>