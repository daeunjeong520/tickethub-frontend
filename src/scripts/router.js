import { createRouter, createWebHistory } from 'vue-router'

import Home from "@/pages/Home.vue"
import PerformanceDetail from "@/pages/PerformanceDetail.vue"
import PerformanceBook from "@/pages/PerformanceBook.vue"
import Login from "@/pages/Login.vue"
import SignUp from "@/pages/SignUp.vue"

const routes = [
    { path: "/", component: Home},
    { path: "/performances/:id", component: PerformanceDetail },
    { path: "/performances/:id/book", component: PerformanceBook },
    { path: "/login", component: Login},
    { path: "/signup", component: SignUp}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router