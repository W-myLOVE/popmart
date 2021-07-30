<template>
 <div>
   <childnavbar/>
   <introduction/>
   <history/>
 </div>
</template>

<script>
import Childnavbar from '../../components/childnavbar/childnavbar.vue'
import History from './childcomp/history.vue'
import Introduction from './childcomp/introduction.vue'
export default {
  components: {
    Childnavbar,
    Introduction, 
    History
     },
 data () {
    return {
    }
  }
}

</script>
<style scoped>

</style>
