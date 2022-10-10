<template>
  <div class="landlord">
    <detail-section title="房东介绍" more-text="查看房东主页">
      <div class="intro">
        <div class="top">
          <img :src="landLord.topScroll" alt="">
        </div>
        <div class="content">
          <div class="head">
            <img :src="landLord.hotelLogo" alt="">
            <div class="desc">
              <div class="name">{{ landLord.hotelName }}</div>
              <div class="center">
                <template v-for="(item,index) in landLord.hotelTags" :key="index">
                  <div class="text">{{ item.tagText.text }}</div>
                  <span v-if="index !== landLord.hotelTags.length - 1"> | </span>
                </template>
              </div>
            </div>
          </div>
          <div class="contact">
            <div>联系房东</div>
          </div>
        </div>
        <div class="footer">
          <template v-for="(item,index) in landLord.hotelSummary" :key="index">
            <div class="item">
              <div class="hao">{{ item.title }}</div>
              <div class="num">{{ item.introduction }}</div>
              <div class="lang-hua">{{ item.tip }}</div>
            </div>
          </template>
        </div>
      </div>
    </detail-section>
  </div>
</template>

<script setup>
import detailSection from "@/components/detail-section/detail-section.vue"

defineProps({
  landLord: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style scoped lang="less">
.landlord {
  .intro {
    display: flex;
    flex-direction: column;

    .top {
      img {
        width: 100%;
      }
    }

    .content {
      display: flex;
      justify-content: space-between;

      .head {
        display: flex;
        justify-content: center;
        align-items: center;
        line-height: 1.3em;

        img {
          width: 54px;
          height: 54px;
        }

      }

      .contact {
        display: flex;
        justify-content: center;
        align-items: center;

        div {
          height: 24px;
          line-height: 24px;
          border-radius: 5px;
          padding: 0 12px;
          font-size: 12px;
          color: #fff;
          background-image: linear-gradient(90deg, #fa8c1d, #fcaf3f);
        }
      }

      .desc {
        .name {
          margin-top: 8px;
          font-size: 16px;
          font-weight: 600;
          padding: 0 3px;
        }

        .center {
          display: flex;

          span {
            color: rgb(155, 155, 155);
          }

          .text {
            padding: 0 3px;
            font-size: 12px;
            color: rgb(155, 155, 155);
          }
        }
      }
    }

    .footer {
      margin: 50px 10px 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .item {
        font-size: 12px;

        .hao {
          color: #999;
        }

        .num {
          margin: 5px 0;
          font-size: 18px;
          font-weight: 700;
          color: #333;
        }

        .lang-hua {
          color: #666;
        }
      }
    }
  }


}
</style>