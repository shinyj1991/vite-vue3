<script setup>
import { ref, reactive, toRefs } from 'vue';
import { useExampleStore } from '@/stores/example'

const exampleStore = useExampleStore();

const state = reactive({
  isPopupVisible: false
})
</script>

<template>
  <div class="page-home">
    <p>Home</p>
    <section>
      <p>{{ exampleStore.count }}</p>
      <button type="button" @click="exampleStore.increament">더하기</button>
    </section>
    <section>
      <button type="button" @click="state.isPopupVisible = true">팝업 오픈</button>
      <popup-example v-model:isVisible="state.isPopupVisible" />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.page-home {
  padding: 50px;
}
</style>