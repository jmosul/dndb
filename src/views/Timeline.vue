<template>
    <div class="timeline public">
        <div class="hero is-primary">
            <div class="hero-body">
                <h1 class="title">World Timeline</h1>
            </div>
        </div>
        <div class="container">
            <div class="columns">
                <div class="column is-one-third">
                    <div class="timeline__container">
                        <div class="timeline__item" v-if="loading">
                            <div class="timeline__icon">
                                <span class="fa-stack">
                                    <i class="fas fa-circle fa-stack-2x"></i>
                                    <i class="fas fa-circle-notch fa-spin fa-stack-1x fa-inverse"></i>
                                </span>
                            </div>
                            <div class="timeline__body">
                                <h3 class="timeline__date">
                                    Loading...
                                </h3>
                            </div>
                        </div>
                        <div
                            v-for="occurrence in timeline"
                            :key="occurrence.id"
                            class="timeline__item"
                        >
                            <div class="timeline__icon">
                                <span class="fa-stack">
                                  <i class="fas fa-circle fa-stack-2x"></i>
                                  <i class="fas fa-dice-d20 fa-stack-1x fa-inverse" v-if="occurrence.type === 'Log'"></i>
                                  <i class="fas fa-flag fa-stack-1x fa-inverse" v-else></i>
                                </span>
                            </div>
                            <div class="timeline__body">
                                <h3 class="timeline__date">
                                    <dale-reckoning :date="occurrence.dale_reckoning"></dale-reckoning>
                                </h3>
                                <p class="timeline__content">
                                    {{occurrence.title}}
                                    <small v-if="!filter.campaignId && occurrence.campaign">
                                        <br>
                                        {{occurrence.campaign.name}}
                                    </small>
                                </p>
                                <router-link
                                    class="button is-white is-small timeline__link"
                                    :to="{name: 'occurrence', params: {id: occurrence.id}}"
                                >
                                    More
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column is-two-thirds timeline__occurrence">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import {API} from 'aws-amplify';
    import {listOccurrences} from '../graphql/queries';
    import {Getter} from 'vuex-class';
    import DaleReckoning from '../components/DaleReckoning';

    @Component({
        components: {DaleReckoning},
    })
    export default class Timeline extends Vue {
        @Getter('dungeonMaster/id') dungeonMasterId;

        loading = true;
        timeline = [];
        filter = {};

        mounted() {
            this.loadTimeline();
        }

        async loadTimeline() {
            this.loading = true;

            let authMode = 'AMAZON_COGNITO_USER_POOLS';
            const variables = {
                limit: 100,
            };

            if (!this.dungeonMasterId) {
                variables.filter = {
                    public: {eq: true},
                };

                authMode = 'AWS_IAM';
            }

            return API.graphql({
                query: listOccurrences,
                variables,
                authMode,
            }).then(
                (response) => {
                    this.timeline = this.sortTimeline(response.data.listOccurrences.items);

                    this.loading = false;
                }
            );
        }

        sortTimeline(occurrences) {
            return [...occurrences].sort((occurrenceA, occurrenceB) => {
                if (occurrenceA.dale_reckoning > occurrenceB.dale_reckoning) {
                    return 1;
                } else if (occurrenceA.dale_reckoning < occurrenceB.dale_reckoning) {
                    return -1;
                }

                return 0;
            });
        }
    }
</script>

<style scoped lang="scss">
    @import "../styles";
    @import "~bulma/sass/utilities/_all";

    .timeline {
        .timeline__occurrence {
            padding-top: 55px;
        }

        .timeline__container {
            position: relative;
            padding: 30px 0;
            color: white;

            &::after {
                content: "";
                background-color: $color-dnd-red;
                width: 4px;
                height: 100%;
                position: absolute;
                left: 28px;
                top: 0;
            }

            .timeline__item {
                padding: 5px 5px 5px 50px;
                position: relative;
                margin: 10px;

                &::before {
                    content: "";
                    width: 0;
                    height: 0;
                    border: 0.8em solid transparent;
                    position: absolute;
                    left: 27px;
                    top: 15px;
                    border-right: 10px solid $dark;
                }

                .timeline__ {
                    &date {
                        font-weight: bold;
                    }

                    &body {
                        box-shadow: 0 0 10px #999;
                        background: $dark;
                        border-radius: 2px;
                        padding: 10px;
                    }

                    &icon {
                        position: absolute;
                        left: 0;
                        top: 12px;
                        z-index: 1;

                        color: $color-dnd-red;
                    }

                    &link {
                        float: right;
                        top: -28px;
                    }

                    &content {
                        small {
                            color: $color-dnd-grey;
                        }
                    }
                }
            }
        }
    }
</style>
