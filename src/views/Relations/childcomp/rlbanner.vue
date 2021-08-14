<template>
 <div>
   <div class="headimg"></div>
   <div class="title">
     <div class="en_title">INVESTOR RELATIONS</div>
     <div class="cn_title">投资者关系</div>
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
.headimg{
  width: 100%;
  height: 26.094vw;
  background: url(~@/assets/relations/investor_bg.png) no-repeat;
  background-size: 100%;
  margin-top: 4.2vw;
  margin-bottom: 4.167vw;
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
