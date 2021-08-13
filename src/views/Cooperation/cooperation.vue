<template>
 <div>
   <childnavbar />
   <coobanner/>
   <coolist/>
   <footercon/>
 </div>
</template>

<script>
import Childnavbar from '../../components/childnavbar/childnavbar.vue'
import Footercon from '../../components/footer/footercon.vue'
import Coobanner from './childcomp/coobanner.vue'
import Coolist from './childcomp/coolist.vue'
export default {
  components: { Footercon, Coobanner, Childnavbar, Coolist },
  data () {
    return {
    }
  }
}

</script>
<style scoped>
</style>
