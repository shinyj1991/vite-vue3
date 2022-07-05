<script setup>
import { reactive } from 'vue';

const state = reactive({
})

function clickButton(e) {
  console.log(e)
}
</script>

<template>
  <div class="page-button">
    <div>
      <btn-rect type="button" @click="clickButton($event)">button</btn-rect>
    </div>
    <div>
      <btn-rect tag="a" href="https://naver.com" target="_blank">anchor (href="naver")</btn-rect>
    </div>
    <div>
      <btn-rect tag="router-link" to="/swiper">router-link (to="/swiper")</btn-rect>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-button {
  display: grid;
  row-gap: 20px;
  padding: 50px;
}
</style>