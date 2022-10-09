<template>
  <div class="infos">
    <div class="container">
      <div class="title"> {{ infoData.houseName }}</div>
      <div class="house-tags">
        <template v-for="(item,index) in infoData.houseTags" :key="index">
          <div class="item" v-if="item.tagText">{{ item.tagText.text }}</div>
        </template>
      </div>
      <div class="comment-brief">
        <div class="left-content">
          <div class="overall item">{{ infoData.commentBrief.overall }}</div>
          <div class="scoreTitle item">{{ infoData.commentBrief.scoreTitle }}</div>
          <div class="brief item">{{ infoData.commentBrief.commentBrief }}</div>
        </div>
        <div class="right-total">
          <div class="text">
            {{ infoData.commentBrief.totalCount }}条评论
            <van-icon name="arrow"/>
          </div>
        </div>
      </div>
      <div class="address comment-brief">
        <div class="location">{{ infoData.nearByPosition.address }}</div>
        <div class="ambitus">
          地图·周边
          <van-icon name="arrow"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  infoData: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style scoped lang="less">
.infos {
  padding: 5px 10px;
  .container {
    display: flex;
    flex-direction: column;

    .title {
      font-weight: 700;
      font-size: 20px;
      color: #333;
      text-align: justify;
      line-height: 24px;
      overflow: hidden;
      margin-bottom: 6px;
    }

    .house-tags {
      display: flex;
      align-items: center;
      font-size: 12px;
      margin-top: 5px;

      .item {
        padding: 1px 3px;
        margin: 0 2px;
        color: rgb(255, 150, 69);
        background: rgba(255, 150, 69, 0.15);

        &:first-child {
          color: rgb(247, 210, 148);
          background: rgb(54, 52, 52);
        }

        &:last-child {
          color: rgb(23, 210, 188);
          background: rgba(23, 210, 188, 0.1);
        }
      }
    }

    .comment-brief {
      background: #F5F7FA;
      border-radius: 6px;
      padding: 4px 6px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 6px 0;
      height: 30px;
      .left-content {
        display: flex;
        align-items: center;
        justify-content: center;

        .item {
          margin: 0 3px 0 0;
        }

        .overall {
          font-size: 20px;
          font-weight: 600;
        }

        .scoreTitle {
          font-size: 13px;
          font-weight: 500;
        }

        .brief {
          font-size: 12px;
          color: #333333;
        }
      }

      .right-total {
        color: #ff9854;
        font-size: 12px;
      }
    }

    .address {
      .location {
        font-size: 14px;
        font-weight: 700;
        color: #333;
      }

      .ambitus {
        color: #ff9854;
        font-size: 12px;
      }
    }
  }
}
</style>