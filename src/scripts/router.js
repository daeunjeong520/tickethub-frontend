import { createRouter, createWebHistory } from 'vue-router'

import Home from "@/pages/Home.vue"
import PerformanceDetail from "@/pages/performances/PerformanceDetail.vue"
import PerformanceBook from "@/pages/performances/PerformanceBook.vue"
import MyBookList from "@/pages/mybook/MyBookList.vue"
import MyBookDetail from "@/pages/mybook/MyBookDetail.vue"

import Login from "@/pages/Login.vue"
import SignUp from "@/pages/SignUp.vue"
import Test from "@/pages/Test.vue"

const routes = [
    { path: "/", component: Home},
    { path: "/performances/:id", component: PerformanceDetail },
    { path: "/performances/:id/book", component: PerformanceBook },
    { path: "/my/books", component: MyBookList},
    { path: "/my/books/:id", component: MyBookDetail },
    { path: "/login", component: Login},
    { path: "/signup", component: SignUp},

    { path: "/test", component: Test}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router