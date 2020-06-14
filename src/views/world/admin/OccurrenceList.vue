<template>
    <div>
        THNAKS
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
                    {{props.row.title}}
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
