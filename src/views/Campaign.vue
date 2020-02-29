<template>
    <div class="campaign public">
        <div class="hero is-primary">
            <div class="hero-body">
                <h1 class="title">{{name}}</h1>
            </div>
        </div>
        <div class="container">
            <div class="columns">
                <div class="column is-one-third">
                    <div class="card" v-if="image">
                        <div class="card-image">
                            <div class="image is-4by3" v-bind:style="imageStyle"></div>
                        </div>

                        <div class="panel">
                            <h4 class="panel-heading">
                                Sessions
                            </h4>
                            <a
                                class="panel-block logs__log"
                                v-for="log in logs"
                                :key="log.id"
                                @click="openLog(log)"
                            >
                                <small class="has-text-grey-lighter"> {{log.date}}</small>
                                <strong>&nbsp;{{log.title}}</strong>
                            </a>
                        </div>
                    </div>
                </div>

                <article class="column is-two-thirds campaign_log">
                    <div class="hero is-info">
                        <div class="hero-body">
                            <h2 class="title">{{logTitle}}</h2>
                            <h3 class="subtitle">
                                <dale-reckoning :date="logDaleReckoning"></dale-reckoning>
                            </h3>
                            <div class="occurrence__highlights" v-html="logHighlights"></div>
                        </div>
                    </div>

                    <div class="occurrence__content" v-html="logContent"></div>
                </article>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import {Getter} from 'vuex-class';
    import {listCampaignLogs} from '../graphql/queries';
    import {API} from 'aws-amplify';
    import logParser from '../LogParser';
    import DaleReckoning from '../components/DaleReckoning';

    @Component({
        components: {DaleReckoning},
    })
    export default class Campaign extends Vue {
        @Getter('campaign/id') id;
        @Getter('campaign/name') name;
        @Getter('campaign/image') image;

        logs = [];

        logId = '';
        logTitle = '';
        logDaleReckoning = '';
        logHighlights = '';
        logContent = '';

        mounted() {
            this.loadLogs();
        }

        get imageStyle() {
            return this.image ? {'background-image': `url(/images/campaigns/${this.image})`} : {};
        }

        sortCampaigns(logs) {
            return [...logs].sort((logA, logB) => {
                if (logA.date > logB.date) {
                    return -1;
                } else if (logA.date < logB.date) {
                    return 1;
                }

                return 0;
            });
        }

        async loadLogs() {
            return API.graphql({
                query: listCampaignLogs,
                variables: {
                    campaignId: this.id,
                },
                authMode: 'AWS_IAM',
            }).then(
                (response) => {
                    this.logs = this.sortCampaigns(response.data.listCampaignLogs.items);

                    this.openLog(this.logs[0]);
                }
            );
        }

        openLog(log) {
            this.logId = log.id;
            this.logTitle = log.title;
            this.logDaleReckoning = log.dale_reckoning;

            this.logContent = logParser(log.content);
            this.logHighlights = logParser(log.highlights);
        }
    }
</script>

<style lang="scss">
    @import '../styles';

    .campaign.public {
        .column {
            padding-top: 1rem;
        }

        .card {
            margin-bottom: 1rem;

            .card-image .image {
                background-position: center;
                background-size: cover;
            }

            .panel .panel-heading {
                border-radius: 0;
                font-family: $font-goblin-family;
            }

            .logs__log strong {
                margin-left: 5px;
            }
        }

        .hero {
            margin-bottom: 1.5rem;

            .hero-body {
                padding: 2rem 1.5rem;
            }
        }
    }
</style>
