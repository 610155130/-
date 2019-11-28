<template>
  <div>
    <van-tabs @click="onClick">
      <van-tab title="精选专场">
        <div class="jp_commodit-shop">
          <ul class="list">
            <li>
              <router-link to="/goods?id=0">
                <a href="javascript:;">
                  <img src="../assets/images/s1.jpg" alt />
                  <div class="t1">
                    <span class="text">￥368</span>
                    <span class="text2">￥736</span>
                  </div>
                  <div class="t2">法式小香裙</div>
                </a>
              </router-link>
            </li>
            <li>
              <router-link to="/goods?id=1">
                <a href="javascript:;">
                  <img src="../assets/images/s2.jpg" alt />
                  <div class="t1">
                    <span class="text">￥388</span>
                    <span class="text2">￥786</span>
                  </div>
                  <div class="t2">高筒靴高跟弹力女鞋子</div>
                </a>
              </router-link>
            </li>
            <li>
              <router-link to="/goods?id=2">
                <a href="javascript:;">
                  <img src="../assets/images/s3.jpg" alt />
                  <div class="t1">
                    <span class="text">￥42.9</span>
                    <span class="text2">￥89</span>
                  </div>
                  <div class="t2">仙女保暖背心加绒加厚</div>
                </a>
              </router-link>
            </li>
            <li v-for="(item, index) in lists" :key="index">
              <router-link to="/goods?id=3">
                <a href="javascript:;">
                  <img :src="item.imgs" alt />
                  <div class="t1">
                    <span class="text">￥{{ item.price }}</span>
                    <span class="text2">￥{{ item.original }}</span>
                  </div>
                  <div class="t2">{{ item.name }}</div>
                </a>
              </router-link>
            </li>
          </ul>
        </div>
      </van-tab>
      <van-tab title="精选单品">
          <div class="jp_commodit-shop">
          <ul class="list">
            <li>
              <router-link to="/goods?id=0">
                <a href="javascript:;">
                  <img src="../assets/images/s1.jpg" alt />
                  <div class="t1">
                    <span class="text">￥368</span>
                    <span class="text2">￥736</span>
                  </div>
                  <div class="t2">法式小香裙</div>
                </a>
              </router-link>
            </li>
            <li>
              <router-link to="/goods?id=1">
                <a href="javascript:;">
                  <img src="../assets/images/s2.jpg" alt />
                  <div class="t1">
                    <span class="text">￥388</span>
                    <span class="text2">￥786</span>
                  </div>
                  <div class="t2">高筒靴高跟弹力女鞋子</div>
                </a>
              </router-link>
            </li>
            <li>
              <router-link to="/goods?id=2">
                <a href="javascript:;">
                  <img src="../assets/images/s3.jpg" alt />
                  <div class="t1">
                    <span class="text">￥42.9</span>
                    <span class="text2">￥89</span>
                  </div>
                  <div class="t2">仙女保暖背心加绒加厚</div>
                </a>
              </router-link>
            </li>
            <li v-for="(item, index) in lists" :key="index">
              <router-link to="/goods?id=3">
                <a href="javascript:;">
                  <img :src="item.imgs" alt />
                  <div class="t1">
                    <span class="text">￥{{ item.price }}</span>
                    <span class="text2">￥{{ item.original }}</span>
                  </div>
                  <div class="t2">{{ item.name }}</div>
                </a>
              </router-link>
            </li>
          </ul>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgs: "",
      price: "",
      original: "",
      name: "",
      lists: [
        // {
        //   imgs: require("../assets/images/s1.jpg"),
        //   price: 368,
        //   original: 736,
        //   name: "法式小香裙"
        // },
        // {
        //   imgs: require("../assets/images/s2.jpg"),
        //   price: 368,
        //   original: 736,
        //   name: " 高筒靴高跟弹力女鞋子"
        // },
        // {
        //   imgs: require("../assets/images/s3.jpg"),
        //   price: 42.9,
        //   original: 89,
        //   name: " 仙女保暖背心加绒加厚"
        // },
        {
          imgs: require("../assets/images/s4.jpg"),
          price: 368,
          original: 736,
          name: "法式小香群"
        },
        {
          imgs: require("../assets/images/s5.jpg"),
          price: 368,
          original: 736,
          name: " 宜昌蜜桔3斤/5斤/9斤"
        },
        {
          imgs: require("../assets/images/s6.jpg"),
          price: 69.9,
          original: 699,
          name: " 女童格子露肩套装"
        },
        {
          imgs: require("../assets/images/s7.jpg"),
          price: 494,
          original: 1099,
          name: " 阿迪达斯运动休闲鞋"
        },
        {
          imgs: require("../assets/images/s8.jpg"),
          price: 54,
          original: 238,
          name: "单排扣毛线裙中长款"
        },
        {
          imgs: require("../assets/images/s9.jpg"),
          price: 88,
          original: 198,
          name: "斜挎包女学生韩版百搭"
        },
        {
          imgs: require("../assets/images/s10.jpg"),
          price: 39.9,
          original: 298,
          name: "【卡包+香薰包】"
        },
        {
          imgs: require("../assets/images/s11.jpg"),
          price: 27.9,
          original: 168,
          name: "ins欧美简约小钱包"
        },
        {
          imgs: require("../assets/images/s12.jpg"),
          price: 85.9,
          original: 398,
          name: "防水拉杆书包小学生"
        },
        {
          imgs: require("../assets/images/s13.jpg"),
          price: 168,
          original: 568,
          name: "加绒厚底运动鞋棉鞋女"
        },
        {
          imgs: require("../assets/images/s14.jpg"),
          price: 95,
          original: 498,
          name: "花花公子时尚休闲毛衣"
        },
        {
          imgs: require("../assets/images/s15.jpg"),
          price: 78,
          original: 298,
          name: "网红马丁靴袜子口女靴"
        },
        {
          imgs: require("../assets/images/s16.jpg"),
          price: 15.8,
          original: 32.9,
          name: "1000g新疆特级若羌枣"
        },
        {
          imgs: require("../assets/images/s17.jpg"),
          price: 141,
          original: 188,
          name: "玫琳凯海洋精粹面膜"
        },
        {
          imgs: require("../assets/images/s18.jpg"),
          price: 26.8,
          original: 29.9,
          name: "香之渝夹心豆卷500g"
        },
        {
          imgs: require("../assets/images/s19.jpg"),
          price: 199,
          original: 469,
          name: "探拓冲锋裤女款软壳裤"
        },
        {
          imgs: require("../assets/images/s20.jpg"),
          price: 25.8,
          original: 46,
          name: "四月茶侬花草茶胖大海"
        },
        {
          imgs: require("../assets/images/s21.jpg"),
          price: 99,
          original: 399,
          name: "雅顿绿茶身体乳"
        },
        {
          imgs: require("../assets/images/s22.jpg"),
          price: 28.8,
          original: 128,
          name: "桐乡胎菊2.5g*10袋"
        },
        {
          imgs: require("../assets/images/s23.jpg"),
          price: 19.9,
          original: 299,
          name: "百事正品男士福袋秋冬"
        },
        {
          imgs: require("../assets/images/s24.jpg"),
          price: 28.8,
          original: 69.9,
          name: "泰式风味菠萝饼1000g"
        },
        {
          imgs: require("../assets/images/s25.jpg"),
          price: 129.9,
          original: 799,
          name: "加厚保暖金貂绒套件A"
        },
        {
          imgs: require("../assets/images/s26.jpg"),
          price: 89.9,
          original: 299,
          name: "美白补水祛斑免洗面膜"
        },
        {
          imgs: require("../assets/images/s27.jpg"),
          price: 16.9,
          original: 32,
          name: "良品铺子薄豆干160gx1"
        },
        {
          imgs: require("../assets/images/s28.jpg"),
          price: 123,
          original: 190,
          name: "兰芝雪晒后白皙隔离霜"
        },
        {
          imgs: require("../assets/images/s29.jpg"),
          price: 31.8,
          original: 38.8,
          name: "香之渝手撕素肉500g"
        },
        {
          imgs: require("../assets/images/s30.jpg"),
          price: 59,
          original: 136,
          name: "ILISYA时尚手提化妆箱"
        },
        {
          imgs: require("../assets/images/s31.jpg"),
          price: 21.8,
          original: 28.8,
          name: "三只松鼠大辣片230g"
        },
        {
          imgs: require("../assets/images/s32.jpg"),
          price: 258,
          original: 399,
          name: "日本THREE平衡卸妆油"
        }
      ]
    };
  },
  methods: {
    onClick(name, title) {
      // this.$toast(title);
    }
  }
};
</script>

<style scoped lang="scss" >
.van-tab--active {
  color: red !important;
}
.jp_commodit-shop {
  width: 100%;
  overflow: hidden;
  .list {
    width: 100%;
    height: 100%;
    overflow: hidden;
    li {
      width: 49%;
      float: left;
      margin-left: 1%;
      background-color: #fff;
      a {
        width: 100%;
        height: 100%;
        display: block;
        img {
          width: 100%;
          display: block;
        }
        .t1 {
          float: left;
          padding-left: 5px;
          .text {
            color: red;
            font-size: 15px;
          }
          .text2 {
            color: #bbbbbb;
            font-size: 12px;
            text-decoration: line-through;
          }
        }
        .t2 {
          width: 100%;
          font-size: 12px;
          display: block;
          float: left;
          padding-left: 5px;
          text-align: left;
          padding-bottom: 5px;
        }
      }
    }
  }
}
</style>