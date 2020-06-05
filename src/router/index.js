import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});
//
// const setDefaultCampaign = () => {
//     if (!store.getters['campaign/id']) {
//         const campaigns = store.getters['campaigns/all'];
//
//         if (campaigns.length) {
//             store.dispatch('campaign/setCampaign', campaigns[0]);
//         }
//     }
// };
//
// router.beforeResolve((to, from, next) => {
//     if (store.getters['campaigns/isEmpty']) {
//         store.dispatch('campaigns/load').then(() => setDefaultCampaign());
//     } else {
//         setDefaultCampaign();
//     }
//
//     if (to.path !== '*') {
//         Vue.prototype.$Amplify.Auth.currentAuthenticatedUser()
//             .then(data => {
//                 store.commit('dungeonMaster/id', data.attributes.sub);
//
//                 next();
//             })
//             .catch((e) => {
//                 to.meta.dmOnly ? next({path: '/identity'}) : next();
//             });
//     } else {
//         next();
//     }
// });

export default router;
