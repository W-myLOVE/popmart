<template>
 <div class="news_con">
   <div class="en_title">NEWS</div>
   <div class="cn_title">媒体新闻</div>
   <div class="news_items">
     <a class="news_item" href="https://wap.peopleapp.com/article/rmh21260530/rmh21260530">
      <img @mouseover="hover1" @mouseleave="move1"
           src="~@/assets/home/news/news01.jpeg" alt="">
      <div  ref="mask1" class="pop_window"
            @mouseleave="move1">
        <div class="news_title">浓情端午，责任消费</div>
        <div class="news_desc">
            泡泡玛特通过中国扶贫基金会善品公社平台，定点采购20余万元脱贫地区的产品作为员工端午福利，让员工在端午佳节来临之际，可享受原生态优质农特产品，也使脱贫农户增加了收入，助推脱贫增收。
        </div>
        <div class="news_more">MORE</div>
      </div>
     </a>

     <a class="news_item" href="https://finance.sina.com.cn/meeting/2021-06-10/doc-ikqciyzi8908845.shtml?cref=cj">   
      <img @mouseover="hover2"  @mouseleave="move2"  src="~@/assets/home/news/news02.png" alt="">
      <div ref="mask2" class="pop_window"
            @mouseleave="move2">
        <div class="news_title">对话泡泡玛特王宁：盲盒只是表象</div>
        <div class="news_desc">
            “外界认为泡泡玛特立足是盲盒，实际上盲盒只是表象，本质是潮玩、是IP、是内容。”
        </div>
        <div class="news_more">MORE</div>
      </div>
     </a>

     <a class="news_item" href="">
      <img @mouseover="hover3" @mouseleave="move3" src="~@/assets/home/news/news03.jpg" alt="">
      <div ref="mask3" class="pop_window"
           @mouseleave="move3">
                <div class="news_title">泡泡玛特王宁：消费者在部落化，小品类也会诞生伟大公司</div>
        <div class="news_desc">
            中国企业过去都是在做理性的事情，即如何降低成本，而未来，应该更多关注做感性的事情，发挥设计和美的力量。
        </div>
        <div class="news_more">MORE</div>
      </div>
     </a>

     <a class="news_item" href="">
      <img @mouseover="hover4" @mouseleave="move4" src="~@/assets/home/news/news04.jpeg" alt="">
      <div ref="mask4" class="pop_window"
           @mouseleave="move4">
        <div class="news_title">推动“潮玩艺术化” 泡泡玛特打造高端收藏级产品</div>
        <div class="news_desc">
            MEGA珍藏系列是泡泡玛特重磅推出的高端产品线，旨在打造收藏级别的高端艺术家潮流玩具，定位潮流、艺术收藏领域高端玩家。
        </div>
        <div class="news_more">MORE</div>
      </div>
     </a>

     <a class="news_item" href="">
      <img @mouseover="hover5" @mouseleave="move5" src="~@/assets/home/news/news05.png" alt="">
      <div ref="mask5" class="pop_window"
           @mouseleave.stop="move5">
        <div class="news_title">泡泡玛特“童”回千亿市值,新品表现持续亮眼</div>
        <div class="news_desc">
            2021年儿童节,“潮玩第一股”泡泡玛特盘中股价涨超4.6%,总市值达1020亿港币,重回千亿大关。
        </div>
        <div class="news_more">MORE</div>
      </div>
     </a>

     <a class="news_item" href="">
      <img @mouseover="hover6" @mouseleave="move6" src="~@/assets/home/news/news06.jpg" alt="">
      <div ref="mask6" class="pop_window"
           @mouseleave="move6">
        <div class="news_title">传递美好到天涯海角，泡泡玛特入驻三亚·亚特兰蒂斯</div>
        <div class="news_desc">
            5月28日，泡泡玛特新店落户海南三亚·亚特兰蒂斯，潮玩品牌走进国际瞩目的旅游胜地。
        </div>
        <div class="news_more">MORE</div>
      </div>
     </a>
   </div>
   <div class="more">MORE></div>
 </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    // 不好意思，接下来要写屎山了，为每个元素都使用一个不同的函数，突然想不到更好的解决方法
    hover1:function(){
      this.$refs.mask1.style.opacity=1
      this.$refs.mask1.style.left=0
      
    },
    move1: function(){
      this.$refs.mask1.style.opacity=0
      this.$refs.mask1.style.left=26.042+'vw'
    },
    hover2:function(){
      this.$refs.mask2.style.opacity=1
      this.$refs.mask2.style.left=0
      
    },
    move2: function(){
      this.$refs.mask2.style.opacity=0
      this.$refs.mask2.style.left=26.042+'vw'
    },
    hover3:function(){
      this.$refs.mask3.style.opacity=1
      this.$refs.mask3.style.left=0
      
    },
    move3: function(){
      this.$refs.mask3.style.opacity=0
      this.$refs.mask3.style.left=26.042+'vw'
    },
    hover4:function(){
      this.$refs.mask4.style.opacity=1
      this.$refs.mask4.style.left=0
      
    },
    move4: function(){
      this.$refs.mask4.style.opacity=0
      this.$refs.mask4.style.left=26.042+'vw'
    },
    hover5:function(){
      this.$refs.mask5.style.opacity=1
      this.$refs.mask5.style.left=0
      
    },
    move5: function(){
      this.$refs.mask5.style.opacity=0
      this.$refs.mask5.style.left=26.042+'vw'
    },
    hover6:function(){
      this.$refs.mask6.style.opacity=1
      this.$refs.mask6.style.left=0
      
    },
    move6: function(){
      this.$refs.mask6.style.opacity=0
      this.$refs.mask6.style.left=26.042+'vw'
    }
  },
}

</script>
<style scoped>
.news_con{
  box-sizing:border-box;
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
    margin-bottom: 6.25vw;
}
.news_items{
  width: 74.479vw;
  margin: 4.167vw auto 0;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
}
.news_item{
  width: 23.49vw;
    height: 13.125vw;
    position: relative;
    overflow: hidden;
    display: block;
    text-decoration: none;
    cursor: pointer;
    flex: 0 0 33.3333%;
    margin-bottom: 1.563vw;
}
.news_item, img{
  width: 23.49vw;
  height: 13.125vw;
  display: block;
  object-fit: fill;
}
.pop_window{
    width: 23.49vw;
    height: 13.125vw;
    position: absolute;
    top: 0;
    left: 26.042vw;
    /* left: 0; */
    background: url(~@/assets/home/news/mini_bac_dark.png) no-repeat;
    background-size: 100% 100%;
    color: #fff;
    box-sizing: border-box;
    cursor: pointer;
    transition: all 0.3s linear;
}
.news_title{
  color: #fff;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 1.458vw;
  margin: 1.563vw 0 1.563vw 1.563vw;
  width: 18.854vw;
}
.news_desc{
  font-size: .833vw;
  width: 19.271vw;
  margin-left: 1.563vw;
  color: #fff;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  box-sizing: border-box;
  cursor: pointer;
}
.news_more{
  position: absolute;
  bottom: 1.563vw;
  right: 1.563vw;
  color: #fff;
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
  font-weight: 600;
}
.more{
  cursor: pointer;
  display: flex;
  margin-bottom: 4.688vw;
  align-items: center;
  justify-content: center;
  font-size: .833vw;
  color: #333;
  font-weight: 550;
}
.more:hover{
  color:#feba0a;
}
</style>
