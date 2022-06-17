<script setup>
</script>

<template>
  <header class="the-header">
    <p>Header</p>
    <router-link to="/">home</router-link>
    <router-link to="/swiper">swiper</router-link>
  </header>
</template>

<style lang="scss" scoped>
.the-header {
  display: flex;
  column-gap: 50px;
  padding: 30px;
  background: #000;
  color: #fff;
}
</style>