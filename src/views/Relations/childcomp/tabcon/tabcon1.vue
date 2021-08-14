<template>
 <div class="tabcon1">
   <div class="en_title">CORPORATE GOVERNANCE</div>
   <div class="cn_title">企业治理</div>
   <div class="tabcon1_title">董事会</div>
   <div class="list_con">
     <div class="file_item"
          v-for="(item, index) in file1" :key="index">
       <div class="icon"></div>
       <div class="right">
         <div class="file_name">{{item.fileName}}</div>
         <div class="file_time">{{item.fileTime}}</div>
       </div>
     </div>
     <div class="block">
       <div class="buttonleft">&lt;</div>
       <div class="number">1</div>
       <div class="buttonRight">&gt;</div>
     </div>
   </div>
   <div class="tabcon1_title">组织章程</div>
  <div class="list_con">
     <div class="file_item"
          v-for="(item, index) in file2" :key="index">
       <div class="icon"></div>
       <div class="right">
         <div class="file_name">{{item.fileName}}</div>
         <div class="file_time">{{item.fileTime}}</div>
       </div>
  </div>
   </div>
 </div>
</template>

<script>
export default {
  data () {
    return {
      file1:[
        {fileName:'董事会成员名单与其角色和职能.pdf', fileTime:'2020-12-10 12:41:40'},
        {fileName:'审核委员会职权范围.pdf', fileTime:'2020-12-10 12:41:40'},
        {fileName:'提名委员会职权范围.pdf', fileTime:'2020-12-10 12:41:40'},
        {fileName:'薪酬委员会职权范围.pdf', fileTime:'2020-12-10 12:41:40'}
      ],
      file2:[
        {fileName:'经修订和重述的组织章程大纲及细则', fileTime:'2020-12-10 12:41:40'}
      ]
    }
  }
}

</script>
<style scoped>
.tabcon1{
  width: 64.063vw;
  margin: 0 auto;
  padding: 4.67vw 0;
}
.en_title{
  text-align: left;
  font-size: 2.604vw;
  color: #1a1a1a;
  font-weight: 900;
  line-height: 2.604vw;
  margin-bottom: .938vw;
}
.cn_title{
  text-align: left;
  font-size: 1.563vw;
  line-height: 1.563vw;
  color: #000;
  margin-bottom: 4.167vw;
}
.tabcon1_title{
  font-size: 1.563vw;
  font-weight: 700;
  margin-bottom: 3.646vw;
}
.file_item{
  display: flex;
  justify-content: left;
  width: 62.5vw;
  border-bottom: .104vw solid #b7b7b7;
  cursor: pointer;
  margin-bottom: 1.042vw;
}
.icon{
  width: 2.552vw;
  height: 1.198vw;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAXCAYAAACiaac3AAACgUlEQVRYR91YyW4aQRCtZjGIzWYRCISMZAlzABvuvuWcH8oX5IOSc245Y6EgAcKW8YwQi20WsWPo6JUyCMiMBDhWGJc0Aqarp+r1q1c9jSAienx8zAghvgohPkkpXbh3zCaEGEkpf0gpv5yfn/8SfwD8JCLfMSdukFtfSnkjFEX5RkSfTQhAS/m7UFV1aIYSMlpklBaYkCZmgVPfG4SUknDxZCH42rblcrm6ZeTzLxduLxC1Wo2enp424ttsNvL5fBSPx8lut9Pd3R11u90Nn5OTE/L7/RSNRslqtfIYfOCrZ6FQiBKJxM449wJRLpdpMBhwIriw4q+vrxzM4/FQKpUizcfhcDAo+IzHY2bP5XLR5eUlz202m6SqKjMJv3ULBoMUi8XeFwRWPRKJcJB2u419hr/ncjmqVqsMdN1nNptRpVKh6XTKbCBBDYQGfueMdRwPYmI9wcViQbe3t/zoTCZDDw8Pf4HAWKfTofv7e0JpXV1dHReIyWRCxWKRQVxfX3Oi20xgbD6fU6FQYL9sNkvPz89cTig7sKMZSu309FS3YRixdRATECkCod6RzHA4XK2wpol1thAcvvl8nvNIp9PU6/UYhJ5BWyizXe0gENsPhzgvLi7o7OxsJextENtlh+4EECgvCFkzi8VC4XCY8LmrHQQCLdXtdq86C34jGZgRE2CrVCrxHDQANASAOAphb6+WEQhFUajVapHX6+U2e1TdyQgESiIQCLAW+v0+NRoNdk0mk7w5mgKEnm6gE4CD/TcQLy8v/LqAzcrpdOrqDvvBaDTaGMOODNFrusEgdvF6vc5dDq8Zb7G9hP2WQO8598OcJ8x/svsQZ2zUqtn/7fgNygO/nfqqWsEAAAAASUVORK5CYII=) no-repeat;
  background-size: 100%;
  margin-top: .417vw;
  margin-right: 1.458vw;
}
.file_name{
  font-size: 1.25vw;
  font-weight: 600;
  margin-bottom: 1.042vw;
}
.file_time{
  font-size: 1.042vw;
  color: #e6e6e6;
  margin-bottom: 1.042vw;
}
.block{
  width: 100%;
  margin-bottom: .521vw;
  margin-top: 1.563vw;
  display: flex;
  justify-content: center;
}
.number{
  color: #333;
  padding: 0 28px;
  font-size: 13px;
  margin-top: 3px;
  font-weight: 700;
}
</style>
