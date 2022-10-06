<template>
  <div class="search">
    <div class="select-time">
      <div class="item start">
        <div class="name">住</div>
        <div class="date">10.06</div>
      </div>
      <div class="item end">
        <div class="name">离</div>
        <div class="date">10.07</div>
      </div>
    </div>
    <div class="content">
      <div class="keyworld">关键字/位置/民宿</div>
    </div>
    <div class="right">
      <i class="icon-search"></i>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="less" scoped>
.search {
  display: flex;
  flex-direction: row;
  align-items: center;

  height: 45px;
  line-height: 45px;
  padding: 0 10px;
  font-size: 14px;
  color: #999999;
  background: #f2f4f6;
  border-radius: 6px;

  .select-time {
    display: flex;
    flex-direction: column;

    .item {
      display: flex;
      flex-direction: row;
      align-items: center;
      line-height: normal;

      .name {
        font-size: 10px;
      }

      .date {
        position: relative;
        color: #333333;
        margin: 0 10px 0 3px;
        font-weight: 500;
      }
    }

    .end .date::after {
      content: "";
      width: 0;
      height: 0;
      border: 4px solid #666666;
      border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #666666;
      -webkit-border-radius: 3px;
      border-radius: 3px;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
      position: absolute;
      bottom: 0;
      right: -12px;
    }


  }

  .content {
    position: relative;
    flex: 1;
    padding: 0 6px;
    text-align: left;
    border-left: 1px solid #ffffff;

    .keyword {
      max-width: 155px;
      font-size: 12px;
    }

    .icon-search {
      position: absolute;
      top: 30%;
      right: 0;
      display: inline-block;
      background-image: url("@/assets/img/sprite.png");
      background-position: -92px -58.5px;
      width: 14.5px;
      height: 15px;
      background-size: 125px 110px;
    }
  }

  .right {
    display: flex;
    align-items: center;

  }

  .icon-search {
    width: 24px;
    height: 24px;
    display: inline-block;

    background-image: url(@/assets/img/home/home-sprite.png);
    background-position: -29px -151px;
    background-size: 207px 192px;
  }

}
</style>
