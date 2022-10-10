<template>
  <div class="notice">
    <detailSection title="预定须知">
      <div class="inner">
        <div class="content">
          <template v-for="(item,index) in orderRules" :key="index">
            <span class="title">{{ item.title }}</span>
            <span class="introduction">{{ item.introduction }}</span>
          </template>
        </div>
        <div class="desc">查看说明</div>
      </div>
    </detailSection>
  </div>
</template>

<script setup>
import detailSection from "@/components/detail-section/detail-section.vue"

defineProps({
  orderRules: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped lang="less">
.notice {
  .inner {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #666666;

    .content {
      display: grid;
      grid-template-columns: 1fr 3fr;
      grid-row-gap: 24px;
    }

    .desc {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-bottom: 80px;
    }
  }
}
</style>