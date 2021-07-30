<template>
 <div class="video_con">
   <div class="en_title">ABOUT US</div>
   <div class="cn_title">关于我们</div>
   <p class="video_txt">
     北京泡泡玛特文化创意有限公司成立于 2010 年，是中国领先的潮流文化娱乐公司 <br>     
     发展近十年来，围绕艺术家挖掘、IP 孵化运营、消费者触达以及潮玩文化推广与培育四个领域 <br>
     POP MART 泡泡玛特旨在用“创造潮流，传递美好”的品牌文化构建了覆盖潮流玩具全产业链的综合运营平台
   </p>
   <router-link class="MORE" to="about">MORE></router-link>
   <div class="videobox">
     <video class="video" controls="controls" ref="startvideo" @click.stop="endvideo">
       <source src="@/assets/home/video/popmartPromo.mp4" type="video/mp4">
     </video>
     <div class="video_btn"
          @click.stop="startvideo"
          v-show="isshow">
          </div>
   </div>
 </div>
</template>

<script>
export default {
  data () {
    return {
      isshow:true
    }
  },
  methods: {
    startvideo: function(){
      if(this.$refs.startvideo.paused){
        this.$refs.startvideo.play()
        this.isshow=false
        
      }
    },
    endvideo: function(){
      if(!this.$refs.startvideo.paused){
        this.isshow=true
      }
    }
  },
}

</script>
<style scoped>
.video_con{
  margin-top: 4.25vw;
  margin-bottom: 6.25vw;
  font-size: 1rem;
}
.en_title{
    text-align: center;
    font-size: 2.0vw;
    color: #1a1a1a;
    font-weight: 900;
    line-height: 2.604vw;
    font-family: DINCond-Black;
    margin-bottom: .938vw;
}
.cn_title{
    text-align: center;
    font-size: 1.563vw;
    line-height: 1.563vw;
    color: #000;
    margin-bottom: 4.167vw;
}
.video_txt{
    color: #1a1a1a;
    font-size: 1.042vw;
    line-height: 1.823vw;
    text-align: center;
    font-weight: 400;
    margin-bottom: 4.167vw;
}
.MORE{
    cursor: pointer;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    font-size: .833vw;
    color: #333;
    font-weight: 550;
    margin-bottom: 4.688vw;
    text-decoration:none;
}
.videobox{
    width: 71.615vw;
    height: 33.177vw;
    margin: 0 auto;
    position: relative;
    background: #1a1a1a;
}
.video{
  object-fit: fill;
  width: 100%;
  height: 100%;
  outline: none;
}
.video_btn{
    position: absolute;
    width: 3.906vw;
    height: 3.958vw;
    left: 50%;
    bottom: 6.771vw;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    background: url(https://popwebsite.paquapp.com/popmartwww/pc/video_btn.png) no-repeat;
    background-size: 100%;
    cursor: pointer;
}
</style>
