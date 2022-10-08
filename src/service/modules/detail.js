import ZYRequest from "@/service/request"

export function getDetailData(houseId) {
  return ZYRequest.get({
    url: "/detail/infos",
    params: {
      houseId
    }
  })
}