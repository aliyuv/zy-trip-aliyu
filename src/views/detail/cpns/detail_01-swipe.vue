<template>
  <div class="detail-swipe">
    <van-swipe class="swipe-list" :autoplay="3000" indicator-color="white">
      <template v-for="(item,index) in swipeData" :key="index">
        <van-swipe-item>
          <img :src="item.url" alt="">
        </van-swipe-item>
      </template>
      <template #indicator="{ active, total }">
        <div class="indicator">
          <template v-for="(item,key) in swipeGroup" :key="key">
            <span
                class="item"
                :class="{ active: swipeData[active]?.enumPictureCategory == key}">
              <span class="text">
                {{ formatName(item[0].title) }}
              </span>
              <span class="count" v-if="swipeData[active]?.enumPictureCategory == key">
                {{ getCategoryIndex(swipeData[active]) }} / {{ item.length }}
              </span>
            </span>
          </template>
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<script setup>
const props = defineProps({
  houseId: {
    type: String,
    default: ""
  },
  swipeData: {
    type: Array,
    default: () => []
  }
})

//首先创建一个空对象,然后遍历swipeData数据, swipeData里面的数据结构 就是 通过遍历取到 enumPictureCategory的值作为key, 然后存入一个变量valueArray, 然后去判断当前这个valueArray是否有值,如果没有的话就设置为空数组, 然后将 遍历出的每条数据赋值给对应的key下. 然后push到 valueArray里
const swipeGroup = {} // "2" : []
for (const item of props.swipeData) {
  let valueArray = swipeGroup[item.enumPictureCategory]
  if (!valueArray) {
    valueArray = []
    swipeGroup[item.enumPictureCategory] = valueArray
  }

  valueArray.push(item)
}

const nameReg = /【(.*?)】/i
const formatName = (name) => {
  const res = nameReg.exec(name)
  return res[1]
}

const getCategoryIndex = (item) => {
  const valueArray = swipeGroup[item.enumPictureCategory]
  return valueArray.findIndex(i => i === item) + 1
}
</script>

<style scoped lang="less">
.detail-swipe {
  position: relative;

  .swipe-list {
    img {
      width: 100%;
    }
  }

  .indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    color: #ffffff;
    background: rgba(0, 0, 0, 0.8);

    .item {
      margin: 0 2px;

      &.active {
        padding: 0 3px;
        border-radius: 5px;
        background-color: #fff;
        color: #333;
      }
    }
  }
}
</style>