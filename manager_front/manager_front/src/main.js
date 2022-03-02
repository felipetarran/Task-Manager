import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(VueAxios, axios)
app.use(createPinia())
app.use(router)

app.mount('#app')
