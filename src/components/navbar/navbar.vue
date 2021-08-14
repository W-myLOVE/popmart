<template>
 <div :class="classObject">
   <router-link to='/' class="header_logo"></router-link>
   <div class="nav_con">
     <div class="nav_con_item">
       <router-link class="nav_con_item_a" to='/about'>关于我们</router-link>
     </div>

     <div class="nav_con_item">
       <router-link class="nav_con_item_a" to='/news'>新闻</router-link>
     </div>

     <div class="nav_con_item">
       <router-link class="nav_con_item_a" to='/map'>附近门店</router-link>
     </div>

     <div class="nav_con_item">
       <router-link class="nav_con_item_a" to='/cooperation'>合作</router-link>
     </div>

     <div class="nav_con_item">
       <a class="nav_con_item_a" href="https://www.paquapp.com/index.html" target="_blank">葩道</a>
     </div>

<!-- 有选择框的（1） -->
     <div @mouseover="mouseover1" @mouseleave="mouseleave1" class="nav_con_item has_select1">
       <div ref="select1" class="select_box select_box1">
        <a href="https://popmart.tmall.com/index.htm?spm=a220o.1000855.w17839663-15691211861.5.62957b13iKIYC8" target="_blank">天猫旗舰店</a>
        <a href="https://mall.jd.com/index-10179889.html?from=pc" target="_blank">京东旗舰店</a>
       </div>
       <a class="nav_con_item_a">
         线上商城
         <span ref="bottom_font1" class="bottom_font">></span>
       </a>
     </div>

     <div class="nav_con_item">
       <router-link class="nav_con_item_a" to='/oversea'>海外市场</router-link>
     </div>

<!-- 有选择框的（2） -->
     <div @mouseover="mouseover2" @mouseleave="mouseleave2" class="nav_con_item has_select2">
       <div ref="select2" class="select_box select_box2">
         <a href="https://global-shop.popmart.com/" target="_blank">官方店</a>
         <a href="https://www.popmart.co.kr/" target="_blank">韩国</a>
         <a href="https://jp.popmart.com/" target="_blank">日本</a>
         <a href="https://www.popmart.sg" target="_blank">新加坡</a>
         <a href="https://fr.popmart.com/" target="_blank">法国</a>
         <a href="https://popmart.aliexpress.com/" target="_blank">速卖通</a>
       </div>
       <a class="nav_con_item_a">
         海外平台
         <span ref="bottom_font2" class="bottom_font">></span>
       </a>
     </div>

     <div class="nav_con_item">
       <router-link class="nav_con_item_a" to='/relations'>投资者关系</router-link>
     </div>
   </div>
   <div class="lang">
     <a class="active" href="">简</a>
     <span class="line"></span>
     <a href="">繁</a>
     <span class="line"></span>
     <a href="">EN</a>
   </div>
 </div>
</template>

<script>
export default {
  data () {
    return {
      classObject:{
        header:true,
        navBarWrap:false
      },
      scrollTop: 0
    }
  },
// 在生命周期函数里添加屏幕进度监听事件
  mounted () {
    window.addEventListener('scroll', this.getScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.getScroll)
  },

  methods: {
    getScroll(){
      // 将滚动距离赋值给刚刚创建的容器
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // console.log(this.scrollTop);
      if(this.scrollTop >=50){
        this.classObject.navBarWrap= true
      }else{
        this.classObject.navBarWrap= false
      }
    },
    mouseover1:function(){
      this.$refs.select1.style.display='block'
      this.$refs.bottom_font1.style.transform= 'rotate(270deg)'
    },
    mouseleave1:function(){
      this.$refs.select1.style.display='none'
      this.$refs.bottom_font1.style.transform= 'rotate(90deg)'
    },
    mouseover2:function(){
      this.$refs.select2.style.display='block'
      this.$refs.bottom_font2.style.transform= 'rotate(270deg)'
    },
    mouseleave2:function(){
      this.$refs.select2.style.display='none'
      this.$refs.bottom_font2.style.transform= 'rotate(90deg)'
    }
  },
}

</script>
<style scoped>
body{
  text-align: left;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  font-size: .833vw;
  box-sizing: border-box;
}
.header{
  z-index: 11 !important;
  background: transparent;
  width: 100%;
  /* background: #000; */
  box-shadow: 0 0 0.26vw 0 rgba(0,0,0,.1);
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  padding-left: 8.177vw;
  height: 4.375vw;
}
.header:hover{
  background: rgba(0,0,0,.5)!important;
}
.header_logo{
  width: 7.344vw;
  height: 2.292vw;
  display: block;
  background: url(~@/assets/home/navbar/header_logo.png) no-repeat;
  background-size: 100%;
  margin-right: 4.688vw;
}
.nav_con{
  display: flex;
  align-items: center;
}
.nav_con_item{
  display: flex;
  align-items: center;
  position: relative;
}
.nav_con_item_a{
    text-decoration: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 1.563vw;
    color: #fff;
    font-weight: 500;
    font-size: 1.042vw;
}
.nav_con_item_a:hover{
  color: #feba0a;
}
.bottom_font{
  margin-left: .417vw;
  margin-top: .330vw;
  display: inline-block;
  padding: .156vw;
  transform: rotate(90deg);
  transition: all 0.2s linear;
}
.select_box{
  display: none;
  position: absolute;
  top: 4.75vw;
  left: 50%;
  transform: translateX(-50%);
  width: 12.188vw;
  background: rgba(0,0,0,.5);
  box-shadow: 0 0 0.26vw 0 rgba(0,0,0,.1); 
}
.select_box a{
  color: #fff;
  font-size: 1.042vw;
  font-family: STHeiti;
  font-weight: 400;
  padding: 1.563vw 0;
  text-align: center;
  display: block;
  width: 9.375vw;
  margin: 0 auto;
  border-bottom: 1px solid #fff;
  text-decoration: none;
}
.select_box a:last-child{
  border-bottom: none;
}
.select_box a:hover{
   color: #feba0a;
}
.navBarWrap{
  background: rgba(0,0,0,.5)!important;
}
.lang{
  display: flex;
  align-items: center;
  margin-left: 2.604vw;
}
.lang .active{
   color: #feba0a;
}
.lang .line{
    width: .104vw;
    height: .729vw;
    background: #fff;
    margin: 0 .417vw;
}
.lang a{
  color: #fff;
  font-weight: 500;
  font-size: .938vw;
  cursor: pointer;
  text-decoration: none;
}
</style>
