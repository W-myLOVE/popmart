<template>
 <div>
   <div class="en_title">GLOBAL PRESENCE</div>
   <div class="cn_title">全球化布局</div>
   <div class="osmap"></div>
   <div class="desc">
     泡泡玛特海外业务已遍布20多个国家和地区，包括中国港澳台地区、日韩、东南亚、澳洲、北美和欧洲等。业务覆盖海外线下 线上渠道，其中新兴的机器人自助售卖机业务也已受到海外关注，并成功进入韩国、新加坡等国，受到消费者及合作伙伴一致 好评。目前海外开展合作业务范围包括：渠道授权经销、品牌代理加盟、机器人业务、品牌跨界合作等。
   </div>
 </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}

</script>
<style scoped>
.en_title{
    text-align: center;
    font-size: 2.604vw;
    color: #1a1a1a;
    font-weight: 900;
    line-height: 2.604vw;
    margin-bottom: .938vw;
    margin-top: 13.573vw;
}
.cn_title{
    text-align: center;
    font-size: 1.563vw;
    line-height: 1.563vw;
    color: #000;
    margin-bottom: 5.417vw;
}
.osmap{
  width: 100%;
  height: 44.323vw;
  background: url(~@/assets/oversea/oversea_map.jpg) no-repeat;
  background-size: 100% 100%;
}
.desc{
  width: 57.5vw;
  margin: 5.052vw auto 4.531vw;
  font-size: 1.042vw;
  font-weight: 400;
  color: #4d4d4d;
  line-height: 1.823vw;
}
</style>
