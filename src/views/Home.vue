<template>
  <div class="home">
    <div class="home_img">
      <img src="../assets/home.jpg">
    </div>
    <div class="desc">
      <p class="title">A Better Place <br>To Work</p>
    </div>
    <div class="home_bottom">
      111
    </div>
  </div>
</template>
<script>

</script>
<style lang="less">
  .home{
    width: 100%;
    height: 100%;
    .home_img{
      width: 100%;
      height: 600px;
      img{
        width: 100%;
        height: 600px;
        border-radius: 0 0 120px 0;
      }
    }
    .desc{
      color: white;
      position: absolute;
      top: 200px;
      left: 100px;

      .title{
        line-height: 80px;
        font-weight: bold;
        font-family: Arial;
        font-size: 50px;
      }
    }

    .home_bottom{
      color: black;
    }
  }
</style>
