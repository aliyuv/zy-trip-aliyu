<template>
  <van-tabbar v-model="currentIndex" route>
    <template v-for="(item,index) in tabbarData" key="index">
      <van-tabbar-item :to="item.path">
        <span>{{item.text}}</span>
        <template #icon>
          <img v-if="currentIndex!== index" :src="getImgUrl(item.image)" alt="">
          <img v-else :src="getImgUrl(item.imageActive)" alt="">
        </template>
      </van-tabbar-item>
    </template>
  </van-tabbar>

</template>

<script setup>
import tabbarData from "@/assets/localData/localData"
import getImgUrl from "@/utils/load_asset"
import {ref, watch} from "vue";
import {useRoute} from "vue-router";
// 监听路由改变时, 找到对应的索引, 设置currentIndex
const route = useRoute()
const currentIndex = ref(0)
watch(route, (newRoute) => {
  const index = tabbarData.findIndex(item => item.path === newRoute.path)
  if (index === -1) return
  currentIndex.value = index
})
</script>

<style lang="less" scoped>
  :deep(.van-tabbar-item--active){
      color: var(--primary-color);
  }
</style>
