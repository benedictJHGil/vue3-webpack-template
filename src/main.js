import { createApp } from "vue";
// import Vue from 'vue'
import App from './App'
import router from './routes/index.js'

createApp(App)
    .use(router)
    .mount('#app')