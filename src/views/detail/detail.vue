<template>
  <div class="detail">
    <!--  导航栏  -->
    <van-nav-bar
        title="谵语旅途"
        left-text="旅途"
        left-arrow
        @click-left="onClickLeft"
    />
    <!-- 轮播图-->
    <div v-if="mainPart">
      <detail-swipe :house-id="route.params.id"
                    :swipe-data="mainPart.topModule.housePicture.housePics"
      ></detail-swipe>
      <detailInfos :info-data="mainPart.topModule"></detailInfos>
      <detailFacility :facilityData="mainPart.dynamicModule.facilityModule.houseFacility"></detailFacility>
    </div>
  </div>
</template>

<script setup>
//获取数据
import useDetailStore from "@/store/modules/detail/detail.js"
import {storeToRefs} from "pinia"
import {useRoute, useRouter} from "vue-router";
import detailSwipe from "@/views/detail/cpns/detail_01-swipe.vue"
import detailInfos from "@/views/detail/cpns/detail_02-infos.vue"
import detailFacility from "@/views/detail/cpns/detail_03-facility.vue"
import {computed} from "vue";

const route = useRoute()
const router = useRouter()
//获取数据
const detailStore = useDetailStore()
detailStore.fetchDetailAllData(route.params.id)
const {detailAllData} = storeToRefs(detailStore)
const mainPart = computed(() => detailAllData.value.mainPart)
//返回上一级
const onClickLeft = () => {
  router.back()
}
</script>

<style scoped lang="less">
</style>