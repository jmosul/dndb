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
import CreateHistory from '../views/create/CreateHistory';
import Timeline from '../views/Timeline';
import Occurrence from '../views/Occurrence';

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
            // {
            //     path: ':logId',
            //     name: 'session',
            //     component: CampaignLog,
            // },
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
        meta: {},
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
        path: '/timeline',
        name: 'timeline',
        component: Timeline,
        meta: {},
        children: [
            {
                path: ':id',
                name: 'occurrence',
                component: Occurrence,
                meta: {},
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
    {
        path: '/create/history',
        name: 'createHistory',
        component: CreateHistory,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

const setDefaultCampaign = () => {
    if (!store.getters['campaign/id']) {
        const campaigns = store.getters['campaigns/all'];

        if (campaigns.length) {
            store.dispatch('campaign/setCampaign', campaigns[0]);
        }
    }
};

router.beforeResolve((to, from, next) => {
    if (store.getters['campaigns/isEmpty']) {
        store.dispatch('campaigns/load').then(() => setDefaultCampaign());
    } else {
        setDefaultCampaign();
    }

    if (to.path !== '*') {
        Vue.prototype.$Amplify.Auth.currentAuthenticatedUser()
            .then(data => {
                store.commit('dungeonMaster/id', data.attributes.sub);

                next();
            })
            .catch((e) => {
                to.meta.dmOnly ? next({path: '/identity'}) : next();
            });
    } else {
        next();
    }
});

export default router;
