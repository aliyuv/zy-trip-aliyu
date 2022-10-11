import {onMounted, onUnmounted, ref} from "vue";
import {throttle} from "underscore";

export default function useScrollTop(element) {
  let el = window
  const scrollHeight = ref(0)
  const clientHeight = ref(0)
  const scrollTop = ref(0)
  const isScrollBottoming = ref(false)
  const scrollListenHandler = throttle(() => {
    if (el === window) {
      scrollHeight.value = document.documentElement.scrollHeight
      clientHeight.value = document.documentElement.clientHeight
      scrollTop.value = document.documentElement.scrollTop
    } else {
      scrollHeight.value = el.scrollHeight
      clientHeight.value = el.clientHeight
      scrollTop.value = el.scrollTop
    }
    if (clientHeight.value + scrollTop.value >= scrollHeight.value) {
      console.log("到底部了");
      isScrollBottoming.value = true
    }
  }, 250)

  onMounted(() => {
    if (element) el = element.value
    el.addEventListener("scroll", scrollListenHandler)
  })

  onUnmounted(() => {
    el.removeEventListener("scroll", scrollListenHandler)
  })

  return {scrollHeight, clientHeight, scrollTop, isScrollBottoming}
}