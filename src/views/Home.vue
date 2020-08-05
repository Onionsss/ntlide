<template>
  <div class="home">
    <div class="home_img">
      <img src="../assets/home.jpg"/>
    </div>
    <div class="desc">
      <p class="title">用技术创造价值<br>Hi Leader</p>
      <p class="content">南通里德软件科技有限公司成立于2018年。在公司在成立伊始就致力于为<br>客户提供高品质的软件工程服务。尤其是在移动端及互联网电子商业软件<br>方面有着完全的解决方案，并在数据视觉展现、App、小程序技术的<br>探索和运用上有超过5年的经验。</p>
      <div>
        <el-button type="goon">了解更多</el-button>
      </div>
    </div>
    <div class="home_member">
      <p class="member_title">A Place That Helps<br>
        Growth Of Your Work</p>
      <p class="member_content">Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Donec Sodales Sagittis Magna. Sed<br>
        Consequat, Leo Eget Bibendum Sodales, Augue Velit Cursus Nunc, Quis Gravida Magna Mi A Libero. Lorem<br>
        ipsum dolor sit amet, consectetur adipiscing.</p>
      <el-button class="btn_aboutus" type="goon">关于我们</el-button>
    </div>
  </div>
</template>
<script>

</script>
<style lang="less">
  .home{
    width: 100%;
    height: 100%;

    .el-button--goon {
      margin-top: 30px;
      color: #FFF;
      background-color: #3b4fe4;
      border-color: #3b4fe4;
    }
    .home_img{
      width: 100%;
      img{
        width: 100%;
        border-radius: 0 0 120px 0;
      }
    }
    .desc{
      color: white;
      position: absolute;
      top: 200px;
      left: 100px;

      .title{
        line-height: 70px;
        font-weight: 800;
        font-family: Arial;
        font-size: 50px;
      }
      .content{
        margin-top: 30px;
        font-size: 18px;
        line-height: 30px;
        font-weight: 200;
      }


    }
    .home_member{
      margin-top: 100px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .member_title{
        color: black;
        line-height: 70px;
        font-weight: 800;
        font-family: Arial;
        font-size: 50px;
        width: 100%;
        text-align: center;
      }
      .member_content{
        margin-top: 20px;
        font-size: 18px;
        line-height: 26px;
        color: #6e7180;
        font-weight: 200;
        width: 100%;
        text-align: center;
      }
      .btn_aboutus{
      }
    }
  }
</style>
