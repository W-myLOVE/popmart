<template>
 <div>
   <childnavbar/>
   <banner/>
   <newsitem/>
   <footercon/>
 </div>
</template>

<script>
import childnavbar from '@/components/childnavbar/childnavbar.vue'
import Footercon from '@/components/footer/footercon.vue'
import Banner from './childcomp/banner.vue'
import Newsitem from '../../components/newsitem/newsitem.vue'

export default {
  components: { 
    childnavbar,
    Banner,
    Footercon,
    Newsitem
   },
  data() {
    return {
    }
  }
}

</script>
<style scoped>

</style>
