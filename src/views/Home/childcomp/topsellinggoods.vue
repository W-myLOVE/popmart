<template>
 <div class="swiper_container">
   <div class="txt">
     <div class="en_title">TOP SELLING PRODUCTS </div>
     <div class="cn_title">热门商品</div>
   </div>
   <div class="swiper-wrapper">
     <div class="mask"></div>
     <transition-group tag="div" name='img'>
        <div class="slides" v-for="(item, index) in backgoundimg" :key="index"
            v-show="currentIndex===index">
          <div class="slide_item" :style="{backgroundImage:'url('+item.src+')'}"></div>
        </div>
     </transition-group>
   </div>
    <div  ref="p_style" class="c_button prev_button"
         @click="previmg">
    </div>
    <div ref="n_style" class="c_button next_button"
         @click="nextimg">
    </div>
    <div class="indicator">
      <img :class="`${index===currentIndex?'indicatorActive':'indicatorItem'}`" 
           v-for="(item,index) in goodsimg" :key="index"   
           :src="item.src" alt=""
           @click="chengeIndicator(index)">
    </div>
 </div>
</template>

<script>
import firstimg from '@/assets/home/topsellinggoods/01.jpg'
import secondimg from '@/assets/home/topsellinggoods/02.jpg'
import thirdimg from '@/assets/home/topsellinggoods/03.jpg'
import fourthimg from '@/assets/home/topsellinggoods/04.jpg'
import fifthimg from '@/assets/home/topsellinggoods/05.jpg'

import firstgoods from '@/assets/home/topsellinggoods/goods01.png'
import secondgoods from '@/assets/home/topsellinggoods/goods02.png'
import thirdgoods from '@/assets/home/topsellinggoods/goods03.png'
import fourthgoods from '@/assets/home/topsellinggoods/goods04.png'
import fifthgoods from '@/assets/home/topsellinggoods/goods05.png'


export default {
  data () {
    return {
      currentIndex:0,
      backgoundimg:[
        {name:'firstimg', src: firstimg},
        {name:'secondimg', src: secondimg},
        {name:'thirdimg', src: thirdimg},
        {name:'fourthimg', src: fourthimg},
        {name:'fifthimg', src: fifthimg}
      ],
      goodsimg:[
        {name:'firstgoods', src: firstgoods},
        {name:'secondgoods', src: secondgoods},
        {name:'thirdgoods', src: thirdgoods},
        {name:'fourthgoods', src: fourthgoods},
        {name:'fifthgoods', src: fifthgoods}
      ]
    }
  },
  methods: {
  previmg:function(){
      this.currentIndex--
      if(this.currentIndex===0){
      this.$refs.p_style.style.zIndex='2'
      }
      this.$refs.n_style.style.zIndex='4'
  },
  nextimg:function(){
      this.currentIndex++
      if(this.currentIndex===4){
      this.$refs.n_style.style.zIndex='2'
      }
      this.$refs.p_style.style.zIndex='4'        
  },
  chengeIndicator:function(index){
      this.currentIndex=index
      if(this.currentIndex===this.goodsimg.length-1){
        this.$refs.n_style.style.zIndex='2'
      }else{
        this.$refs.n_style.style.zIndex='4'
      };
      if(this.currentIndex===0){
        this.$refs.p_style.style.zIndex='2'
      }else{
        this.$refs.p_style.style.zIndex='4'
      }
  }
}
}

</script>
<style scoped>
.swiper_container{
    width: 100%;
    height: 49.271vw;
    overflow: hidden;
    position: relative;
    margin-bottom: 6.25vw;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
}
.txt{
    position: absolute;
    bottom: 16.042vw;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    z-index: 9;
    box-sizing: border-box;
    color: #fff;
}
.en_title{
    cursor: pointer;
    text-align: center;
    font-size: 2.604vw;
    font-weight: 900;
    line-height: 2.604vw;
    margin-bottom: .938vw;
}
.cn_title{
    cursor: pointer;
    text-align: center;
    font-size: 1.563vw;
    line-height: 1.563vw;
    margin-bottom: 6.25vw;
}
.mask{
    width: 100%;
    height: 100%;
    position: absolute;
    background: url(~@/assets/home/topsellinggoods/mask.png) no-repeat;
    background-size: 100% 100%;
    -webkit-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
    z-index: 3;
    cursor: pointer;
}
.slides{
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
.slide_item{
  width: 100%;
  height: 49.271vw;
  object-fit: fill;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  z-index: 1;
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
    z-index: 4;
    background-image: url(~@/assets/home/Carousel/prev.png);
    left: 13.438vw!important;
    width: 1.771vw;
    height: 3.333vw;
    background-size: 100%;
    top: 39.479vw!important;
  }
  .next_button{ 
    z-index: 4;
    background-image: url(~@/assets/home/Carousel/next.png);
    right: 13.438vw!important;
    width: 1.771vw;
    height: 3.333vw;
    background-size: 100%;
    top: 39.479vw!important;
  }
  .indicator{
    bottom: 4.688vw!important;
    left: 0;
    width: 100%;
    position: absolute;
    text-align: center;
    z-index: 3;
  }
  .indicatorItem{
    display: inline-block;
    width: 6.094vw;
    height: 6.094vw;
    border: .208vw solid #fff;
    margin: 0 1.146vw!important;
    cursor: pointer;
    vertical-align: middle;
    text-align: center;
    border-radius: 100%;
  }
  .img-enter-active, 
  .img-leave-active {
    transition: all 0.2s ease-in-out;
  }
  .img-enter,
  .img-leave-to {
    opacity: 0;
  }
  .img-enter-to,
  .img-leave {
    opacity: 1;
  }
  .indicatorActive{
    border-color: #feba09!important;
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
    background: transparent;
    display: inline-block;
    width: 6.094vw;
    height: 6.094vw;
    border: .208vw solid #fff;
    margin: 0 1.146vw!important;
    cursor: pointer;
    vertical-align: middle;
    text-align: center;
    border-radius: 100%;
  }
</style>
