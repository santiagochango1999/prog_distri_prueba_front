import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/cliente',
        component: ()=>import( '../page/ClientesPage')
    }, {
        path: '/producto',
        component: ()=>import('../page/ProductosPage')
    },
    {
        path: '/orden',
        component: ()=>import( '../page/ComprasPage')
    }
]

const router = createRouter({ history: createWebHashHistory(), routes })
export default router