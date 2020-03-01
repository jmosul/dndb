<template>
    <div>
        <b-field grouped>
            <amplify-connect :query="listPlayersQuery" v-if="!player">
                <template slot-scope="{loading, data}">
                    <div v-if="loading">Loading Players...</div>

                    <b-field label="Player" label-position="on-border" v-else-if="data">
                        <b-select v-model="model.playerId">
                            <option value=""></option>
                            <option
                                v-for="option in data.listPlayers.items"
                                :value="option.id"
                                :key="option.id"
                            >
                                {{ option.name }}
                            </option>
                        </b-select>
                    </b-field>
                </template>
            </amplify-connect>

            <b-field label="Campaign" v-if="!campaign" label-position="on-border">
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

            <amplify-connect :query="listCharactersQuery" v-if="!character">
                <template slot-scope="{loading, data}">
                    <div v-if="loading">Loading Characters...</div>

                    <b-field label="Player" label-position="on-border" v-else-if="data">
                        <b-select v-model="model.characterId">
                            <option value=""></option>
                            <option
                                v-for="option in data.listPlayerCharacters.items"
                                :value="option.id"
                                :key="option.id"
                            >
                                {{ option.name }}
                            </option>
                        </b-select>
                    </b-field>
                </template>
            </amplify-connect>

            <b-field>
                <button
                    class="button is-primary"
                    type="submit"
                    :disabled="saving"
                    @click="mutate"
                >
                    Add
                </button>
            </b-field>
        </b-field>
    </div>
</template>

<script>
    import Component from 'vue-class-component';
    import {Prop} from 'vue-property-decorator';
    import {listPlayerCharacters, listPlayers} from '../graphql/queries';
    import {createPartyMember} from '../graphql/mutations';
    import {Getter} from 'vuex-class';
    import uuid from 'uuid';
    import {API, graphqlOperation} from 'aws-amplify';
    import AppComponent from '../AppComponent';

    @Component()
    export default class AddToCampaign extends AppComponent {
        @Getter('dungeonMaster/id') dungeonMasterId;
        @Getter('campaigns/all') campaigns;
        @Prop(String) campaign;
        @Prop(String) player;
        @Prop(String) character;

        saving = false;

        model = {
            campaignId: '',
            playerId: '',
            characterId: '',
        };

        get listPlayersQuery() {
            return this.$Amplify.graphqlOperation(listPlayers, {dm: this.dungeonMasterId});
        }

        get listCharactersQuery() {
            return this.$Amplify.graphqlOperation(listPlayerCharacters, {dm: this.dungeonMasterId});
        }

        get partyMemberMutation() {
            const input = {
                id: uuid.v4(),
                dm: this.dungeonMasterId,
                status: 'Active',
                campaignId: this.campaign || this.model.campaignId,
                partyMemberCharacterId: this.character || this.model.characterId,
                partyMemberPlayerId: this.player || this.model.playerId,
            };

            return graphqlOperation(createPartyMember, {input});
        }

        async mutate() {
            this.saving = true;

            await API.graphql(this.partyMemberMutation).then(
                () => this.showMessage('Added to Party', 'is-success'),
                (error) => this.showGraphQlError(error),
            );

            this.saving = false;
        }
    }
</script>

<style scoped>

</style>
