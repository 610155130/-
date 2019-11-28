<template>
  <div id="app">
    <router-view />

    <van-tabbar v-model="active" v-show="showactiove">
      <van-tabbar-item to="/home" icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/category1" icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item to="/cars" icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item to="/my" icon="user-o">我的</van-tabbar-item>
      <!-- settlement -->
    </van-tabbar>
  </div>
</template>

<script>

export default {
  data() {
    return {
      active: 0,
      showactiove: false
    };
  },

  watch: {
    "$route.path": function(newValue, oldValue) {
      if (
        newValue == "/bootpage" ||
        newValue == "/Banner" ||
        newValue == "/goods" ||
        newValue == "/logo" ||
        newValue == "/register" ||
        newValue == "/collection" ||
        newValue == "/after" ||
        newValue == "/account"||
        newValue == "/order"
      ) {
        this.showactiove = false;
      } else {
        this.showactiove = true;
      }
      window.console.log(newValue);
      window.console.log(oldValue);
    }
  },
  created() {
    // 首次进入，都进入首页
    this.$router.push("/");
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
