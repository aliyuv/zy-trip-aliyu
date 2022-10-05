<template>
  <section class="recommend-house-list">
    <section class="container">
      <div class="content">
        <div class="house-list-v3">
          <div class="background-img">
            <img :src="houseListData.data.image.url" alt=""/>
          </div>
          <div class="desc-info">
            <div class="location-address">
              <van-icon name="location"/>
              <span>{{ houseListData.data.location }}</span>
            </div>
            <div class="house-name">{{ houseListData.data.houseName }}</div>
            <div class="in--house_otherInfo">
              <span>{{ houseListData.data.summaryText }}</span>
            </div>
          </div>
          <div class="price">
            <div class="final">¥{{ houseListData.data.finalPrice }}</div>
            <div class="product">¥{{ houseListData.data.productPrice }}</div>
            <div class="tip" v-if="houseListData.data.priceTipBadge?.text">
              {{
                houseListData.data.priceTipBadge.text
              }}
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup>
defineProps({
  houseListData: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style scoped lang="less">
.recommend-house-list {
  width: 50%;

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