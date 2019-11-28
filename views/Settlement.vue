<template>
  <div>
    <div class="box-tltie">
      <van-nav-bar :title="$route.name" left-arrow @click-left="onClickLeft" />

      <!-- <div class="address">
      <van-icon name="location-o
" class="xfr" />
      <span class="txt">请填写收货地址</span>
      <van-icon name="arrow" class="xfl" />
      </div>-->
      <van-address-list to="/address" v-model="chosenAddressId" :list="list" />

      <!-- 商品描述 -->
      <div v-for="(item,i) in $store.state.goos" :key="i">
        <van-card
          :num="item.num"
          :price="formatPrice(item.price)"
          :desc="item.desc"
          :title="item.title"
          :thumb="item.thumb"
        />
      </div>
      <!-- 优惠卷 -->
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
      <section class="jq_gr-coupon">
        <div class="jq_coupon">
          <div class="jp_gr-coupon-top">
            <span class="ts1">支付方式</span>
          </div>
          <van-radio-group v-model="radio">
            <van-cell-group>
              <div class="icon1"></div>
              <van-cell title="微信支付" clickable @click="radio = '1'">
                <van-radio slot="right-icon" name="1" />
              </van-cell>
              <div class="icon2"></div>
              <van-cell title="支付宝支付" clickable @click="radio = '2'">
                <van-radio slot="right-icon" name="2" />
              </van-cell>
            </van-cell-group>
          </van-radio-group>
        </div>
      </section>
      <van-submit-bar :price="totalPrice" button-text="提交订单" @submit="onSubmit" />
      <van-popup v-model="show" position="bottom" :style="{ height: '50%' }">
        <van-password-input
          :value="value"
          info="密码为 6 位数字"
          :focused="showKeyboard"
          @focus="showKeyboard = true"
        />

        <!-- 数字键盘 -->
        <van-number-keyboard
          :show="showKeyboard"
          @input="onInput"
          @delete="onDelete"
          @blur="showKeyboard = false"
        />
      </van-popup>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";

const coupon = {
  available: 1,
  condition: "无使用门槛\n最多优惠12元",
  reason: "",
  value: 150,
  name: "优惠券名称",
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: "1.5",
  unitDesc: "元"
};
export default {
  methods: {
    onClickLeft() {
      this.$router.push("/cars");
    },
    // addres(){
    //   this.$router.push("/address")
    // },

    formatPrice(price) {
      return (price / 100).toFixed(2);
    },
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange() {
      this.coupons.push(coupon);
    },
    onSubmit() {
      this.checkedGoods = [];
      this.show = true;
    },
    onInput(key) {
      this.value = (this.value + key).slice(0, 6);
      // window.console.log(this.value);
      if (this.value.length == 6 && this.value == "123456") {
        Toast.loading({
          message: "付款中...",
          forbidClick: true,
          loadingType: "spinner"
        });
        // Toast.setDefaultOptions({ duration: 5000 });
        var BBQ = this;
        setTimeout(function() {
          BBQ.$router.push("/order");
        }, 2000);
      } else if (this.value.length == 6 && this.value != "123456") {
        Toast("密码错误");
        this.value = "";
      }
    },
    onDelete() {
      this.value = this.value.slice(0, this.value.length - 1);
    },

    onEdit(item, index) {
      Toast("编辑地址:" + index);
    }
  },
  data() {
    return {
      showList: false,
      sumloading: false,
      sumdisabled: false,
      couponcode: "",
      show: false,
      value: "",
      showKeyboard: true,
      totalPrice: 0,
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon],
      radio: "1",
      chosenAddressId: "1",
      list: [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室"
        }
      ]
    };
  },
  created() {
    window.console.log(this.$store.state.goos);
    var price = 0;
    this.$store.state.goos.forEach(item => {
      price += item.price * item.num;
    });
    // window.console.log(price)
    this.totalPrice = price;
  }
};
</script>

<style lang="scss" scoped>
.address {
  width: 100%;
  height: 50px;
  background-color: #48505a;
}
.xfr {
  float: left;
  color: #fff;
  font-size: 18px;
  padding: 0 10px 0 20px;
  line-height: 50px;
}
.txt {
  color: #fff;
  font-size: 15px;
  line-height: 50px;
  float: left;
}
.xfl {
  float: right;
  padding: 0 10px;
  line-height: 50px;
  color: #fff;
}
.van-cell__title {
  text-align: left;
  padding: 0 20px;
}

.jq_gr-coupon .jq_coupon .jp_gr-coupon-top {
  padding: 0 16px;
  .ts1 {
    font-weight: bold;
    text-align: left;
    font-size: 17px;
  }
}

.icon1 {
  width: 25px;
  height: 25px;
  background-image: url(../assets/images/weixing.png);
  background-position: 0 0;
  background-size: 25px 25px;
  background-repeat: no-repeat;
  display: block;
  position: absolute;
  top: 10px;
  left: 5px;
  z-index: 2;
}
.icon2 {
  width: 25px;
  height: 25px;
  background-image: url(../assets/images/zhifubao.png);
  background-position: 0 0;
  background-size: 25px 25px;
  background-repeat: no-repeat;
  display: block;
  position: absolute;
  top: 53px;
  left: 5px;
  z-index: 2;
}
.van-icon-arrow-left:before {
  color: #3d3d3d;
  font-size: 18px;
}

.van-nav-bar__title {
  color: #3d3d3d;
  font-size: 18px;
}
.van-address-list__add {
  display: none;
}
.van-address-list {
  padding-bottom: 0px;
}
.box-tltie {
  height: 100%;
  width: 100%;
  margin-bottom: 50px;
}
</style>