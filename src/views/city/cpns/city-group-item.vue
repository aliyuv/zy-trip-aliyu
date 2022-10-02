<template>
  <section class="city-item">
    <van-index-bar :sticky="false" :index-list="index_bar_list" highlight-color="red">
      <section class="hot-city">
        <van-index-anchor index="热门"></van-index-anchor>
         <template v-for="(item,index) in groupData.hotCities" :key="index">
           <van-tag round type="primary" color="#fff4ec" text-color="#000" size="large">{{ item.cityName }}</van-tag>
         </template>
      </section>

      <template v-for="(group,index) in groupData.cities" :key="index">
        <section class="content-group_item">
          <van-index-anchor :index="group.group"/>
          <template v-for="(city,index) in group.cities" :key="index">
            <van-cell :title="city.cityName"/>
          </template>
        </section>
      </template>
    </van-index-bar>
  </section>
</template>

<script setup>
import {computed} from "vue";

const props = defineProps({
  groupData: {
    type: Object,
    default: () => ({})
  }
})

//字母列表
const index_bar_list = computed(() => {
  const list = props.groupData.cities.map(item => item.group)
  list.unshift("#")
  return list
})
</script>

<style scoped lang="less">
:deep(.van-tag--large){
  --van-tag-large-padding: 5px 20px;
  margin: 6px 10px;
}
</style>