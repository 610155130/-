<template>
  <div>
    <van-nav-bar
  title="添加地址"
  left-arrow
  @click-left="onClickLeft"
/>
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
  
</template>

<script>
// import { AddressEdit } from 'vant';
// import { Area } from 'vant';
import { Toast } from 'vant';
import AddressInfo from '../store/modules/area.js'
import{ mapMutations } from "vuex";
export default {
  name:"Address",
  data() {
    return {
      areaList:AddressInfo,
      searchResult: [],
      name:""
    };
  },
  methods: {
    onSave(e) {
      Toast("save");
      window.console.log(e)
      let data = {};
      data.name = e.name;
      data.tel = e.tel;
      data.address = e.province + e.city + e.county + e.addressDetail + "";
      data.addressDetail = e.addressDetail;
      data.areaCode = e.areaCode;
      data.postalCode = e.postalCode;
      data.isDefault = e.isDefault;

      window.console.log(data)
      // let addressData = JSON.parse(localStorage.getItem("address")) || [];
      // addressData.push(data);

      // localStorage.setItem("addrss",JSON.stringify(addressData));
      this.$router.push("/address")
this.$store.commit("saveAddress",data)
      // this.saveAddress(data)
    },
    onDelete() {
      Toast("delete");
    },
        onClickLeft() {
      this.$router.go(-1);
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区"
          }
        ];
      } else {
        this.searchResult = [];
      }
    },
    ...mapMutations(["saveAddress"])
  }
};
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
</style>