<template>
    <div class="world">
        <div class="hero is-primary">
            <div class="hero-body">
                <h1 class="title">
                    {{viewTitle}}
                </h1>
            </div>
        </div>
        <router-view class="px-4 py-4"></router-view>
    </div>
</template>

<script>
    import AppComponent from '../components/AppComponent';
    import Component from 'vue-class-component';
    import {Getter} from 'vuex-class';
    import CardImage from '../components/CardImage';
    import WorldMenu from '../components/WorldMenu';
    import router from '../router';

    @Component({
        components: {WorldMenu, CardImage},
    })
    export default class World extends AppComponent {
        @Getter('worlds/current') world;

        viewTitle = '';

        created() {
            this.updateView();

            router.afterEach(() => this.updateView());
        }

        updateView() {
            this.viewTitle = (this.$route.meta && this.$route.meta.title) || this.world.title;
        }
    }
</script>

<style scoped lang="scss">
</style>
