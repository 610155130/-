<template>
 <div>
<!-- <van-sidebar v-model="activeKey" class="tests">
  <van-sidebar-item title="男装" />
  <van-sidebar-item title="母婴" />
  <van-sidebar-item title="鞋子" />
  <van-sidebar-item title="箱包" />
  <van-sidebar-item title="居家百货" />
  <van-sidebar-item title="家电数码" />
  <van-sidebar-item title="内衣配饰" />
  <van-sidebar-item title="美妆" />
  <van-sidebar-item title="远动户外" />
  <van-sidebar-item title="美食" />
  <van-sidebar-item title="车品文娱" />
  <van-sidebar-item title="通讯旅游" />
</van-sidebar> -->

<van-tree-select
  height="667px"
  :items="items"
  :main-active-index.sync="activeIndex"
>
  <template slot="content">
    <van-image v-if="activeIndex === 0" src="https://img.yzcdn.cn/vant/apple-1.jpg" >339</van-image>
    <van-image v-if="activeIndex === 1" src="https://img.yzcdn.cn/vant/apple-2.jpg" >339</van-image>
    <van-image v-if="activeIndex === 2" src="https://img.yzcdn.cn/vant/apple-1.jpg" >339</van-image>
    <van-image v-if="activeIndex === 3" src="https://img.yzcdn.cn/vant/apple-2.jpg" >339</van-image>
    <van-image v-if="activeIndex === 4" src="https://img.yzcdn.cn/vant/apple-1.jpg" >339</van-image>
    <van-image v-if="activeIndex === 5" src="https://img.yzcdn.cn/vant/apple-2.jpg" >339</van-image>
    <van-image v-if="activeIndex === 6" src="https://img.yzcdn.cn/vant/apple-1.jpg" >339</van-image>
    <van-image v-if="activeIndex === 7" src="https://img.yzcdn.cn/vant/apple-2.jpg" >339</van-image>
    <van-image v-if="activeIndex === 8" src="https://img.yzcdn.cn/vant/apple-1.jpg" >339</van-image>
    <van-image v-if="activeIndex === 9" src="https://img.yzcdn.cn/vant/apple-2.jpg" >339</van-image>
    <van-image v-if="activeIndex === 10" src="https://img.yzcdn.cn/vant/apple-1.jpg" >339</van-image>
    <van-image v-if="activeIndex === 11" src="https://img.yzcdn.cn/vant/apple-2.jpg" >339</van-image>
  </template>
</van-tree-select>
<div>

</div>
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
      items: [{ text: '男装' }, { text: '母婴' }, { text: '鞋子' }, { text: '箱包' }, { text: '居家百货' }, { text: '家电数码' }, { text: '内衣配饰' }, { text: '美妆' }, { text: '远动户外' }, { text: '美食' }, { text: '车品文娱' }, { text: '通讯旅游' }]
    }
  }
 }
</script>

<style lang="scss" scoped>
.tests{
  width: 90px;
  height: 30px !important;
}
.van-sidebar-item--select{
  color: #ee0a24;
}
</style>