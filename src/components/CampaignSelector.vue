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
    import {Action, Getter} from 'vuex-class';

    @Component()
    export default class CampaignSelector extends Vue {
        @Action('campaign/setCampaign') setCampaignState;
        @Getter('campaigns/all') campaigns;

        setCampaign(campaign) {
            this.setCampaignState(campaign);

            this.$router.push({
                name: 'campaign',
            });
        }
    }
</script>
