import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Category from "../views/Category.vue";
import Category1 from "../views/Category1.vue";
import Cars from "../views/Cars.vue";
import My from "../views/My.vue";
import Bootpage from "../views/Bootpage.vue";
import Banner from "../views/Banner.vue";
import Test from "../views/Test.vue";
import Test1 from "../views/Test1.vue";
import Test2 from "../views/Test2.vue";
import Test3 from "../views/Test3.vue";
import Test4 from "../views/Test4.vue";
import Goods from "../views/Goods.vue";
import Login from "../views/Login.vue";
import Order from "../views/Order.vue";
import Settlement from "../views/Settlement.vue";
import Register from "../views/Register.vue";
import address from "../views/address.vue";
import Collection from "../views/Collection.vue";
import Regiment from "../views/Regiment.vue";
import After from "../views/After.vue";
import Account from "../views/Account.vue";
import SettleAccounts from "../views/SettleAccounts.vue";


Vue.use(VueRouter);

const routes = [
  { path: "/", name: "首页", component: Bootpage },
  { path: "/category", name: "分类", component: Category },
  { path: "/category1", name: "分类", component: Category1 },
  { path: "/cars", name: "购物车", component: Cars },
  { path: "/my", name: "我的卷皮", component: My },
  { path: "/Home", name: "首页", component: Home },
  { path: "/banner", name: "广告", component: Banner },
  { path: "/test", name: "测试", component: Test },
  { path: "/test1", name: "测试1", component: Test1 },
  { path: "/test2", name: "测试2", component: Test2 },
  { path: "/test3", name: "测试3", component: Test3 },
  { path: "/test4", name: "测试4", component: Test4 },
  { path: "/goods", name: "商品详情", component: Goods },
  { path: "/login", name: "登录", component: Login },
  { path: "/order", name: "订单", component: Order },
  { path: "/settlement", name: "确认订单", component: Settlement },
  { path: "/register", name: "注册", component: Register },
  { path: "/address", name: "地址", component: address },
  { path: "/collection", name: "我的收藏", component: Collection },
  { path: "/regiment", name: "我的拼团", component: Regiment },
  { path: "/after", name: "我的售后", component: After },
  { path: "/account", name: "我的账户", component: Account },
  { path: "/settleAccounts", name: "支付", component: SettleAccounts },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
