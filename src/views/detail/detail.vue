<template>
  <div class="detail">
  </div>
</template>

<script setup>
//获取数据
import useDetailStore from "@/store/modules/detail/detail.js"
import {storeToRefs} from "pinia"
import {useRoute} from "vue-router";

const route = useRoute()
const detailStore = useDetailStore()
detailStore.fetchDetailAllData(route.params.id)
const {detailAllData} = storeToRefs(detailStore)
</script>

<style scoped lang="less">

</style>