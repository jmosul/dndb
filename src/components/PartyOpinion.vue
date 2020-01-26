<template>
    <amplify-connect
        :mutation="updateOpinion"
    >
        <template slot-scope="{ loading, mutate }">
            <b-field v-if="mutate">
                <b-radio-button
                    v-model="radioOpinion"
                    :native-value="scale[0]"
                    type="is-danger"
                    @input="onOpinionChange(mutate)"
                    :disabled="loading"
                >
                    <span>Hostile</span>
                </b-radio-button>

                <b-radio-button
                    v-model="radioOpinion"
                    :native-value="scale[1]"
                    type="is-warning"
                    @input="onOpinionChange(mutate)"
                    :disabled="loading"
                >
                    <span>-</span>
                </b-radio-button>

                <b-radio-button
                    v-model="radioOpinion"
                    :native-value="scale[2]"
                    type="is-primary"
                    @input="onOpinionChange(mutate)"
                    :disabled="loading"
                >
                    Indifferent
                </b-radio-button>

                <b-radio-button
                    v-model="radioOpinion"
                    :native-value="scale[3]"
                    type="is-info"
                    @input="onOpinionChange(mutate)"
                    :disabled="loading"
                >
                    <span>-</span>
                </b-radio-button>
                <b-radio-button
                    v-model="radioOpinion"
                    :native-value="scale[4]"
                    type="is-success"
                    @input="onOpinionChange(mutate)"
                    :disabled="loading"
                >
                    Friendly
                </b-radio-button>
            </b-field>
        </template>
    </amplify-connect>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import {updateNonPlayerCharacter} from '../graphql/mutations';

    @Component({
        props: [
            'character',
        ],
    })
    export default class PartyOpinion extends Vue {
        name = 'PartyOpinion';
        radioOpinion = 2;
        opinionInput = 2;
        scale = [
            0,
            1,
            2,
            3,
            4,
        ];

        mounted() {
            this.radioOpinion = this.character.party_opinion || 2;
            this.partyOpinion = this.character.party_opinion || 2;
        }

        get partyOpinion() {
            return this.character.party_opinion;
        }

        set partyOpinion(opinion) {
            this.character.party_opinion = opinion;
            this.opinionInput = opinion;
        }

        onOpinionChange(mutate) {
            this.partyOpinion = this.radioOpinion;

            mutate();
        }

        get updateOpinion() {
            return this.$Amplify.graphqlOperation(updateNonPlayerCharacter, {
                input: this.character,
            });
        }
    }
</script>

<style scoped lang="scss">

</style>
