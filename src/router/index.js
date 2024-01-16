import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/inicio'
    },
    {
        path: '/',
        component: {
            render(c) {
                return c('router-view');
            },
        },
        children: [
            {
                path: '/inicio',
                name: 'inicio',
                component: () => import('../components/Inicio.vue')
            },
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
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history', // Use 'history' mode to remove the hash from the URL
    routes
})
export default router;