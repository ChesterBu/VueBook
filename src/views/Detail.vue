<template>
    <div class="detail">
      <MHeader :back ='true'>详情/修改</MHeader>
      <div class="content">
         <ul>
          <img :src="book.bookCover" alt="" srcset="">
          <li>
            <label for="bookName">书的名称</label>
            <input type="text" v-model="book.bookName" id="bookName">
          </li>
          <li>
            <label for="bookInfo">书的信息</label>
            <input type="text" v-model="book.bookInfo" id="bookInfo">
          </li>
          <li>
            <label for="bookPrice">书的价格</label>
            <input type="text" v-model.number="book.bookPrice" id="bookPrice">
          </li>
          <li>
            <button @click="update">确认修改</button>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
import MHeader from "../components/MHeader";
import { findOne, updateBook } from "../api/index";

export default {
  created() {
    this.getData();
  },
  watch: {
    $route() {
      //路径变化，重新获取
      this.getData();
    }
  },
  data() {
    return { book: {} };
  },
  methods: {
    async getData() {
      this.book = await findOne(this.bid);
      //如果 book为空，需要跳转daolist页
      Object.keys(this.book).length > 0 ? void 0 : this.$router.push("/list");
    },
    async update() {
      await updateBook(this.bid, this.book);
      this.$router.push("/list");
    }
  },
  computed: {
    bid() {
      return this.$route.params.bid;
    }
  },
  components: {
    MHeader
  }
};
</script>

<style  scoped lang='scss'>
ul {
  margin: 50px 20px 0 20px;
  img {
    width: 100%;
    margin: 0 auto;
  }
  li {
    label {
      display: block;
      font-size: 25px;
    }
    input {
      margin: 10px 0;
      height: 25px;
      width: 100%;
    }
    button {
      display: block;
      width: 80px;
      height: 35px;
      background: #2aabd2;
      color: #fff;
      border: none;
      border-radius: 4px;
      outline: none;
    }
  }
}
.detail {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background: #fff;
}
</style>