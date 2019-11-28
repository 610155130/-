<template>
  <div>
    <section class="jp_commodity">
      <div class="jp_commodit-box">
        <van-tabs>
          <van-tab title="精选专场" title-active-color="#EE0A24">
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
                <li>
                  <router-link to="/goods?id=3">
                    <a href="javascript:;">
                      <img src="../assets/images/s4.jpg" alt />
                      <div class="t1">
                        <span class="text">￥79.9</span>
                        <span class="text2">￥199</span>
                      </div>
                      <div class="t2">女鞋马丁靴英伦风鞋子</div>
                    </a>
                  </router-link>
                </li>
                <li>
                  <router-link to="/goods?id=4">
                    <a href="javascript:;">
                      <img src="../assets/images/s5.jpg" alt />
                      <div class="t1">
                        <span class="text">￥36.8</span>
                        <span class="text2">￥736</span>
                      </div>
                      <div class="t2">宜昌蜜桔3斤/5斤/9斤</div>
                    </a>
                  </router-link>
                </li>
                <li>
                  <router-link to="/goods?id=5">
                    <a href="javascript:;">
                      <img src="../assets/images/s6.jpg" alt />
                      <div class="t1">
                        <span class="text">￥69.9</span>
                        <span class="text2">￥699</span>
                      </div>
                      <div class="t2">女童格子露肩套装</div>
                    </a>
                  </router-link>
                </li>
                <li v-for="(item, index) in lists" :key="index">
                  <router-link to="/goods?id=6">
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
          <van-tab title="精选单品" title-active-color="#EE0A24">
            <div class="jp_commodit-shop">
              <ul class="list">
                <li>
                  <router-link to="/goods?id=7">
                    <a href="javascript:;">
                      <img src="../assets/images/dp1.jpg" alt />
                      <div class="t1">
                        <span class="text">￥368</span>
                        <span class="text2">￥736</span>
                      </div>
                      <div class="t2">法式小香裙</div>
                    </a>
                  </router-link>
                </li>
                <li>
                  <router-link to="/goods?id=8">
                    <a href="javascript:;">
                      <img src="../assets/images/dp2.jpg" alt />
                      <div class="t1">
                        <span class="text">￥59.9</span>
                        <span class="text2">￥399</span>
                      </div>
                      <div class="t2">加绒冲锋衣中长款棉衣</div>
                    </a>
                  </router-link>
                </li>
                <li>
                  <router-link to="/goods?id=9">
                    <a href="javascript:;">
                      <img src="../assets/images/dp3.jpg" alt />
                      <div class="t1">
                        <span class="text">￥299</span>
                        <span class="text2">￥999</span>
                      </div>
                      <div class="t2">宽松小个子工装羽绒服</div>
                    </a>
                  </router-link>
                </li>
                <li>
                  <router-link to="/goods?id=10">
                    <a href="javascript:;">
                      <img src="../assets/images/dp4.jpg" alt />
                      <div class="t1">
                        <span class="text">￥443</span>
                        <span class="text2">￥899</span>
                      </div>
                      <div class="t2">NIKE耐克气垫缓震跑鞋</div>
                    </a>
                  </router-link>
                </li>
                <li>
                  <router-link to="/goods?id=11">
                    <a href="javascript:;">
                      <img src="../assets/images/dp5.jpg" alt />
                      <div class="t1">
                        <span class="text">￥29.9</span>
                        <span class="text2">￥69.9</span>
                      </div>
                      <div class="t2">浦江红心猕猴桃大果</div>
                    </a>
                  </router-link>
                </li>
                <li>
                  <router-link to="/goods?id=12">
                    <a href="javascript:;">
                      <img src="../assets/images/dp6.jpg" alt />
                      <div class="t1">
                        <span class="text">￥13.8</span>
                        <span class="text2">￥128</span>
                      </div>
                      <div class="t2">463盼盼艾比利薯片6包</div>
                    </a>
                  </router-link>
                </li>
                <li v-for="(item, index) in lists" :key="index">
                  <router-link to="/goods?id=6">
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
    </section>
  </div>
</template>

<script>
export default {
  props: ["lists"],
  methods: {
    onClickLeft() {
      this.$router.push("/my");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>