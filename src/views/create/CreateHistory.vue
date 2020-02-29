<template>
    <section class="create npc">
        <div class="hero">
            <div class="hero-body">
                <h1 class="title">Create History</h1>
            </div>
        </div>

        <section class="container">
            <b-field label="Title">
                <b-input v-model="model.title"></b-input>
            </b-field>

            <b-field label="Dale Reckoning">
                <b-input v-model="model.dale_reckoning"></b-input>
            </b-field>

            <b-field label="Content">
                <b-input type="textarea" v-model="model.content"></b-input>
            </b-field>

            <b-field label="Campaign">
                <b-select v-model="model.campaignId">
                    <option value=""></option>
                    <option
                        v-for="option in campaigns"
                        :value="option.id"
                        :key="option.id"
                    >
                        {{ option.name }}
                    </option>
                </b-select>
            </b-field>

            <b-field>
                <button
                    class="button is-primary"
                    type="submit"
                    :disabled="saving"
                    @click="mutate"
                >
                    Create
                </button>
            </b-field>
        </section>
    </section>
</template>

<script>
    import {components} from 'aws-amplify-vue';
    import Component from 'vue-class-component';
    import AppComponent from '../../AppComponent';
    import {createHistoryOccurrence, createOccurrence} from '../../graphql/mutations';
    import uuid from 'uuid';
    import {Getter} from 'vuex-class';
    import {API, graphqlOperation} from 'aws-amplify';

    @Component({
        components,
    })
    export default class CreateHistory extends AppComponent {
        @Getter('dungeonMaster/id') dungeonMasterId;
        @Getter('campaigns/all') campaigns;

        saving = false;

        model = {
            dale_reckoning: '',
            public: false,
            title: '',
            content: '',
            campaignId: '',
        };

        mounted() {
            this.model.id = uuid.v4();
            this.model.history.id = uuid.v4();
        }

        async mutate() {
            this.saving = true;

            await API.graphql(this.historyOccurrenceMutation);
            await API.graphql(this.occurrenceMutation);

            this.saving = false;
        }

        handleComplete() {
            this.$router.push({
                name: 'home',
                params: {
                    id: this.model.id,
                },
            });
        }

        get historyOccurrenceMutation() {
            this.historyId = uuid.v4();

            const input = {
                id: this.historyId,
                dm: this.dungeonMasterId,
                title: this.model.title,
                content: this.model.content,
                occurrenceType: 'History',
            };

            return graphqlOperation(createHistoryOccurrence, {input});
        }

        get occurrenceMutation() {
            const input = {
                id: uuid.v4(),
                dm: this.dungeonMasterId,
                dale_reckoning: this.model.dale_reckoning,
                public: this.model.public,
                occurrenceHistoryId: this.historyId,
            };

            if (this.model.campaignId) {
                input.occurrenceCampaignId = this.model.campaignId;
            }

            return graphqlOperation(createOccurrence, {input});
        }
    }
</script>
