import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../stores';
import Home from '../views/Home.vue';
import Character from '../views/creations/Character';
import Identity from '../views/Identity';
import CampaignLogs from '../views/CampaignLogs';
import CampaignLog from '../views/CampaignLog';
import Characters from '../views/Characters';
import CreateCampaign from '../views/create/CreateCampaign';
import Campaign from '../views/Campaign';
import CreateHistory from '../views/create/CreateHistory';
import CreateNonPlayerCharacter from '../views/create/CreateNonPlayerCharacter';
import Timeline from '../views/Timeline';
import Occurrence from '../views/Occurrence';
import ManagePlayers from '../views/create/ManagePlayers';
import CreatePlayerCharacter from '../views/create/CreatePlayerCharacter';
import PlayerCharacter from '../views/creations/PlayerCharacter';
import ManagePlayer from '../components/ManagePlayer';

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
                path: ':id',
                name: 'campaignOccurrence',
                component: Occurrence,
                meta: {},
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
        path: '/player-characters/:id',
        name: 'playerCharacter',
        component: PlayerCharacter,
        meta: {},
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
        path: '/players',
        name: 'players',
        component: ManagePlayers,
        children: [
            {
                path: ':id',
                name: 'managePlayer',
                component: ManagePlayer,
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
        path: '/create/campaign',
        name: 'createCampaign',
        component: CreateCampaign,
    },
    {
        path: '/create/history',
        name: 'createHistory',
        component: CreateHistory,
    },
    {
        path: '/create/player-character',
        name: 'createPlayerCharacter',
        component: CreatePlayerCharacter,
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
