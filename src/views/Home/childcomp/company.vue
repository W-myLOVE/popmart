<template>
 <div class="company_con">
   <div class="en_title">TO LIGHT UP PASSION AND BRING JOY</div>
   <div class="cn_title">创造潮流 传递美好</div>
   <div class="item_box">
     <div class="item">
       <div class="hover_box">
          <div class="icon icon1"></div>
          <div class="item_title">设计师</div>
       </div>
       <p class="item_desc">签约 Kenny、毕奇、龙家升等知名潮玩设计师，推出众多粉丝喜爱的潮玩产品</p>
     </div>
     <div class="item">
       <div class="hover_box">
          <div class="icon icon2"></div>
          <div class="item_title">潮流文化</div>
       </div>
       <p class="item_desc">将艺术，设计，潮流、绘画、雕塑等多元素的理念注入在一个个小小的玩具中</p>
      </div>
      <div class="item">
        <div class="hover_box">
          <div class="icon icon3"></div>
          <div class="item_title">IP授权</div>
        </div>
          <p class="item_desc">与世界知名品牌合作，为经典 IP 形象打造时下年轻消费者喜爱的潮流产品</p>
      </div>
      <div class="item">
        <div class="hover_box">
          <div class="icon icon4"></div>
          <div class="item_title">潮流展会</div>
        </div>
        <p class="item_desc">让更多国外潮玩品牌关注国内市场，为中国潮流玩具文化的蓬勃发展增添动力</p>
     </div>
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
.body{
    margin: 0;
    font-size: .833vw;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
    background-color: #fff;
}
.company_con{
    width: 100%;
    height: 40.313vw;
    background: #feba0a;
    padding-top: 6.771vw;
    padding-left: 16.406vw;
    padding-right: 16.406vw;
    box-sizing: border-box;
}
.en_title{
    text-align: center;
    font-size: 2.604vw;
    color: #1a1a1a;
    font-weight: 900;
    line-height: 2.604vw;
    margin-bottom: .938vw;
    box-sizing: border-box;
}
.cn_title{
    text-align: center;
    font-size: 1.563vw;
    line-height: 1.563vw;
    color: #000;
    margin-bottom: 6.25vw;
}
.item_box{
  display: flex;
}
.item{
  flex: 1;
}
.icon{
    width: 4.167vw;
    height: 4.167vw;
    margin: 0 auto 1.563vw;
    transition: all .3s linear;
    cursor: pointer;
}
.icon1{
  background-size: 100%;
  background-image: url(~@/assets/home/company_item/icon1.png);
}
.icon2{
  background-size: 100%;
  background-image: url(~@/assets/home/company_item/icon2.png);
}
.icon3{
  background-size: 100%;
  background-image: url(~@/assets/home/company_item/icon3.png);
}
.icon4{
  background-size: 100%;
  background-image: url(~@/assets/home/company_item/icon4.png);
}
.item_title{
    font-size: 1.354vw;
    line-height: 1.354vw;
    font-weight: 400;
    color: #000;
    margin-bottom: 2.604vw;
    text-align: center;
    transition: all .3s;
    cursor: pointer;
    /* transform: translateZ(500px); */
}
.item_desc{
    font-size: .833vw;
    font-weight: 400;
    line-height: 1.563vw;
    color: #000;
    text-align: center;
    padding: 0 1.042vw;
}
.hover_box{
  transition:all linear 0.2s;
}
.hover_box:hover{
  transform: scale(1.2);
}
</style>
