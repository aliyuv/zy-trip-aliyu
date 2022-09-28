<template>
  <div class="home">
    <header class="title">
      <h1>谵语旅途</h1>
    </header>
    <section class="banner">
      <img src="../../assets/img/home/banner.webp" alt="">
    </section>
    <section class="location">
      <section class="city">
        <span>兰州</span>
      </section>
      <section class="postion">
        <span>我的位置</span>
        <img src="../../assets/img/home/icon_location.png" alt="">
      </section>
    </section>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.home {
  .title {
    padding: 8px;
    display: flex;
    justify-content: center;
    font-size: 14px;
    font-weight: 600;
    align-items: center;
    // color: var(--primary-color);
    color: #EDAF90;
    border-bottom: 1px solid #ececec;
  }
  .banner{
    img{
      width: 100%;
    }
  }
  .location{
    display: flex;
    padding: 0 20px;
    height: 40px;
    font-size: 14px;
    .city{
      flex: 1;
      line-height: 40px;
    }
    .postion{
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        margin-left: 5px;
        height: 18px;
      }
    }

  }
}
</style>
