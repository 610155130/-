<template>
 <div>
        <nav class="jp_nav">
          <ul>
            <li>
              <a href="javascript:;" @click="btn">
                <img src="../assets/images/t1.png" alt />
              </a>
            </li>
            <li>
              <a href="javascript:;" @click="btn">
                <img src="../assets/images/t2.png" alt />
              </a>
            </li>
            <li>
              <a href="javascript:;" @click="btn">
                <img src="../assets/images/t3.png" alt />
              </a>
            </li>
            <li>
              <a href="javascript:;" @click="btn">
                <img src="../assets/images/t4.png" alt />
              </a>
            </li>
          </ul>
        </nav>
 </div>
</template>

<script>
 export default {
  methods: {
    btn(){
      this.$router.push("/category1")
    }
  },
 }
</script>

<style lang="scss" scoped>

</style>