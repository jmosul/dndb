<template>
    <nav class="panel">
        <p class="panel-heading is-primary">
            Campaigns
        </p>
        <a
            class="panel-block"
            v-for="campaign in campaigns"
            :key="campaign.id"
            @click="setCampaign(campaign)"
        >
            {{campaign.name}}
        </a>
    </nav>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import {listCampaigns} from '../graphql/queries';
    import {Action} from 'vuex-class';
    import {API} from 'aws-amplify';

    @Component()
    export default class CampaignSelector extends Vue {
        @Action('campaign/setCampaign') setCampaignState;

        campaigns = [];

        mounted() {
            this.loadCampaigns();
        }

        async loadCampaigns() {
            this.campaigns = await API.graphql({
                query: listCampaigns,
                authMode: 'AWS_IAM',
            }).then((response) => response.data.listCampaigns.items);
        }

        setCampaign(campaign) {
            this.setCampaignState(campaign);

            this.$router.push({
                name: 'campaign',
            });
        }
    }
</script>
