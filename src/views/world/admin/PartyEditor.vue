<template>
    <section>
        <form @submit.prevent="submit">
            <b-field label="Title" horizontal>
                <b-input v-model="model.name"></b-input>
            </b-field>

            <b-field label="Slug" horizontal v-if="action === 'create'">
                <b-input type="text" v-model="model.slug"></b-input>
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
    export default class PartyEditor extends EditorComponent {
        @Getter('worlds/current') world;

        modelName = 'Party';

        mounted() {
            super.mounted();

            this.model.partyWorldId = this.world.id;
        }
    }
</script>

<style scoped lang="scss">

</style>
