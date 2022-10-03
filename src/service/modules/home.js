import ZYRequest from "@/service/request"

export function fetchSuggest(){
  return ZYRequest.get({
    url: "/home/hotSuggests"
  })
}