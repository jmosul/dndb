export default {
    setCampaign({commit}, campaign) {
        campaign = campaign || {id: undefined, name: undefined, image: undefined};

        commit('id', campaign.id);
        commit('name', campaign.name);
        commit('image', campaign.image);
    },
};
