import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '~/views/Home'
import About from '~/views/About'

export default createRouter({
    // Hash, History(서버 세팅 필요)
    // ex) https://google.com/#/search
    history: createWebHashHistory(),
    // page
    routes: [
        {
            path: '/', // https://google.com/
            component: Home
        },
        {
            path: '/about', // https://google.com/about
            component: About
        }
    ]
})