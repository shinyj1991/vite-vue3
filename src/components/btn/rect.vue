<script setup>
import { reactive, ref } from 'vue';

const props = defineProps({
  big: {
    type: Boolean,
    default: false,
  },
  tag: {
    type: String,
    default: 'button'
  }
});

const rippleEffect = e => {
  const button = e.currentTarget;
  
  const circle = document.createElement('span');
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${e.clientX - button.offsetLeft - radius}px`;
  circle.style.top = `${e.clientY - button.offsetTop - radius}px`;
  circle.classList.add('ripple');

  const ripple = button.getElementsByClassName('ripple')[0];

  if (ripple) {
    ripple.remove();
  }

  button.appendChild(circle);
}
</script>

<template>
  <component 
    ref="btnRect"
    class="btn-rect"
    :is="tag"
    @click="rippleEffect"
  >
    <slot />
  </component>
</template>

<style lang="scss">
.btn-rect {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  min-width: 100px;
  height: 40px;
  padding: 0 12px;
  border: 1px solid #000;
  color: #000;
  background: #fff;
  transition: all 300ms;

  &:hover {
    background-color: #000;
    color: #fff;
  }

  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
  .ripple {
    display: block;
    position: absolute; /* The absolute position we mentioned earlier */
    border-radius: 50%;
    transform: scale(0);
    animation: ripple 600ms linear;
    background-color: rgba(255, 255, 255, 0.5);
  }
}
</style>