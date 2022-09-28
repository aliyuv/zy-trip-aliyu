<template>
  <van-tabbar v-model="currentIndex">
    <template v-for="(item,index) in localData" key="index">
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
import localData from "@/assets/localData/localData"
import getImgUrl from "@/utils/load_asset"
import { ref } from "vue";
const currentIndex = ref(0)
</script>

<style lang="less" scoped>
  :deep(.van-tabbar-item--active){
      color: var(--primary-color);
  }
</style>
