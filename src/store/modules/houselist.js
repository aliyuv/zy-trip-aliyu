import {defineStore} from "pinia";
import {fetchHouseListDate} from "@/service/index.js";

const useHouseList = defineStore("houselist", {
  state: () => ({
    houseListData: []
  }),
  actions: {
    async getHouseListData(count) {
      const res = await fetchHouseListDate(count)
      this.houseListData.push(...res.data)
    }
  }
})
export default useHouseList