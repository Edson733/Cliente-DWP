import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
    //La ruta base
    {
        path: '/',
        component: () => import('../components/LandPage.vue')
    },
    {
        path: '/formulario',
        name: 'formulario',
        component: () => import('../components/Formulario.vue')
    },
    {
        path: '/paginacion',
        name: 'paginacion',
        component: () => import('../components/Persona.vue')
    },
    {
        path: '/captcha',
        name: 'captcha',
        component: () => import('../components/Captcha.vue')
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
                path: '/reservasvuelo',
                name: 'reservasvuelo',
                component: () => import('../components/ReservasVuelo.vue')
            },
            {
                path: '/vuelosdisponibles',
                name: 'vuelosdisponibles',
                component: () => import('../components/VuelosDisponibles.vue')
            },
            {
                path: '/vueloscancelados',
                name: 'vueloscancelados',
                component: () => import('../components/VuelosCancelados.vue')
            },
            {
                path: '/asientosreservados',
                name: 'asientosreservados',
                component: () => import('../components/AsientosReservados.vue')
            },
            {
                path: '/lineasvuelo',
                name: 'lineasvuelo',
                component: () => import('../components/LineasVuelo.vue')
            },
            {
                path: '/proximosvuelos',
                name: 'proximosvuelos',
                component: () => import('../components/ProximosVuelos.vue')
            },
        ]
    }
]

const router = new VueRouter({
    mode: 'history', // Use 'history' mode to remove the hash from the URL
    routes
})
export default router;