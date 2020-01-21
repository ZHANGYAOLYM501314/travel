<template>
  <!-- 新建游记发表 -->
  <div id="TravelPublish">
    <div class="TravelPublish_Title">
      <img src="../assets/img/left.png" @click="jump" />
      <p>新建游记</p>
      <div class="send">发表</div>
    </div>
    <div class="Bg_Box">
      <div class="Add">添加封面</div>
      <div class="DetailBox">
        <van-cell-group>
          <van-field v-model="value" placeholder="请输入游记标题" class="input" />
        </van-cell-group>
        <div class="SelectBox">
          <div>选择地点：</div>
          <div class="select">
            <select>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div>
        </div>
        <div class="SelectBox">
          <div>出发时间：</div>
          <div class="select">
            <select>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
            <span>年</span>
            <select>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
            <span>月</span>
            <select>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
            <!-- <span>日</span> -->
          </div>
        </div>
        <div class="SelectBox">
          <div>离开时间：</div>
          <div class="select">
            <select>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
            <span>年</span>
            <select>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
            <span>月</span>
            <select>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
            <!-- <span>日</span> -->
          </div>
        </div>
        <div class="SelectBox">
          <div>人均消费：</div>
          <input type="text" placeholder="2000" class="abc" />
          <span class="input">元</span>
        </div>
        <div class="board">
          <input type="text" class="boardinput" placeholder="请输入正文内容"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { value: "" };
  },
  methods: {
    jump() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="less">
#TravelPublish {
  .van-field__control::placeholder {
    font-size: 1.125rem;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(153, 153, 153, 1);
  }
  select {
    width: 3.75rem;
    height: 1.25rem;
    border: 1px solid rgba(153, 153, 153, 1);
    border-radius: 0.1875rem;
    font-size: 10px;
    font-family: PingFang SC;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    text-align: center;
  }
  span {
    margin: 0 0.6875rem;
  }
  span:last-child {
    margin: 0;
  }
  .option select {
    font-size: 10px;
    font-family: PingFang SC;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
  }
  .abc {
    border: 1px solid rgba(153, 153, 153, 1);
    border-radius: 3px;
    width: 60px;
    height: 20px;
    padding: 0.375rem 1rem;
  }
  input::placeholder {
    font-size: 10px;
    font-family: PingFang SC;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
  }
}
</style>
<style lang="less" scoped>
#TravelPublish {
  .TravelPublish_Title {
    padding: 0 0.9375rem;
    background: #5bbefc;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 0.6875rem;
      height: 1.0625rem;
    }
    p {
      width: 6.25rem;
      font-size: 1.125rem;
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
      line-height: 1.1875rem;
      opacity: 0.98;
      margin: 0 auto;
    }
    .send {
      width: 3.125rem;
      height: 1.25rem;
      background: rgba(247, 23, 53, 1);
      border-radius: 0.3125rem;
      line-height: 1.25rem;
      text-align: center;
      font-size: 0.75rem;
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
      opacity: 0.98;
    }
  }
  .Bg_Box {
    background: url("../assets/img/19.png") center no-repeat;
    background-size: cover;
    width: 100%;
    height: 9.6875rem;
    position: relative;
    .Add {
      width: 5rem;
      height: 1.25rem;
      background: rgba(247, 23, 53, 1);
      border-radius: 0.3125rem;
      font-size: 0.75rem;
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
      opacity: 0.98;
      text-align: center;
      line-height: 1.25rem;
      margin: 0 auto;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    .DetailBox {
      background: #ffffff;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      padding: 0 0.9375rem;
      position: relative;
      bottom: -8.625rem;
      width: 100%;
      padding-bottom: 2.1875rem;
      .input {
        border-bottom: 0.0625rem solid rgba(11, 109, 121, 0.1);
      }
      .SelectBox {
        margin: 0.625rem 0;
        font-size: 0.75rem;
        font-family: PingFang SC;
        font-weight: bold;
        color: rgba(0, 0, 0, 1);
        display: flex;
        .input {
          margin: 0 0.6875rem;
        }
      }
      .board {
        .boardinput {
          padding-bottom: 15.625rem;
          width: 100%;
          border: 1px solid rgba(191, 191, 191, 1);
          border-radius: 5px;
          padding-left: 0.9375rem;
        }
      }
    }
  }
}
</style>