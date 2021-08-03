<template>
 <div>
  <div class="banner"></div>
  <div class="en_title">NEWS</div>
  <div class="cn_title">媒体新闻</div>
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
.banner{
  margin-top: 4.275vw;
  margin-bottom: 4.167vw;
  width: 100%;
  height: 26.094vw;
  background: url(~@/assets/news/banner/news_banner2.jpg) no-repeat;
  background-size: 100%;
}
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
</style>
