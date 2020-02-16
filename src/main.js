import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import router from './router';
import store from './stores';

import Amplify, * as AmplifyModules from 'aws-amplify';
import {AmplifyPlugin} from 'aws-amplify-vue';
import awsconfig from './aws-exports';
import Buefy from 'buefy';

import './styles.scss';

Amplify.configure(awsconfig);

Vue.use(AmplifyPlugin, AmplifyModules);

Vue.use(Buefy);
Vue.use(Vuex);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
