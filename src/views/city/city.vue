<template>
  <div class="city">
    <section class="top">
      <van-search
          v-model="searchValue"
          show-action
          placeholder="城市/区域/位置"
          shape="round"
          background="#FFFFFF"
          @cancel="cancelClick"
      >
      </van-search>
      <van-tabs v-model:active="tabsActive" color="#FF9854" line-height="2">
        <template v-for="(value,key,index) in allCities">
          <van-tab :title="value.title"></van-tab>
        </template>
      </van-tabs>
    </section>
    <section class="content">
      <template v-for="item in 100">
        <section class="item">{{ item }}</section>
      </template>
    </section>
  </div>
</template>

<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";

const searchValue = ref("")

const router = useRouter()

const cancelClick = () => {
  router.back()
}

const tabsActive = ref()


// import {getCityDataAll} from "@/service/index.js";
import useCityStore from "@/store/moudles/city.js";
import {storeToRefs} from "pinia";


// const allCities = ref({})
// getCityDataAll().then(res => {
//   allCities.value = res.data
// })

const cityStore = useCityStore()
cityStore.fetchAllCityData()
const {allCities} = storeToRefs(cityStore)
</script>

<style scoped lang="less">
.city {
  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}
</style>