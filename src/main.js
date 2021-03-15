import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './vuex'
import vant from './library/vant'
import 'vant/lib/index.css'

let app = createApp(App)
vant.forEach(item => app.use(item))
console.log(app)
app.use(router).use(store).mount('#app')