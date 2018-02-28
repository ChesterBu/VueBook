<template>
  <div>
    <MHeader>列表页</MHeader>
    <div class="content" ref="scroll" @scroll="loadMore">
      <ul>
        <router-link v-for="(book,key) in books" :key="key" :to="{name:'detail',params:{bid:book.bookId}}" tag="li">
          <img :src="book.bookCover">
          <div>
            <h4>{{book.bookName}}</h4>
            <p>{{book.bookInfo}}</p>
            <b>{{book.bookPrice}}</b>
            <button @click.stop="remove(book.bookId)">删除</button>
          </div>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import MHeader from "../components/MHeader";
import { removeBook, pagination } from "../api/index";
export default {
  created() {
    this.getData();
  },
  data() {
    return {
      books: [],
      offset: 0,
      hasMore: true,
      isLoading:false,
    };
  },
  methods: {
    loadMore(){
      clearTimeout(this.timer)     //debounce
      this.timer = setTimeout(()=>{
              //卷去高度   可见去高度     总高
        let {scrollTop,clientHeight,scrollHeight}=this.$refs.scroll 
        if(scrollTop+clientHeight+20 >scrollHeight){
          this.getData()
        }
      },20)
      
    },

    async remove(id) {
      await removeBook(id);
      this.books = this.books.filter(item => item.bookId !== id);
    },

    async getData() {
      if (this.hasMore && !this.isLoading) {
        this.isLoading = true;
        let { hasMore, books } = await pagination(this.offset);
        this.books = [...this.books, ...books];
        this.hasMore = hasMore;
        this.isLoading = false;
        this.offset = this.books.length;
      }
    }
  },
  components: {
    MHeader
  }
};
</script>

<style  scoped>
.content ul {
  padding: 10px;
}
.content ul li {
  display: flex;
  padding: 10px 0;
  border-bottom: 1px solid #f1f1f1;
}
.content ul li img {
  width: 130px;
  height: 150px;
}
.content h4 {
  font-size: 20px;
  line-height: 35px;
}
.content p {
  color: #2a2a2a;
  line-height: 25px;
}
.content b {
  color: red;
}
.content button {
  display: block;
  width: 60px;
  height: 25px;
  background: orangered;
  color: #fff;
  border: none;
  border-radius: 15px;
  outline: none;
}
</style>