<template>
  <div>
    <div class="jp_layout">
      <!-- 个人中心头部 -->
      <header class="jp_gr-header">
        <div class="jp_gr-box">
          <div class="jp_gr-nav">
            <router-link to="/home">
              <span class="icon-fh"></span>
            </router-link>
            <span class="gr-text">个人中心</span>
            <router-link to="/login">
              <span class="gr-out">退出</span>
            </router-link>
          </div>
          <div class="jp_gr-bot" @click="accounts">
            <div class="jp_bot-fl">
              <span>
                <img :src="info.img" alt />
              </span>
            </div>
            <div class="jp_bot-fr">
              <div class="name">{{info.name}}</div>
              <div class="account">
                我的账户
                <span class="icon-acc"></span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <!-- 个人中心头部-end -->

      <!-- 个人订单 -->
      <section class="jp_gr-order">
        <div class="jp_gr-order-box">
          <div class="jp_gr-order-top">
            <span class="ts1">我的订单</span>
            <router-link to="/order">
              <span class="ts2">全部订单</span>
            </router-link>
          </div>
          <div class="jp_gr-order-bot">
            <div class="jp_gr-order-wrapper">
              <ul>
                <li>
                  <a href="javascript:;" @click="orders">
                    <img src="../assets/images/dfk3.png" alt />
                  </a>
                  <span>待付款</span>
                </li>
                <li>
                  <a href="javascript:;" @click="orders">
                    <img src="../assets/images/dct2.png" alt />
                  </a>
                  <span>待成团</span>
                </li>
                <li>
                  <a href="javascript:;" @click="orders">
                    <img src="../assets/images/dsh2.png" alt />
                  </a>
                  <span>待收货</span>
                </li>
                <li>
                  <a href="javascript:;" @click="afters">
                    <img src="../assets/images/tk2.png" alt />
                  </a>
                  <span>退款/售后</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <!-- 个人订单-end -->

      <!-- 个人优惠卷 -->
      <section class="jq_gr-coupon">
        <div class="jq_coupon">
          <div class="jp_gr-coupon-top" @click="address">
            <span class="ts1">我的地址</span>
            <span class="ts2"></span>
          </div>
          <div class="jp_gr-coupon-top" @click="collection">
            <span class="ts1">我的收藏</span>
            <span class="ts2"></span>
          </div>
          <div class="jp_gr-coupon-top" @click="regiment">
            <span class="ts1">我的拼团</span>
            <span class="ts2">全部订单</span>
          </div>
          <div class="jp_gr-coupon-top" @click="regiments">
            <span class="ts1">我的优惠卷</span>
            <span class="ts2">0张</span>
          </div>
          <div class="jp_gr-coupon-top">
            <span class="ts1">借钱</span>
            <span class="ts2">新用户免费领1000元</span>
          </div>
          <div class="jp_gr-coupon-top">
            <span class="ts1">余额</span>
            <span class="ts2">0.00元</span>
          </div>
        </div>
      </section>
      <!-- 个人优惠卷-end -->

      <!-- 个人客服 -->
      <section class="jp_gr-service">
        <div class="jp_gr-box">
          <div class="jp_gr-service-bt">
            <span class="ts1">客服中心</span>
          </div>
          <div class="jp_gr-service-bt">
            <span class="ts1">关于卷皮</span>
          </div>
        </div>
      </section>
      <!-- 个人客服-end -->

      <!-- 个人返回 -->
      <section class="jp_gr-return">
        <div class="box">
          <span>返回页面</span>
          <span>客户端</span>
          <span>电脑版</span>
        </div>
      </section>
      <!-- 个人返回-end -->

      <!-- 底部栏 -->
      <footer class="jp_footer">
        <div class="jp_footer-box">
          <ul class>
            <li>
              <a href="./index.html">
                <img src="../assets/images/sy2.png" alt />
              </a>
              <span>首页</span>
            </li>
            <li>
              <a href="classify.html">
                <img src="../assets/images/yy.png" alt />
              </a>
              <span>分类</span>
            </li>
            <li>
              <a href="./shopping.html">
                <img src="../assets/images/gw.png" alt />
              </a>
              <span>购物车</span>
            </li>
            <li>
              <a href="javascript:;">
                <img src="../assets/images/gr2.png" alt />
              </a>
              <span class="sy">我的卷皮</span>
            </li>
          </ul>
        </div>
      </footer>
      <!-- 底部栏-end -->
    </div>
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
          this.info = req.data.result;
        });
    }
  },
  methods: {
    address() {
      this.$router.push("/address");
    },
    collection() {
      this.$router.push("/collection");
    },
    regiment() {
      this.$router.push("/regiment");
    },
    regiments() {
      this.$router.push("/test3");
    },
    orders() {
      this.$router.push("/order");
    },
    afters() {
      this.$router.push("/after");
    },
    accounts() {
      this.$router.push("/account");
    }
  }
};
</script>

<style lang="scss" scoped>
.name {
  text-align: left;
}
.ts1 {
  text-align: left;
}
</style>