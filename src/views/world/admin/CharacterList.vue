<template>
    <div>
        <div class="has-text-right mb-4">
            <router-link class="button is-secondary" :to="{name: 'world.admin.characters.create'}">Create Character</router-link>
        </div>

        <b-table
            :data="models"
            ref="table"
            detailed
        >
            <template slot-scope="props">
                <b-table-column
                    field="name"
                    sortable
                    label="Name"
                >
                    <router-link :to="{name: 'world.admin.characters.update', params: {id: props.row.id}}" class="character__name">
                        <figure class="image is-32x32">
                            <img :src="props.row.avatar" v-if="props.row.avatar">
                        </figure>
                        <div>{{props.row.name}}</div>
                    </router-link>
                </b-table-column>

                <b-table-column
                    field="type"
                    sortable
                    label="Type"
                >
                    {{props.row.type === 'PlayerCharacter' ? 'Player' : 'NPC'}}
                </b-table-column>

                <b-table-column
                    field="race"
                    sortable
                    label="Race"
                >
                    {{props.row.race}}
                </b-table-column>

                <b-table-column
                    field="alignment"
                    sortable
                    label="Alignment"
                >
                    {{props.row.alignment}}
                </b-table-column>

            </template>
        </b-table>
    </div>
</template>

<script>
    import Component from 'vue-class-component';
    import ListComponent from './ListComponent';

    @Component({
        components: {},
    })
    export default class CharacterList extends ListComponent {
        modelName = 'Character';

        mounted() {
            super.mounted();
        }
    }
</script>

<style scoped lang="scss">
    .character__name {
        display: flex;
        justify-content: left;
    }
</style>
