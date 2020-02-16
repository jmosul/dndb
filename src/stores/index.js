import Vue from 'vue';
import Vuex from 'vuex';
import dungeonMaster from './dungeon_master';
import campaign from './campaign';
import VuexPersistence from 'vuex-persist';

const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
    modules: ['campaign'],
});
Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    modules: {
        dungeonMaster,
        campaign,
    },
    plugins: [vuexLocal.plugin],
});
