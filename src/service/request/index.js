import axios from "axios";
import {BASE_URL, TIMEOUT} from "@/service/request/config.js";
// axios.defaults.baseURL =  "http://123.207.32.32:1888/api"
class ZYRequest {
  constructor(baseURL,timeout = 10000) {
    // create instance default
    this.instance = axios.create({
      baseURL,
      timeout
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

export default new ZYRequest(BASE_URL,TIMEOUT)