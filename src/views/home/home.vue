<template>
  <div class="home">
    <HomeNavbar></HomeNavbar>
    <home-serach-box></home-serach-box>
    <div class="search-bar" v-if="isShowSearchDateBox">
      <searchBar :startDate="startDateStr" :endDate="endDateStr"></searchBar>
    </div>
  </div>
</template>

<script setup>
import HomeNavbar from "./cpn/home-navbar.vue"
import HomeSerachBox from "@/views/home/cpn/home-navbar-serach-box.vue"
import {computed} from "vue";
import useScrollTop from "@/hooks/useScroll.js";
import searchBar from "@/components/serach-bar/search-bar.vue"
import useMainStore from "@/store/modules/main/main.js";
import {storeToRefs} from "pinia";
import {formatMonthDay} from "@/utils/formatDate.js";

const {scrollTop} = useScrollTop()
const isShowSearchDateBox = computed(() => {
  return scrollTop.value >= 360
})

const mainStore = useMainStore()
const {startDate, endDate} = storeToRefs(mainStore)
const startDateStr = computed(() => formatMonthDay(startDate.value, "MM.DD"))
const endDateStr = computed(() => formatMonthDay(endDate.value, "MM.DD"))
</script>

<style lang="less" scoped>
.home{
  height: 100vh;
  overflow-y: auto;
  padding-bottom: 60px;
}
.search-bar {
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
  height: 45px;
  padding: 16px 16px 10px;
  background-color: #fff;
}
</style>
