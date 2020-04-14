import Vue from 'vue'
import VueRouter from 'vue-router'


import BasicValidation from "../views/BasicValidation";
import VeeValidation from "../views/VeeValidation";
import VuelidateValidation from "../views/VuelidateValidation";

Vue.use(VueRouter)

const routes = [
    {
        path: '/basic',
        component: BasicValidation
    },
    {
        path: '/vee',
        component: VeeValidation
    }, {
        path: '/vue',
        component: VuelidateValidation,
    }

]

const router = new VueRouter({
    routes
})

export default router
