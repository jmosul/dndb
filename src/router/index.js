import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../stores';
import Home from '../views/Home.vue';
import Character from '../views/creations/Character';
import Identity from '../views/Identity';
import CampaignLogs from '../views/CampaignLogs';
import CreateNonPlayerCharacter from '../views/create/CreateNonPlayerCharacter';
import CampaignLog from '../views/CampaignLog';
import Characters from '../views/Characters';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/characters',
        name: 'characters',
        component: Characters,
    },
    {
        path: '/characters/:characterId',
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
        path: '/logs',
        name: 'campaign_logs',
        component: CampaignLogs,
        children: [
            {
                path: ':logId',
                name: 'campaign_log',
                component: CampaignLog,
            },
        ],
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
    console.log('qwertyui');

    if (to.path !== '*') {
        Vue.prototype.$Amplify.Auth.currentAuthenticatedUser()
            .then(data => {
                store.commit('dungeonMaster/id', data.attributes.sub);

                next();
            })
            .catch((e) => next({path: '/identity'})
            );
    }
    else {
        next();
    }
});

export default router;
