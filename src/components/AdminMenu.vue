<template>
    <aside class="menu">
        <menu-section :items="contentItems" title="Content"></menu-section>
    </aside>
</template>

<script>
    import AppComponent from './AppComponent';
    import Component from 'vue-class-component';
    import {Getter} from 'vuex-class';
    import CardImage from './CardImage';
    import MenuSection from './MenuSection';
    import adminRoutes from '../router/worldAdmin';

    @Component({
        components: {MenuSection, CardImage},
    })
    export default class AdminMenu extends AppComponent {
        @Getter('worlds/current') world;

        contentItems = [];

        constructor() {
            super();

            this.contentItems = adminRoutes.filter(({meta}) => meta.icon)
                .map((route) => ({
                        name: route.name,
                        icon: route.meta.icon,
                        label: route.meta.title,
                    })
                );
        }
    }
</script>

<style scoped lang="scss">
    @import '../styles';

    .world__panel {
        .panel-heading {
            border-radius: 0;
        }
    }
</style>
