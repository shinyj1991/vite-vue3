import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from '@/helpers/router.js'

import '@scss/reset.scss'

const vueApp = createApp(App)

const components = import.meta.globEager('@/components/**/*.vue')

Object.entries(components).forEach(([path, definition]) => {
  const componentName = path
    .replace('./components/', '')
    .replace('/index', '')
    .replace(/\.\w+$/, '')
    .replace(/\//g, '-')
    .replace(/\@/g, '')
  vueApp.component(componentName, definition.default)

  console.log(componentName);
})

vueApp.use(router)
vueApp.use(createPinia())
vueApp.mount('#app')