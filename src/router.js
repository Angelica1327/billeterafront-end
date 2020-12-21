import vueRouter from 'vue-router'
import Registro from './components/Registro'
import User from './components/User'
import App from './App'
import Perfil from './components/Perfil'
import Actualizar from './components/Actualizar'

const router = new vueRouter({
        mode: 'history',
        base: __dirname,
        routes: [

            {
                path: '/perfil/',
                name: "perfil",
                component: Perfil
            },

            {
                path: '/inicio',
                name: "App",
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

            {
                path: '/user/put',
                name: "Actualizar",
                component: Actualizar
            },
        ]
    })

export default router