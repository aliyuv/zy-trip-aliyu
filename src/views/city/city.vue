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
          <!-- 设置 :name 这样子后 tabsActive 的 值就会变为 该对象 切换的数据中 对应的key-->
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </section>
    <section class="content">
      <template v-for="(value,key,index) in allCities">
        <cityGroupItem :groupData="value" v-show="tabsActive === key"></cityGroupItem>
      </template>
    </section>

  </div>
</template>

<script setup>
import cityGroupItem from "@/views/city/cpns/city-group-item.vue"
import {computed, ref} from "vue";
import {useRouter} from "vue-router";

const searchValue = ref("")

const router = useRouter()

const cancelClick = () => {
  router.back()
}

const tabsActive = ref()


// import {getCityDataAll} from "@/service/index.js";
import useCityStore from "@/store/modules/city.js";
import {storeToRefs} from "pinia";


// const allCities = ref({})
// getCityDataAll().then(res => {
//   allCities.value = res.data
// })

const cityStore = useCityStore()
cityStore.fetchAllCityData()
const {allCities} = storeToRefs(cityStore)

//通过tabsActive 来选 切换tab 对应的内容
const activeGroup = computed(() => allCities.value[tabsActive.value])


</script>

<style scoped lang="less">
.city {
  .top {
    position: relative;
    z-index: 9;
  }

  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}

</style>