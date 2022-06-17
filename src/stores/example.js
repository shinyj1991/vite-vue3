// stores/counter.js
import { defineStore } from 'pinia'
import client from '@/helpers/client'

export const useExampleStore = defineStore('example', {
  state: () => ({
    count: 0
  }),
  actions: {
    increament() {
      this.count++
    }
  },
})