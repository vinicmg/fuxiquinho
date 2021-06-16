import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home/Home.vue'
import NewGossip from '../pages/NewGossip/NewGossip.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/fuxiquinho',
        name: 'home',
        component: Home
    },
    {
        path: '/fuxiquinho/nova',
        name: 'nova',
        component: NewGossip
    }
];

const router = new VueRouter({
    mode: "hash",
    routes    
  });

export default router;