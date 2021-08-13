<template>
 <div>
   <childnavbar/>
   <mapcontent/>
   <footercon/>
 </div>
</template>

<script>
import childnavbar from '../../components/childnavbar/childnavbar.vue'
import Footercon from '../../components/footer/footercon.vue'
import Mapcontent from './childcomp/mapcontent.vue'

export default {
  components: { childnavbar, Footercon, Mapcontent },
  data () {
    return {
    }
  }
}

</script>
<style scoped>
</style>
