import ZYRequest from "@/service/request"
export function fetchHouseListDate(count ){
  return ZYRequest.get({
    url: "/home/houselist",
    params: {
      page: count
    }
  })
}