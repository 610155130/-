<template>
 <div>
<div>
        <div class="imgs"><img src="../assets/timg.png" alt=""></div>
        <h3 class="countDup">{{num}}</h3>
    </div>
 </div>
</template>

<script>
    export default {    
        data() {
            return {
                num:3,
                cleardata:null
            }
        },
        created() {
            this.cleardata = setInterval(()=>{
                if(this.num == 0){
                    this.$router.push("/home");
                }else{
                    this.num--
                }
            },1000)
        },
        beforeDestroy() {
            //  页面跳转先销毁在跳转
            clearInterval(this.cleardata)
        },
    }
</script>

<style lang="scss" scoped>
.imgs{
   width: 100%;
  height: 100%;
  position: relative;
  img{
   width:100%;
   display:block;
  }
}
.countDup{
 width:25px;
 height:25px;
 border-radius:50%;
 border:1px solid #fff;
 position: absolute;
 top: -11px;
 right: 10px;
 font-size:13px;
 line-height:25px;
 text-align: center;
 color:#fff;
}

</style>