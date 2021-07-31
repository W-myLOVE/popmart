<template>
 <div>
   <div class="banner"></div>
   <div class="history">
    <p class="en_title">HISTORY</p>
    <p class="cn_title">品牌发展</p>
    <div class="list">
<!-- ------ -->
      <div class="item">
        <p class="year">2010</p>
        <img class="icon" src="~@/assets/about/history/molly_a.png" alt="">
        <div class="box">
          <img class="bac" src="~@/assets/about/history/history_page_1.png" alt="">
        </div>
      </div>
<!-- ------ -->
      <div class="item">
        <p class="year">2015</p>
        <img class="icon" src="~@/assets/about/history/molly_a.png" alt="">
        <div class="box">
          <img class="bac" src="~@/assets/about/history/history_page_1.png" alt="">
        </div>
      </div>
<!-- ------ -->
      <div class="item">
<p class="year">2016</p>
        <img class="icon" src="~@/assets/about/history/molly_a.png" alt="">
        <div class="box">
          <img class="bac" src="~@/assets/about/history/history_page_1.png" alt="">
        </div>
      </div>
<!-- ------ -->
      <div class="item">
        <p class="year">2017</p>
        <img class="icon" src="~@/assets/about/history/molly_a.png" alt="">
        <div class="box">
          <img class="bac" src="~@/assets/about/history/history_page_1.png" alt="">
        </div>
      </div>
<!-- ------ -->
      <div class="item">
        <p class="year">2018</p>
        <img class="icon" src="~@/assets/about/history/molly_a.png" alt="">
        <div class="box">
          <img class="bac" src="~@/assets/about/history/history_page_1.png" alt="">
        </div>
      </div>
<!-- ------ -->
      <div class="item">
        <p class="year">2019</p>
        <img class="icon" src="~@/assets/about/history/molly_a.png" alt="">
        <div class="box">
          <img class="bac" src="~@/assets/about/history/history_page_1.png" alt="">
        </div>
      </div>
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
.history{
  width: 100%;
  height: 41.042vw;
  background: url(~@/assets/about/history/history_bac.png) no-repeat;
  background-size: 100% 100%;
  text-align: center;
  z-index: 10;
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
    margin-top: 0vw;
}
.cn_title{
  font-size: 1.354vw;
  font-weight: 400;
  color: #fff;
  line-height: 1.302vw;
}
.list{
  width: 64.948vw;
  height: 16.563vw;
  margin: 3.385vw auto 0;
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
  color: rgb(255, 255, 255);
}
.item{
  width: 10.573vw;
  height: 16.563vw;
  font-size: 1.719vw;
  line-height: 1.719vw;
  position: relative;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.year{
  position: absolute;
  bottom: -2.708vw;
  left: 50%;
  transform: translateX(-50%);
  margin: 0;
  padding: 0;
}
.icon{
  width: 20.833vw;
  height: 20.833vw;
  z-index: 2;
  position: absolute;
  top: 0;
}
.box{
  width: 37.5vw;
  height: 16.458vw;
  position: relative;
  top: 0;
  z-index: 1;
  overflow: hidden;
  display: none;
}
.bac{
  width: auto;
  height: 100%;
  position: absolute;
  top: 0;
  background-color: rgb(230, 0, 0);

}

/* 第一个元素的单独样式 */
.item:nth-child(1){
    color: #d33339;
    background-image: url(~@/assets/about/history/molly_1.png);
}
.icon:first-of-type{
  left: 0;
  transform: translateX(-50%) translateY(-1.823vw) scale(.8);
  display: none;
}
.bac:first-of-type{
  background-color: rgb(230, 0, 0);
}

/* 第二个 */
.item:nth-child(2){
    color: #c6acd3;
    background-image: url(~@/assets/about/history/labubu_1.png);
}

/* 第三个 */
.item:nth-child(3){
    color: #e77b30;
    background-image: url(~@/assets/about/history/dimoo_1.png);
}

/* 第四个 */
.item:nth-child(4){
    color: #add9d9;
    background-image: url(~@/assets/about/history/pucky_1.png);
}

/* 第五个 */
.item:nth-child(5){
    color: #ffffc7;
    background-image: url(~@/assets/about/history/panshen_1.png);
}

/* 第六个 */
.item:nth-child(6){
    color: #fff;
    background-image: url(~@/assets/about/history/bobo_1.png);
}
</style>
