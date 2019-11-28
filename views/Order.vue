<template>
  <div>
    <van-nav-bar title="全部订单" left-arrow @click-left="onClickLeft" />

    <van-tabs v-model="active">
      <van-tab title="全部订单">
        <div v-show="$store.state.iscars">
          <div class="tp">
            <img src="../assets/images/empty-order.png" alt />
          </div>
          <div class="dd">暂无订单</div>
          <div class="tjs">今日推荐</div>
        </div>
        <!-- <div> -->
        <!-- <div class="orderid" >订单：201904183354 </div> -->
        <div v-for="(item,i) in $store.state.gooss" :key="i">
          <van-card
            num="1"
            :price="formatPrice(item.price)"
            :desc="item.desc"
            :title="item.title"
            :thumb="item.thumb"
          />
          <div class="quantum">
            <div class="box2">
              <span>合计{{item.num*formatPrice(item.price)}}</span>
              <span class="txt-t1">共{{item.num}}件商品</span>
            </div>
            <div class="box">
              <span class="receiving" @click="removes">确认收货</span>
            </div>
          </div>
        </div>
        <!-- </div> -->
      </van-tab>
      <van-tab title="待付款">
        <div class="tp">
          <img src="../assets/images/empty-order.png" alt />
        </div>
        <div class="dd">暂无订单</div>
        <div class="tjs">今日推荐</div>
      </van-tab>
      <van-tab title="待成团">
        <div class="tp">
          <img src="../assets/images/empty-order.png" alt />
        </div>
        <div class="dd">暂无订单</div>
        <div class="tjs">今日推荐</div>
      </van-tab>
      <van-tab title="待收货">
        <div v-show="$store.state.iscars">
          <div class="tp">
            <img src="../assets/images/empty-order.png" alt />
          </div>
          <div class="dd">暂无订单</div>
          <div class="tjs">今日推荐</div>
        </div>
        <div v-for="(items,i) in $store.state.goos" :key="i">
          <van-card
            num="1"
            :price="formatPrice(items.price)"
            :desc="items.desc"
            :title="items.title"
            :thumb="items.thumb"
          />
          <div class="quantum">
            <div class="box2">
              <span>合计{{items.num*formatPrice(items.price)}}</span>
              <span class="txt-t1">共{{items.num}}件商品</span>
            </div>
            <div class="box">
              <span class="receiving" @click="remove(i)">确认收货</span>
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.push("/my");
    },
    formatPrice(price) {
      return (price / 100).toFixed(2);
    },
    removes() {
      this.remove();
    },
    remove(i) {
      this.$store.state.goos.splice(i, 1);
      this.ceslength();
    },
    ceslength() {
      if (this.$store.state.gooss.length == 0) {
        this.$store.state.iscars = true;
      } else {
        this.$store.state.iscars = false;
      }
    }
  },
  data() {
    return {
      checkedGoods: this.$store.state.Cart.checkedGoods,
      active: 0
    };
  },
  created() {
    window.console.log(this.$store.state.gooss);
    var price = 0;
    this.$store.state.gooss.forEach(item => {
      price += item.price * item.num;
    });
    // window.console.log(price)
    this.totalPrice = price;
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
.tjs {
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

.quantum {
  width: 100%;
  background-color: #fafafa;
  margin: 1px 0 10px;
  padding: 0 16px;

  .box2 {
    width: 100%;
    height: 30px;
    span {
      float: right;
      margin-left: 10px;
      font-size: 12px;
      line-height: 30px;
    }
    .txt-t1 {
      color: #999999;
      float: right;
    }
  }
  .box {
    width: 100%;
    height: 52px;
    .receiving {
      display: block;
      width: 80px;
      height: 30px;
      border: 1px solid #ff5000;
      color: #ff5000;
      border-radius: 10px;
      line-height: 30px;
      text-align: center;
      font-weight: bold;
      float: right;
      margin: 10px 0;
    }
  }
}
.orderid {
  text-align: left;
  padding: 0 16px;
  background-color: #fafafa;
}
</style>