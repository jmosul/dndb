import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
    modules: ['campaign'],
});
Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    modules: {

    },
    plugins: [vuexLocal.plugin],
});
