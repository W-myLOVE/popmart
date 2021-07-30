<template>
<!-- 轮播图主体 -->
  <div class="caroucel">
    <!-- 标题遮罩 -->
    <div class="mask_title"></div>
    <!-- 阴影遮罩 -->
    <div class="mask"></div>
    <!-- 图片显示区域 -->
    <div class="items"
         v-for="(item, index) in backgoundimg" :key="index">
           <transition-group tag="div" name='fade'>
         <div :class="item.name" id="itemimgs"
         v-show="index===activeIndex"
         :key="index">
         </div>
           </transition-group>
           <!-- 最后一张图片在右滑的时候也有动画，真是神奇的bug -->
    </div>
    <div  ref="p_style" class="c_button prev_button"
         @click="previmg">
    </div>
    <div ref="n_style" class="c_button next_button"
         @click="nextimg">
    </div>
    <div class="Indicator">
      <div :class="`${index===activeIndex?'activeIndicator':'indicatorItem'} ${Indicatorstyle?'indicatorItem':''}`"
           v-for="(item, index) in backgoundimg" :key="index"
           @click="activeIndex= index">
      </div>
    </div>
  </div>
</template>

<script>
// 引入图片资源
import firstimg from '@/assets/home/Carousel/01.jpg'
import secondimg from '@/assets/home/Carousel/02.jpg'
import thirdimg from '@/assets/home/Carousel/03.jpg'
import fourthimg from '@/assets/home/Carousel/04.jpg'
import fifthimg from '@/assets/home/Carousel/05.jpg'

export default {
  data() {
    return {
      // 基础数据部分
      activeIndex:0,
      Indicatorstyle:true,
      Indicatoractive:true,
      show: true,
      backgoundimg:[
        {name:'firstimg', src: firstimg},
        {name:'secondimg', src: secondimg},
        {name:'thirdimg', src: thirdimg},
        {name:'fourthimg', src: fourthimg},
        {name:'fifthimg', src: fifthimg}
      ]
    }
  },
  methods: {
    previmg:function(){
        this.activeIndex--
        if(this.activeIndex===0){
        this.$refs.p_style.style.zIndex='1'
        }
        this.$refs.n_style.style.zIndex='3'
    },
    nextimg:function(){
        this.activeIndex++
        if(this.activeIndex===4){
        this.$refs.n_style.style.zIndex='1'
        }
        this.$refs.p_style.style.zIndex='3'        
    },
    indicatorclick: function(){
      this.activeIndex= index 
      
    }
  }
}
</script>


<style scoped>
  body{
    margin: 10px;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
  }
  .caroucel{
    position:relative;
    width: 100vw;
    height: 56.25vw;
  }
  .mask_title{
    width: 24.375vw;
    height: 7.24vw;
    background-image: url(~@/assets/home/Carousel/mask_title.png);
    background-size: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 9;
  }
  #itemimgs{
    width: 100vw;
    height: 56.25vw;
    position: absolute;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .firstimg{
    background-image: url(~@/assets/home/Carousel/01.jpg);
  }
  .secondimg{
    background-image: url(~@/assets/home/Carousel/02.jpg);
  }
  .thirdimg{
    background-image: url(~@/assets/home/Carousel/03.jpg);
  }
  .fourthimg{
    background-image: url(~@/assets/home/Carousel/04.jpg);
  }
  .fifthimg{
    background-image: url(~@/assets/home/Carousel/05.jpg);
  }
  .items{
    width: 100vw;
    height: 56.25vw;
    position: absolute;
  }
   .fade-leave-active,
   .fade-enter-active{
    transition: all 0.3s ease-in-out;
  }
  .fade-enter,
  .fade-leave-to{
    opacity: 0;
  }
  .fade-enter-to,
  .fade-leave{
    opacity: 1;
  }
  .c_button{
    cursor: pointer;
    position: absolute;
    height: 3.333vw;
    width: 1.771vw;
    background-size: 100%;
    top: 50%;
  }
  .prev_button{    
    z-index: 3;
    background-image: url(~@/assets/home/Carousel/prev.png);
    left: 3.646vw!important;
  }
  .next_button{ 
    z-index: 3;
    background-image: url(~@/assets/home/Carousel/next.png);
    right: 3.646vw!important;
  }
  .mask{
    width: 100%;
    height: 100%;
    position: absolute;
    background: url(~@/assets/home/Carousel/mask.png) no-repeat;
    background-size: 100% 100%;
    z-index: 2;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  .Indicator{
    text-align: center;
    position: absolute;
    bottom: 1.771vw;
    left: 50%;
    width: 100%;
    height: 24px;
    z-index: 10;
    transform: translateX(-50%);
  }
  .indicatorItem{
    box-sizing: border-box;
    display: inline-block;
    border-radius: 100%;
    cursor: pointer;
    width: .729vw;
    height: .729vw;
    margin: 0 .521vw!important;
    border: 1px solid #feba09!important;
  }
  .activeIndicator{
    background: #feba09!important;
  }
</style>

