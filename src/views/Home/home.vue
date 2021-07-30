<template>
 <div class="home">
   <navbar/>
  <carousel class="home_carousel"/>
  <videocon/>
  <company/>
  <topsellinggoods/>
  <news/>
  <footercon/>
 </div>
</template>

<script>
import carousel from '@/components/Carousel/carousel.vue'
import videocon from '@/views/Home/childcomp/video_con.vue'
import Company from './childcomp/company.vue'
import Topsellinggoods from './childcomp/topsellinggoods.vue'
import News from './childcomp/news.vue'
import Footercon from '../../components/footer/footercon.vue'
import Navbar from '../../components/navbar/navbar.vue'
export default {
  components: {
      carousel,
      videocon,
      Company,
      Topsellinggoods,
      News,
      Footercon,
      Navbar
    },
  data () {
    return {
    }
  }
}

</script>
<style scoped>
</style>

