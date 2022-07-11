<script setup>
</script>

<template>
  <div class="badge-index">
    <slot />
  </div>
</template>

<style lang="scss">
.badge-index {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 16px;
  height: 16px;
  border-radius: 8px;
  background: #0028ac;
  font-size: 10px;
  color: #fff;
  padding: 0 4px;
}
</style>