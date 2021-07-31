<template>
 <div>
   <div class="banner"></div>
   <div class="en_title">INTRODUCTION</div>
   <div class="cn_title">品牌介绍</div>
   <p v-show="isshow" class="desc">
     北京泡泡玛特文化创意有限公司成立于2010年，是中国领先的潮流文化娱乐公司。发展近十年来，围绕艺术家挖掘、IP孵化运营、消费者触达以及潮玩文化推广与培育四个领域，POP MART泡泡玛特旨在用“创造潮流，传递美好”的品牌文化构建了覆盖潮流玩具全产业链的综合运营平台。 
     <br>
     <br>
     为了让更多喜爱潮玩的年轻人与“创造潮流，传递美好。To light up passion and bring joy.”的品牌理念深入交流，POP MART泡泡玛特已在北京和上海成功举办了五届亚洲最大规模的国际潮流玩具展，每届展会可吸引超10万观众，弥补了国内潮玩行业空白。POP MART泡泡玛特通过展会的形式让更多国外潮玩品牌关注国内市场，也为更多中国优秀设计师拓宽渠道展示自己的
   </p>
   <p v-show="!isshow" class="desc">
     北京泡泡玛特文化创意有限公司成立于2010年，是中国领先的潮流文化娱乐公司。发展近十年来，围绕艺术家挖掘、IP孵化运营、消费者触达以及潮玩文化推广与培育四个领域，POP MART泡泡玛特旨在用“创造潮流，传递美好”的品牌文化构建了覆盖潮流玩具全产业链的综合运营平台。 
     <br>
     <br>
     为了让更多喜爱潮玩的年轻人与“创造潮流，传递美好。To light up passion and bring joy.”的品牌理念深入交流，POP MART泡泡玛特已在北京和上海成功举办了五届亚洲最大规模的国际潮流玩具展，每届展会可吸引超10万观众，弥补了国内潮玩行业空白。POP MART泡泡玛特通过展会的形式让更多国外潮玩品牌关注国内市场，也为更多中国优秀设计师拓宽渠道展示自己的原创艺术，进而为中国潮流玩具文化的蓬勃发展增添动力。 
     <br>
     <br>
     截至2019年12月31日，POP MART泡泡玛特的线下直营门店已经突破了114家，拥有超825台机器人商店，深度覆盖了全国57个城市，并入驻韩国、日本、新加坡及美国等21个海外国家及地区，全球布局不断扩展。对于欧洲市场，POP MART泡泡玛特则宣布与欧洲合作伙伴baby watch签署欧洲拓展协议，双方将从法国开始拓展欧洲市场，进一步实现全球化运营。与此同时，POP MART泡泡玛特自主开发的国内最专业的潮流玩具社交平台---葩趣，让潮玩爱好者有了属于自己的潮玩聚集地，现已覆盖约540个潮玩品牌，众多潮玩设计师入驻开设专栏，“转娃”、“改娃”、“换娃”成为潮玩行业的新名词。 
     <br>
     <br>
     如今，POP MART泡泡玛特已形成了以设计师、零售渠道和产业链为支点的品牌优势。POP MART泡泡玛特旗下签约了如Kenny、毕奇、龙家升等知名潮玩设计师，推出了众多粉丝喜爱的潮玩产品，凝聚了强大优质的粉丝群体。同时，POP MART泡泡玛特还与世界知名品牌合作，为经典IP 形象打造时下年轻消费者喜爱的潮流产品。 
     <br>
     <br>
     此外，POP MART泡泡玛特关注潮玩市场的源头，与中央美术学院联合举办潮流玩具讲座，邀请业内顶级设计师讲授潮玩知识，助力中国本土潮玩设计师的培养。 
     <br>
     <br>
     针对线上销售渠道，POP MART 泡泡玛特天猫旗舰店强势崛起，通过小游戏、小程序等方式增强粉丝的购物趣味性，2019年天猫“双十一”期间销售额突破8212万，同比增长295%，成为天猫玩具类目第一名。
     <br>
     <br>
     随着版图的不断延伸，POP MART泡泡玛特逐构建起覆盖设计师、工厂供应链、零售渠道、国际潮流玩具展会的完整产业链，让设计师能够更加专注作品，促使潮玩行业蓬勃发展。
   </p>
   <div class="operation_area">
     <div @click="isshow=!isshow" class="more">MORE</div>
     <div class="more_font">
       <div v-show="isshow" @click="isshow=!isshow" class="font">></div>
       <div v-show="!isshow" @click="isshow=!isshow" class="font_top">></div>
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
  }
}

</script>
<style scoped>
.banner{
    width: 100%;
    height: 26.094vw;
    background: url(~@/assets/about/banner/banner.jpg) no-repeat;
    background-size: 100%;
    margin-bottom: 4.167vw;
    margin-top:4.26vw;
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
    margin-bottom: 4.167vw;
}
.desc{
  font-size: 1.042vw;
  color: #4d4d4d;
  margin: 0 auto 4.167vw;
  text-align: left;
  width: 62.5vw;
}
.operation_area .more{
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: .833vw;
  color: #333;
  font-weight: 600;
}
.operation_area .more:hover{
  color:#feba0a;
}
.operation_area .more_font{
    width: 100%;
    text-align: center;
    margin-top: -.26vw;
    margin-bottom: 2.188vw;
}
.operation_area .more_font:hover{
  color:#feba0a;
}
.operation_area .font, .operation_area .font_top{
    /* border: solid #333; */
    /* border-width: 0 1px 1px 0; */
    display: inline-block;
    padding: .156vw;
}
.operation_area .font{
  transform: rotate(90deg);
}
 .operation_area .font_top{
   transform: rotate(-90deg);
}
</style>
