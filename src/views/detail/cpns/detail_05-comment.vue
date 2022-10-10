<template>
  <div class="comment">
    <detailSection title="热门评论" :more-text="`查看全部${commentData.totalCount}条评论`">
      <div class="inner">
        <div class="top flex">
          <div class="left flex">
            <div class="source ">
              <span class="number">{{ commentData.overall }}</span>
              <span class="line"></span>
            </div>
            <div class="in_left-desc">
              <div class="info">{{ commentData.scoreTitle }}</div>
              <div class="comments">{{ commentData.totalCount }} 条评论</div>
              <van-rate v-model="commentData.overall" readonly allow-half color="#FCA838" size="10"/>
            </div>
          </div>
          <div class="desc">
            <template v-for="(item,index) in commentData.subScores" :key="index">
              <div class="item">{{ item }}</div>
            </template>
          </div>
        </div>
        <div class="content">
          <template v-for="(item,index) in commentData.commentTagVo" :key="index">
            <div class="list">{{ item.text }}</div>
          </template>
        </div>
        <div class="footer">
          <div class="user-info">
            <img :src="commentData.comment.userAvatars" alt="">
            <div class="info">
              <span class="name">{{ commentData.comment.userName }}</span>
              <span class="date">{{ commentData.comment.checkInDate }}</span>
            </div>
          </div>
          <div class="bottom">
            <p>{{ commentData.comment.commentDetail }}</p>
          </div>
        </div>
      </div>
    </detailSection>
  </div>
</template>

<script setup>
import detailSection from "@/components/detail-section/detail-section.vue"

defineProps({
  commentData: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style scoped lang="less">
.inner {
  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .top {
    .left {
      padding: 8px 12px;

      .source {
        padding-right: 10px;
        position: relative;

        .number {
          font-size: 48px;
          font-weight: 800;
          color: #333333;
          position: relative;
          z-index: 9;
        }

        .line {
          width: 66px;
          height: 6px;
          background: linear-gradient(90deg, #fa8c1d, #fcaf3f);
          border-radius: 3px;
          position: absolute;
          left: 0;
          bottom: 4px;
          z-index: 5;
        }
      }

      .in_left-desc {
        line-height: 1.3;

        .info {
          font-size: 12px;
          color: #333;
        }

        .comments {
          font-size: 13px;
          color: #999999;
        }
      }
    }

    .desc {
      font-size: 13px;
      color: #333333;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 6px;
      grid-row-gap: 6px;
    }
  }

  .content {
    display: flex;
    margin: 10px 0;
    flex-wrap: wrap;

    .list {
      padding: 3px 5px;
      margin-right: 8px;
      margin-top: 5px;
      border-radius: 8px;
      font-size: 12px;
      background-color: #F5F5F5;
    }
  }

  .footer {
    border-radius: 6px;
    background-color: #F7F9FC;
    padding: 2px 10px;
    line-height: 1.3;

    .user-info {
      padding: 4px;
      display: flex;

      img {
        width: 34px;
        height: 34px;
        border-radius: 50%;
      }

      .info {
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .name {
          font-size: 15px;
          color: #0A0A0A;
        }

        .date {
          font-size: 13px;
          color: #999999;
        }
      }
    }

    .bottom {
      font-size: 12px;
      color: #333;
      margin-top: 16px;
    }
  }
}
</style>