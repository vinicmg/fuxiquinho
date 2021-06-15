import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home/Home.vue'
import NewGossip from '../pages/NewGossip/NewGossip.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/fuxiquinho/',
        component: Home
    },
    {
        path: '/fuxiquinho/nova/',
        component: NewGossip
    }
];

const router = new VueRouter({
    routes,
    mode: 'hash'
  });

export default router;