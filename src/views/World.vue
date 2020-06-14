<template>
    <div class="world">
        <div class="hero is-primary">
            <div class="hero-body">
                <h1 class="title">
                    {{world.title}}
                    {{viewTitle}}
                </h1>
            </div>
        </div>
        <div class="columns">
            <div class="column is-one-quarter"></div>
            <router-view class="column is-three-quarters"></router-view>
        </div>
    </div>
</template>

<script>
    import AppComponent from '../components/AppComponent';
    import Component from 'vue-class-component';
    import {Getter} from 'vuex-class';

    @Component({})
    export default class World extends AppComponent {
        @Getter('worlds/current') world;

        viewTitle = '';
        //
        // mounted() {
        //     router.on((to) => {
        //         console.log('to', to);
        //         this.viewTitle = to.meta && to.meta.viewTitle;
        //     });
        // }
    }
</script>

<style scoped lang="scss">

</style>
