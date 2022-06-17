import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
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
    base: {
      base: env.VITE_ASSET_BASE
    }
  }
})
