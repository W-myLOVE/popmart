<template>
 <div class="list">
   <div class="listitem" 
        v-for="(item, index) in listitem" :key="index">
     <div class="en_title">{{item.en_title}}</div>
     <div class="cn_title">{{item.cn_title}}</div>
     <p v-html="item.desc" class="desc"></p>
     <div class="txt">商业垂询</div>
     <div class="flex_box">
       <div class="item">品牌授权合作  联系人 ： {{item.ContactP}}</div>
       <div class="item">企业邮箱: {{item.em}}</div>
       <div class="item">企业地址 ：北京市朝阳区浦项中心 A 座 36 层</div>
     </div>
   </div>
 </div>
</template>

<script>
export default {
  data () {
    return {
      listitem:[
        {en_title:'IP COOPERATION', cn_title:'IP 授权与合作', desc:'1、优质 IP：签约运营众多知名潮流艺术 IP，包括 Molly、Pucky、The Monsters、Satyr Rory 等，欢迎各大品牌洽谈联名合作。<br> 2、深度玩法：IP 背后是具有优秀创作力的艺术家们，可对形象灵活创作，从而为品牌打造专属联名形象，进行更有深度的合作。', ContactP:'Mica', em:'suntingting@popmart.com'},
        {en_title:'COOPERATION', cn_title:'商业合作（全国渠道暂不开放任何加盟合作）', desc:'POP MART 直营门店、机器人商店、无人店、快闪店。<br> 欢迎全国商场、购物中心、甲级写字楼、地铁、机场、高铁站、五星级酒店等商业邀约入驻贵项目，具体合作事宜请联系 BD 部。', ContactP:'罗女士', em:'luohong@popmart.com'},
        {en_title:'RETAIL PARTNERSHIP', cn_title:'商品入驻', desc:'欢迎各大品牌产品入驻 POP MART 泡泡玛特，具体入驻合作请联系商品部。', ContactP:'张女士', em:'zhangjing@popmart.com'},
        {en_title:'BRAND COOPERATION', cn_title:'异业合作 & 品牌宣传', desc:'POP MART 欢迎各大品牌、企事业单位、展会及个人等与我们进行异业合作，<br> 希望能够通过双方或多方合作，借助彼此的各种渠道资源实现对品牌传播、产品宣传达到共赢。', ContactP:'Camilla', em:'guoyingxiao@popmart.com'},
        {en_title:'BULK PURCHASE', cn_title:'大宗团购', desc:'POP MART 提供采购的一站式的服务，为各大企业单位、机构等提供员工节假日福利、活动奖品、答谢客户、礼品选择，并针对不同需求和场景，<br>为您进行挑选建议及包装、送<br>货等服务。大宗采购主要针对企事业单位采购、集团采购、政府公共部门采购、团体订购等。', ContactP:'郭先生', em:'guojieming@popmart.com'},
        {en_title:'OVERSEAS COOPERATION', cn_title:'海外业务合作', desc:'海外（除中国大陆地区以外的国家或地区，含港澳台）的产品供应、机器人商店加盟、IP授权等。<br>Supply goods to overseas(Including Hong Kong, Macao and Taiwan), Robot Shop(art toy vending machine) alliance and IP cooperation, etc.', ContactP:'Mr\' Living', em:'overseasinfo@popmart.com'},
        {en_title:'BTS / STS', cn_title:'北京国际潮流玩具展 / 上海国际潮流玩具展', desc:'北京国际潮流玩具展及上海国际潮流玩具展的参展咨询/商务合作事宜，请联系会展部进行详谈。', ContactP:'Zebo', em:'liuchenglong@popmart.com'}
      ]
    }
  }
}

</script>
<style scoped>
.listitem{
  width: 100%;
  padding-left: 17.708vw;
  padding-top: 3.125vw;
  padding-bottom: 3.125vw;
  border-bottom: 1px solid #ccc;
}
.en_title{
  font-size: 2.604vw;
  text-align: left;
  color: #1a1a1a;
  font-weight: 900;
  line-height: 2.604vw;
  margin-bottom: .938vw;
}
.cn_title{
    font-size: 1.042vw;
    text-align: left;
    color: #404040;
    margin-bottom: 2.604vw;
    line-height: 1.563vw;
}
.desc{
    font-size: .833vw;
    color: #b1b1b1;
    margin-bottom: 2.604vw;
    margin-top: 0;
}
.txt{
  font-size: .833vw;
  color: #404040;
  margin-bottom: 1.302vw;
}
.flex_box{
  display: flex;
  box-sizing: border-box;
  height: 1.563vw;
}
.flex_box, .item{
    min-width: 14.844vw;
    margin-right: 4.167vw;
    font-size: .833vw;
    color: #404040;
}
</style>
