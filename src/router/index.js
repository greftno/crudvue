import Index from "../components/UsuariosIndex.vue"
import Comments from "../components/Comments.vue"

import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    {
        path: "/",
        component: Index
    },
    {
        path: "/posts/:id/comentarios",
        component: Comments
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router