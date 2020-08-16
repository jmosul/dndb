<template>
    <div>
        <div class="has-text-right mb-4">
            <router-link class="button is-secondary" :to="{name: 'world.admin.occurrences.create'}">Create Occurrence</router-link>
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
                    <router-link :to="{name: 'world.admin.occurrences.update', params: {id: props.row.id}}">
                        {{props.row.title}}
                    </router-link>
                </b-table-column>

                <b-table-column
                    field="type"
                    sortable
                    label="Type"
                >
                    {{props.row.type}}
                </b-table-column>

                <b-table-column
                    field="reckoning"
                    sortable
                    label="Reckoning"
                >
                    <dale-reckoning :date="props.row.reckoning"></dale-reckoning>
                </b-table-column>
                <b-table-column
                    field="summary"
                    sortable
                    label="Summary"
                >
                    {{props.row.summary}}
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
    export default class OccurrenceList extends ListComponent {
        modelName = 'Occurrence';

        mounted() {
            super.mounted();
        }
    }
</script>

<style scoped>

</style>
