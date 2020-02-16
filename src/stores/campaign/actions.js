export default {
    setCampaign({commit}, campaign) {
        campaign = campaign || {id: undefined, name: undefined};

        commit('id', campaign.id);
        commit('name', campaign.name);
    },
};
