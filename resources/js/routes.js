import Vue from 'vue';
import VueRouter from 'vue-router';
import Test from "./components/pages/Test";
import Variants from "./components/pages/Variants";
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: {
            name: 'Variants'
        }
    },
    {
        path: "/variants",
        component: Variants,
        name: 'Variants'
    }
];

const router = new VueRouter({
    routes,
    mode: 'history',
});

export default router;
