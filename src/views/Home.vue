<template>
  <div>
    <MHeader :back='false'>首页</MHeader>
    <div class="content">
      <Swiper :sliders='sliders' ></Swiper>
    </div>
        
  </div>
</template>

<script>
import MHeader from '../components/MHeader'
import Swiper from '../components/Swiper'
import {getSliders} from '../api/index'
export default {
  async created(){
    let {data:sliders} = await getSliders()
    this.sliders = sliders
  },
  data () {
    return {
      sliders:[]
    };
  },
  components:{
    MHeader,
    Swiper
  }
}

</script>

<style  scoped>
 
</style>