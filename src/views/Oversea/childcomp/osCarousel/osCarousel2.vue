<template>
 <div class="swiper_container">
   <div class="txt">
     <div class="big_title">RETAILERS' PICTURES</div>
     <div class="small_title">POP MART</div>
     <div class="titleicon" src="~@/assets/oversea/down_icon.png" alt=""></div>
   </div>
   <div class="swiper-wrapper">
     <div class="mask"></div>
        <div class="slides" v-for="(item, index) in backgoundimg" :key="index"
            v-show="currentIndex===index">
          <div class="slide_item" :style="{backgroundImage:'url('+item.src+')'}"></div>
        </div>
   </div>
    <div  ref="p_style" class="c_button prev_button"
         @click="previmg">
    </div>
    <div ref="n_style" class="c_button next_button"
         @click="nextimg">
    </div>
    <div class="indicatorBox">
      <div ref="indicator" class="indicator">
        <img :class="`${index===currentIndex?'indicatorActive':'indicatorItem'}`" 
             v-for="(item,index) in shopimg" :key="index"   
             :src="item.src" alt=""
             @click="chengeIndicator(index)">
      </div>
    </div>
 </div>
</template>

<script>
import img01 from '@/assets/oversea/CarouselItem/2-1.jpeg'
import img02 from '@/assets/oversea/CarouselItem/2-2.jpeg'
import img03 from '@/assets/oversea/CarouselItem/2-3.jpeg'
import img04 from '@/assets/oversea/CarouselItem/2-4.jpeg'
import img05 from '@/assets/oversea/CarouselItem/2-5.jpeg'
import img06 from '@/assets/oversea/CarouselItem/2-6.jpeg'
import img07 from '@/assets/oversea/CarouselItem/2-7.jpeg'
import img08 from '@/assets/oversea/CarouselItem/2-8.jpeg'
import img09 from '@/assets/oversea/CarouselItem/2-9.jpeg'
import img10 from '@/assets/oversea/CarouselItem/2-10.jpeg'
import img11 from '@/assets/oversea/CarouselItem/2-11.jpeg'


import idc01 from '@/assets/oversea/CarouselItem/2-1.jpeg'
import idc02 from '@/assets/oversea/CarouselItem/2-2.jpeg'
import idc03 from '@/assets/oversea/CarouselItem/2-3.jpeg'
import idc04 from '@/assets/oversea/CarouselItem/2-4.jpeg'
import idc05 from '@/assets/oversea/CarouselItem/2-5.jpeg'
import idc06 from '@/assets/oversea/CarouselItem/2-6.jpeg'
import idc07 from '@/assets/oversea/CarouselItem/2-7.jpeg'
import idc08 from '@/assets/oversea/CarouselItem/2-8.jpeg'
import idc09 from '@/assets/oversea/CarouselItem/2-9.jpeg'
import idc10 from '@/assets/oversea/CarouselItem/2-10.jpeg'
import idc11 from '@/assets/oversea/CarouselItem/2-11.jpeg'




export default {
  data () {
    return {
      currentIndex:0,
      backgoundimg:[
        {name:'img01', src:  img01},
        {name:'img02', src: img02},
        {name:'img03', src:  img03},
        {name:'img04', src: img04},
        {name:'img05', src:  img05},
        {name:'img06', src:  img06},
        {name:'img07', src:  img07},
        {name:'img08', src:  img08},
        {name:'img09', src:  img09},
        {name:'img10', src:  img10},
        {name:'img11', src:  img11}

      ],
      shopimg:[
        {name:'idc01', src: idc01},
        {name:'idc02', src: idc02},
        {name:'idc03', src: idc03},
        {name:'idc04', src: idc04},
        {name:'idc05', src: idc05},
        {name:'idc06', src: idc06},
        {name:'idc07', src: idc07},
        {name:'idc08', src: idc08},
        {name:'idc09', src: idc09},
        {name:'idc10', src: idc10},
        {name:'idc11', src: idc11}
      ]
    }
  },
  methods: {
  previmg:function(){
      this.currentIndex--
      if(this.currentIndex===0){
      this.$refs.p_style.style.zIndex='2'
      }
      this.$refs.n_style.style.zIndex='4';
      if(this.currentIndex===7){
        this.$refs.indicator.style= 'transform:translateX(-40%)';
      };      
      if(this.currentIndex===3){
        this.$refs.indicator.style= 'transform:translateX(-0%)';
      };
  },
  nextimg:function(){
      this.currentIndex++
      if(this.currentIndex===this.shopimg.length-1){
      this.$refs.n_style.style.zIndex='2'
      }
      this.$refs.p_style.style.zIndex='4'  
      if(this.currentIndex===4){
        this.$refs.indicator.style= 'transform:translateX(-40%)';
      };
      if(this.currentIndex===8){
        this.$refs.indicator.style= 'transform:translateX(-80%)';
      }
  },
  chengeIndicator:function(index){
      this.currentIndex=index
      if(this.currentIndex===this.shopimg.length-1){
        this.$refs.n_style.style.zIndex='2'
      }else{
        this.$refs.n_style.style.zIndex='4'
      };
      if(this.currentIndex===0){
        this.$refs.p_style.style.zIndex='2'
      }else{
        this.$refs.p_style.style.zIndex='4'
      };

  }
}
}

</script>
<style scoped>
*{
  box-sizing: border-box;
}
.swiper_container{
    width: 100%;
    height: 49.271vw;
    overflow: hidden;
    position: relative;
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
    z-index: 9;
    box-sizing: border-box;
    color: #fff;
    height: 15vw;
    width: 35vw;
    top: 5vw;
    left: 22.813vw;
}
.big_title{
    font-size: 3.177vw;
    font-weight: 500;
    color: #fff;
    z-index: 3;
    position: absolute;
}
.small_title{
    font-size: .99vw;
    font-weight: 600;
    color: #fff;
    z-index: 3;
    position: absolute;
    top: 4.583vw;
}
.titleicon{
  width: 1.927vw;
    height: 1.146vw;
    background: url(~@/assets/oversea/down_icon.png) no-repeat;
    background-size: 100% 100%;
    position: absolute;
    z-index: 3;
    top: 7.969vw;
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
    z-index: 2;
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
  .indicatorBox{
    height: 78px;
    width: 53.906vw;
    overflow: hidden;
    position: relative;
    bottom: 12.521vw;
    left: 50%;
    z-index: 3;
    transform: translateX(-50%);
    text-align: center;
  }
  .indicator{
    transform: translateX(-0%);
    width: 1295px;
    height: 78px;
    position: absolute;
    transition: all 0.3s ease-in-out;
  }
  .indicatorItem{
    display: inline-block;
    width: 129px;
    height: 78px;
    cursor: pointer;
    vertical-align: middle;
    text-align: center;
    object-fit:cover
  }
  .img-enter-active, 
  .img-leave-active {
    transition: all 0.2s ease-in-out;
  }
  .indicatorActive{
    border-color: #feba09!important;
    background: transparent;
    display: inline-block;
    width: 129px;
    height: 78px;
    border: .208vw solid;
    cursor: pointer;
    vertical-align: middle;
    text-align: center;
    object-fit:cover
  }
</style>
