<script setup>
const props = defineProps(['isVisible']);
const emit = defineEmits(['update:isVisible']);
</script>

<template>
  <popup-layout v-model:isVisible="props.isVisible" @closePopup="$emit('update:isVisible', false)">
    <div class="popup-alert">
      <div>
        Example Popup
      </div>
    </div>
  </popup-layout>
</template>

<style lang="scss">
.popup-alert {
  min-width: 300px;
  padding: 50px;
  text-align: center;
}
</style>