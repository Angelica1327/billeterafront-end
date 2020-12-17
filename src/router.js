import vueRouter from 'vue-router'
import Registro from './components/Registro'
import User from './components/User'
import App from './App'

const router = new vueRouter({
        mode: 'history',
        base: __dirname,
        routes: [
            {
                path: '/',
                name: "root",
                component: App
            },
            {
                path: '/user/',
                name: "user",
                component: User
            },
            {
                path: '/user/registro',
                name: "registro",
                component: Registro
            },
        ]
    })

export default router