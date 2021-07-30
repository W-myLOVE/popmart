<template>
 <div>
   <div class="banner"></div>
   <div class="history">
    <p class="en_title">HISTORY</p>
    <p class="cn_title">品牌发展</p>
   </div>
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
.history{
    width: 100%;
    height: 41.042vw;
    background: url(~@/assets/about/history/history_bac.png) no-repeat;
    background-size: 100% 100%;
    text-align: center;
}
.banner{
  width: 100%;
  height: 32.292vw;
  background: url(~@/assets/about/banner/banner_new.jpg) no-repeat;
  background-size: 100%;
}
.en_title{
    font-size: 2.604vw;
    font-weight: 400;
    color: #fff;
    padding-top: 5.625vw;
    margin-bottom: 1.563vw;
    margin-top: 0.1vw;
}
.cn_title{
  font-size: 1.354vw;
  font-weight: 400;
  color: #fff;
  line-height: 1.302vw;
}
</style>
