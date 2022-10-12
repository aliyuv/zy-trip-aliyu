<script setup>
import tabBar from './components/tab-bar/tab-bar.vue';
import {useRoute} from "vue-router";
import loading from "@/components/loading/loading.vue"
const route = useRoute()
</script>

<template>
    <router-view v-slot="props">
      <keep-alive include="home">
        <component :is="props.Component"></component>
      </keep-alive>
    </router-view>
    <tab-bar v-show="!route.meta.hiddenTab" class="topcase"></tab-bar>
    <loading></loading>
</template>

<style scoped>
</style>
