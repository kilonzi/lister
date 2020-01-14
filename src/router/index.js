import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Listing from '../views/Listing.vue'
import Dashboard from '../views/Dashboard.vue'
import Signin from '../views/Signin.vue'
import Signup from '../views/Signup.vue'
import Reset from '../views/ResetPassword.vue'

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
    },
    {
        path: '/signin',
        name: 'signin',
        component: Signin
    },
    {
        path: '/signup',
        name: 'signup',
        component: Signup
    },
    {
        path: '/reset',
        name: 'reset',
        component: Reset
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router