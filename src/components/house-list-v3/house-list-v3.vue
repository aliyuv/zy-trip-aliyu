<template>
  <section class="recommend-house-list">
    <section class="container">
      <div class="content">
        <template v-for="(item,index) in houseListData" :key="index">
          <div v-if="item.discoveryContentType === 3" class="house-list-v3">
            <div class="background-img">
              <img :src="item.data.image.url" alt=""/>
            </div>
            <div class="desc-info">
              <div class="location-address">
                <van-icon name="location"/>
                <span>{{ item.data.location }}</span>
              </div>
              <div class="house-name">{{ item.data.houseName }}</div>
              <div class="in--house_otherInfo">
                <span>{{ item.data.summaryText }}</span>
              </div>
            </div>
            <div class="price">
              <div class="final">¥{{ item.data.finalPrice }}</div>
              <div class="product">¥{{ item.data.productPrice }}</div>
              <div class="tip">{{ item.data.priceTipBadge.text }}</div>
            </div>
          </div>
        </template>
      </div>
    </section>
    <button @click="loadingBtn">加载更多内容~</button>
  </section>
</template>

<script setup>
defineProps({
  houseListData: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped lang="less">
.recommend-house-list {
  width: 50%;
  padding: 2px;

  img {
    width: 100%;
  }

  .container {
    display: flex;
    flex-direction: column;

    .content {
      .house-list-v3 {
        display: flex;
        flex-direction: column;
        padding: 4px 4px;

        .location-address {
          font-size: 12px;
        }

        .background-img {
          img {
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
          }
        }

        .desc-info {
          font-size: 14px;

          div {
            margin-top: 4px;
          }

          .house-name {
            font-size: 15px;
          }

          .in--house_otherInfo {
            font-size: 13px;
            color: #666666;
          }
        }

        .price {
          display: flex;
          margin-top: 6px;
          align-items: center;
          text-align: center;

          div {
            margin-right: 8px;
          }

          .final {
            color: #ff9854;
            font-size: 14px;
          }

          .product {
            color: #999999;
            text-decoration: line-through;
            font-size: 12px;
          }

          .tip {
            height: 16px;
            line-height: 16px;
            background-color: #FF8383;
            color: white;
            font-size: 12px;
            border-radius: 50px;
            padding: 0 6px;
          }
        }
      }
    }
  }
}
</style>