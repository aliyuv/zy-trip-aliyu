import {defineStore} from "pinia";
import {fetchHouseListDate} from "@/service/index.js";

const useHouseList = defineStore("houselist", {
  state: () => ({
    houseListData: [],
    currentPage: 1
  }),
  actions: {
    async getHouseListData() {
      const res = await fetchHouseListDate(this.currentPage)
      this.houseListData.push(...res.data)
      this.currentPage++
    }
  }
})
export default useHouseList