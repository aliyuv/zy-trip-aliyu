import {defineStore} from "pinia";
import {getCityDataAll} from "@/service/index.js";

const useCityStore = defineStore("city", {
  state: () => ({
    allCities: {}
  }),
  actions: {
    async fetchAllCityData() {
      const res = await getCityDataAll()
      this.allCities = res.data
    }
  }
})

export default useCityStore