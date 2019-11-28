<template>
  <div>
    <van-nav-bar class="box" :title="$route.name" left-arrow @click-left="onClickLeft" />
    <div class="tltie">
      <span>头像</span>
      <span class="het">
        <img :src="info.img" alt />
      </span>
    </div>
    <div class="tltie">
      <span>用户名</span>
      <span class="uesr">{{info.name}}</span>
    </div>
    <div class="tltie addres" @click="address">收货地址</div>
    <div class="tltie">
      <span>绑定手机号码</span>
      <span class="uesr">131******72</span>
    </div>
    <div class="tltie">修改密码</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: {}
    };
  },
  created() {
    window.console.log("登录");
    if (!localStorage.login) {
      this.$router.push("/login");
    } else {
      this.$axios
        .get("/getdata", {
          params: {
            token: localStorage.login
          }
        })
        .then(req => {
          console.log(req);
          this.info = req.data.result;
        });
    }
  },
  methods: {
    onClickLeft() {
      this.$router.push("/my");
    },
    address() {
      this.$router.push("/address");
    }
  }
};
</script>

<style lang="scss" scoped>
.tltie {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #f5f5f5;
  line-height: 50px;
  text-align: left;
  padding: 0 10px;
  background-color: #fff;
}

.van-icon-arrow-left:before {
  color: #3d3d3d;
  font-size: 18px;
}

.van-nav-bar__title {
  color: #3d3d3d;
  font-size: 18px;
}
.het {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: block;
  overflow: hidden;
  float: right;
  margin: 5px 10px;
  img {
    width: 100%;
    display: block;
  }
}
.addres {
  margin: 10px 0;
}
.uesr {
  text-align: right;
  float: right;
  padding: 0 10px;
  color: #999999;
  font-size: 14px;
}
</style>