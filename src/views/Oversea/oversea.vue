<template>
 <div>
   <childnavbar/>
   <osbanner/>
   <ostab/>
   <footercon/>
 </div>
</template>

<script>
import childnavbar from '../../components/childnavbar/childnavbar.vue'
import Footercon from '../../components/footer/footercon.vue'
import Osbanner from './childcomp/osbanner.vue'
import Ostab from './childcomp/ostab.vue'
export default {
  components: { childnavbar, Osbanner, Footercon, Ostab },
  data () {
    return {
    }
  }
}

</script>
<style scoped>
</style>
