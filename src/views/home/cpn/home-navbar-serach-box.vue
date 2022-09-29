<template>
  <section class="banner">
    <img src="@/assets/img/home/banner.webp" alt="">
  </section>
  <section class="location">
    <section class="city" @click="changeSelectCity">
      <span>兰州</span>
    </section>
    <section class="postion">
      <span>我的位置</span>
      <img src="@/assets/img/home/icon_location.png" alt="">
    </section>
  </section>
</template>

<script setup>
import {useRouter} from "vue-router";

const router = useRouter()
// 选择城市
const changeSelectCity = () => {
  router.push("/city")
}
</script>

<style lang="less" scoped>
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

</style>