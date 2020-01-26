import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../stores';
import Home from '../views/Home.vue';
import Character from '../views/creations/Character';
import Identity from '../views/Identity';
import CreateNonPlayerCharacter from '../views/create/CreateNonPlayerCharacter';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/character/:characterId',
        name: 'character',
        component: Character,
        props: {
            characterId: '',
        },
    },
    {
        path: '/identity',
        name: 'identity',
        component: Identity,
        meta: {
            signedOutOnly: true,
        },
    },
    {
        path: '/create/npc',
        name: 'createNPC',
        component: CreateNonPlayerCharacter,
    },
];

const router = new VueRouter({
    routes,
});

router.beforeResolve((to, from, next) => {
    if (to.path !== '*') {
        Vue.prototype.$Amplify.Auth.currentAuthenticatedUser()
            .then(data => {
                store.commit('dungeonMaster/id', data.attributes.sub);
            })
            .catch((e) => next({path: '/identity'})
            );
    }

    next();
});

export default router;
