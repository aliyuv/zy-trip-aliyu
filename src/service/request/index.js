import axios from "axios";
import {BASE_URL, TIMEOUT} from "@/service/request/config.js";
import useMainStore from "@/store/modules/main/main.js";
// axios.defaults.baseURL =  "http://123.207.32.32:1888/api"

const mainStore = useMainStore()

class ZYRequest {
  constructor(baseURL, timeout = 10000) {
    // create instance default
    this.instance = axios.create({
      baseURL,
      timeout
    })

    this.instance.interceptors.request.use((config) => {
      mainStore.isLoading = true
      return config
    }, (error) => {
      mainStore.isLoading = false
      return error
    })

    this.instance.interceptors.response.use((res) => {
      mainStore.isLoading = false
      return res
    }, (error) => {
      mainStore.isLoading = false
      return error
    })
  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.instance.request(config).then(res => {
        resolve(res.data)

      }).catch(err => {
        reject(err)
      })
    })
  }


  get(config) {
    return this.request({...config, method: "get"})
  }

  post(config) {
    return this.request({...config, method: "post"})
  }
}

export default new ZYRequest(BASE_URL, TIMEOUT)