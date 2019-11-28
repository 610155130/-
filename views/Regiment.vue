<template>
 <div>
  <van-nav-bar
  :title="$route.name"
  left-arrow
  @click-left="onClickLeft"
/>
   <div class="tp"><img src="../assets/images/jppt.png" alt=""></div>
  <div class="tj">去开团</div>
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