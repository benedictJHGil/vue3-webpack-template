import { createApp } from "vue";
// import Vue from 'vue'
import App from './App'
// import router from './routes/index.js' // index.js 생략 가능
import router from './routes'
// import store from './store/index.js' // index.js 생략 가능
import store from './store'

createApp(App)
    .use(router)
    .use(store)
    .mount('#app')