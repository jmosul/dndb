<template>
    <section class="logs__add">
        <amplify-connect :mutation="createMutation" v-if="model.dm && model.campaignId" @done="handleComplete">
            <template slot-scope="{loading, mutate}">
                <b-field grouped>
                    <b-field label="Date" expanded>
                        <b-input v-model="model.date"></b-input>
                    </b-field>
                    <b-field label="Dale" expanded>
                        <b-input v-model="model.dale_reckoning"></b-input>
                    </b-field>
                </b-field>
                <b-field grouped>
                    <b-field label="Title">
                        <b-input v-model="model.title"></b-input>
                    </b-field>
                    <p class="control">
                        <button
                            class="button is-primary"
                            @click="mutate"
                            :class="{'is-loading': loading}"
                            :disabled="loading"
                        >
                            Create
                        </button>
                    </p>
                </b-field>
            </template>
        </amplify-connect>
        <campaign-selector v-else></campaign-selector>
    </section>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import uuid from 'uuid';
    import {createCampaignLog} from '../graphql/mutations';
    import {Getter} from 'vuex-class';
    import CampaignSelector from './CampaignSelector';

    @Component({
        components: {CampaignSelector},
    })
    export default class AddCampaignLog extends Vue {
        @Getter('dungeonMaster/id') dungeonMasterId;
        @Getter('campaign/id') campaignId;

        model = {
            id: undefined,
            dm: undefined,
            title: '',
            date: '',
            dale_reckoning: '',
        };

        mounted() {
            this.model.id = uuid.v4();
            this.model.dm = this.dungeonMasterId;
            this.model.campaignId = this.campaignId;
        }

        get createMutation() {
            return this.$Amplify.graphqlOperation(createCampaignLog, {input: this.model});
        }

        handleComplete() {
            this.$router.push({
                name: 'campaign_log',
                params: {
                    logId: this.model.id,
                },
            });

            // clear form
            this.model.title = '';
            this.model.date = '';
            this.model.id = uuid.v4();
        }
    }
</script>

<style scoped lang="scss">
    .logs__add {
        p.control {
            button {
                margin-top: 22px;
            }
        }
    }
</style>
