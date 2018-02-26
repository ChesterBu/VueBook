<template>
  <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide v-for="(slider,key) in sliders" :key = 'key'>
        <img :src="slider">
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-scrollbar"   slot="scrollbar"></div>
  </swiper>
</template>

<script>
export default {
  name: "carrousel",
  props: ["sliders"],
  data() {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        autoplay: 3500,
        setWrapperSize: true,
        pagination: ".swiper-pagination",
        observeParents: true
      }
    };
  }
};
</script>
<style lang="scss" scoped>
img {
  width: 100%;
}
</style>

