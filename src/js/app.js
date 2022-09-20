import '@/scss/app.scss';

import Vue from 'vue';

import Navbar from '@/js/components/Navbar';
import Onboarding from '@/js/views/Onboarding';
import Dashboard from '@/js/views/Dashboard';
import Apps from '@/js/views/Apps';
import Collegas from '@/js/views/Collegas';
import { store } from '@/js/store/store';

// Router
import VueRouter from 'vue-router';

Vue.use(VueRouter);
const routes = [
    {
        path: '/onboarding/:moduleid/:chapterid',
        component: Onboarding,
        name: 'Onboarding',
    },
    {
        path: '/dashboard',
        component: Dashboard,
        name: 'Dashboard',
    },
    {
        path: '/apps',
        component: Apps,
        name: 'Apps',
    },
    {
        path: '/collegas',
        component: Collegas,
        name: 'Collegas',
    },

];

const router = new VueRouter({
    routes,
    mode: 'history',
});

// eslint-disable-next-line no-new
new Vue({
    el: '#app',
    store,
    router,
    components: {
        Navbar,
    },
});
