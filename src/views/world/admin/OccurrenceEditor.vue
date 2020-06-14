<template>
    <main>
        <h2 class="title">{{title}}</h2>
        <form @submit.prevent="submit">
            <b-field label="Title" horizontal>
                <b-input v-model="model.title"></b-input>
            </b-field>

            <b-field label="Date" horizontal>
                <b-input v-model="model.reckoning"></b-input>
            </b-field>

            <b-field label="Type" horizontal>
                <b-select v-model="model.type">
                    <option value="Session">Session</option>
                    <option value="PartyJoin">Party Join</option>
                    <option value="Birth">Birth</option>
                    <option value="Death">Death</option>
                    <option value="Event">Event</option>
                </b-select>
            </b-field>

            <b-field label="Content" horizontal>
                <b-input type="textarea" v-model="model.content"></b-input>
            </b-field>

            <b-field horizontal>
                <button
                    type="submit"
                    class="button is-primary"
                    :v-class="{'is-loading': saving}"
                    :disabled="saving"
                >
                    Submit
                </button>
            </b-field>
        </form>
    </main>
</template>

<script>
    import Component from 'vue-class-component';
    import {Getter} from 'vuex-class';
    import EditorComponent from './EditorComponent';

    @Component({})
    export default class OccurrenceEditor extends EditorComponent {
        @Getter('worlds/current') world;

        modelName = 'Occurrence';

        mounted() {
            this.model.type = 'Session';

            super.mounted();
        }

        getMutationData() {
            return Object.assign({
                occurrenceWorldId: this.world.id,
            }, super.getMutationData());
        }

        async submit() {
            const newOccurrence = await super.submit();

            console.log(newOccurrence);
        }
    }
</script>

<style scoped lang="scss">

</style>
