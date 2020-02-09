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
import Player from '../views/creations/Player';
import CreatePlayerCharacter from '../views/create/CreatePlayerCharacter';
import CreateEncounter from '../views/create/CreateEncounter';
import Encounter from '../views/creations/Encounter';

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
        path: '/characters/:id',
        name: 'character',
        component: Character,
        props: {
            id: '',
        },
    },
    {
        path: '/players/:id',
        name: 'player',
        component: Player,
        props: {
            id: '',
        },
    },
    {
        path: '/encounters/:id',
        name: 'encounter',
        component: Encounter,
        props: {
            id: '',
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
    {
        path: '/create/player',
        name: 'createPlayer',
        component: CreatePlayerCharacter,
    },
    {
        path: '/create/encounter',
        name: 'createEncounter',
        component: CreateEncounter,
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

                next();
            })
            .catch((e) => next({path: '/identity'})
            );
    } else {
        next();
    }
});

export default router;
