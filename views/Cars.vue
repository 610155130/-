<template>
  <div>
    <van-nav-bar :title="$route.name" />

    <van-checkbox-group class="card-goods" v-model="checkedGoods">
      <van-checkbox class="card-goods__item" v-for="item in goods" :key="item.id" :name="item.id">
        <van-card
          :title="item.title"
          :desc="item.desc"
          :num="item.num"
          :price="formatPrice(item.price)"
          :thumb="item.thumb"
        />
        <div class="subtraction">
          <div class="btn-group" role="group" aria-label="...">
            <button type="button" class="btn btn-default" @click.stop="item.num<=1?1:item.num--">-</button>
            <input type="text" class="btn btn-default btns" :value="item.num" />
            <button type="button" class="btn btn-default" @click.stop="item.num++">+</button>
          </div>
        </div>
      </van-checkbox>
    </van-checkbox-group>

    <!-- 购物车商品栏 -->
    <section class="jp_sp-shop" v-show="$store.state.iscars">
      <div class="jp_sp-shop-box">
        <img src="../assets/images/empty-cart.png" alt />
        <div>看到喜欢就带回家吧</div>
        <a href="JavaScript:;">今日推荐</a>
      </div>
    </section>
    <van-submit-bar
      :price="totalPrice"
      :disabled="!checkedGoods.length"
      :button-text="submitBarText"
      @submit="onSubmit"
    />
  </div>
</template>

<script>
import { Checkbox, CheckboxGroup, Card, SubmitBar, Toast } from "vant";
import { mapState } from "vuex";
export default {
  components: {
    [Card.name]: Card,
    [Checkbox.name]: Checkbox,
    [SubmitBar.name]: SubmitBar,
    [CheckboxGroup.name]: CheckboxGroup
  },
  data() {
    return {
      checkedGoods: this.$store.state.Cart.checkedGoods,
      see: true,
      index: 1,
      num: 0
    };
  },
  computed: {
    ...mapState({
      goods: state => state.Cart.goodslists
    }),
    submitBarText() {
      const count = this.checkedGoods.length;
      return "结算" + (count ? `(${count})` : "");
    },
    totalPrice() {
      return this.goods.reduce(
        (total, item) =>
          total +
          (this.checkedGoods.indexOf(item.id) !== -1
            ? item.price * item.num
            : 0),
        0
      );
    }
  },
  methods: {
    formatPrice(price) {
      return (price / 100).toFixed(2);
    },
    onSubmit() {
      this.$store.state.goos = this.goods;
      this.$store.state.gooss = this.goods;

      Toast.loading({
        message: "结算中...",
        forbidClick: true
      });
      var BBQ = this;
      setTimeout(function() {
        BBQ.$router.push("/settlement");
        this.checkedGoods = {};
      }, 2000);
    },
    add() {
      this.num++;
    },
    red() {}
  },
  created() {
    if (!this.checkedGoods.length == 0) {
      this.$store.state.iscars = false;
    } else {
      this.$store.state.iscars = true;
    }
    window.console.log(this.checkedGoods);
  }
};
</script>

<style lang="scss" scoped>
.card-goods {
  padding: 10px 0;
  background-color: #fff;
  &__item {
    position: relative;
    background-color: #fafafa;
    .van-checkbox__label {
      width: 100%;
      height: auto; // temp
      padding: 0 10px 0 15px;
      box-sizing: border-box;
    }
    .van-checkbox__icon {
      top: 50%;
      left: 10px;
      z-index: 1;
      position: absolute;
      margin-top: -10px;
    }
    .van-card__price {
      color: #f44;
    }
  }
}
.van-submit-bar {
  bottom: 50px !important;
}
.subtraction {
  position: absolute;
  right: 50px;
  bottom: 15px;
  z-index: 1000;
}

.btn {
  width: 25px;
  height: 25px;
  padding: 0 !important;
}
.btns {
  width: 60px;
}
.btn-default {
  line-height: 12px;
}
a {
  color: #ff464e !important;
}
.van-checkbox {
  padding: 0 10px;
}
</style>
