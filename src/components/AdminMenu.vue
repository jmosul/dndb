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

    @Component({
        components: {MenuSection, CardImage},
    })
    export default class AdminMenu extends AppComponent {
        @Getter('worlds/current') world;

        contentItems = [
            {
                icon: 'fa-globe',
                name: 'world.admin.world.update',
                label: 'World',
            },
            {
                icon: 'fa-calendar',
                name: 'world.admin.occurrences',
                label: 'Occurrences',
            },
        ];
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
