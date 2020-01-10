import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Listing from '../views/Listing.vue'
import Dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/listing',
        name: 'listing',
        component: Listing
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router