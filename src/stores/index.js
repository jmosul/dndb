import Vue from 'vue';
import Vuex from 'vuex';
import dungeonMaster from './dungeon_master';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    modules: {
        dungeonMaster,
    },
});
