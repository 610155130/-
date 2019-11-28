<template>
 <div>
  <van-nav-bar
  :title="$route.name"
  left-arrow
  @click-left="onClickLeft"
/>
<van-tabs @click="onClick">
  <van-tab title="商品收藏">
   <div class="tp"><img src="../assets/images/spsc.png" alt=""></div>
  <div class="dd">看到喜欢的商品就收藏吧</div>
  <div class="tj">今日推荐</div>
  </van-tab>
  <van-tab title="店铺收藏">
   <div class="tp"><img src="../assets/images/djsc.png" alt=""></div>
  <div class="dd">你还没有关注的店铺哦</div>
  <div class="dd2">收藏可查看店家的最新特卖</div>
  <div class="tj">今日推荐</div>
  </van-tab>
</van-tabs>
 </div>
</template>

<script>
 export default {
  methods: {
           onClickLeft() {
      this.$router.push("/my")
    },

  },
 }
</script>

<style lang="scss" scoped>
.tp{
  width: 200px;
  height: 200px;
  display: block;
  margin: 0 auto;
  img{
    width: 100%;
    display: block;
  }
}
.dd{
  font-size: 18px
}
.dd2{
  font-size: 13px
}
.tj{
  width: 200px;
  height: 50px;
  border: 1px solid #FF464E;
  color: #FF464E;
  text-align: center;
  line-height: 50px;
  margin: 20px auto;
}
</style>