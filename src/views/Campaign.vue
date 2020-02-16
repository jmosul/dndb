<template>
    <div class="campaign">
        <div class="hero is-primary">
            <div class="hero-body">
                <h1 class="title">{{name}}</h1>
            </div>
        </div>
        <div class="container">
            <div class="columns">
                <div class="column is-one-third">
                    <div class="panel">
                        <p class="panel-heading">
                            Sessions
                        </p>

                        <amplify-connect :query="listCampaignLogsQuery">
                            <template slot-scope="{loading, data}">
                                <div v-if="loading">Loading...</div>

                                <div v-else-if="data">
                                    <a
                                        class="panel-block logs__log"
                                        v-for="log in sortCampaigns(data.listCampaignLogs.items)"
                                        :key="log.id"
                                        @click="openLog(log.id)"
                                    >
                                        <small class="has-text-grey-lighter"> {{log.date}}</small>
                                        <strong>&nbsp;{{log.title}}</strong>
                                    </a>
                                </div>
                            </template>
                        </amplify-connect>
                    </div>
                </div>

                <div class="column is-two-thirds">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import {Getter} from 'vuex-class';
    import {listCampaignLogs} from '../graphql/queries';

    @Component()
    export default class Campaign extends Vue {
        @Getter('campaign/id') id;
        @Getter('campaign/name') name;

        get listCampaignLogsQuery() {
            return this.$Amplify.graphqlOperation(listCampaignLogs, {campaignId: this.id});
        }

        sortCampaigns(logs) {
            return [...logs].sort((logA, logB) => {
                if (logA.date > logB.date) {
                    return 1;
                } else if (logA.date < logB.date) {
                    return -1;
                }

                return 0;
            });
        }

        openLog(logId) {
            this.$router.push({
                name: 'session',
                params: {
                    logId,
                },
            });
        }
    }
</script>

<style scoped>

</style>
