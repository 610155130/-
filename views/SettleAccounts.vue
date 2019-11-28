<template>
 <div>
<van-nav-bar
  :title="$route.name"
  left-arrow
  @click-left="onClickLeft"
/>
<div class="orders"><van-icon class="txt" name="passed" /><span>订单支付成功</span></div>
<div class="ordert"><span @click="viewOrder">查看订单</span><span @click="backHome">返回首页</span></div>
 </div>
</template>

<script>
 export default {
    methods: {
    onClickLeft() {
      this.$router.push("/cars");
    },
    viewOrder(){
     this.$router.push("/order");
    },
    backHome(){
     this.$router.push("/home");
    },

  }
 }
</script>

<style lang="scss" scoped>
.orders{
 width: 100%;
 height: 50px;
  color: #428A42;
  font-size: 20px;
  line-height: 50px;
 .txt{
  line-height: 50px;
 }
}
.ordert{
 width: 244px;
 height: 50px;
 margin: 0 auto;
 span{
  display: block;
  float: left;
  width: 100px;
  height: 40px;
  border: 1px solid #000;
  border-radius: 10px;
  line-height: 40px;
  text-align: center;
  margin: 10px;
 }
}
</style>