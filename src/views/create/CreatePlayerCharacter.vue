<template>
    <section class="create npc">
        <div class="hero">
            <div class="hero-body">
                <h1 class="title">Create Player Character</h1>
            </div>
        </div>

        <div class="container">
            <b-field label="Name">
                <b-input v-model="model.name" required></b-input>
            </b-field>

            <b-field label="Secrets">
                <b-input v-model="model.secrets" type="textarea"></b-input>
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
        </div>
    </section>
</template>

<script>
    import {components} from 'aws-amplify-vue';
    import Component from 'vue-class-component';
    import AppComponent from '../../AppComponent';
    import {createCharacterSheet, createPlayerCharacter} from '../../graphql/mutations';
    import uuid from 'uuid';
    import {Getter} from 'vuex-class';
    import {API, graphqlOperation} from 'aws-amplify';

    @Component({
        components,
    })
    export default class CreatePlayerCharacter extends AppComponent {
        @Getter('dungeonMaster/id') dungeonMasterId;

        saving = false;

        model = {
            id: '',
            name: '',
            image: '',
            secrets: '',
            sheetId: '',
        };

        async mutate() {
            this.saving = true;

            await API.graphql(this.characterSheetMutation);
            await API.graphql(this.playerCharacterMutation);

            this.saving = false;

            this.$router.push({
                name: 'playerCharacter',
                params: {
                    id: this.model.id,
                },
            });
        }

        get characterSheetMutation() {
            this.model.sheetId = uuid.v4();

            const input = {
                id: this.model.sheetId,
                dm: this.dungeonMasterId,
                secrets: this.model.secrets,
            };

            return graphqlOperation(createCharacterSheet, {input});
        }

        get playerCharacterMutation() {
            this.model.id = uuid.v4();

            const input = {
                id: this.model.id,
                dm: this.dungeonMasterId,
                name: this.model.name,
                playerCharacterSheetId: this.model.sheetId,
            };

            return graphqlOperation(createPlayerCharacter, {input});
        }
    }
</script>
