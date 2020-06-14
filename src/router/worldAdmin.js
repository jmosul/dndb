import OccurrenceEditor from '../views/world/admin/OccurrenceEditor';
import OccurrenceList from '../views/world/admin/OccurrenceList';

export default [
    {
        path: 'occurrences',
        name: 'world.admin.occurrences',
        component: OccurrenceList,
        meta: {
            title: 'List Occurrences',
        },
    },
    {
        path: 'occurrences/create',
        name: 'world.admin.occurrences.create',
        component: OccurrenceEditor,
        meta: {
            title: 'Create Occurrence',
        },
    },
    {
        path: 'occurrences/:id',
        name: 'world.admin.occurrences.edit',
        component: OccurrenceEditor,
        meta: {
            title: 'Edit Occurrence',
        },
    },
];
