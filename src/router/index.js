import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
    //La ruta base
    {
        path: '/',
        component: () => import('../components/LandPage.vue')
    },
    //Las rutas asociadas a los componentes
    {
        path: '*',
        component: () => import('../views/ErrorPages/Error404.vue')
    },
    {
        path: '/inicio',
        name: 'inicio',
        component: () => import('../components/Inicio.vue'),
        //Los componentes que se renderizan en router-vue
        children: [
            {
                path: '/formulario',
                name: 'formulario',
                component: () => import('../components/Formulario.vue')
            },
            {
                path: '/captcha',
                name: 'captcha',
                component: () => import('../components/Captcha.vue')
            },
            {
                path: '/paginacion',
                name: 'paginacion',
                component: () => import('../components/Persona.vue')
            },
            {
                path: '/registro',
                name: 'registro',
                component: () => import('../components/UserRegistration.vue')
            },
            {
                path: '/login',
                name: 'login',
                component: () => import('../components/UserLogin.vue')
            },
            {
                path: '/userAuth',
                name: 'auth',
                component: () => import('../components/UserAuth.vue')
            },
        ]
    }
]

const router = new VueRouter({
    mode: 'history', // Use 'history' mode to remove the hash from the URL
    routes
})
export default router;