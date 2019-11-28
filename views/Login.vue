<template>
  <div>
    <van-nav-bar
      title="登录"
      right-text="注册"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-tabs @click="onClick">
      <van-tab title="卷皮账号登录">
        <van-cell-group>
          <van-field
            v-model="username"
            clearable
            right-icon="question-o"
            placeholder="手机号/邮件/用户名"
            @click-right-icon="$toast('question')"
          />

          <van-field v-model="password" type="password" placeholder="密码" />
        </van-cell-group>
        <div class="boxs">
          <div>
            <van-button type="primary" size="large" @click="getlogin">登录</van-button>
            <span class="fr">忘记密码</span>
          </div>
          <van-checkbox v-model="checked" shape="square" checked-color="#FF3F4F">两周内免登录</van-checkbox>
        </div>
        <span class="tilte-box">第三方账号快速登录</span>
        <div class="party">
          <div class="box">
            <span>
              <img src="../assets/images/qq.png" alt />
            </span>
            <span>
              <img src="../assets/images/taobao.png" alt />
            </span>
            <span>
              <img src="../assets/images/weib.png" alt />
            </span>
          </div>
          <van-tabbar>
            <van-tabbar-item class="icon1">全场包邮</van-tabbar-item>
            <van-tabbar-item class="icon2">100%人工质检</van-tabbar-item>
            <van-tabbar-item class="icon3">7天放心退</van-tabbar-item>
          </van-tabbar>
        </div>
      </van-tab>
      <van-tab title="手机快捷登录">
                <van-cell-group>
          <van-field
            v-model="username"
            clearable
            right-icon="question-o"
            placeholder="请输入手机号"
            @click-right-icon="$toast('question')"
          />

          <van-field v-model="password" type="password" placeholder="请输入验证码" >
          <van-button slot="button" size="small" type="primary">发送验证码</van-button>
          </van-field>
        </van-cell-group>
        <div class="boxs">
          <div>
            <van-button type="primary" size="large" @click="getlogin">登录</van-button>
            <span class="fr">忘记密码</span>
          </div>
          <van-checkbox v-model="checked" shape="square" checked-color="#FF3F4F">两周内免登录</van-checkbox>
        </div>
        <span class="tilte-box">第三方账号快速登录</span>
        <div class="party">
          <div class="box">
            <span>
              <img src="../assets/images/qq.png" alt />
            </span>
            <span>
              <img src="../assets/images/taobao.png" alt />
            </span>
            <span>
              <img src="../assets/images/weib.png" alt />
            </span>
          </div>
          <van-tabbar>
            <van-tabbar-item class="icon1">全场包邮</van-tabbar-item>
            <van-tabbar-item class="icon2">100%人工质检</van-tabbar-item>
            <van-tabbar-item class="icon3">7天放心退</van-tabbar-item>
          </van-tabbar>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
// import { Notify } from "vant";
import { Toast } from "vant";
export default {
  data() {
    return {
      checked: true,
      username: null,
      password: null
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push("/my");
    },
    onClickRight() {
      this.$router.push("/register");
    },
    onClick(){
      this.$router.push("/login");
    },
    getlogin() {
      window.console.log("登录成功");
      this.$axios
        .get("/login", {
          params: {
            username: this.username,
            password: this.password
          }
        })
        .then(response => {
          if (response.data.code == 200) {
            let token = response.data.result.token;
            localStorage.login = token;
            this.$router.push("/my");
          } else {
            // Notify({
            //   message: "账号或密码错误",
            //   duration: 2000,
            //   background: '#fb5d5e'
            // });
            Toast('账号或密码错误');
          }
        })

    }
  }
};
</script>

<style lang="scss" scoped>
body {
  background: #fff;
}
.van-nav-bar {
  background: linear-gradient(to bottom, #fb5d5e 0%, #f86428 100%);
}
.van-icon-arrow-left:before {
  color: #fff;
}

.van-nav-bar__title {
  color: #fff;
  font-size: 18px;
}
.van-nav-bar__text {
  color: #fff;
}
.boxs {
  padding: 0 5%;
}
.van-button--large {
  margin: 20px 0;
}
.van-cell {
  padding: 20px 16px;
}
.fr {
  float: right;
}
.tilte-box {
  margin-top: 60px;
  display: block;
}
.party {
  width: 100%;
  margin: 0 auto;
  display: block;
  overflow: hidden;
  margin-top: 30px;
  .box {
    width: 240px;
    overflow: hidden;
    margin: 0 auto;
    span {
      width: 40px;
      height: 40px;
      border: 1px solid rgb(139, 137, 137);
      display: block;
      float: left;
      margin: 0 20px;
      padding: 10px;
      border-radius: 50%;
      img {
        width: 100%;
        display: block;
      }
    }
  }
}
.van-tabbar-item--active {
  color: #7d7e80;
}
.icon1 {
  background-image: url(../assets/images/baoyou.png);
  background-position: 8px 15px;
  background-size: 25px 25px;
  background-repeat: no-repeat;
}
.icon2 {
  background-image: url(../assets/images/zhijian.png);
  background-position: -1px 15px;
  background-size: 25px 25px;
  background-repeat: no-repeat;
}
.icon3 {
  background-image: url(../assets/images/7day.png);
  background-position: 8px 15px;
  background-size: 25px 25px;
  background-repeat: no-repeat;
}
</style>