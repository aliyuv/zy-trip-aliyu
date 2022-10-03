<template>
  <section class="search-box">
    <section class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </section>
    <section class="location">
      <section class="city" @click="changeSelectCity">
        <span>{{ activeCityName.name }}</span>
      </section>
      <section class="postion" @click="geographicPosition">
        <span>我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </section>
    </section>
    <section class="section date-range bottom-gray-line" @click="checkHousing">
      <section class="start">
        <section class="date">
          <span>入住</span>
          <div class="time">{{ today }}</div>
        </section>
        <section class="stay">共{{ getDiffDate }}晚</section>
      </section>
      <section class="end">
        <section class="date">
          <span>离店</span>
          <section class="time">{{ tomorrow }}</section>
        </section>
      </section>
    </section>
    <van-calendar
        v-model:show="showCalendar"
        type="range"
        color="#ff9854"
        :round="false"
        :show-confirm="false"
        @confirm="onConfirm"
    />
  </section>
</template>

<script setup>
import {useRouter} from "vue-router";
import useCityStore from "@/store/moudles/city.js";
import {storeToRefs} from "pinia";
import {formatMonthDay, getDiffDays} from "@/utils/formatDate.js";
import {computed, ref} from "vue";

const router = useRouter()
// 选择城市
const changeSelectCity = () => {
  router.push("/city")
}

//获取选中的热门城市
const cityStore = useCityStore()
const {activeCityName} = storeToRefs(cityStore)

//获取当前地理位置
const geographicPosition = () => {
  const objCity = new BMap.LocalCity();
  objCity.get(function (result) {
    activeCityName.value.name = result.name
  })
}

//日期处理
const nowDate = new Date()
const newDate = new Date()
newDate.setDate(nowDate.getDate() + 1)
const today = ref(formatMonthDay(nowDate))
const tomorrow = ref(formatMonthDay(newDate))
const getDiffDate = ref(getDiffDays(nowDate, newDate))
//入住信息
const showCalendar = ref(false)
const onConfirm = (value) => {
  showCalendar.value = false
  const selectStartDate = value[0]
  const selectEndDate = value[1]
  today.value = formatMonthDay(selectStartDate)
  tomorrow.value = formatMonthDay(selectEndDate)
  getDiffDate.value = getDiffDays(selectStartDate, selectEndDate)
}

const checkHousing = () => {
  showCalendar.value = true
}
</script>

<style lang="less" scoped>
.banner {
  img {
    width: 100%;
  }
}

.location {
  display: flex;
  padding: 0 20px;
  height: 40px;
  font-size: 14px;

  .city {
    flex: 1;
    line-height: 40px;
  }

  .postion {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      margin-left: 5px;
      height: 18px;
    }
  }

}

.section {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  height: 40px;
  padding: 0 20px;

  .start {
    flex: 1;
    display: flex;
    height: 44px;
    align-items: center;

    .how-long {
      padding-right: 20px;
    }
  }

  .end {
    min-width: 30%;
    padding-left: 20px;
  }

  span {
    font-size: 12px;
    color: #999;
  }

  .time {
    margin-top: 3px;
    color: #333;
    font-size: 15px;
    font-weight: 500;
  }
}

.date-range {
  height: 40px;

  .stay {
    flex: 1;
    text-align: center;
    font-size: 12px;
    color: #666;
  }
}

.search-box {
  --van-calendar-popup-height: 100%;
}
</style>