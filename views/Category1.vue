<template>
  <div>
    <van-search placeholder="搜索商品" />
    <van-tree-select height="667px" :items="items" :main-active-index.sync="activeIndex">
      <template slot="content">
        <div v-for="(item,i) in items" :key="i" v-show="activeIndex == i">
          <div class="box">
            <ul>
              <li class="lis" v-for="(itemt,k) in item.lists" :key="k">
                <router-link to="/goods?id=1">
                  <a class="as" href="javascript:;">
                    <img :src="itemt.img" alt />
                    <span>{{itemt.name}}</span>
                  </a>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </template>
    </van-tree-select>
    <div></div>
  </div>
</template>

<script>
export default {
  //   data() {
  //   return {
  //     activeKey: 0
  //   };
  // }

  data() {
    return {
      activeIndex: 0,
      items: [
        {
          text: "女装",
          lists: [
            { img: require("../assets/images/vz1.png"), name: "羽绒棉服" },
            { img: require("../assets/images/vz2.png"), name: "卫衣" },
            { img: require("../assets/images/vz3.png"), name: "衬衫雪纺" },
            { img: require("../assets/images/vz4.png"), name: "休闲裤" },
            { img: require("../assets/images/vz5.png"), name: "大衣外套" },
            { img: require("../assets/images/vz6.png"), name: "懒人套装" },
            { img: require("../assets/images/vz7.png"), name: "针织毛衫" },
            { img: require("../assets/images/vz8.png"), name: "皮草" },
            { img: require("../assets/images/vz9.png"), name: "西装外套" },
            { img: require("../assets/images/vz10.png"), name: "风衣" },
            { img: require("../assets/images/vz11.png"), name: "中老年女装" },
            { img: require("../assets/images/vz12.png"), name: "牛仔裤" },
            { img: require("../assets/images/vz13.png"), name: "职业套装" },
            { img: require("../assets/images/vz14.png"), name: "T恤" }
          ]
        },
        {
          text: "男装",
          lists: [
            { img: require("../assets/images/nz1.png"), name: "夹克" },
            { img: require("../assets/images/nz2.png"), name: "套装" },
            { img: require("../assets/images/nz3.png"), name: "T恤" },
            { img: require("../assets/images/nz4.png"), name: "卫男士衬衫衣" },
            { img: require("../assets/images/nz5.png"), name: "卫衣" },
            { img: require("../assets/images/nz6.png"), name: "POLO杉" },
            { img: require("../assets/images/nz7.png"), name: "牛仔裤" },
            { img: require("../assets/images/nz8.png"), name: "休闲裤" },
            { img: require("../assets/images/nz9.png"), name: "西裤" },
            { img: require("../assets/images/nz10.png"), name: "内衣" },
            { img: require("../assets/images/nz11.png"), name: "袜子" },
            { img: require("../assets/images/nz12.png"), name: "背心马甲" }
          ]
        },
        {
          text: "母婴",
          lists: [
            { img: require("../assets/images/my1.png"), name: "男童套装" },
            { img: require("../assets/images/my2.png"), name: "女童套装" },
            { img: require("../assets/images/my3.png"), name: "儿童裙装" },
            { img: require("../assets/images/my4.png"), name: "儿童上衣" },
            { img: require("../assets/images/my5.png"), name: "儿童裤子" },
            { img: require("../assets/images/my6.png"), name: "内衣配饰" },
            { img: require("../assets/images/my7.png"), name: "儿童帆布" },
            { img: require("../assets/images/my8.png"), name: "儿童运动" },
            { img: require("../assets/images/my9.png"), name: "儿童皮鞋" },
            { img: require("../assets/images/my10.png"), name: "婴幼服饰" },
            { img: require("../assets/images/my11.png"), name: "纸尿裤纸品" },
            { img: require("../assets/images/my12.png"), name: "喂养用品" },
            { img: require("../assets/images/my13.png"), name: "孕妈服饰" },
            { img: require("../assets/images/my14.png"), name: "洗护用品" },
            { img: require("../assets/images/my15.png"), name: "益智早故" },
            { img: require("../assets/images/my16.png"), name: "玩具乐器" },
            { img: require("../assets/images/my17.png"), name: "圈书文具" },
            { img: require("../assets/images/my18.png"), name: "婴儿出行" },
            { img: require("../assets/images/my19.png"), name: "寝居用品" },
            { img: require("../assets/images/my20.png"), name: "孕妈用品" }
          ]
        },
        {
          text: "鞋子",
          lists: [
            { img: require("../assets/images/xz1.png"), name: "女休闲鞋" },
            { img: require("../assets/images/xz2.png"), name: "中高跟单鞋" },
            { img: require("../assets/images/xz3.png"), name: "平跟单鞋" },
            { img: require("../assets/images/xz4.png"), name: "男休闲鞋" },
            { img: require("../assets/images/xz5.png"), name: "商务皮鞋" },
            { img: require("../assets/images/xz6.png"), name: "坡跟厚底" },
            { img: require("../assets/images/xz7.png"), name: "冬靴上新" },
            { img: require("../assets/images/xz8.png"), name: "勇士棉靴" },
            { img: require("../assets/images/xz9.png"), name: "高跟凉鞋" },
            { img: require("../assets/images/xz10.png"), name: "平底凉鞋" },
            { img: require("../assets/images/xz11.png"), name: "坡跟凉鞋" },
            { img: require("../assets/images/xz12.png"), name: "外穿拖鞋" },
            { img: require("../assets/images/xz13.png"), name: "男式凉鞋" },
            { img: require("../assets/images/xz14.png"), name: "居家拖鞋" },
            { img: require("../assets/images/xz15.png"), name: "洞洞鞋" },
            { img: require("../assets/images/xz16.png"), name: "功能鞋" }
          ]
        },
        {
          text: "箱包",
          lists: [
            { img: require("../assets/images/xb1.png"), name: "女休闲鞋" },
            { img: require("../assets/images/xb2.png"), name: "中高跟单鞋" },
            { img: require("../assets/images/xb3.png"), name: "平跟单鞋" },
            { img: require("../assets/images/xb4.png"), name: "男休闲鞋" },
            { img: require("../assets/images/xb5.png"), name: "商务皮鞋" },
            { img: require("../assets/images/xb6.png"), name: "坡跟厚底" },
            { img: require("../assets/images/xb7.png"), name: "冬靴上新" },
            { img: require("../assets/images/xb8.png"), name: "勇士棉靴" },
            { img: require("../assets/images/xb9.png"), name: "高跟凉鞋" },
            { img: require("../assets/images/xb10.png"), name: "平底凉鞋" },
            { img: require("../assets/images/xb11.png"), name: "坡跟凉鞋" },
            { img: require("../assets/images/xb12.png"), name: "外穿拖鞋" },
            { img: require("../assets/images/xb13.png"), name: "男式凉鞋" },
            { img: require("../assets/images/xb14.png"), name: "居家拖鞋" },
            { img: require("../assets/images/xb15.png"), name: "洞洞鞋" },
            { img: require("../assets/images/xb16.png"), name: "功能鞋" },
            { img: require("../assets/images/xb17.png"), name: "功能鞋" }
          ]
        },
        {
          text: "居家百货",
          lists: [
            { img: require("../assets/images/jjbh1.png"), name: "女休闲鞋" },
            { img: require("../assets/images/jjbh2.png"), name: "中高跟单鞋" },
            { img: require("../assets/images/jjbh3.png"), name: "平跟单鞋" },
            { img: require("../assets/images/jjbh4.png"), name: "男休闲鞋" },
            { img: require("../assets/images/jjbh5.png"), name: "商务皮鞋" },
            { img: require("../assets/images/jjbh6.png"), name: "坡跟厚底" },
            { img: require("../assets/images/jjbh7.png"), name: "冬靴上新" },
            { img: require("../assets/images/jjbh8.png"), name: "勇士棉靴" },
            { img: require("../assets/images/jjbh9.png"), name: "高跟凉鞋" },
            { img: require("../assets/images/jjbh10.png"), name: "平底凉鞋" },
            { img: require("../assets/images/jjbh11.png"), name: "坡跟凉鞋" },
            { img: require("../assets/images/jjbh12.png"), name: "外穿拖鞋" },
            { img: require("../assets/images/jjbh13.png"), name: "男式凉鞋" },
            { img: require("../assets/images/jjbh14.png"), name: "居家拖鞋" },
            { img: require("../assets/images/jjbh15.png"), name: "洞洞鞋" },
            { img: require("../assets/images/jjbh16.png"), name: "功能鞋" },
            { img: require("../assets/images/jjbh17.png"), name: "功能鞋" },
            { img: require("../assets/images/jjbh18.png"), name: "功能鞋" },
            { img: require("../assets/images/jjbh19.png"), name: "功能鞋" },
            { img: require("../assets/images/jjbh20.png"), name: "功能鞋" },
            { img: require("../assets/images/jjbh21.png"), name: "功能鞋" }
          ]
        },
        {
          text: "家电数码",
          lists: [
            { img: require("../assets/images/jdsm1.png"), name: "女休闲鞋" },
            { img: require("../assets/images/jdsm2.png"), name: "中高跟单鞋" },
            { img: require("../assets/images/jdsm3.png"), name: "平跟单鞋" },
            { img: require("../assets/images/jdsm4.png"), name: "男休闲鞋" },
            { img: require("../assets/images/jdsm5.png"), name: "商务皮鞋" },
            { img: require("../assets/images/jdsm6.png"), name: "坡跟厚底" },
            { img: require("../assets/images/jdsm7.png"), name: "冬靴上新" },
            { img: require("../assets/images/jdsm8.png"), name: "勇士棉靴" },
            { img: require("../assets/images/jdsm9.png"), name: "高跟凉鞋" },
            { img: require("../assets/images/jdsm10.png"), name: "平底凉鞋" },
            { img: require("../assets/images/jdsm11.png"), name: "坡跟凉鞋" },
            { img: require("../assets/images/jdsm12.png"), name: "外穿拖鞋" },
            { img: require("../assets/images/jdsm13.png"), name: "男式凉鞋" },
            { img: require("../assets/images/jdsm14.png"), name: "居家拖鞋" },
            { img: require("../assets/images/jdsm15.png"), name: "洞洞鞋" },
            { img: require("../assets/images/jdsm16.png"), name: "功能鞋" },
            { img: require("../assets/images/jdsm17.png"), name: "功能鞋" },
            { img: require("../assets/images/jdsm18.png"), name: "功能鞋" },
            { img: require("../assets/images/jdsm19.png"), name: "功能鞋" },
            { img: require("../assets/images/jdsm20.png"), name: "功能鞋" },
            { img: require("../assets/images/jdsm21.png"), name: "功能鞋" },
            { img: require("../assets/images/jdsm22.png"), name: "功能鞋" },
            { img: require("../assets/images/jdsm23.png"), name: "功能鞋" },
            { img: require("../assets/images/jdsm24.png"), name: "功能鞋" }
          ]
        },
        {
          text: "内衣配饰",
          lists: [
            { img: require("../assets/images/nyps1.png"), name: "女休闲鞋" },
            { img: require("../assets/images/nyps2.png"), name: "中高跟单鞋" },
            { img: require("../assets/images/nyps3.png"), name: "平跟单鞋" },
            { img: require("../assets/images/nyps4.png"), name: "男休闲鞋" },
            { img: require("../assets/images/nyps5.png"), name: "商务皮鞋" },
            { img: require("../assets/images/nyps6.png"), name: "坡跟厚底" },
            { img: require("../assets/images/nyps7.png"), name: "冬靴上新" },
            { img: require("../assets/images/nyps8.png"), name: "勇士棉靴" },
            { img: require("../assets/images/nyps9.png"), name: "高跟凉鞋" },
            { img: require("../assets/images/nyps10.png"), name: "平底凉鞋" },
            { img: require("../assets/images/nyps11.png"), name: "坡跟凉鞋" },
            { img: require("../assets/images/nyps12.png"), name: "外穿拖鞋" },
            { img: require("../assets/images/nyps13.png"), name: "男式凉鞋" },
            { img: require("../assets/images/nyps14.png"), name: "居家拖鞋" },
            { img: require("../assets/images/nyps15.jpg"), name: "洞洞鞋" },
            { img: require("../assets/images/nyps16.png"), name: "功能鞋" },
            { img: require("../assets/images/nyps17.png"), name: "功能鞋" },
            { img: require("../assets/images/nyps18.png"), name: "功能鞋" },
            { img: require("../assets/images/nyps19.png"), name: "功能鞋" },
            { img: require("../assets/images/nyps20.png"), name: "功能鞋" },
            { img: require("../assets/images/nyps21.png"), name: "功能鞋" },
            { img: require("../assets/images/nyps22.png"), name: "功能鞋" },
            { img: require("../assets/images/nyps23.png"), name: "功能鞋" },
            { img: require("../assets/images/nyps24.png"), name: "功能鞋" }
          ]
        },
        {
          text: "美妆",
          lists: [
            { img: require("../assets/images/mz1.png"), name: "女休闲鞋" },
            { img: require("../assets/images/mz2.png"), name: "中高跟单鞋" },
            { img: require("../assets/images/mz3.png"), name: "平跟单鞋" },
            { img: require("../assets/images/mz4.png"), name: "男休闲鞋" },
            { img: require("../assets/images/mz5.png"), name: "商务皮鞋" },
            { img: require("../assets/images/mz6.png"), name: "坡跟厚底" },
            { img: require("../assets/images/mz7.png"), name: "冬靴上新" },
            { img: require("../assets/images/mz8.png"), name: "勇士棉靴" },
            { img: require("../assets/images/mz9.png"), name: "高跟凉鞋" },
            { img: require("../assets/images/mz10.png"), name: "平底凉鞋" },
            { img: require("../assets/images/mz11.png"), name: "坡跟凉鞋" },
            { img: require("../assets/images/mz12.png"), name: "外穿拖鞋" },
            { img: require("../assets/images/mz13.png"), name: "男式凉鞋" }
          ]
        },
        {
          text: "远动户外",
          lists: [
            { img: require("../assets/images/hwyd1.png"), name: "女休闲鞋" },
            { img: require("../assets/images/hwyd2.png"), name: "中高跟单鞋" },
            { img: require("../assets/images/hwyd3.png"), name: "平跟单鞋" },
            { img: require("../assets/images/hwyd4.png"), name: "男休闲鞋" },
            { img: require("../assets/images/hwyd5.png"), name: "商务皮鞋" },
            { img: require("../assets/images/hwyd6.png"), name: "坡跟厚底" },
            { img: require("../assets/images/hwyd7.png"), name: "冬靴上新" },
            { img: require("../assets/images/hwyd8.png"), name: "勇士棉靴" },
            { img: require("../assets/images/hwyd9.png"), name: "高跟凉鞋" },
            { img: require("../assets/images/hwyd10.png"), name: "平底凉鞋" },
            { img: require("../assets/images/hwyd11.png"), name: "坡跟凉鞋" },
            { img: require("../assets/images/hwyd12.png"), name: "外穿拖鞋" },
            { img: require("../assets/images/hwyd13.png"), name: "男式凉鞋" }
          ]
        },
        {
          text: "美食",
          lists: [
            { img: require("../assets/images/ms1.png"), name: "女休闲鞋" },
            { img: require("../assets/images/ms2.png"), name: "中高跟单鞋" },
            { img: require("../assets/images/ms3.png"), name: "平跟单鞋" },
            { img: require("../assets/images/ms4.png"), name: "男休闲鞋" },
            { img: require("../assets/images/ms5.png"), name: "商务皮鞋" },
            { img: require("../assets/images/ms6.png"), name: "坡跟厚底" },
            { img: require("../assets/images/ms7.png"), name: "冬靴上新" },
            { img: require("../assets/images/ms8.png"), name: "勇士棉靴" },
            { img: require("../assets/images/ms9.png"), name: "高跟凉鞋" },
            { img: require("../assets/images/ms10.png"), name: "平底凉鞋" },
            { img: require("../assets/images/ms11.png"), name: "坡跟凉鞋" },
            { img: require("../assets/images/ms12.png"), name: "外穿拖鞋" },
            { img: require("../assets/images/ms13.png"), name: "男式凉鞋" },
            { img: require("../assets/images/ms14.png"), name: "男式凉鞋" }
          ]
        },
        {
          text: "车品文娱",
          lists: [
            { img: require("../assets/images/cpwy1.jpg"), name: "女休闲鞋" },
            { img: require("../assets/images/cpwy2.jpg"), name: "中高跟单鞋" },
            { img: require("../assets/images/cpwy3.jpg"), name: "平跟单鞋" },
            { img: require("../assets/images/cpwy4.jpg"), name: "男休闲鞋" },
            { img: require("../assets/images/cpwy5.jpg"), name: "商务皮鞋" },
            { img: require("../assets/images/cpwy6.jpg"), name: "坡跟厚底" },
            { img: require("../assets/images/cpwy7.jpg"), name: "冬靴上新" },
            { img: require("../assets/images/cpwy8.jpg"), name: "勇士棉靴" },
            { img: require("../assets/images/cpwy9.jpg"), name: "高跟凉鞋" },
            { img: require("../assets/images/cpwy10.jpg"), name: "平底凉鞋" },
            { img: require("../assets/images/cpwy11.jpg"), name: "坡跟凉鞋" }
          ]
        },
        {
          text: "通讯旅游",
          lists: [
            { img: require("../assets/images/txly1.png"), name: "图书影像" }
          ]
        }
      ]
    };
  },
  components: {}
};
</script>

<style scoped lang="scss" >
.van-tree-select__nav-item {
  text-align: left;
}
.van-sidebar-item--select {
  color: #ee0a24;
}

// 分类搜索框

.box {
  width: 100%;
  ul {
    width: 100%;

    .lis {
      width: 33.333%;
      float: left;
      padding: 5px 0;

      .as {
        display: block;
        width: 80%;
        padding: 0 10%;
        margin: 0 auto;
        text-align: center;
        img {
          width: 100%;
          display: block;
        }
        span {
          font-size: 12px;
          overflow: hiddden;
          text-overflow: ellipsis;
          white-space: nowrap;
          text-align: center;
          color: #333;
        }
      }
    }
  }
}
.van-search{
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;

}
.van-tree-select{
  margin-top: 54px;
}
</style>
