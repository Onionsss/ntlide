<template>
  <div class="main">
    <my-header class="main-header"></my-header>
    <router-view class="root"/>
    <div class="footer">123123123123</div>
  </div>
</template>

<script>
// @ is an alias to /src
import MyHeader from '../components/Header'
export default {
  name: 'Home',
  components: {
    MyHeader
  }
}
</script>
<style lang="less" scoped>
  .main{
    position: relative;
    width: 100%;
    height: 100%;
    .main-header{
      z-index: 1;
    }
    .root{
      margin-top: -130px;
      z-index: 0;
    }
    .footer{
      .clearfix
    }
  }
</style>
