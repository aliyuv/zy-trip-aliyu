<template>
  <div class="detail" ref="detaiRef">
    <!--  导航栏  -->
    <tabControl
        :titles="['abc','cvs','csa','asa','sas','saq']"
        v-if="scrollBool"
        class="tab-control-fixed"
        @click="tabClick"
    />
    <van-nav-bar
        title="谵语旅途"
        left-text="旅途"
        left-arrow
        @click-left="onClickLeft"
    />
    <!-- 轮播图-->
    <div v-if="mainPart">
      <!--   滚动导航 -->

      <detail-swipe :house-id="route.params.id"
                    :swipe-data="mainPart.topModule.housePicture.housePics"
      ></detail-swipe>
      <detailInfos :info-data="mainPart.topModule"></detailInfos>
      <detailFacility :facilityData="mainPart.dynamicModule.facilityModule.houseFacility"></detailFacility>
      <detailLandlord :landLord="mainPart.dynamicModule.landlordModule"></detailLandlord>
      <detailComment :commentData="mainPart.dynamicModule.commentModule"></detailComment>
      <detailNotice :orderRules="mainPart.dynamicModule.rulesModule.orderRules"></detailNotice>
      <detailMap :position="mainPart.dynamicModule.positionModule"></detailMap>
      <detailIntro :priceIntro="mainPart.introductionModule"></detailIntro>
    </div>
    <div class="footer">
      <img src="@/assets/img/detail/icon_ensure.png" alt="">
      <div class="text">谵语旅途, 永无止境!</div>
    </div>
  </div>
</template>

<script setup>
//获取数据
import useDetailStore from "@/store/modules/detail/detail.js"
import {storeToRefs} from "pinia"
import {useRoute, useRouter} from "vue-router";
import tabControl from "@/components/tab-control/tab-control.vue"
import detailSwipe from "@/views/detail/cpns/detail_01-swipe.vue"
import detailInfos from "@/views/detail/cpns/detail_02-infos.vue"
import detailFacility from "@/views/detail/cpns/detail_03-facility.vue"
import detailLandlord from "@/views/detail/cpns/detail_04-landlord.vue"
import detailComment from "@/views/detail/cpns/detail_05-comment.vue"
import detailNotice from "@/views/detail/cpns/detail_06-notice.vue"
import detailMap from "@/views/detail/cpns/detail_07-map.vue"
import detailIntro from "@/views/detail/cpns/detail_08-intro.vue"
import {computed, onMounted, ref} from "vue";
import useScrollTop from "@/hooks/useScroll.js";

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

const detaiRef = ref(null)
const {scrollTop} = useScrollTop(detaiRef)
const scrollBool = computed(() => {
  console.log(scrollTop.value);
  return scrollTop.value > 296
})

const tabClick = (index) => {
  detaiRef.value.scrollTo({
    top: (index + 1) * 200,
    behavior: "smooth"
  })
}
</script>

<style scoped lang="less">
.detail {
  height: 100vh;
  overflow-y: auto;
}

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120px;

  img {
    width: 123px;
  }

  .text {
    margin-top: 12px;
    font-size: 12px;
    color: #7688a7;
  }
}

.tabs {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
}

.tab-control-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
}
</style>