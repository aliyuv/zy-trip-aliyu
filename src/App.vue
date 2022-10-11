<script setup>
import tabBar from './components/tab-bar/tab-bar.vue';
import {useRoute} from "vue-router";
import loading from "@/components/loading/loading.vue"
const route = useRoute()
</script>

<template>
  <div class="app">
    <router-view></router-view>
    <tab-bar v-show="!route.meta.hiddenTab"></tab-bar>
    <loading></loading>
  </div>
</template>

<style scoped>
</style>
