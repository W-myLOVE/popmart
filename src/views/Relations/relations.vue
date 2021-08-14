<template>
 <div>
   <childnavbar/>
   <rlbanner/>
   <tabbox/>
   <footercon/>
 </div>
</template>

<script>
import childnavbar from '../../components/childnavbar/childnavbar.vue'
import Footercon from '../../components/footer/footercon.vue'
import Rlbanner from './childcomp/rlbanner.vue'
import Tabbox from './childcomp/tabbox.vue'
export default {
  components: { childnavbar, Footercon, Rlbanner, Tabbox },
  data () {
    return {
    }
  }
}

</script>
<style scoped>
</style>
