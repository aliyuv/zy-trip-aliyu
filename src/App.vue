<script setup>
import { computed } from 'vue';
import tabBar from './components/tab-bar/tab-bar.vue';
</script>

<template>
  
  <div class="app">
    <router-view></router-view>
    <tabBar></tabBar>
  </div>
</template>
  
<style scoped></style>
