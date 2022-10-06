import {defineStore} from "pinia";
import {getCategories} from "@/service/index.js"
const useCategories = defineStore("categories",{
  state: () => ({
    categoriesData : []
  }),
  actions: {
    async fetchCategoriesData(){
      const res = await getCategories()
      this.categoriesData = res.data
    }
  }
})

export default useCategories