import OccurrenceEditor from '../views/world/admin/OccurrenceEditor';
import OccurrenceList from '../views/world/admin/OccurrenceList';
import WorldEditor from '../views/world/admin/WorldEditor';

export default [
    {
        path: 'world',
        name: 'world.admin.world.update',
        component: WorldEditor,
        meta: {
            title: 'Update World',
        },
    },
    {
        path: 'occurrences',
        name: 'world.admin.occurrences',
        component: OccurrenceList,
        meta: {
            title: 'Occurrences',
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
        name: 'world.admin.occurrences.update',
        component: OccurrenceEditor,
        meta: {
            title: 'Update Occurrence',
        },
    },
];
