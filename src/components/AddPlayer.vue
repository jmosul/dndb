<template>
    <form>
        <b-field grouped>
            <b-field>
                <b-input placeholder="Name" v-model="model.name"></b-input>
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
        </b-field>
    </form>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import {Getter} from 'vuex-class';
    import {API, graphqlOperation} from 'aws-amplify';
    import uuid from 'uuid';
    import {createPlayer} from '../graphql/mutations';

    @Component()
    export default class AddPlayer extends Vue {
        @Getter('dungeonMaster/id') dungeonMasterId;

        saving = false;

        model = {
            name: '',
        };

        async mutate() {
            this.saving = true;

            await API.graphql(this.playerMutation);

            this.saving = false;
        }

        get playerMutation() {
            const input = {
                id: uuid.v4(),
                dm: this.dungeonMasterId,
                name: this.model.name,
            };

            return graphqlOperation(createPlayer, {input});
        }
    }
</script>

<style scoped>

</style>
