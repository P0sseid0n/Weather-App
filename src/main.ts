import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import 'dayjs/locale/pt-br'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
dayjs.extend(utc)
dayjs.extend(timezone)

dayjs.locale('pt-br')

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
