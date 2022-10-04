import ZYRequest from "@/service/request"

export function getCategories(){
  return ZYRequest.get({
    url: "/home/categories"
  })
}