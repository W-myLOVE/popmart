<template>
 <div>
   <div class="tab">
     <div :class="{'item':'item', 'active':isactive, 'no_active':!isactive}"
          @click="change">
          CHANNEL
     </div>
     <div :class="{'item':'item', 'no_active':isactive, 'active':!isactive}"
          @click="change">
          ROBOSHOP
     </div>
   </div>
   <div class="txt">
       <p :class="{'txtitem':'item', 'txtactive':isactive}">渠道销售</p>
       <p :class="{'txtitem':'item', 'txtno_active':isactive}">海外机器人</p>
   </div>
   <os-carousel-1 v-if="isactive" />
   <os-carousel-2 v-else/>
 </div> 
</template>

<script>
import osCarousel1 from './osCarousel/osCarousel1.vue'
import OsCarousel2 from './osCarousel/osCarousel2.vue'
export default {
  components: { osCarousel1, OsCarousel2 },
  data () {
    return {
      item:true,
      isactive:true
    }
  },
  methods: {
    change(){
      this.isactive=!this.isactive
    }
  },
}

</script>
<style scoped>
.tab{
  width: 54.479vw;
  margin: 0 auto .99vw;
  display: flex;
  justify-content: flex-start;
}
.item{
  margin-right: .208vw;
  width: 26.667vw;
  height: 4.219vw;
  font-size: 2.083vw;
  font-weight: 400;
  text-align: center;
  line-height: 3.385vw;
  cursor: pointer;

}
.tab .active{
  background: url(~@/assets/oversea/sea_tab_a.png) no-repeat;
  background-size: 100% 100%;
  color: #000
}
.tab .no_active{
  background: url(~@/assets/oversea/sea_tab.png) no-repeat;
  background-size: 100% 100%;
  color: #606060;
}
.txt{
  display: flex;
  justify-content: flex-start;
  width: 54.479vw;
  margin: 0 auto;
}
.txt p{
  width: 26.667vw;
  height: 4.219vw;
  margin-right: .208vw;
  text-align: center;
  font-size: 1.354vw;
  font-weight: 400;
  line-height: 1.563vw;
  margin-top: 0;
  margin-bottom: 0;
}
.txt .txtactive{
  color: #000;
}
.txt .txtno_active{
  color: #606060;
}
</style>
