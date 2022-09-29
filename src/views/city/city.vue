<template>
  <div class="city">
    <van-search
        v-model="searchValue"
        show-action
        placeholder="城市/区域/位置"
        shape="round"
        background="#FFFFFF"
        @cancel="cancelClick"
    >
    </van-search>
    <van-tabs v-model:active="tabsActive">
      <van-tab title="国内·港澳台">内容 1</van-tab>
      <van-tab title="海外">内容 2</van-tab>
    </van-tabs>
  </div>
</template>

<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";

const searchValue = ref("")

const router = useRouter()

const cancelClick = () => {
  router.back()
}

const tabsActive = ref()
</script>

<style scoped lang="less">

</style>