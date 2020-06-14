import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../stores';
import views from '../views';
import WorldAdmin from '../views/world/admin/WorldAdmin';
import worldAdmin from './worldAdmin';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: views.Home,
        meta: {
            isBase: true,
        },
    },
    {
        path: '/identity',
        name: 'identity',
        component: views.Identity,
        meta: {
            isBase: true,
        },
    },
    {
        path: '/:world',
        name: 'world',
        component: views.World,
        children: [
            {
                path: '',
                name: 'world.timeline',
                component: views.WorldTimeline,
                meta: {
                    title: 'Timeline',
                },
            },
            {
                path: 'admin',
                name: 'world.admin',
                component: WorldAdmin,
                meta: {
                    title: 'Admin',
                },
                children: worldAdmin,
            },
        ],
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

const getCurrentWorld = async({meta, params}) => {
    if (store.getters['worlds/isEmpty']) {
        await store.dispatch('worlds/load');
    }

    if (meta.isBase) {
        store.commit('worlds/currentId', undefined);

        return undefined;
    }

    // set from slug
    if (params.world) {
        store.dispatch('worlds/setCurrentBySlug', params.world);
    }

    return store.getters['world/current'];
};

router.beforeResolve((to, from, next) => {
    if (to.path !== '*') {
        Vue.prototype.$Amplify.Auth.currentAuthenticatedUser()
            .then(data => {
                store.dispatch('user/setCurrentUser', data.attributes);

                getCurrentWorld(to).then(() => next());
            })
            .catch((e) => {
                getCurrentWorld(to).then(() => to.meta.dmOnly ? next({path: '/identity'}) : next());
            });
    } else {
        next();
    }
});

export default router;
