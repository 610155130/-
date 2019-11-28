<template>
  <div>
    <!-- 密码输入框 -->
    <van-cell is-link @click="showPopup">展示弹出层</van-cell>
    <van-popup v-model="show" position="bottom" :style="{ height: '50%' }">
      <van-password-input
        :value="value"
        info="密码为 6 位数字"
        :focused="showKeyboard"
        @focus="showKeyboard = true"
      />

      <!-- 数字键盘 -->
      <van-number-keyboard
        :show="showKeyboard"
        @input="onInput"
        @delete="onDelete"
        @blur="showKeyboard = false"
      />
    </van-popup>
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  data() {
    return {
      show: false,
      value: "",
      showKeyboard: true
    };
  },
  methods: {
    onInput(key) {
      this.value = (this.value + key).slice(0, 6);
      window.console.log(this.value)
      if(this.value.length == 6 && this.value == "610155") {
       Toast('密码正确');
      }else if(this.value.length == 6 && this.value != "610155") {
       Toast('密码错误');
       this.value=""
      }
    },
    onDelete() {
      this.value = this.value.slice(0, this.value.length - 1);
    },
    showPopup() {
      this.show = true;
    }
  }
};

</script>

<style lang="scss" scoped>
</style>