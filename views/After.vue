<template>
  <div>
    <van-nav-bar :title="$route.name" left-arrow @click-left="onClickLeft" />
    <van-tabs @click="onClick">
      <van-tab title="售后申请">
        <div class="tp">
          <img src="../assets/images/empty-order.png" alt />
        </div>
        <div class="dd">暂无订单</div>
        <div class="tj">今日推荐</div>
      </van-tab>
      <van-tab title="售后查询">
        <div class="tp">
          <img src="../assets/images/empty-order.png" alt />
        </div>
        <div class="dd">暂无订单</div>
        <div class="tj">今日推荐</div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClick(name, title) {}
  }
};
</script>

<style lang="scss" scoped>
.tp {
  width: 200px;
  height: 200px;
  display: block;
  margin: 0 auto;
  img {
    width: 100%;
    display: block;
  }
}
.dd {
  font-size: 18px;
}
.dd2 {
  font-size: 13px;
}
.tj {
  width: 200px;
  height: 50px;
  border: 1px solid #ff464e;
  color: #ff464e;
  text-align: center;
  line-height: 50px;
  margin: 20px auto;
}
.van-icon-arrow-left:before {
  color: #3d3d3d;
  font-size: 18px;
}

.van-nav-bar__title {
  color: #3d3d3d;
  font-size: 18px;
}
</style>