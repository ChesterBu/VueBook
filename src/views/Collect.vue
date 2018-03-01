<template>
    <div>
        <MHeader>购物车</MHeader>
        <div class="content">
          <ul>
          <li v-for="(l,k) in cartList" :key="k">
            <img :src="l.bookCover" alt="">
              <h4>{{l.bookName}}</h4>
              <button class="btn btn-primary">-</button>
              <span>{{l.bookCount}}</span>
              <button class="btn  btn-primary">+</button>
              <button class="btn btn-primary">删除</button>
              <p style="color:red">小计:¥{{l.bookPrice*l.bookCount}}</p>
          </li>
        </ul>
        <div class="sum">共{{count}}本</div>
        </div>
        
    </div>
</template>

<script>
import MHeader from "../components/MHeader";
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["count"]),
    ...mapState(["cartList"])
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
.content h4 {
  font-size: 20px;
  line-height: 35px;
}
.sum{
  height: 30px;
  border: 1px solid silver;
  text-align: end;
  color: skyblue;
  line-height: 30px;
}

.btn-primary {
  color: #fff;
  background-color: #337ab7;
  border-color: #2e6da4;
}

.btn {
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  user-select: none;
  user-select: none;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
}
</style>