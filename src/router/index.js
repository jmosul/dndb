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
import CreateCampaign from '../views/create/CreateCampaign';
import Campaign from '../views/Campaign';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/campaign',
        name: 'campaign',
        component: Campaign,
        children: [
            {
                path: ':logId',
                name: 'session',
                component: CampaignLog,
            },
        ],
    },
    {
        path: '/characters',
        name: 'characters',
        component: Characters,
        meta: {
            dmOnly: true,
        },
    },
    {
        path: '/characters/:id',
        name: 'character',
        component: Character,
        meta: {
            dmOnly: true,
        },
        props: {
            id: '',
        },
    },
    {
        path: '/players/:id',
        name: 'player',
        component: Player,
        meta: {
            dmOnly: true,
        },
        props: {
            id: '',
        },
    },
    {
        path: '/encounters/:id',
        name: 'encounter',
        component: Encounter,
        meta: {
            dmOnly: true,
        },
        props: {
            id: '',
        },
    },
    {
        path: '/identity',
        name: 'identity',
        component: Identity,
        meta: {
            dmOnly: true,
        },
    },
    {
        path: '/logs',
        name: 'campaign_logs',
        component: CampaignLogs,
        meta: {
            dmOnly: true,
        },
        children: [
            {
                path: ':logId',
                name: 'campaign_log',
                component: CampaignLog,
                meta: {
                    dmOnly: true,
                },
            },
        ],
    },
    {
        path: '/create/npc',
        name: 'createNPC',
        component: CreateNonPlayerCharacter,
        meta: {
            dmOnly: true,
        },
    },
    {
        path: '/create/player',
        name: 'createPlayer',
        component: CreatePlayerCharacter,
        meta: {
            dmOnly: true,
        },
    },
    {
        path: '/create/encounter',
        name: 'createEncounter',
        component: CreateEncounter,
        meta: {
            dmOnly: true,
        },
    },
    {
        path: '/create/campaign',
        name: 'createCampaign',
        component: CreateCampaign,
    },
];

const router = new VueRouter({
    routes,
});

router.beforeResolve((to, from, next) => {
    if (to.path !== '*' && to.meta.dmOnly) {
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
