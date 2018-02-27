<template>
  <div>
    <MHeader :back='false'>首页</MHeader>
    <div class="content">
      <Loading v-if="loading"></Loading>
      <template v-else >
        <Swiper :sliders='sliders' ></Swiper>
        <div class="container">
          <h3>热门图书</h3>
          <ul>
            <li v-for="(hot,key) in hotBooks" :key='key'>
              <img :src="hot.bookCover">
              <b>{{hot.bookName}}</b>
            </li>
          </ul>
        </div>
      </template>
      
    </div>
  </div>
</template>

<script>
import MHeader from "../components/MHeader";
import Swiper from "../components/Swiper";
import Loading from "../components/Loading";
import { getHomeInfo } from "../api/index";
export default {
  created() {
    this.getData();
  },
  data() {
    return {
      sliders: [],
      hotBooks: [],
      loading: true
    };
  },
  methods: {
    async getData() {
      let [sliders, hotBooks] = await getHomeInfo();
      this.sliders = sliders;
      this.hotBooks = hotBooks;
      this.loading = false;
    }
  },
  components: {
    MHeader,
    Swiper,
    Loading
  }
};
</script>

<style  scoped lang='scss'>
.container {
  width: 90%;
  margin: 0 auto;
  h3 {
    color: #999;
    padding: 5px 0;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 10px;
    li {
      width: 50%;
      text-align: center;
      margin: 5px 0;
      img {
        width: 100%;
      }
    }
  }
}
</style>