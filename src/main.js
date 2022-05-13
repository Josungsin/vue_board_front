import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import mixins from "./mixins"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"
import axios from "axios"

const app = createApp(App)
app.config.globalProperties.$axios = axios;
app.use(router)
app.mixin(mixins)
app.mount('#app')



