<script setup>
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const onSwiper = swiper => {
  console.log(swiper)
}

const onSlideChange = () => {
  console.log('slide change');
}

const modules = [Navigation, Pagination, Scrollbar, A11y];
</script>

<template>
  <div class="page-swiper">
    <p>Swiper</p>
    <swiper
      navigation
      :modules="modules"
      :slides-per-view="3"
      :space-between="50"
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide>
        <div class="swiper-inner">1</div>
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-inner">2</div>
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-inner">3</div>
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-inner">4</div>
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-inner">5</div>
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-inner">6</div>
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-inner">7</div>
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-inner">8</div>
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-inner">9</div>
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-inner">10</div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style lang="scss">
.page-swiper {
  padding: 50px;

  .swiper-inner {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 300px;
    background: #666;
    font-size: 30px;
    color: #fff;
  }
}
</style>