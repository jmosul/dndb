<template>
    <section class="log">
        <amplify-connect
            :query="log"
            v-if="$route.params.logId"
        >
            <template slot-scope="{loading, data}">
                <div class="card" v-if="data && data.getCampaignLog">
                    <header class="card-header">
                        <p class="card-header-title">
                            {{data.getCampaignLog.title}}
                            <small class="has-text-grey">({{data.getCampaignLog.date}})</small>
                        </p>
                        <button
                            v-if="showContent && !dungeonMasterId"
                            class="button is-success"
                            @click="toggleEdit"
                        >
                            Edit
                        </button>
                        <button
                            class="button is-danger"
                            @click="toggleEdit"
                            v-else
                        >
                            Cancel
                        </button>
                    </header>
                    <div class="card-content">
                        <div
                            class="content"
                            v-if="(data.getCampaignLog.content || data.getCampaignLog.highlights) && showContent || !this.dungeonMasterId"
                        >
                            <div class="hero is-info" v-if="data.getCampaignLog.highlights">
                                <div class="hero-body">
                                    <div class="logs__pre">
                                        {{data.getCampaignLog.highlights}}
                                    </div>
                                </div>
                            </div>

                            <div class="logs__pre" v-if="data.getCampaignLog.content">
                                {{data.getCampaignLog.content}}
                            </div>
                        </div>
                        <div
                            class="content"
                            v-else
                        >
                            <log-content :log="data.getCampaignLog"></log-content>
                        </div>
                    </div>
                </div>

            </template>
        </amplify-connect>
    </section>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import {Getter} from 'vuex-class';
    import {getCampaignLog} from '../graphql/queries';
    import LogContent from '../components/LogContent';

    @Component({
        components: {LogContent},
    })
    export default class CampaignLog extends Vue {
        @Getter('dungeonMaster/id') dungeonMasterId;

        showContent = true;

        get log() {
            return this.$Amplify.graphqlOperation(getCampaignLog, {id: this.$route.params.logId});
        }

        toggleEdit() {
            this.showContent = !this.showContent;
        }
    }
</script>

<style scoped lang="scss">
    .log {
        .card-header {
            small {
                font-weight: normal;
                padding-left: 10px;
            }

            button {
                float: right;
                margin: 15px 15px 0 0;
            }
        }

        .card-content {
            .hero {
                margin: -1.5em -1.5em 1.5em;

                .hero-body {
                    padding: 1.5em;
                }
            }

            .logs__pre {
                white-space: pre-wrap;
            }
        }
    }
</style>
