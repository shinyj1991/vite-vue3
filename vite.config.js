import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@scss': resolve(__dirname, 'src/assets/scss'),
      '@images': resolve(__dirname, 'src/assets/images'),
    },
  },
  server: {
    open: false,
    port: 3000,
  },
})
