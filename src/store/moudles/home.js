import {defineStore} from "pinia";
import {fetchSuggest} from "@/service/index.js";

const useHomeStore = defineStore("home", {
  state: () => ({
    hotSuggest: []
  }),
  actions: {
    async fetchHotSuggestData() {
      const res = await fetchSuggest()
      this.hotSuggest = res.data
    }
  }
})

export default useHomeStore