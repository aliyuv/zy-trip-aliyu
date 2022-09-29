<script setup>
import { computed, ref } from 'vue';
import tabBar from './components/tab-bar/tab-bar.vue';
import {useRoute} from "vue-router";
const route = useRoute()
</script>

<template>
  <div class="app">
     <router-view></router-view>
     <tab-bar v-if="!route.meta.hiddenTab"></tab-bar>
  </div>
</template>
  
<style scoped>

</style>
