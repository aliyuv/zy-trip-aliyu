<template>
  <div class="detail" ref="detaiRef">
    <!--  导航栏  -->
    <tabControl
        :titles="names"
        v-if="scrollBool"
        class="tab-control-fixed"
        @setCurrentIndex="tabClick"
        ref="tabControlRef"
    />
    <van-nav-bar
        title="谵语旅途"
        left-text="旅途"
        left-arrow
        @click-left="onClickLeft"
    />
    <!-- 轮播图-->
    <div v-if="mainPart" v-memo="[mainPart]">
      <!--   滚动导航 -->

      <detail-swipe :house-id="route.params.id"
                    :swipe-data="mainPart.topModule.housePicture.housePics"
      ></detail-swipe>
      <detailInfos name="描述" :info-data="mainPart.topModule" :ref="getSectionRef"/>
      <detailFacility name="设施"
                      :facilityData="mainPart.dynamicModule.facilityModule.houseFacility"
                      :ref="getSectionRef"/>
      <detailLandlord name="房东" :landLord="mainPart.dynamicModule.landlordModule" :ref="getSectionRef"/>
      <detailComment name="评论" :commentData="mainPart.dynamicModule.commentModule" :ref="getSectionRef"/>
      <detailNotice name="须知" :orderRules="mainPart.dynamicModule.rulesModule.orderRules" :ref="getSectionRef"/>
      <detailMap name="周边" :position="mainPart.dynamicModule.positionModule" :ref="getSectionRef"/>
      <detailIntro :priceIntro="mainPart.introductionModule"/>
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
import {computed, onMounted, ref, watch} from "vue";
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

//detail 元素 ref
const detaiRef = ref()
//判断滚动到一定距离显示tab control
const {scrollTop} = useScrollTop(detaiRef)
const scrollBool = computed(() => {
  return scrollTop.value > 260
})

//定义个容纳 对应组件根元素的容器
const sectionEl = ref({})

// 获取组件根元素根容器里面的Key 就是组件上的name 属性
const names = computed(() => {
  return Object.keys(sectionEl.value)
})

//获取每个组件
const getSectionRef = (value) => {
  if (!value) return
  //取出name属性
  const name = value.$el.getAttribute("name")
  //name 作为key
  sectionEl.value[name] = value.$el
}
let isClick = false
let currentDistance = -1
const tabClick = (index) => {

  // 遍历出 sectionEl对象里面的每一个 key
  const key = Object.keys(sectionEl.value)[index]
  //通过key 取到每一个元素
  const el = sectionEl.value[key]
  // 定义每一个元素的 距离 顶部 的 top 距离是多少
  let distance = el.offsetTop
  //如果 index 不等于 0 就是第一个元素不设置, 其他元素都需要 减去 44 (44代表的就是tab control 的高度)
  if (index !== 0) {
    distance = distance - 44
  } else {
    distance = distance - 42
  }
  isClick = true
  currentDistance = distance
  //设置 当前页面的根元素的 scrollTop
  detaiRef.value.scrollTo({
    top: distance,
    behavior: "smooth"
  })
}

const tabControlRef = ref()

watch(scrollTop, (newValue) => {
  if (newValue === currentDistance) {
    isClick = false
  }

  if (isClick) return
  const elements = Object.values(sectionEl.value)
  const values = elements.map(el => el.offsetTop)
  let index = values.length - 1
  for (let i = 0; i < values.length; i++) {
    if (values[i] > newValue + 44) {
      index = i - 1
      break
    }
  }
  tabControlRef.value?.setCurrentIndex(index)
})
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