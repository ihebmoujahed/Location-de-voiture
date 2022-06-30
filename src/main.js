import { createApp } from 'vue'
import VueCarousel from 'vue-carousel';

import App from './App.vue'
import router from './router/router'

const app = createApp(App)
app.use(VueCarousel);

app.use(router)

app.mount('#app')
