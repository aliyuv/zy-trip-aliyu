<template>
  <section class="house-item">
    <section class="item-inner">
      <div class="cover">
        <img :src="houseListData.data.image.url" alt="">
      </div>
      <div class="info">
        <div class="summary">
          {{ houseListData.data.summaryText }}
        </div>
        <div class="name">
          {{ houseListData.data.houseName }}
        </div>
        <div class="price">
          <van-rate readonly allow-half color="#FAF8F7" :size="15" :model-value="value"/>
          <span>¥ {{ houseListData.data.finalPrice }}</span>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup>
import {computed, ref} from "vue";

const props = defineProps({
  houseListData: {
    type: Object,
    default: () => ({})
  }
})
const value = computed(() => {
  return Number(props.houseListData.data.commentScore)
})
</script>

<style scoped lang="less">
.house-item {
  width: 50%;

  .item-inner {
    position: relative;
    margin: 5px;
    background: #fff;
    border-radius: 6px;
    //border: 2px solid #000;
    overflow: hidden;

    .cover {
      img {
        width: 100%;
      }
    }

    .info {
      position: absolute;
      bottom: 0;
      padding: 8px 10px;
      color: white;
    }

    .summary {
      font-size: 12px;
    }

    .name {
      margin: 5px 0;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .price {
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
    }
  }
}
</style>