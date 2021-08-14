<template>
 <div>
   <div class="tab_box">
     <div v-for="(item, index) in title" :key="index"
          :class="{'item':item, 'active':index===activeindex}"
          @click="change(index)">
       <span>{{item}}</span>
     </div>
   </div>
   <tabcon-1 v-if="activeindex===0"/>
   <tabcon-2 v-if="activeindex===1"/>
   <tabcon-3 v-if="activeindex===2"/>
   <tabcon-4 v-if="activeindex===3"/>
   <tabcon-5 v-if="activeindex===4"/>
   <tabcon-6 v-if="activeindex===5"/>
 </div>
</template>

<script>
import tabcon1 from './tabcon/tabcon1.vue'
import tabcon2 from './tabcon/tabcon2.vue'
import tabcon3 from './tabcon/tabcon3.vue'
import tabcon4 from './tabcon/tabcon4.vue'
import tabcon5 from './tabcon/tabcon5.vue'
import tabcon6 from './tabcon/tabcon6.vue'

export default {
  components: { tabcon1, tabcon2, tabcon3, tabcon4, tabcon5, tabcon6 },
  data () {
    return {
      item:true,
      activeindex:0,
      title:['企业治理', '招股文件', '公告通函', '业绩报告', '投资者联络', '其他']
    }
  },
  methods: {
    change(index){
      this.activeindex= index
    }
  },
}

</script>
<style scoped>
.tab_box{
  display: flex;
  height: 12.533vw;
  background: #f6f6f6;
  padding: 4.583vw 17.708vw;
  flex-wrap: wrap;
}
.item{
  width: 18.75vw;
  display: flex;
  height: 4.167vw;
  font-size: 1.354vw;
  background: #fff;
  border-radius: .521vw;
  color: #333;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 3.646vw;
}
.tab_box .active{
  background: #f5c746;
}
</style>
