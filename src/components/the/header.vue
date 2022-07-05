<script setup>
</script>

<template>
  <header class="the-header">
    <router-link to="/">home</router-link>
    <router-link to="/swiper">swiper</router-link>
    <router-link to="/button">button</router-link>
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