<template>
  <div>
    <MHeader>列表页</MHeader>
    <div class="content">
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
import { getBooks,removeBook} from "../api/index";
export default {
  created() {
    this.getData();
  },
  data() {
    return {
      books: []
    };
  },
  methods: {
    async remove(id){
      await removeBook(id)
      this.books = this.books.filter(item => item.bookId !== id)
    },

    async getData() {
      this.books = await getBooks();
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