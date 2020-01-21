

<template>
  <div id="DestinationList">
    <div class="tabsBox">
      <van-tabs type="card" v-model="active">
        <van-tab :title="item.title" v-for="(item,index) of TitleList" :key="index">
          <!-- 最新 -->
          <div class="container-water-fall" v-if="active===0">
            <div class="btn-group"></div>
            <waterfall :col="col" :data="data" @loadmore="loadmore">
              <template>
                <div class="cell-item" v-for="(item,index) in data" :key="index" @click="jump">
                  <img v-if="item.img" :src="item.img" alt="加载错误" />
                  <div class="item-body">
                    <div class="item-desc">{{item.title}}</div>
                    <div class="item-footer">
                      <div class="peopleBox">
                        <div>发布人：{{item.user}}</div>
                      </div>
                      <div class="praiseBox">
                        <div class="ImgBox">
                          <img src="../assets/img/12.png" alt />
                        </div>
                        <div class="number">{{item.like}}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </waterfall>
            <loading :show="loading" />
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<style lang="less">
#DestinationList {
  .van-tabs__nav--card {
    border: 1px solid rgba(91, 190, 252, 1);
    border-radius: 0px 3px 3px 0px;
  }
  .van-tabs__nav--card .van-tab {
    border: 0;
  }
  .van-tab.van-tab--active {
    background: #5bbefc;
  }
  .vue-waterfall-column {
    width: 47% !important;
    margin-left: 0.4375rem;
  }
  .vue-waterfall {
    overflow-y: auto;
  }
}
</style>
<style  lang="less" scoped>
#DestinationList {
  .tabsBox {
    margin: 1.0625rem 0;
    margin-bottom: 0;
    .container-water-fall {
      padding: 0 0.9375rem;
      width: 100%;
      padding-left: 0.8125rem;
      margin-top: 1.0625rem;
      h4 {
        padding-top: 56px;
        padding-bottom: 28px;
        font-family: PingFangSC-Medium;
        font-size: 36px;
        color: #000000;
        letter-spacing: 1px;
        text-align: justify;
      }
      button {
        background-color: #ff0;
        color: #24292e;
        border: 1px solid rgba(27, 31, 35, 0.2);
        border-radius: 0.25em;
        width: 100px;
        line-height: 26px;
        font-size: 13px;
        margin: 4px 0;
        margin-right: 4px;
        cursor: pointer;
        outline: none;
        &.blue-light {
          background: #27fbc2;
        }
      }
      button:hover {
        background-image: linear-gradient(-180deg, #fafbfc, #ccc 90%);
      }

      .cell-item {
        width: 100%;
        background: #ffffff;
        overflow: hidden;
        box-sizing: border-box;
        margin-bottom: 0.75rem;
        img {
          width: 100%;
          height: auto;
          display: block;
        }
        .item-body {
          padding: 12px;
          .item-desc {
            font-size: 12px;
            font-family: PingFang SC;
            font-weight: 400;
            color: rgba(0, 0, 0, 1);
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
          }
          .item-footer {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 0.9375rem;
            .peopleBox {
              display: flex;
              justify-content: space-between;
              font-size: 0.625rem;
              font-family: PingFang SC;
              font-weight: 400;
              color: rgba(102, 102, 102, 1);
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 1;
              overflow: hidden;
            }
            .praiseBox {
              display: flex;
              align-items: center;
              .ImgBox {
                width: 0.75rem;
                height: 0.75rem;
                img {
                  width: 100%;
                  height: 100%;
                }
              }
              .number {
                font-size: 0.625rem;
                font-family: PingFang SC;
                font-weight: 400;
                color: rgba(102, 102, 102, 1);
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 1;
                overflow: hidden;
                margin-left: 0.375rem;
                width: 1.375rem;
              }
            }
          }
        }
      }
    }
    .githubdata {
      float: right;
      margin-right: 90px;
      img {
        width: 14px;
      }
    }
  }
}
</style>
<script>
/*
  注意:
  1.itemWidth需要与gutterWidth一起使用才会生效，否则会进行自适应宽度
  2.使用了waterfall的组件不允许使用scoped,否则样式会有问题
*/
import loading from "./loading";
export default {
  props: {
    title: String
  },
  components: {
    loading
  },
  data() {
    return {
      active: 0,
      data: [],
      col: 2,
      loading: false,
      TitleList: [{ title: "热门" }, { title: "最新" }],
      gitHubData: {},
      originData: [
        {
          img:require('../assets/img/15.png'),
          title: "巴厘岛必去的最美无边泳池 在一百米的悬崖之上，美..",
          user: "阿树",
          like: "1111"
        },
        {
          img:require('../assets/img/14.png'),
          title: "巴厘岛必去的最美无边泳池 在一百米的悬崖之上，美..",
          user: "阿树",
          like: "1111"
        },
        {
          img:require('../assets/img/15.png'),
          title: "巴厘岛必去的最美无边泳池 在一百米的悬崖之上，美..",
          user: "阿树",
          like: "1111"
        },
        {
          img:require('../assets/img/14.png'),
          title: "巴厘岛必去的最美无边泳池 在一百米的悬崖之上，美..",
          user: "阿树",
          like: "1111"
        },
      ]
    };
  },
  computed: {
    itemWidth() {
      return 133 * 0.5 * (document.documentElement.clientWidth / 375);
    },
    gutterWidth() {
      return 10 * 0.5 * (document.documentElement.clientWidth / 375);
    }
  },
  methods: {
    toGitHub() {
      window.open(
        "https://github.com/Rise-Devin/vue-waterfall2/blob/master/README.md",
        "_blank"
      );
    },
    reset() {
      this.data = [];
    },
    jump(){
      this.$router.push({name:'DestinationDetail'})
    },
    switchCol(col) {
      this.col = col;
    },

    loadmore() {
      this.loading = true;
      setTimeout(() => {
        this.data = this.data.concat(this.originData, this.originData);
        this.loading = false;
      }, 1000);
    }
  },
  mounted() {
    this.data = this.originData;
  }
};
</script>