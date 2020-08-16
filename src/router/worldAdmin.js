import components from '../views/world/admin';
import pluralize from 'pluralize';

const resources = [
    {name: 'occurrence', icon: 'fa-calendar'},
    {name: 'character', icon: 'fa-user'},
    {name: 'party', icon: 'fa-users'},
];

const adminRoutes = [
    {
        path: 'world',
        name: 'world.admin.world.update',
        component: components.WorldEditor,
        meta: {
            title: 'World',
            icon: 'fa-globe',
        },
    },
];

resources.forEach(({name, icon}) => {
    const resourceUpper = name.charAt(0).toUpperCase() + name.slice(1);
    const resourcePlural = pluralize(name);
    const editor = `${resourceUpper}Editor`;
    const list = `${resourceUpper}List`;

    // Add create editor
    adminRoutes.push({
        name: `world.admin.${resourcePlural}.create`,
        path: `${resourcePlural}/create`,
        component: components[editor],
        meta: {
            title: `Create ${resourceUpper}`,
        },
    });

    // Add update editor
    adminRoutes.push({
        name: `world.admin.${resourcePlural}.update`,
        path: `${resourcePlural}/:id`,
        component: components[editor],
        meta: {
            title: `Update ${resourceUpper}`,
        },
    });

    // Add list
    adminRoutes.push({
        name: `world.admin.${resourcePlural}`,
        path: `${resourcePlural}`,
        component: components[list],
        meta: {
            title: pluralize(resourceUpper),
            icon,
        },
    });
});

export default adminRoutes;
