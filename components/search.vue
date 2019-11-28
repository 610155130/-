<template>
 <div>
        <header class="jp_header">
          <div class="jp_header-box">
            <form action>
              <input type="text" placeholder="搜索" />
              <span class="jq_header-icon1"></span>
              <span class="jq_header-icon2"></span>
            </form>
            <a href="javascript:;" class="jp_nva" @click="nva"></a>
          </div>
        </header>
 </div>
</template>

<script>
 export default {
  methods: {
    nva(){
      this.$router.push("/category1")
    }
  },
 }
</script>

<style lang="scss" scoped>

</style>