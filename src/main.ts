import { createApp } from 'vue'
import './assets/scss/main.scss'
import '@mdi/font/css/materialdesignicons.css'
import App from './App.vue'
import { router } from './router'

createApp(App)
  .use(router)
  .mount('#app')