import dayjs from "dayjs";

export function getDate(date){
  const tomorrow = dayjs(new Date()).add(1,"day").format("MM月DD日")
  const today = dayjs(new Date()).format("MM月DD日")
  return {today,tomorrow}
}