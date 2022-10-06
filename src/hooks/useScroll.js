import {onMounted, onUnmounted, ref} from "vue";
import {throttle} from "underscore";

export default function useScrollTop() {
  const scrollHeight = ref(0)
  const clientHeight = ref(0)
  const scrollTop = ref(0)
  const isScrollBottoming = ref(false)
  const scrollListenHandler = throttle(() => {
    scrollHeight.value = document.documentElement.scrollHeight
    clientHeight.value = document.documentElement.clientHeight
    scrollTop.value = document.documentElement.scrollTop
    if (clientHeight.value + scrollTop.value >= scrollHeight.value) {
      console.log("到底部了");
      isScrollBottoming.value = true
    }
  }, 250)

  onMounted(() => {
    window.addEventListener("scroll", scrollListenHandler)
  })

  onUnmounted(() => {
    window.removeEventListener("scroll", scrollListenHandler)
  })

  return {scrollHeight, clientHeight, scrollTop, isScrollBottoming}
}