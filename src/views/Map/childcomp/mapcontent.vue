<template>
  <div class="box">
    <div id="container" style="width:100vw; height:35vw"></div>
  </div>
</template>

<script>
import AMap from 'AMap' // 引入高德地图
export default {
  mounted () {
    this.init()
  },
  methods: {
    init () {
     var map = new AMap.Map('container', {
        resizeEnable: true,
        center: [116.397428, 39.90923],
        zoom: 13,
         viewMode:'3D'//使用3D视图
    });
    //实时路况图层
   var marker = new AMap.Marker({
        position:[116.39, 39.9]//位置
    })
    map.add(marker);//添加到地图

    }
     
  }
}
</script>
<style scoped>
.content{
  height: 35vw;
  width: 100vw;
}
</style>
