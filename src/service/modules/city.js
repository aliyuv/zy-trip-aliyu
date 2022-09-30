import ZYRequest from "@/service/request"

export function getCityDataAll(){
  return ZYRequest.get({
    url: "/city/all"
  })
}