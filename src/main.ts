import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './vuex'
import vant from './library/vant'
import 'vant/lib/index.css'
import 'amfe-flexible/index.js'

const app = createApp(App)
vant.forEach(item => app.use(item))
app.use(router).use(store).mount('#app')