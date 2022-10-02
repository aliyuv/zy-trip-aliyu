import {defineStore} from "pinia";
import {getCityDataAll} from "@/service/index.js";

const useCityStore = defineStore("city", {
  state: () => ({
    allCities: {},
    activeCityName: "北京"
  }),
  actions: {
    async fetchAllCityData() {
      const res = await getCityDataAll()
      this.allCities = res.data
    }
  }
})

export default useCityStore