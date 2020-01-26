<template>
    <amplify-connect
        :mutation="updateCharacterNotes"
    >
        <template slot-scope="{ loading, mutate }">
            <b-field label="Notes">
                <b-input type="textarea" v-model="notes"></b-input>
            </b-field>

            <button
                class="button is-primary"
                @click="updateNotes(mutate)"
                :disabled="loading"
                :class="{'is-loading': loading}"
            >
                Update Notes
            </button>
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
    export default class CharacterNotes extends Vue {
        name = 'CharacterNotes';
        notes = '';

        mounted() {
            this.notes = this.character.notes;
        }

        updateNotes(mutate) {
            this.character.notes = this.notes;

            mutate();
        }

        get updateCharacterNotes() {
            return this.$Amplify.graphqlOperation(updateNonPlayerCharacter, {
                input: this.character,
            });
        }
    }
</script>

<style scoped lang="scss">

</style>
