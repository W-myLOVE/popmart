<template>
 <div class="footer">
   <router-link to="/home" class="footer_logo"></router-link>
   <div class="footer_con">
     <div class="footer_icon">
       <a v-for="index of 6" :key="index" href="" :class="'footer_icon'+index"></a>
     </div>
     <div class="footer_con_box1">
      <a class="footer_con_box1_item" v-for="index of 4" :key="index" href="">{{box1[index-1]}}</a>
     </div>
     <div class="footer_con_box2">
       <div class="footer-con-box2-item" v-for="index of 2" :key="index">
         {{box2[index-1]}}
       </div>
     </div>
     <div class="footer_con_box2">
       <div class="footer-con-box2-item" v-for="index of 3" :key="index">
         {{box3[index-1]}}
       </div>
     </div>
   </div>
 </div>
</template>

<script>
export default {
  data () {
    return {
      box1:['校园招聘', '社会招聘', '联系我们', '廉洁合规'],
      box2:['北京市朝阳区望京东园四区 13号楼 -4 至 33 层 101 内 A 座 36 层 3606 室', '4000232233@POPMART.COM'],
      box3:['COPYRIGHT © 泡泡玛特 POPMART.COM ALL RIGHTS RESERVED', '京ICP备11028233号-3', '营业执照']
    }
  }
}

</script>
<style scoped>
.footer{
  box-sizing: border-box;
  width: 100%;
  height: 15.625vw;
  background: #383838;
  display: flex;
  justify-content: center;
  padding-top: 3.854vw;
  text-align: left;
}
.footer_logo{
  width: 8.125vw;
  height: 2.552vw;
  background: url(~@/assets/common/footer/header_logo.png) no-repeat;
  background-size: 100% 100%;
  display: block;
}
.footer_con{
    margin-left: 6%;
    margin-right: 4%;
}
.footer_icon{
  width: 12.708vw;
  height: 1.406vw;
  display: flex;
  margin-bottom: 1.042vw;
  margin-left: 1.458vw;
  box-sizing: border-box;
}
.footer_icon a{
  width: 1.563vw;
  height: 1.563vw;
  margin-right: .885vw;
  cursor: pointer;
  display: block;
}
.footer_icon1{
  background: url(~@/assets/common/footer/footer_icon1.png) no-repeat;
  background-size: 100%;
  position: relative;
}
.footer_icon2{
  background: url(~@/assets/common/footer/footer_icon2.png) no-repeat;
  background-size: 100%;
  position: relative;
}
.footer_icon3{
  background: url(~@/assets/common/footer/footer_icon3.png) no-repeat;
  background-size: 100%;
  position: relative;
}
.footer_icon4{
  background: url(~@/assets/common/footer/footer_icon4.png) no-repeat;
  background-size: 100%;
  position: relative;
}
.footer_icon5{
  background: url(~@/assets/common/footer/footer_icon5.png) no-repeat;
  background-size: 100%;
  position: relative;
}
.footer_icon6{
  background: url(~@/assets/common/footer/footer_icon6.png) no-repeat;
  background-size: 100%;
  position: relative;
}
.footer_con_box1{
  display: flex;
  margin-bottom: .521vw;
  box-sizing: border-box;
}
.footer_con_box1_item{
  font-size: .833vw;
  color: #fff;
  font-family: STHeiti;
  border-right: .104vw solid #fff;
  padding: 0 1.458vw;
  line-height: .833vw;
  text-decoration: none;
  cursor: pointer;
  display: block;
}
.footer_con_box1_item:last-child{
  border: none;
}
.footer_con_box2{
  display: flex;
  margin-bottom: .26vw;
  box-sizing: border-box;
}
.footer-con-box2-item{
  font-size: .433vw;
  color: #a9a9a9;
  border-right: 1px solid #a9a9a9;
  padding: 0 1.458vw;
  line-height: 1.5;
}
.footer-con-box2-item:last-child{
  border: none;
}
</style>
