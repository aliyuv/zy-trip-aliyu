import {defineStore} from "pinia";
import {getDetailData} from "@/service/index.js";

const useDetailStore = defineStore("detail", {
  state: () => ({
    detailAllData: []
  }),
  actions: {
    async fetchDetailAllData(houseId) {
      this.detailAllData = await getDetailData(houseId)
    }
  }
})

export default useDetailStore