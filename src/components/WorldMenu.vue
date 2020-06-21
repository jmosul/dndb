<template>
    <aside class="menu">
        <router-link :to="{name: 'world.home'}">
            <card-image :image="world.slug" type="fullWidth"></card-image>
        </router-link>

        <menu-section :items="contentItems" :title="world.title"></menu-section>
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
    export default class WorldMenu extends AppComponent {
        @Getter('worlds/current') world;

        contentItems = [
            {
                icon: 'fa-home',
                name: 'world.home',
                label: 'Home',
            },
            {
                icon: 'fa-history',
                name: 'world.timeline',
                label: 'Timeline',
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
