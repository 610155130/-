<template>
  <div>
<van-search placeholder="搜索商品"  />
    <van-tree-select height="667px" :items="items"  :main-active-index.sync="activeIndex">
      <template slot="content">
        <div v-if="activeIndex === 0">
          <div class="box">
            <ul>
              <li class="lis">
                <router-link   to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/vz1.png" alt />
                  <span>女士裙装</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/vz2.png" alt />
                  <span>羽绒棉服</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/vz3.png" alt />
                  <span>卫衣</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/vz4.png" alt />
                  <span>衬衫雪纺</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/vz5.png" alt />
                  <span>休闲裤</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/vz6.png" alt />
                  <span>大衣外套</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/vz7.png" alt />
                  <span>懒人套装</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/vz8.png" alt />
                  <span>针织毛衫</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/vz9.png" alt />
                  <span>皮草</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/vz10.png" alt />
                  <span>西装外套</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/vz11.png" alt />
                  <span>风衣</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/vz12.png" alt />
                  <span>中老年女装</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/vz13.png" alt />
                  <span>牛仔裤</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/vz14.png" alt />
                  <span>职业套装</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/vz15.png" alt />
                  <span>T恤</span>
                </a>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div v-if="activeIndex === 1">
          <div class="box">
            <ul>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/nz1.png" alt />
                  <span>夹克</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/nz2.png" alt />
                  <span>套装</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/nz3.png" alt />
                  <span>T恤</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/nz4.png" alt />
                  <span>卫男士衬衫衣</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/nz5.png" alt />
                  <span>卫衣</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/nz6.png" alt />
                  <span>POLO杉</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/nz7.png" alt />
                  <span>牛仔裤</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/nz8.png" alt />
                  <span>休闲裤</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/nz9.png" alt />
                  <span>西裤</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/nz10.png" alt />
                  <span>内衣</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/nz11.png" alt />
                  <span>袜子</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/nz12.png" alt />
                  <span>背心马甲</span>
                </a>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div v-if="activeIndex === 2">
          <div class="box">
            <ul>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/my1.png" alt />
                  <span>男童套装</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/my2.png" alt />
                  <span>女童套装</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/my3.png" alt />
                  <span>儿童裙装</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/my4.png" alt />
                  <span>儿童上衣</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/my5.png" alt />
                  <span>儿童裤子</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/my6.png" alt />
                  <span>内衣配饰</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/my7.png" alt />
                  <span>儿童帆布</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/my8.png" alt />
                  <span>儿童运动</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/my9.png" alt />
                  <span>儿童皮鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/my10.png" alt />
                  <span>婴幼服饰</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/my11.png" alt />
                  <span>纸尿裤纸品</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/my12.png" alt />
                  <span>喂养用品</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/my13.png" alt />
                  <span>孕妈服饰</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/my14.png" alt />
                  <span>洗护用品</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/my15.png" alt />
                  <span>益智早故</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/my16.png" alt />
                  <span>玩具乐器</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/my17.png" alt />
                  <span>圈书文具</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/my18.png" alt />
                  <span>婴儿出行</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/my19.png" alt />
                  <span>寝居用品</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/my20.png" alt />
                  <span>孕妈用品</span>
                </a>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div v-if="activeIndex === 3">
          <div class="box">
            <ul>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/xz1.png" alt />
                  <span>女休闲鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/xz2.png" alt />
                  <span>中高跟单鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/xz3.png" alt />
                  <span>平跟单鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/xz4.png" alt />
                  <span>男休闲鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/xz5.png" alt />
                  <span>商务皮鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/xz6.png" alt />
                  <span>坡跟厚底</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/xz7.png" alt />
                  <span>冬靴上新</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/xz8.png" alt />
                  <span>勇士棉靴</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/xz9.png" alt />
                  <span>高跟凉鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/xz10.png" alt />
                  <span>平底凉鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/xz11.png" alt />
                  <span>坡跟凉鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/xz12.png" alt />
                  <span>外穿拖鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/xz13.png" alt />
                  <span>男式凉鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/xz14.png" alt />
                  <span>居家拖鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/xz15.png" alt />
                  <span>洞洞鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/xz16.png" alt />
                  <span>功能鞋</span>
                </a>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div v-if="activeIndex === 4">
          <div class="box">
            <ul>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/xb1.png" alt />
                  <span>女休闲鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/xb2.png" alt />
                  <span>中高跟单鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/xb3.png" alt />
                  <span>平跟单鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/xb4.png" alt />
                  <span>男休闲鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/xb5.png" alt />
                  <span>商务皮鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/xb6.png" alt />
                  <span>坡跟厚底</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/xb7.png" alt />
                  <span>冬靴上新</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/xb8.png" alt />
                  <span>勇士棉靴</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/xb9.png" alt />
                  <span>高跟凉鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/xb10.png" alt />
                  <span>平底凉鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/xb11.png" alt />
                  <span>坡跟凉鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/xb12.png" alt />
                  <span>外穿拖鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/xb13.png" alt />
                  <span>男式凉鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/xb14.png" alt />
                  <span>居家拖鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/xb15.png" alt />
                  <span>洞洞鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/xb16.png" alt />
                  <span>功能鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/xb17.png" alt />
                  <span>功能鞋</span>
                </a>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div v-if="activeIndex === 5">
          <div class="box">
            <ul>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/jjbh1.png" alt />
                  <span>女休闲鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/jjbh2.png" alt />
                  <span>中高跟单鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/jjbh3.png" alt />
                  <span>平跟单鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/jjbh4.png" alt />
                  <span>男休闲鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/jjbh5.png" alt />
                  <span>商务皮鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/jjbh6.png" alt />
                  <span>坡跟厚底</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/jjbh7.png" alt />
                  <span>冬靴上新</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/jjbh8.png" alt />
                  <span>勇士棉靴</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/jjbh9.png" alt />
                  <span>高跟凉鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/jjbh10.png" alt />
                  <span>平底凉鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/jjbh11.png" alt />
                  <span>坡跟凉鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/jjbh12.png" alt />
                  <span>外穿拖鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/jjbh13.png" alt />
                  <span>男式凉鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/jjbh14.png" alt />
                  <span>居家拖鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/jjbh15.png" alt />
                  <span>洞洞鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/jjbh16.png" alt />
                  <span>功能鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/jjbh17.png" alt />
                  <span>功能鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/jjbh18.png" alt />
                  <span>功能鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/jjbh19.png" alt />
                  <span>功能鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/jjbh20.png" alt />
                  <span>功能鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/jjbh21.png" alt />
                  <span>功能鞋</span>
                </a>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div v-if="activeIndex === 6">
          <div class="box">
            <ul>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/jdsm1.png" alt />
                  <span>女休闲鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/jdsm2.png" alt />
                  <span>中高跟单鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/jdsm3.png" alt />
                  <span>平跟单鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/jdsm4.png" alt />
                  <span>男休闲鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/jdsm5.png" alt />
                  <span>商务皮鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/jdsm6.png" alt />
                  <span>坡跟厚底</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/jdsm7.png" alt />
                  <span>冬靴上新</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/jdsm8.png" alt />
                  <span>勇士棉靴</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/jdsm9.png" alt />
                  <span>高跟凉鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/jdsm10.png" alt />
                  <span>平底凉鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/jdsm11.png" alt />
                  <span>坡跟凉鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/jdsm12.png" alt />
                  <span>外穿拖鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/jdsm13.png" alt />
                  <span>男式凉鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/jdsm14.png" alt />
                  <span>居家拖鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/jdsm15.png" alt />
                  <span>洞洞鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/jdsm16.png" alt />
                  <span>功能鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/jdsm17.png" alt />
                  <span>功能鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/jdsm18.png" alt />
                  <span>功能鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/jdsm19.png" alt />
                  <span>功能鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/jdsm20.png" alt />
                  <span>功能鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/jdsm21.png" alt />
                  <span>功能鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/jdsm22.png" alt />
                  <span>功能鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/jdsm23.png" alt />
                  <span>功能鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/jdsm24.png" alt />
                  <span>功能鞋</span>
                </a>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div v-if="activeIndex === 7">
          <div class="box">
            <ul>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/nyps1.png" alt />
                  <span>女休闲鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/nyps2.png" alt />
                  <span>中高跟单鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/nyps3.png" alt />
                  <span>平跟单鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/nyps4.png" alt />
                  <span>男休闲鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/nyps5.png" alt />
                  <span>商务皮鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/nyps6.png" alt />
                  <span>坡跟厚底</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/nyps7.png" alt />
                  <span>冬靴上新</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/nyps8.png" alt />
                  <span>勇士棉靴</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/nyps9.png" alt />
                  <span>高跟凉鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/nyps10.png" alt />
                  <span>平底凉鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/nyps11.png" alt />
                  <span>坡跟凉鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/nyps12.png" alt />
                  <span>外穿拖鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/nyps13.png" alt />
                  <span>男式凉鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/nyps14.png" alt />
                  <span>居家拖鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/nyps15.jpg" alt />
                  <span>洞洞鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/nyps16.png" alt />
                  <span>功能鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/nyps17.png" alt />
                  <span>功能鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/nyps18.png" alt />
                  <span>功能鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/nyps19.png" alt />
                  <span>功能鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/nyps20.png" alt />
                  <span>功能鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/nyps21.png" alt />
                  <span>功能鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/nyps22.png" alt />
                  <span>功能鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/nyps23.png" alt />
                  <span>功能鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/nyps24.png" alt />
                  <span>功能鞋</span>
                </a>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div v-if="activeIndex === 8">
          <div class="box">
            <ul>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/mz1.png" alt />
                  <span>女休闲鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/mz2.png" alt />
                  <span>中高跟单鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/mz3.png" alt />
                  <span>平跟单鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/mz4.png" alt />
                  <span>男休闲鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/mz5.png" alt />
                  <span>商务皮鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/mz6.png" alt />
                  <span>坡跟厚底</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/mz7.png" alt />
                  <span>冬靴上新</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/mz8.png" alt />
                  <span>勇士棉靴</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/mz9.png" alt />
                  <span>高跟凉鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/mz10.png" alt />
                  <span>平底凉鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/mz11.png" alt />
                  <span>坡跟凉鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/mz12.png" alt />
                  <span>外穿拖鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/mz13.png" alt />
                  <span>男式凉鞋</span>
                </a>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div v-if="activeIndex === 9">
          <div class="box">
            <ul>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/hwyd1.png" alt />
                  <span>女休闲鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/hwyd2.png" alt />
                  <span>中高跟单鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/hwyd3.png" alt />
                  <span>平跟单鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/hwyd4.png" alt />
                  <span>男休闲鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/hwyd5.png" alt />
                  <span>商务皮鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/hwyd6.png" alt />
                  <span>坡跟厚底</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/hwyd7.png" alt />
                  <span>冬靴上新</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/hwyd8.png" alt />
                  <span>勇士棉靴</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/hwyd9.png" alt />
                  <span>高跟凉鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/hwyd10.png" alt />
                  <span>平底凉鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/hwyd11.png" alt />
                  <span>坡跟凉鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/hwyd12.png" alt />
                  <span>外穿拖鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/hwyd13.png" alt />
                  <span>男式凉鞋</span>
                </a>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div v-if="activeIndex === 10">
          <div class="box">
            <ul>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/ms1.png" alt />
                  <span>女休闲鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/ms2.png" alt />
                  <span>中高跟单鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/ms3.png" alt />
                  <span>平跟单鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/ms4.png" alt />
                  <span>男休闲鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/ms5.png" alt />
                  <span>商务皮鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/ms6.png" alt />
                  <span>坡跟厚底</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/ms7.png" alt />
                  <span>冬靴上新</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/ms8.png" alt />
                  <span>勇士棉靴</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/ms9.png" alt />
                  <span>高跟凉鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/ms10.png" alt />
                  <span>平底凉鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/ms11.png" alt />
                  <span>坡跟凉鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/ms12.png" alt />
                  <span>外穿拖鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/ms13.png" alt />
                  <span>男式凉鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/ms14.png" alt />
                  <span>居家拖鞋</span>
                </a>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div v-if="activeIndex === 11">
          <div class="box">
            <ul>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/cpwy1.jpg" alt />
                  <span>女休闲鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/cpwy2.jpg" alt />
                  <span>中高跟单鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/cpwy3.jpg" alt />
                  <span>平跟单鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/cpwy4.jpg" alt />
                  <span>男休闲鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/cpwy5.jpg" alt />
                  <span>商务皮鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/cpwy6.jpg" alt />
                  <span>坡跟厚底</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/cpwy7.jpg" alt />
                  <span>冬靴上新</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/cpwy8.jpg" alt />
                  <span>勇士棉靴</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/cpwy9.jpg" alt />
                  <span>高跟凉鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/cpwy10.jpg" alt />
                  <span>平底凉鞋</span>
                </a>
                </router-link>
              </li>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/cpwy11.jpg" alt />
                  <span>坡跟凉鞋</span>
                </a>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div v-if="activeIndex === 12">
          <div class="box">
            <ul>
              <li class="lis">
                <router-link  to="/goods?id=1">
                <a class="as" href="javascript:;">
                  <img src="../assets/images/txly1.png" alt />
                  <span>图书影像</span>
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
        { text: "女装" },
        { text: "男装" },
        { text: "母婴" },
        { text: "鞋子" },
        { text: "箱包" },
        { text: "居家百货" },
        { text: "家电数码" },
        { text: "内衣配饰" },
        { text: "美妆" },
        { text: "远动户外" },
        { text: "美食" },
        { text: "车品文娱" },
        { text: "通讯旅游" }
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
        }
      }
    }
  }
}
</style>
