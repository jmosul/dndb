<template>
    <section class="create npc">
        <div class="hero">
            <div class="hero-body">
                <h1 class="title">Create Campaign</h1>
            </div>
        </div>

        <section class="container">
            <amplify-connect :mutation="createMutation" @done="handleComplete">
                <template slot-scope="{ loading, mutate }">
                    <b-field label="Name">
                        <b-input v-model="model.name"></b-input>
                    </b-field>

                    <b-field label="Image">
                        <b-input type="text" v-model="model.image"></b-input>
                    </b-field>

                    <b-field>
                        <button
                            class="button is-primary"
                            type="submit"
                            :disabled="loading"
                            @click="mutate"
                        >
                            Create
                        </button>
                    </b-field>
                </template>
            </amplify-connect>
        </section>
    </section>
</template>

<script>
    import {components} from 'aws-amplify-vue';
    import Component from 'vue-class-component';
    import AppComponent from '../../AppComponent';
    import {createCampaign} from '../../graphql/mutations';
    import uuid from 'uuid';
    import {Getter} from 'vuex-class';

    @Component({
        components,
    })
    export default class CreateCampaign extends AppComponent {
        @Getter('dungeonMaster/id') dungeonMasterId;

        model = {
            name: '',
            image: '',
        };

        mounted() {
            this.model.id = uuid.v4();
        }

        handleComplete() {
            this.$router.push({
                name: 'home',
                params: {
                    id: this.model.id,
                },
            });
        }

        get createMutation() {
            this.model.dm = this.dungeonMasterId;

            return this.$Amplify.graphqlOperation(createCampaign, {input: this.model});
        }
    }
</script>
