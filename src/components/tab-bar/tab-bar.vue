<template>
  <div class="tab-bar">
    <template v-for="(item,index) in localData" :key="item.text">
      <div class="tab-bar-item" @click="switchTab(index,item)" :class="{active: currentIndex === index}">
        <img v-if="currentIndex !== index" :src="getImgUrl(item.image)" alt="">
        <img v-else :src="getImgUrl(item.imageActive)" alt="">
        <span>{{item.text}}</span>
      </div>
    </template>
  </div>
</template>

<script setup>
import localData from "@/assets/localData/localData"
import getImgUrl from "@/utils/load_asset"
import { ref } from "vue";
import { useRouter } from "vue-router";
const currentIndex = ref(0)
const router = useRouter()
function switchTab(index, item) {
  currentIndex.value = index
  router.push(item.path)
}
</script>

<style lang="less" scoped>
.tab-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 55px;
  display: flex;
  border-top: 1px solid #666;

  .tab-bar-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &.active {
      color: var(--primary-color);
    }

    img {
      height:35px;
    }

    .text {
      font-size: 12px;
      margin-top: 2px;
    }
  }
}
</style>
