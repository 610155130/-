<template>
  <div>
    <van-button class="roundbtn" icon="arrow-left" type="default" hairline round @click="pathgo" />

    <div class="goods">
      <van-swipe class="goods-swipe" :autoplay="3000">
        <van-swipe-item v-for="thumb in goods.thumb" :key="thumb">
          <img :src="thumb" />
        </van-swipe-item>
      </van-swipe>

      <van-cell-group>
        <van-cell>
          <div class="goods-title">{{ goods.title }}</div>
          <div class="goods-price">{{ formatPrice(goods.price) }}</div>
        </van-cell>
        <van-cell class="goods-express">
          <van-col span="10">运费：{{ goods.express }}</van-col>
          <van-col span="14">已购：{{ goods.remain }}</van-col>
        </van-cell>
      </van-cell-group>

      <van-cell-group class="goods-cell-group">
        <van-cell value="进入店铺" icon="shop-o" is-link @click="sorry">
          <template slot="title">
            <span class="van-cell-text">有赞的店</span>
            <van-tag class="goods-tag" type="danger">官方</van-tag>
          </template>
        </van-cell>
        <van-cell title="线下门店" icon="location-o" is-link @click="sorry" />
      </van-cell-group>

      <van-cell-group class="goods-cell-group">
        <van-cell title="查看商品详情" is-link @click="sorry" />
      </van-cell-group>

      <!-- 参数 -->
      <van-tabs type="card">
        <van-tab title="图文详情" title-active-color="#fff">
          <div class="box">
            <span v-for="twxq in goods.twxq" :key="twxq">
              <img :src="twxq" alt />
            </span>
          </div>
        </van-tab>
        <van-tab title="商品参数" title-active-color="#fff">
          <div class="box-test">
            <span class="txt1">常用快递</span>
            <span class="txt2">顺丰快递</span>
          </div>
          <div class="box-test">
            <span class="txt1">运费</span>
            <span class="txt3">全国包邮(偏远地区除外)</span>
          </div>
        </van-tab>
        <van-tab title="咨询与售后" title-active-color="#fff" class="box-txt">
          <span class="txt bt">在卷皮购物有哪些服务保障？</span>
          <span class="txt wb">卷皮为您提供“人工质检”“闪电发货” “精选品牌商”“7天无理由退货”“退货返运费” 等服务，让您轻松购物有保障。</span>
          <span class="txt bt">如何选择商品尺码?</span>
          <span
            class="txt wb"
          >商品详情页会展示所售商品的尺码表，可能会存在1-2cm的正常误差范围。由于每个人的身材具体尺寸都不一样，为了对您负责我们根据身高体重为您推荐的也不一定准确，建议您可以根据商品详情页面的尺码表测量自身数据后选择更稳妥哦~</span>
          <span class="txt bt">可以指定快递吗？</span>
          <span class="txt wb">商品详情页面会显示默认发货快递，商家也会根据您的地址自动匹配当地运营较好的快递公司安排配送，暂不接受指定快递哦~</span>
          <span class="txt bt">下单后什么时候发货？</span>
          <span class="txt wb">卷皮承诺买家付款成功后，商家将在内完成发货(特殊情况除外)。由于部分快递公司无法实时更新信息，您看到的物流情况可能会有延迟。</span>
          <span class="txt bt">购买后不喜欢可以退货么？</span>
          <span class="txt wb">卷皮严格按照消费者保障服务，商品自签收后7天内，在不影响二次销售的情况下，卷皮为您提供7天无理由退货服务（特殊商品除外）。</span>
          <span class="txt bt">退货后运费谁来承担？</span>
          <span class="txt wb">用户提交售后申请，售后完成后，系统会根据退货责任方与商品单价判断并补贴运费的哦~</span>
          <span class="txt bt">价格说明</span>
          <span class="txt wb">1.商品的未划横线价格（显示如65）为卷皮销售价，在没有满减、额外折扣的情况下，该价格是交易成交价，是您最终决定是否购买商品的依据。</span>
          <span
            class="txt wb"
          >2.商品的划横线价格为参考价，采集自品牌专柜标价、商品吊牌价或由品牌供应商提供的正品零售价；由于地区、时间的差异性和市场行情波动，品牌专柜标价、商品吊牌价可能会与您购物时展示的不一致，该价格仅供您参考。</span>
          <span
            class="txt wb"
          >4. 商品促销信息以商品详情页“促销”栏中的信息为准；最终交易成交价以订单结算页价格为准；如您发现活动商品售价或促销信息有异常，请购买前先联系客服咨询。</span>
          <span
            class="txt wb"
          >4. 商品促销信息以商品详情页“促销”栏中的信息为准；最终交易成交价以订单结算页价格为准；如您发现活动商品售价或促销信息有异常，请购买前先联系客服咨询。</span>
        </van-tab>
      </van-tabs>

      <van-goods-action>
        <van-goods-action-icon icon="chat-o" @click="sorry">客服</van-goods-action-icon>
        <van-goods-action-icon icon="cart-o" @click="onClickCart">购物车</van-goods-action-icon>
        <van-goods-action-button type="warning" @click="addCar">加入购物车</van-goods-action-button>
        <van-goods-action-button type="danger" @click="sorry">立即购买</van-goods-action-button>
      </van-goods-action>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      goods: {},
      ajaxgoodslists: [
        {
          title:
            "卓图女装法式小香风连衣裙粗花呢收腰单排扣中长款裙子秋新款HAW1970536",
          price: 36800,
          express: "免运费",
          remain: 1947,
          thumb: [
            require("../assets/images/ss01.jpg"),
            require("../assets/images/ss02.jpg"),
            require("../assets/images/ss03.jpg"),
            require("../assets/images/ss04.jpg"),
            require("../assets/images/ss05.jpg")
          ],
          twxq: [
            require("../assets/images/twxq1.jpg"),
            require("../assets/images/twxq2.jpg"),
            require("../assets/images/twxq3.jpg"),
            require("../assets/images/twxq4.jpg"),
            require("../assets/images/twxq5.jpg"),
            require("../assets/images/twxq6.jpg"),
            require("../assets/images/twxq7.jpg"),
            require("../assets/images/twxq8.jpg"),
            require("../assets/images/twxq9.jpg"),
            require("../assets/images/twxq10.jpg"),
            require("../assets/images/twxq11.jpg"),
            require("../assets/images/twxq12.jpg"),
            require("../assets/images/twxq13.jpg"),
            require("../assets/images/twxq14.jpg")
          ]
        },
        {
          title: "高筒靴高跟弹力女鞋子",
          price: 36800,
          express: "免运费",
          remain: 1947,
          thumb: [
            require("../assets/images/ss11.jpg"),
            require("../assets/images/ss12.jpg"),
            require("../assets/images/ss13.jpg"),
            require("../assets/images/ss14.jpg")
          ],
          twxq: [
            require("../assets/images/twxq(1)1.jpg"),
            require("../assets/images/tuxq(1)2.jpg"),
            require("../assets/images/tuxq(1)3.jpg"),
            require("../assets/images/tuxq(1)4.jpg"),
            require("../assets/images/tuxq(1)5.jpg"),
            require("../assets/images/tuxq(1)6.jpg"),
            require("../assets/images/tuxq(1)7.jpg"),
            require("../assets/images/tuxq(1)8.jpg"),
            require("../assets/images/tuxq(1)9.jpg"),
            require("../assets/images/tuxq(1)10.jpg"),
            require("../assets/images/tuxq(1)11.jpg")
          ]
        },
        {
          title:
            "【10个颜色】吊带背心女士冬季内搭针织打底衫运动上衣睡眠保暖外穿女加厚加绒",
          price: 4290,
          express: "免运费",
          remain: 1938,
          thumb: [
            require("../assets/images/ss21.jpg"),
            require("../assets/images/ss22.jpg"),
            require("../assets/images/ss23.jpg"),
            require("../assets/images/ss24.jpg"),
            require("../assets/images/ss25.jpg"),
            require("../assets/images/ss26.jpg")
          ],
          twxq: [
            require("../assets/images/twxq1.jpg"),
            require("../assets/images/twxq2.jpg"),
            require("../assets/images/twxq3.jpg"),
            require("../assets/images/twxq4.jpg"),
            require("../assets/images/twxq5.jpg"),
            require("../assets/images/twxq6.jpg"),
            require("../assets/images/twxq7.jpg"),
            require("../assets/images/twxq8.jpg"),
            require("../assets/images/twxq9.jpg"),
            require("../assets/images/twxq10.jpg"),
            require("../assets/images/twxq11.jpg"),
            require("../assets/images/twxq12.jpg"),
            require("../assets/images/twxq13.jpg"),
            require("../assets/images/twxq14.jpg")
          ]
        },
        {
          title:
            "高跟短靴女2019新款秋鞋网红潮鞋粗跟百搭女鞋马丁靴女英伦风鞋子HC-Y8668",
          price: 7990,
          express: "免运费",
          remain: 1967,
          thumb: [
            require("../assets/images/ss41.jpg"),
            require("../assets/images/ss42.jpg"),
            require("../assets/images/ss43.jpg"),
            require("../assets/images/ss44.jpg"),
            require("../assets/images/ss45.jpg"),
            require("../assets/images/ss46.jpg")
          ],
          twxq: [
            require("../assets/images/twxq1.jpg"),
            require("../assets/images/twxq2.jpg"),
            require("../assets/images/twxq3.jpg"),
            require("../assets/images/twxq4.jpg"),
            require("../assets/images/twxq5.jpg"),
            require("../assets/images/twxq6.jpg"),
            require("../assets/images/twxq7.jpg"),
            require("../assets/images/twxq8.jpg"),
            require("../assets/images/twxq9.jpg"),
            require("../assets/images/twxq10.jpg"),
            require("../assets/images/twxq11.jpg"),
            require("../assets/images/twxq12.jpg"),
            require("../assets/images/twxq13.jpg"),
            require("../assets/images/twxq14.jpg")
          ]
        },
        {
          title: "宜昌蜜桔橘子新鲜水果桔子青皮柑橘当季3斤/5斤/9斤",
          price: 3680,
          express: "免运费",
          remain: 2163,
          thumb: [
            require("../assets/images/ss51.jpg"),
            require("../assets/images/ss52.jpg"),
            require("../assets/images/ss53.jpg"),
            require("../assets/images/ss54.jpg"),
            require("../assets/images/ss55.jpg")
          ],
          twxq: [
            require("../assets/images/twxq1.jpg"),
            require("../assets/images/twxq2.jpg"),
            require("../assets/images/twxq3.jpg"),
            require("../assets/images/twxq4.jpg"),
            require("../assets/images/twxq5.jpg"),
            require("../assets/images/twxq6.jpg"),
            require("../assets/images/twxq7.jpg"),
            require("../assets/images/twxq8.jpg"),
            require("../assets/images/twxq9.jpg"),
            require("../assets/images/twxq10.jpg"),
            require("../assets/images/twxq11.jpg"),
            require("../assets/images/twxq12.jpg"),
            require("../assets/images/twxq13.jpg"),
            require("../assets/images/twxq14.jpg")
          ]
        },
        {
          title: "女童套装夏装2019新款儿童洋气网红短袖两件套女孩时髦潮童装夏季",
          price: 6990,
          express: "免运费",
          remain: 2163,
          thumb: [
            require("../assets/images/ss66.jpg"),
            require("../assets/images/ss62.jpg"),
            require("../assets/images/ss63.jpg"),
            require("../assets/images/ss64.jpg")
          ],
          twxq: [
            require("../assets/images/twxq1.jpg"),
            require("../assets/images/twxq2.jpg"),
            require("../assets/images/twxq3.jpg"),
            require("../assets/images/twxq4.jpg"),
            require("../assets/images/twxq5.jpg"),
            require("../assets/images/twxq6.jpg"),
            require("../assets/images/twxq7.jpg"),
            require("../assets/images/twxq8.jpg"),
            require("../assets/images/twxq9.jpg"),
            require("../assets/images/twxq10.jpg"),
            require("../assets/images/twxq11.jpg"),
            require("../assets/images/twxq12.jpg"),
            require("../assets/images/twxq13.jpg"),
            require("../assets/images/twxq14.jpg")
          ]
        },
        {
          title: "Adidas阿迪达斯三叶草男鞋2019夏季新款运动鞋鞋子低帮舒适休闲鞋",
          price: 49400,
          express: "免运费",
          remain: 1664,
          thumb: [
            require("../assets/images/ss71.jpg"),
            require("../assets/images/ss72.jpg"),
            require("../assets/images/ss73.jpg"),
            require("../assets/images/ss74.jpg")
          ],
          twxq: [
            require("../assets/images/twxq1.jpg"),
            require("../assets/images/twxq2.jpg"),
            require("../assets/images/twxq3.jpg"),
            require("../assets/images/twxq4.jpg"),
            require("../assets/images/twxq5.jpg"),
            require("../assets/images/twxq6.jpg"),
            require("../assets/images/twxq7.jpg"),
            require("../assets/images/twxq8.jpg"),
            require("../assets/images/twxq9.jpg"),
            require("../assets/images/twxq10.jpg"),
            require("../assets/images/twxq11.jpg"),
            require("../assets/images/twxq12.jpg"),
            require("../assets/images/twxq13.jpg"),
            require("../assets/images/twxq14.jpg")
          ]
        },
        {
          title:
            "冬天棉衣男冬季外套加绒厚棉服户外棉袄冬装中长款冲锋衣保暖防风防水工作服",
          price: 55900,
          express: "免运费",
          remain: 2415,
          thumb: [
            require("../assets/images/sp01.jpg"),
            require("../assets/images/sp02.jpg"),
            require("../assets/images/sp03.jpg"),
            require("../assets/images/sp04.jpg"),
            require("../assets/images/sp05.jpg")
          ],
          twxq: [
            require("../assets/images/twxq(2).jpg"),
            require("../assets/images/twxq(2)1.jpg"),
            require("../assets/images/twxq(2)2.png"),
            require("../assets/images/twxq(2)3.png"),
            require("../assets/images/twxq(2)4.png"),
            require("../assets/images/twxq(2)5.png"),
            require("../assets/images/twxq(2)6.png"),
            require("../assets/images/twxq(2)7.png"),
            require("../assets/images/twxq(2)8.png"),
            require("../assets/images/twxq(2)9.png"),
            require("../assets/images/twxq(2)10.png"),
            require("../assets/images/twxq(2)11.png"),
            require("../assets/images/twxq(2)12.png"),
            require("../assets/images/twxq(2)13.png"),
            require("../assets/images/twxq(2)14.png"),
            require("../assets/images/twxq(2)15.png"),
            require("../assets/images/twxq(2)16.png"),
            require("../assets/images/twxq(2)17.png"),
            require("../assets/images/twxq(2)18.png"),
            require("../assets/images/twxq(2)19.png"),
            require("../assets/images/twxq(2)20.png"),
            require("../assets/images/twxq(2)21.png")
          ]
        },
        {
          title: "手工小麻花袋装网红特产消磨时间耐吃好吃的美食零食小吃休闲食品",
          price: 55900,
          express: "免运费",
          remain: 2415,
          thumb: [
            require("../assets/images/sp11.jpg"),
            require("../assets/images/sp12.jpg"),
            require("../assets/images/sp13.jpg"),
            require("../assets/images/sp14.jpg")
          ],
          twxq: [
            require("../assets/images/twxq(3)1.jpg"),
            require("../assets/images/twxq(3)2.jpg"),
            require("../assets/images/twxq(3)3.jpg"),
            require("../assets/images/twxq(3)4.jpg"),
            require("../assets/images/twxq(3)5.jpg"),
            require("../assets/images/twxq(3)6.jpg"),
            require("../assets/images/twxq(3)7.jpg"),
            require("../assets/images/twxq(3)8.jpg"),
            require("../assets/images/twxq(3)9.jpg"),
            require("../assets/images/twxq(3)10.jpg")
          ]
        },
        {
          title: "羽绒服女短款大毛领2019新款时尚宽松加厚小个子白鸭绒工装外套潮",
          price: 29900,
          express: "免运费",
          remain: 2415,
          thumb: [
            require("../assets/images/sp21.jpg"),
            require("../assets/images/sp22.jpg"),
            require("../assets/images/sp23.jpg"),
            require("../assets/images/sp24.jpg"),
            require("../assets/images/sp25.jpg"),
            require("../assets/images/sp26.jpg")
          ],
          twxq: [
            require("../assets/images/twxq1.jpg"),
            require("../assets/images/twxq2.jpg"),
            require("../assets/images/twxq3.jpg"),
            require("../assets/images/twxq4.jpg"),
            require("../assets/images/twxq5.jpg"),
            require("../assets/images/twxq6.jpg"),
            require("../assets/images/twxq7.jpg"),
            require("../assets/images/twxq8.jpg"),
            require("../assets/images/twxq9.jpg"),
            require("../assets/images/twxq10.jpg"),
            require("../assets/images/twxq11.jpg"),
            require("../assets/images/twxq12.jpg"),
            require("../assets/images/twxq13.jpg"),
            require("../assets/images/twxq14.jpg")
          ]
        },
        {
          title: "Nike耐克女鞋2017夏款AIR MAX90气垫休闲运动跑步鞋616730",
          price: 44300,
          express: "免运费",
          remain: 2415,
          thumb: [
            require("../assets/images/sp31.jpg"),
            require("../assets/images/sp32.jpg"),
            require("../assets/images/sp33.jpg"),
            require("../assets/images/sp34.jpg")
          ],
          twxq: [
            require("../assets/images/twxq1.jpg"),
            require("../assets/images/twxq2.jpg"),
            require("../assets/images/twxq3.jpg"),
            require("../assets/images/twxq4.jpg"),
            require("../assets/images/twxq5.jpg"),
            require("../assets/images/twxq6.jpg"),
            require("../assets/images/twxq7.jpg"),
            require("../assets/images/twxq8.jpg"),
            require("../assets/images/twxq9.jpg"),
            require("../assets/images/twxq10.jpg"),
            require("../assets/images/twxq11.jpg"),
            require("../assets/images/twxq12.jpg"),
            require("../assets/images/twxq13.jpg"),
            require("../assets/images/twxq14.jpg")
          ]
        },
        {
          title: "四川浦江红心猕猴桃大果12 24粒当季水果 包邮",
          price: 29900,
          express: "免运费",
          remain: 2415,
          thumb: [
            require("../assets/images/sp41.jpg"),
            require("../assets/images/sp42.jpg"),
            require("../assets/images/sp43.jpg"),
            require("../assets/images/sp44.jpg"),
            require("../assets/images/sp45.jpg"),
            require("../assets/images/sp46.jpg")
          ],
          twxq: [
            require("../assets/images/twxq1.jpg"),
            require("../assets/images/twxq2.jpg"),
            require("../assets/images/twxq3.jpg"),
            require("../assets/images/twxq4.jpg"),
            require("../assets/images/twxq5.jpg"),
            require("../assets/images/twxq6.jpg"),
            require("../assets/images/twxq7.jpg"),
            require("../assets/images/twxq8.jpg"),
            require("../assets/images/twxq9.jpg"),
            require("../assets/images/twxq10.jpg"),
            require("../assets/images/twxq11.jpg"),
            require("../assets/images/twxq12.jpg"),
            require("../assets/images/twxq13.jpg"),
            require("../assets/images/twxq14.jpg")
          ]
        },
        {
          title: "盼盼艾比利薯片组合混合装休闲膨化零食大礼包小吃批发整箱成人款",
          price: 1380,
          express: "免运费",
          remain: 2415,
          thumb: [
            require("../assets/images/sp51.jpg"),
            require("../assets/images/sp52.jpg"),
            require("../assets/images/sp53.jpg"),
            require("../assets/images/sp54.jpg")
          ],
          twxq: [
            require("../assets/images/twxq1.jpg"),
            require("../assets/images/twxq2.jpg"),
            require("../assets/images/twxq3.jpg"),
            require("../assets/images/twxq4.jpg"),
            require("../assets/images/twxq5.jpg"),
            require("../assets/images/twxq6.jpg"),
            require("../assets/images/twxq7.jpg"),
            require("../assets/images/twxq8.jpg"),
            require("../assets/images/twxq9.jpg"),
            require("../assets/images/twxq10.jpg"),
            require("../assets/images/twxq11.jpg"),
            require("../assets/images/twxq12.jpg"),
            require("../assets/images/twxq13.jpg"),
            require("../assets/images/twxq14.jpg")
          ]
        }
      ]
    };
  },
  methods: {
    formatPrice() {
      return "¥" + (this.goods.price / 100).toFixed(2);
    },
    onClickCart() {
      this.$router.push("/Cars");
      // this.$router.push("Cars");
    },
    sorry() {},
    addCar() {
      this.$store.commit("add", {
        id: this.$route.query.id,
        title: this.goods.title,
        // desc: "约250g，2根",
        price: this.goods.price,
        num: 1,
        thumb: this.goods.thumb[0]
      });
      Toast("购物车添加成功");
    },
    pathgo() {
      this.$router.go(-1); //返回上一级
    }
  },
  created() {
    window.console.log(this.$route.query.id);
    this.goods = this.ajaxgoodslists[this.$route.query.id];
  }
};
</script>


