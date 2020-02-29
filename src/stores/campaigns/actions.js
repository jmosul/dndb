import {API} from 'aws-amplify';
import {listCampaigns} from '../../graphql/queries';

export default {
    async load({commit}) {
        return API.graphql({query: listCampaigns, authMode: 'AWS_IAM'}).then(
            (response) => {
                const campaigns = response.data.listCampaigns.items;

                commit('campaigns', campaigns);

                return campaigns;
            }
        );
    },
};
