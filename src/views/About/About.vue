<template>
 <div>
   <childnavbar/>
   <introduction/>
   <history/>
   <ourteam/>
   <superartist/>
   <coperation/>
   <footercon/>
 </div>
</template>

<script>
import Childnavbar from '../../components/childnavbar/childnavbar.vue'
import Footercon from '../../components/footer/footercon.vue'
import Coperation from './childcomp/coperation.vue'
import History from './childcomp/history.vue'
import Introduction from './childcomp/introduction.vue'
import Ourteam from './childcomp/ourteam.vue'
import Superartist from './childcomp/superartist.vue'
export default {
  components: {
    Childnavbar,
    Introduction, 
    History,
    Ourteam,
    Superartist,
    Coperation,
    Footercon
     },
    data () {
    return {
    }
  }
}

</script>
<style scoped>

</style>
