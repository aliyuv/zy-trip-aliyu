<template>
  <section class="city-item">
    <template v-for="(group,index) in groupData.cities" :key="index">
      <section class="content-group_item">
        <van-index-bar :sticky="false">
          <van-index-anchor :index="group.group"/>
          <template v-for="(city,index) in group.cities" :key="index">
            <van-cell :title="city.cityName"/>
          </template>
        </van-index-bar>
      </section>
    </template>
  </section>
</template>

<script setup>
const props = defineProps({
  groupData: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style scoped lang="less">
</style>