<style lang="scss">
.van-button--hairline.roundbtn {
  position: fixed;
  top: 10px;
  left: 10px;
  z-index: 999;
  background-color: rgba(255, 255, 255, 0.5);
  color: #000;
}
.goods {
  padding-bottom: 50px;
  &-swipe {
    img {
      width: 100%;
      display: block;
    }
  }
  &-title {
    font-size: 16px;
  }
  &-price {
    color: #f44;
  }
  &-express {
    color: #999;
    font-size: 12px;
    padding: 5px 15px;
  }
  &-cell-group {
    margin: 15px 0;
    .van-cell__value {
      color: #999;
    }
  }
  &-tag {
    margin-left: 5px;
  }
}
.box {
  span {
    width: 100%;
    img {
      width: 100%;
      display: block;
    }
  }
}
.box-txt {
  padding: 20px;
  .txt {
    display: block;
    text-align: left;
  }
  .wb {
    color: #9b9b9b;
  }
  .bt {
    color: #4a4a4a;
    padding-bottom: 5px;
  }
}
.txt1 {
  width: 80px;
  padding: 0 20px;
  display: block;
  text-align: left;
  float: left;
  color: #9b9b9b;
}
.txt2 {
  display: block;
  float: left;
}
.txt3 {
  display: block;
  float: left;
  color: rgb(255, 119, 0);
}
.box-test {
  width: 100%;
  overflow: hidden;
  padding: 10px 0;
}
.van-tab--active {
  color: #ee0a24;
}
</style>


