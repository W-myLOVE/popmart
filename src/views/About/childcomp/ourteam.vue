<template>
 <div class="ourteam">
   <div class="en_title">OUR TEAM</div>
   <div class="cn_title">团队介绍</div>
   <p class="desc">POP MART泡泡玛特管理团队具有丰富的零售行业经验与IP开发经验，团队中多人曾先后就读北京大学MBA等知名工商管理学府，将最先进的商业管理理念引入公司日常运营。泡泡玛特现有员工1500余人，在北京、上海、南京、东莞均设有办公室，负责全国门店运营、商品研发、IP授权、APP开发及大型展会主办等业务。</p>
   <div class="joinus_area">
     <a class="joinus" href="">加入我们 Join us!</a>
   </div>
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
.ourteam{
  width: 68.49vw;
  margin: 0 auto;
  padding-top: 4.167vw;
  padding-bottom: 3.021vw;
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
.desc{
    font-size: 1.042vw;
    color: #4d4d4d;
    margin: 0 auto 4.167vw;
    text-align: left;
    width: 62.5vw;
}
.joinus_area{
  margin: -2.604vw auto 1.042vw;
  width: 62.5vw;
  display: flex;
  align-items: center;
}
.joinus{
    margin-left: auto;
    margin-right: .521vw;
    display: block;
    font-size: 1.042vw;
    color: #4d4d4d;
    text-decoration: underline;
}
.joinus:hover{
   color:#feba0a;
}
.banner{
  width: 68.49vw;
    height: 25.156vw;
    background: url(~@/assets/about/banner/about_banner2.png) no-repeat;
    background-size: 100%;
    margin-bottom: 4.479vw;
}
</style>
