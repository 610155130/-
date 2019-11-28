<template>
  <div>
    
    <van-nav-bar :title="$route.name" left-arrow @click-left="onClickLeft" />
        <van-address-list
      v-model="chosenAddressId"
      :list="list2"
      @add="onAdd"
      @edit="onEdit"
    />
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      @add="onAdd"
      @edit="onEdit"
    />

  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      chosenAddressId: "-1",
      list2: [
        {
          id: "998",
          name: "张三",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室"
        },
        {
          id: "999",
          name: "李四",
          tel: "1310000000",
          address: "浙江省杭州市拱墅区莫干山路 50 号"
        }
      ],
      list:[]

    };
  },

  methods: {
    onAdd() {
      this.$router.push("/test2");
    },

    onEdit(item, index) {
      Toast("编辑地址:" + index);
    },
    onClickLeft() {
      this.$router.go(-1);
    },

  },
      created() {
      // this.list = JSON.parse(localStorage.getItem("address"));
    },
  mounted() {
    
    let addressList = this.$store.state.address;
    window.console.log(addressList)
    addressList.forEach((element,idx)=>{
      element.id = idx + "";
      if(element.isDefault){
        this.chosenAddressId = element.id;
      }
    })
    this.list = addressList;
  },
}
</script>

<style lang="scss" scoped>
.van-icon-arrow-left:before {
  color: #3d3d3d;
  font-size: 18px;
}

.van-nav-bar__title {
  color: #3d3d3d;
  font-size: 18px;
}
.van-address-list{
   padding-bottom: 0; 
}
</style>