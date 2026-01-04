import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/app/assets/css/normalize.scss'
import '@/app/assets/css/fonts.scss'
import '@/app/assets/css/global.scss'
import '@/app/assets/css/mixins.scss'
import '@/app/assets/css/typography.scss'
import '@/app/assets/css/variables.scss'

import App from '@/app/App.vue'
import router from '@/app/router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
