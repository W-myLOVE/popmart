<template>
 <div class="content">
   <div ref="allitem" class="news_item" v-for="(item, index) in news_content" :key="index">
     <img :src="item.src" alt="">
     <div class="txt">
       <div class="title">{{item.title}}</div>
       <p class="desc">{{item.desc}}</p>
       <div class="buttom">
         <div class="channel">{{item.channel}}</div>
         <div class="date">{{item.date}}</div>
         <div class="more">More></div>
       </div>
     </div>
   </div>
 </div>
</template>

<script>
import ni01 from '@/assets/news/newsitem/01.jpeg'
import ni02 from '@/assets/news/newsitem/02.png'
import ni03 from '@/assets/news/newsitem/03.jpg'
import ni04 from '@/assets/news/newsitem/04.jpeg'
import ni05 from '@/assets/news/newsitem/05.png'
import ni06 from '@/assets/news/newsitem/06.jpg'
import ni07 from '@/assets/news/newsitem/07.png'
import ni08 from '@/assets/news/newsitem/08.jpg'
import ni09 from '@/assets/news/newsitem/09.jpg'
import ni10 from '@/assets/news/newsitem/10.jpg'

var message = "Hello!";

export default {
  
  data () {
    return {
      scrollTop: 0,
      // isShow:false,
      news_content:[
        {num:1, src:ni01, title:'浓情端午，责任消费', desc:'泡泡玛特通过中国扶贫基金会善品公社平台，定点采购20余万元脱贫地区的产品作为员工端午福利，让员工在端午佳节来临之际，可享受原生态优质农特产品，也使脱贫农户增加了收入，助推脱贫增收。', channel:'人民日报', date:'2021-06-15'},
        {num:2, src:ni02, title:'对话泡泡玛特王宁：盲盒只是表象', desc:'“外界认为泡泡玛特立足是盲盒，实际上盲盒只是表象，本质是潮玩、是IP、是内容。”', channel:'新浪财经', date:'2021-06-10'},
        {num:3, src:ni03, title:'泡泡玛特王宁：消费者在部落化，小品类也会诞生伟大公司', desc:'中国企业过去都是在做理性的事情，即如何降低成本，而未来，应该更多关注做感性的事情，发挥设计和美的力量。', channel:'新浪财经', date:'2021-06-08'},
        {num:4, src:ni04, title:'推动“潮玩艺术化” 泡泡玛特打造高端收藏级产品', desc:'MEGA珍藏系列是泡泡玛特重磅推出的高端产品线，旨在打造收藏级别的高端艺术家潮流玩具，定位潮流、艺术收藏领域高端玩家。', channel:'环球网', date:'2021-06-02'},
        {num:5, src:ni05, title:'泡泡玛特“童”回千亿市值,新品表现持续亮眼', desc:'2021年儿童节,“潮玩第一股”泡泡玛特盘中股价涨超4.6%,总市值达1020亿港币,重回千亿大关。', channel:'网易新闻', date:'2021-06-01'},
        {num:6, src:ni06, title:'传递美好到天涯海角，泡泡玛特入驻三亚·亚特兰蒂斯', desc:'5月28日，泡泡玛特新店落户海南三亚·亚特兰蒂斯，潮玩品牌走进国际瞩目的旅游胜地。', channel:'赢商网', date:'2021-05-28'},
        {num:7, src:ni07, title:'Labubu亮相苏富比拍场，潮玩收藏热度上升', desc:'苏富比香港「Kawaii Pop」网上专场拍卖中,泡泡玛特签约艺术家Kasing Lung龙家升创作的以Labubu形象为代表的多件作品表现亮眼。', channel:'国际在线', date:'2021-05-27'},
        {num:8, src:ni08, title:'业绩增长要翻三倍，把中国潮玩卖向全世界，泡泡玛特的野心如何实现？', desc:'泡泡玛特也在寻求多条腿走路，其中一项就是“出海”，泡泡玛特正试图将中国潮玩卖向全世界。', channel:'腾讯财经', date:'2021-05-19'},
        {num:9, src:ni09, title:'两年创下4亿收入，泡泡玛特这款头部IP如何养成？', desc:'2020年，泡泡玛特的营收同比增长479.3%,达到25.135亿元。其中，自主IP产品营收同比增长54.3%，为21.362亿元，占比85%。尤其是Dimoo，目前已经成长为泡泡玛特重要的头部自有IP，两年内已创下了超4亿元的收入。', channel:'大牌BIG', date:'2021-05-19'},
        {num:10, src:ni10, title:'为什么说IP才是理解泡泡玛特涨价的核心逻辑', desc:'IP是吸引用户注意力的核心，在线下门店体验、线上玩法较容易被复制甚至创新替代的情况下，需要客观时间周期孵化和以复合手段运营的IP，有更高的壁垒与更强的长尾价值。', channel:'东西文娱', date:'2021-05-11'}
      ]
    }
  },
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
      if(this.scrollTop>= 20){
      }
    }
  }
}

</script>
<style scoped>
.news_item{
  opacity: 1;
  width: 62.5vw;
  margin: 0 auto;
  padding: 3.125vw;
  display: flex;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
  transition: all 0.5s linear;
}
.news_item img{
  width: 16.146vw;
  height: 9.375vw;
  background: #ffd900;
  display: block;
  margin-right: 4.063vw;
}
.txt .title{
  font-size: 1.146vw;
  max-width: 38.021vw;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-bottom: 1.042vw;
}
.txt .desc{
  width: 35.938vw;
  color: #b3b3b3;
  font-size: .833vw;
  line-height: 1.302vw;
  margin-bottom: 1.563vw;
}
.txt .buttom{
  display: flex;
  position: relative;
  width: 33.854vw;
}
.buttom .channel{
  color: #1a1a1a;
  font-size: .833vw;
  margin-right: 2.604vw;
  max-width: 10.417vw;
  width: 10.417vw;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.buttom .date{
  color: #1a1a1a;
  font-size: .833vw;
}
.buttom .more{
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: .833vw;
  color: #333;
}
.buttom .more:hover{
  color: #feba0a;
}
/* 这个本身想做每个item随进度条的进度显现的，像iphone官网一样，没做出来，很遗憾。没时间再琢磨了，改日有时间再做出了 */
</style>
