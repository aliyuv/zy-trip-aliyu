<template>
  <section class="search-pag">
    <h2>开始时间: {{ $route.query.today }}</h2>
    <h2>结束时间: {{ $route.query.tomorrow }}</h2>
    <h2>当前城市: {{ $route.query.activeCityName }}</h2>
  </section>
</template>

<script setup>

</script>

<style scoped lang="less">

</style>