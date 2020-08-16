import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';
import user from './user';
import worlds from './worlds';

const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
    modules: ['campaign'],
});
Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    modules: {
        user,
        worlds,
    },
    plugins: [vuexLocal.plugin],
});
