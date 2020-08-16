export default {
    setCurrentUser: ({commit}, user) => {
        commit('current', user);
    },
};
