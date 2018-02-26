<template>
  <div id="app">
    <router-view></router-view>
    <Tab></Tab>
  </div>
</template>
<script>
import Tab from './components/Tab'
export default {
  name:'app',
  components:{
    Tab
  }
}
</script>
  
<style>
* {
  margin: 0;
  padding: 0;
}
ul,
li {
  list-style: none;
}
a {
  text-decoration: none;
}
input,
button {
  -webkit-appearance: none;
}
@import url('//at.alicdn.com/t/font_571046_h8fmf6cvfclq5mi.css');
.content{
  position: fixed;
  width: 100%;
  top: 40px;
  bottom: 50px;
  overflow: auto;
}
</style>
