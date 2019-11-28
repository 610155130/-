<template>
  <div>
    <van-nav-bar :title="$route.name" left-arrow @click-left="onClickLeft" />
    <van-cell-group class="box">
      <van-field class="t2" v-model="username" clearable label="用户名" placeholder="请输入用户名" />

      <van-field class="t1" v-model="password" type="password" label="密码" placeholder="请输入密码" />
      <van-field class="t1" v-model="password1" type="password" label="验证密码" placeholder="请输入密码" />
      <van-field class="t1" v-model="iphone" clearable label="手机号码" placeholder="请输入手机号码" />
      <van-field class="t1" v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码">
        <van-button slot="button" size="small" type="primary">发送验证码</van-button>
      </van-field>
    </van-cell-group>
    <van-button class="btn" type="primary" size="large" @click="getdata">注册</van-button>
  </div>
</template>

<script>
import { Notify } from "vant";
export default {
  data() {
    return {
      username: null,
      password: null,
      password1: null,
      iphone: null,
      sms: null
    };
  },
  methods: {
    getdata() {
      if (this.password == this.password1) {
        this.$axios
          .get("/register", {
            params: {
              username: this.username,
              password: this.password,
              iphone: this.iphone
            }
          })
          .then(data => {
            window.console.log(data);
            if (data.data.code == 200) {
              Notify({
                message: "注册成功",
                type: "success",
                duration: 2000,
                onOpened: () => {
                  this.$router.push("/login");
                }
              });
            }
          });
      }
    },
    onClickLeft() {
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="scss" scoped>
.van-nav-bar {
  background: linear-gradient(to bottom, #fb5d5e 0%, #f86428 100%);
}
.box {
  .t1 {
    margin: 10px 0;
    float: left;
  }
  .t2 {
    margin: 20px 0 10px;
    float: left;
  }
}
.btn {
  width: 85%;
  margin: 10px;
}
.van-icon-arrow-left:before {
  color: #fff;
}

.van-nav-bar__title {
  color: #fff;
  font-size: 18px;
}

</style>