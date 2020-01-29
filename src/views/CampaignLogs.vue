<template>
    <div class="logs">
        <div class="hero is-primary">
            <div class="hero-body">
                <h1 class="title">Campaign Log</h1>
            </div>
        </div>
        <div class="container">
            <div class="columns">
                <div class="column is-one-third">
                    <div class="panel">
                        <p class="panel-heading">
                            Campaign Logs
                        </p>
                        <div class="panel-block">
                            <add-campaign-log></add-campaign-log>
                        </div>

                        <amplify-connect :query="listCampaignLogsQuery"
                                         :subscription="onCreateCampaignLogSub"
                                         :onSubscriptionMsg="onCreateCampaignLog"
                        >
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
    import AddCampaignLog from '../components/AddCampaignLog';
    import {listCampaignLogs} from '../graphql/queries';
    import {onCreateCampaignLog} from '../graphql/subscriptions';
    import {Getter} from 'vuex-class';

    @Component({
        components: {AddCampaignLog},
    })
    export default class CampaignLogs extends Vue {
        @Getter('dungeonMaster/id') dungeonMasterId;

        get listCampaignLogsQuery() {
            return this.$Amplify.graphqlOperation(listCampaignLogs, {dm: this.dungeonMasterId});
        }

        get onCreateCampaignLogSub() {
            return this.$Amplify.graphqlOperation(onCreateCampaignLog, {dm: this.dungeonMasterId});
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

        onCreateCampaignLog(prevData, newData) {
            prevData.data.listCampaignLogs.items.push(newData.onCreateCampaignLog);

            return prevData.data;
        }

        openLog(logId) {
            this.$router.push({
                name: 'campaign_log',
                params: {
                    logId,
                },
            });
        }
    }
</script>

<style scoped lang="scss">
    .logs {

        .container {
            padding-top: 30px;
        }

        .logs__log {
            small {
                padding-right: 20px;
            }
        }
    }
</style>
