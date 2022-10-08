import {defineStore} from "pinia";
import {getDetailData} from "@/service/index.js";

const useDetailStore = defineStore("detail", {
  state: () => ({
    detailAllData: []
  }),
  actions: {
    async fetchDetailAllData(houseId) {
      const res = await getDetailData(houseId)
      this.detailAllData = res.data
    }
  }
})

export default useDetailStore