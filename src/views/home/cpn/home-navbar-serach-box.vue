<template>
  <section class="banner">
    <img src="@/assets/img/home/banner.webp" alt="">
  </section>
  <section class="location">
    <section class="city" @click="changeSelectCity">
      <span>{{ activeCityName.name }}</span>
    </section>
    <section class="postion" @click="geographicPosition">
      <span>我的位置</span>
      <img src="@/assets/img/home/icon_location.png" alt="">
    </section>
  </section>
</template>

<script setup>
import {useRouter} from "vue-router";
import useCityStore from "@/store/moudles/city.js";
import {storeToRefs} from "pinia";
import {ref} from "vue";

const router = useRouter()
// 选择城市
const changeSelectCity = () => {
  router.push("/city")
}

//获取选中的热门城市
const cityStore = useCityStore()
const {activeCityName} = storeToRefs(cityStore)
//获取当前地理位置
const geographicPosition = () => {
  const objCity = new BMap.LocalCity();
  objCity.get(function (result) {
    activeCityName.value.name = result.name
  })
}

</script>

<style lang="less" scoped>
.banner {
  img {
    width: 100%;
  }
}

.location {
  display: flex;
  padding: 0 20px;
  height: 40px;
  font-size: 14px;

  .city {
    flex: 1;
    line-height: 40px;
  }

  .postion {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      margin-left: 5px;
      height: 18px;
    }
  }

}

</style>