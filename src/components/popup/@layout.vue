<script setup>
import { ref, watch } from 'vue';

const props = defineProps(['isVisible']);
const emit = defineEmits(['closePopup']);

const isPopupOuter = ref(false);

watch(
  () => props.isVisible,
  () => {
    setTimeout(() => {
      isPopupOuter.value = props.isVisible;
    }, 1)
  }
)
</script>

<template>
  <teleport to="#root-app">
    <div class="popup-layout" v-if="props.isVisible" @click.self="$emit('closePopup')">
      <transition name="popup">
        <div class="popup-outer" v-if="isPopupOuter">
          <button type="button" class="btn-popup-close" @click="$emit('closePopup')">팝업 닫기</button>
          <div class="popup-inner">
            <slot />
          </div>
        </div>
      </transition>
    </div>
  </teleport>
</template>

<style lang="scss" scoped>
@keyframes scale-easeOutBounce {
  0% {
    transform: scale(0);
  }
  12% {
    transform: scale(0.11);
  }
  24% {
    transform: scale(0.44);
  }
  36% {
    transform: scale(0.98);
  }
  54% {
    transform: scale(0.75);
  }
  74% {
    transform: scale(0.98);
  }
  82% {
    transform: scale(0.94);
  }
  92% {
    transform: scale(0.99);
  }
  96% {
    transform: scale(0.98);
  }
  100% {
    transform: scale(1);
  }
}

.popup-enter-active,
.popup-leave-active {
  // transition: all 300ms cubic-bezier(0.64, 0.57, 0.67, 1.53);
  animation: 600ms scale-easeOutBounce;
}

.popup-layout {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;

  .popup-outer {
    position: relative;
    background: #fff;

    .btn-popup-close {
      display: block;
      width: 24px;
      height: 22px;
      font-size: 0;
      background: #000 url(@images/btn-close.png) center center/ 20px no-repeat;
      position: absolute;
      top: 14px;
      right: 11px;
      z-index: 2;
    }
    .popup-inner {
      position: relative;
      z-index: 1;
    }
  }
}
</style>