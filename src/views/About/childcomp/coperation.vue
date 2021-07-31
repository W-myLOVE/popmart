<template>
 <div>
   <div class="en_title">COPERATION</div>
   <div class="cn_title">合作品牌</div>
   <div class="banner"></div>
 </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}

</script>
<style scoped>
.en_title{
  text-align: center;
  font-size: 2.604vw;
  color: #1a1a1a;
  font-weight: 900;
  line-height: 2.604vw;
  margin-bottom: .938vw;
}
.cn_title{
  text-align: center;
  font-size: 1.563vw;
  line-height: 1.563vw;
  color: #000;
  margin-bottom: 4.167vw;
}
.banner{
  margin-left: auto;
  margin-right: auto;
  background: url(~@/assets/about/banner/about_banner4.png) no-repeat;
  background-size: 100%;
  width: 64.792vw;
  height: 34.167vw;
}
</style>
