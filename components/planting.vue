<template>
  <div>
    <!-- 轮播框 -->
    <div class="swiper-container containerboxs">
      <div class="swiper-wrapper">
        <div class="swiper-slide imgsmg">
          <img src="../assets/images/lb1.png" alt />
        </div>
        <div class="swiper-slide imgsmg">
          <img src="../assets/images/lb2.png" alt />
        </div>
        <div class="swiper-slide imgsmg">
          <img src="../assets/images/lb3.png" alt />
        </div>
        <div class="swiper-slide imgsmg">
          <img src="../assets/images/lb4.png" alt />
        </div>
        <div class="swiper-slide imgsmg">
          <img src="../assets/images/lb5.png" alt />
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination paginationboxs"></div>
      <!-- Add Arrows -->
    </div>
    <!-- 轮播框-end -->
  </div>
</template>

<script>
import Swiper from "swiper/dist/js/swiper.js";
export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {
    new Swiper(".containerboxs", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".paginationboxs",
        clickable: true
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.a {
  color: #333;
}
</style>