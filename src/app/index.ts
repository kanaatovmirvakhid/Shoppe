import './style/fonts.scss'
import './style/global.scss'
import './style/normalize.scss'
import './style/variables.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router/index'


const pinia = createPinia()

export const application = createApp(App).use(pinia).use(router);
