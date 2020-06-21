<template>
    <section>
        <div class="mb-4">
            <router-link :to="{name: 'world.admin.occurrences'}" class="button">
                <i class="fa fa-chevron-left"></i> Occurrences
            </router-link>
        </div>

        <form @submit.prevent="submit">
            <b-field label="Title" horizontal>
                <b-input v-model="model.title"></b-input>
            </b-field>

            <b-field label="Date" horizontal>
                <b-input v-model="model.reckoning"></b-input>
            </b-field>

            <b-field label="Type" horizontal v-if="model.type">
                <b-select v-model="model.type">
                    <option value="Session">Session</option>
                    <option value="PartyJoin">Party Join</option>
                    <option value="Birth">Birth</option>
                    <option value="Death">Death</option>
                    <option value="Event">Event</option>
                </b-select>
            </b-field>

            <b-field label="Status" horizontal v-if="model.status">
                <b-select v-model="model.status">
                    <option value="Private">Private</option>
                    <option value="Public">Public</option>
                </b-select>
            </b-field>

            <b-field label="Summary" horizontal>
                <b-input type="textarea" v-model="model.summary"></b-input>
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
    </section>
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
            this.model.status = 'Private';
            this.model.type = 'Session';

            super.mounted();
        }

        getMutationData() {
            return Object.assign({
                occurrenceWorldId: this.world.id,
            }, super.getMutationData());
        }
    }
</script>

<style scoped lang="scss">

</style>
