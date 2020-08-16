<template>
    <div>
        <div class="has-text-right mb-4">
            <router-link class="button is-secondary" :to="{name: 'world.admin.parties.create'}">Create Party</router-link>
        </div>

        <b-table
            :data="models"
            ref="table"
            detailed
        >
            <template slot-scope="props">
                <b-table-column
                    field="title"
                    sortable
                    label="Title"
                >
                    <router-link :to="{name: 'world.admin.parties.update', params: {id: props.row.id}}">
                        {{props.row.title}}
                    </router-link>
                </b-table-column>

            </template>
        </b-table>
    </div>
</template>

<script>
    import Component from 'vue-class-component';
    import ListComponent from './ListComponent';
    import DaleReckoning from '../../../components/DaleReckoning';

    @Component({
        components: {
            DaleReckoning,
        },
    })
    export default class PartyList extends ListComponent {
        modelName = 'Party';

        mounted() {
            super.mounted();
        }
    }
</script>

<style scoped>

</style>
