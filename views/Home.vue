<template>
  <div class="home" id="app">
    <router-view />
    <div>
      <div class="jp_layout">
        <!-- 搜索框 -->
        <search></search>
        <!-- 轮播框 -->
        <planting></planting>
        <!-- 导航栏 -->
        <navigation></navigation>
        <!-- 活动栏 -->
        <activity></activity>
        <!-- 商品栏 -->
        <thing
        :lists="lists"
        ></thing>
      </div>
    </div>
  </div>
</template>

<script>
import thing from "@/components/thing.vue";
import activity from "@/components/activity.vue";
import navigation from "@/components/navigation.vue";
import search from "@/components/search.vue";
import planting from "@/components/planting.vue";
import Swiper from "swiper/dist/js/swiper.js";
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
        // {
        //   imgs: require("../assets/images/s4.jpg"),
        //   price: 368,
        //   original: 736,
        //   name: " 女鞋马丁靴英伦风鞋子"
        // },
        // {
        //   imgs: require("../assets/images/s5.jpg"),
        //   price: 368,
        //   original: 736,
        //   name: " 宜昌蜜桔3斤/5斤/9斤"
        // },
        // {
        //   imgs: require("../assets/images/s6.jpg"),
        //   price: 69.9,
        //   original: 699,
        //   name: " 女童格子露肩套装"
        // },
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
  components: {
    planting,
    search,
    navigation,
    activity,
    thing
  },
  mounted() {
    new Swiper(".swiper-container", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  }
};
</script>

<style lang="scss" >
// Swiper轮播图
html,
body {
  position: relative;
  height: 100%;
}
body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}
// .swiper-container {
//   width: 100%;
//   height: 100%;
// }
// .swiper-slide {
//   text-align: center;
//   font-size: 18px;
//   background: #fff;

//   /* Center slide text vertically */
//   display: -webkit-box;
//   display: -ms-flexbox;
//   display: -webkit-flex;
//   display: flex;
//   -webkit-box-pack: center;
//   -ms-flex-pack: center;
//   -webkit-justify-content: center;
//   justify-content: center;
//   -webkit-box-align: center;
//   -ms-flex-align: center;
//   -webkit-align-items: center;
//   align-items: center;
// }
.imgsmg {
  width: 100%;
  img {
    width: 100%;
    display: block;
  }
}
.swiper-pagination-bullet-active {
  width: 16px !important;
  height: 8px;
  border-radius: 4px !important;
  background-color: #fff !important;
}
.btnvan {
  width: 1px;
  height: 1px;
}
a{
 color: #333;
}

</style>
