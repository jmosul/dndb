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
                            <router-link
                                class="panel-block logs__log"
                                v-for="occurrence in occurrences"
                                :key="occurrence.id"
                                :to="{name: 'campaignOccurrence', params: {id: occurrence.id}}"
                            >
                                <small class="has-text-grey-lighter"> {{occurrence.log.date}}</small>
                                <strong>&nbsp;{{occurrence.title}}</strong>
                            </router-link>
                        </div>
                    </div>
                </div>

                <section class="column is-two-thirds">
                    <router-view></router-view>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import {Getter} from 'vuex-class';
    import {listOccurrences} from '../graphql/queries';
    import {API} from 'aws-amplify';
    import DaleReckoning from '../components/DaleReckoning';
    import sortOccurrences from '../methods/sortOccurrences';
    import {Watch} from 'vue-property-decorator';

    @Component({
        components: {DaleReckoning},
    })
    export default class Campaign extends Vue {
        @Getter('campaign/id') id;
        @Getter('campaign/name') name;
        @Getter('campaign/image') image;

        occurrences = [];

        get imageStyle() {
            return this.image ? {'background-image': `url(/images/campaigns/${this.image})`} : {};
        }

        mounted() {
            this.loadOccurrences();
        }

        async loadOccurrences() {
            return API.graphql({
                query: listOccurrences,
                variables: {
                    filter: {
                        type: {eq: 'Log'},
                    },
                },
                authMode: 'AWS_IAM',
            }).then(
                (response) => {
                    this.occurrences = sortOccurrences(response.data.listOccurrences.items);


                    if (!this.$route.params.id) {
                        this.openLatest();
                    }
                }
            );
        }

        @Watch('$route.params.id')
        handleOccurrenceChange(id) {
            if (!id) {
                this.openLatest();
            }
        }

        openLatest() {
            const latestIndex = this.occurrences.length - 1;

            this.$router.push({
                name: 'campaignOccurrence',
                params: {
                    id: this.occurrences[latestIndex].id,
                },
            });
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
