<template>
    <section>
        <form @submit.prevent="submit">
            <b-field label="Title" horizontal>
                <b-input v-model="model.title"></b-input>
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
    export default class WorldEditor extends EditorComponent {
        @Getter('worlds/current') world;

        modelName = 'World';

        mounted() {
            super.mounted();
        }

        getId() {
            return this.world.id;
        }
    }
</script>

<style scoped lang="scss">

</style>
