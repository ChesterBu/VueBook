<template>
  <div class="footer">
    <router-link to="/home">
    <i class="iconfont icon-shouye"></i><span>首页</span>
    </router-link>
    <router-link to="/list">
    <i class="iconfont icon-liebiao"></i><span>列表</span>
    </router-link>
    <router-link to="/collect">
    <i class="iconfont icon-icon-"></i><span>购物车</span> 
    </router-link>
    <router-link to="/add">
    <i class="iconfont icon-add"></i><span>添加</span>
    </router-link>
  </div>
</template>


<style scoped lang='scss'>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  display: flex;
  border: 1px solid #ccc;
  a {
    display: flex;
    flex-direction: column;
    color: yellowgreen;
    flex: 1;
    align-items: center;
    justify-content: center;
  }
  a.router-link-active {
    color: red;
  }
}
</style>