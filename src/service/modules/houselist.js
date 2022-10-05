import ZYRequest from "@/service/request"
export function fetchHouseListDate(count = 1){
  return ZYRequest.get({
    url: "/home/houselist",
    params: {
      page: count
    }
  })
}