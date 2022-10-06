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
          <div class="time">{{ startDateStr }}</div>
        </section>
        <section class="stay">共{{ stayCount }}晚</section>
      </section>
      <section class="end">
        <section class="date">
          <span>离店</span>
          <section class="time">{{ endDateStr }}</section>
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
    <!-- 价格/人数选择 -->
    <section class="section price-counter bottom-gray-line ">
      <div class="start">价格不限</div>
      <div class="end">人数不限</div>
    </section>
    <!-- 关键字 -->
    <section class="section keyword bottom-gray-line">关键字/位置/民宿名</section>
    <!-- 热门建议 -->
    <section class="section hot-suggest">
      <template v-for="(item,index) in homeStore.hotSuggest" :key="index">
        <section class="yan-tag">
          <van-tag round type="primary" size="medium" color="#F1F3F5">{{ item.tagText.text }}</van-tag>
        </section>
      </template>
    </section>
    <section class="search-btn">
      <div class="btn" @click="startSearch">开始搜索</div>
    </section>
    <sortModule :categories-data="categoriesData"></sortModule>
    <section class="home-content">
      <div class="title">
        <h1>热门精选</h1>
      </div>
      <div class="list">
        <template v-for="(item,index) in houseListData">
          <house-list-v9 v-if="item.discoveryContentType === 9" :houseListData="item"></house-list-v9>
          <house-list-v3 v-else-if="item.discoveryContentType === 3" :houseListData="item"></house-list-v3>
        </template>
      </div>
    </section>

  </section>
</template>

<script setup>
import sortModule from "@/views/search/cpns/categories-sort-module.vue"
import houselistv3 from "@/components/house-list-v3/house-list-v3.vue"
import houselistv9 from "@/components/house-list-v9/house-list-v9.vue"
import {useRouter} from "vue-router";
import useCityStore from "@/store/modules/home/city.js";
import {storeToRefs} from "pinia";
import {formatMonthDay, getDiffDays} from "@/utils/formatDate.js";
import {computed, ref, watch} from "vue";
import useHomeStore from "@/store/modules/home/home.js";
import useCategories from "@/store/modules/home/categories.js";
import useHouseList from "@/store/modules/home/houselist.js";
import useScrollTop from "@/hooks/useScroll.js";
import useMainStore from "@/store/modules/main/main.js";

const homeStore = useHomeStore()
homeStore.fetchHotSuggestData()

const categoriesStore = useCategories()
categoriesStore.fetchCategoriesData()
const {categoriesData} = storeToRefs(categoriesStore)

const houseListStore = useHouseList()
const {houseListData} = storeToRefs(houseListStore)
houseListStore.getHouseListData()

const {isScrollBottoming, scrollTop} = useScrollTop()
watch(isScrollBottoming, (newValue) => {
  if (newValue) {
    houseListStore.getHouseListData().then(() => {
      isScrollBottoming.value = false
    }).catch(() => {
      console.log("没有数据啦~")
    })
  }
})


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
const mainStore = useMainStore()
const {startDate, endDate} = storeToRefs(mainStore)
const startDateStr = computed(() => formatMonthDay(startDate.value))
const endDateStr = computed(() => formatMonthDay(endDate.value))
const stayCount = ref(getDiffDays(startDate.value, endDate.value))

//入住信息
const showCalendar = ref(false)
const onConfirm = (value) => {
  //隐藏日历
  showCalendar.value = false
  const selectStartDate = value[0]
  const selectEndDate = value[1]
  startDate.value = selectStartDate
  endDate.value = selectEndDate
  stayCount.value = getDiffDays(selectStartDate, selectEndDate)
}

const checkHousing = () => {
  showCalendar.value = true
}

const startSearch = () => {
  router.push({
    path: "/search",
    query: {
      today: startDate.value,
      tomorrow: endDate.value,
      activeCityName: activeCityName.value.name
    }
  })
}
</script>

<style lang="less" scoped>
.search-box {
  padding-bottom: 60px;
}

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
  color: #999;
  font-size: 14px;

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

.price-counter {
  .start {
    border-right: 1px solid var(--line-color);
  }
}

.yan-tag {
  margin: 2px 4px;
}

.search-btn {
  height: auto;
  margin-top: 45px;
  display: flex;
  justify-content: center;
  align-items: center;

  .btn {
    width: 342px;
    height: 38px;
    max-height: 50px;
    font-weight: 500;
    line-height: 38px;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    background-image: var(--theme-linear-gradient);
  }
}

.home-content {
  padding: 10px 8px;

  .title {
    font-size: 22px;
    padding: 10px;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
  }
}

</style>