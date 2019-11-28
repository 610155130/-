<template>
  <div>
    <van-nav-bar
  title="我的优惠卷"

  left-arrow
  @click-left="onClickLeft"
/>
    <!-- 优惠券单元格 -->
    <van-coupon-cell :coupons="coupons" :chosen-coupon="chosenCoupon" @click="showList = true" />

    <!-- 优惠券列表 -->
    <van-popup v-model="showList" position="bottom">
      <van-coupon-list
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        :disabled-coupons="disabledCoupons"
        @change="onChange"
       
      />
    </van-popup>
  </div>
</template>

<script>
// import { CouponCell, CouponList } from "vant";

const coupon = {
  available: 1,
  condition: '无使用门槛\n最多优惠12元',
  reason: '',
  value: 150,
  name: '优惠券名称',
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: '1.5',
  unitDesc: '元'
};

export default {
   data() {
    return {
      showList:false,
      sumloading:false,
      sumdisabled:false,
      couponcode:'',
      value:1,
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon]
    }
  },

  methods: {
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
      
    },
        onClickLeft() {
      this.$router.push("/my")
    },
    // onExchange(code) {
    //   this.coupons.push(coupon);
    // }
    
  }
};
</script>

<style lang="scss" scoped>
.van-icon-arrow-left:before {
  color: #3d3d3d;
  font-size: 18px;
}

.van-nav-bar__title {
  color: #3d3d3d;
  font-size: 18px;
}
</style>