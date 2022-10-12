<template>
  <div class="tab-control">
    <template v-for="(item,index) in titles" :key="index">
      <div class="item" :class="{active: currentIndex === index}" @click="itemClick(index)">
        <span class="line">{{ item }}</span>
      </div>
    </template>
  </div>
</template>

<script setup>
//定义 props
import {ref} from "vue";

defineProps({
  titles: {
    type: Array,
    default: () => []
  }
})

//定义当前currentIndex
const currentIndex = ref(0)
const emit = defineEmits(['setCurrentIndex'])
const itemClick = (index) => {
  currentIndex.value = index
  emit('setCurrentIndex', index)
}
const setCurrentIndex = (index) => {
  currentIndex.value = index
}
defineExpose({
  currentIndex,
  setCurrentIndex
})
</script>

<style scoped lang="less">
.tab-control {
  display: flex;
  height: 45px;
  line-height: 45px;
  text-align: center;
  background-color: #fff;

  .item {
    flex: 1;
  }

  .item.active {
    color: #fa8c1d;
    font-weight: 700;

    &.active span {
      border-bottom: 3px solid #fa8c1d;
      padding: 8px;
    }
  }
}
</style>