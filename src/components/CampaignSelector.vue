<template>
    <nav class="panel">
        <p class="panel-heading is-primary">
            Campaigns
        </p>
        <amplify-connect :query="listCampaignsQuery">
            <template slot-scope="{loading, data}">
                <div v-if="loading">Loading...</div>

                <div v-else-if="data">
                    <a
                        class="panel-block"
                        v-for="campaign in data.listCampaigns.items"
                        :key="campaign.id"
                        @click="setCampaign(campaign)"
                    >
                        {{campaign.name}}
                    </a>
                </div>
            </template>
        </amplify-connect>
    </nav>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import {listCampaigns} from '../graphql/queries';
    import {Action} from 'vuex-class';
    // import {API, graphqlOperation} from 'aws-amplify';

    @Component()
    export default class CampaignSelector extends Vue {
        @Action('campaign/setCampaign') setCampaignState;
        //
        // mounted() {
        //     console.log('hi mojjknjkn');
        //
        //     API.graphql(graphqlOperation(listCampaigns)).then(
        //         console.log,
        //         console.log,
        //     );
        // }

        get listCampaignsQuery() {
            return this.$Amplify.graphqlOperation(listCampaigns, {});
        }

        setCampaign(campaign) {
            this.setCampaignState(campaign);
        }
    }
</script>
