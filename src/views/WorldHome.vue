<template>
    <div>
        <div class="hero is-primary">
            <div class="hero-body">
                <h1 class="title">{{world.title}}</h1>
            </div>
        </div>
    </div>
</template>

<script>
    import AppComponent from '../components/AppComponent';
    import Component from 'vue-class-component';
    import {Getter} from 'vuex-class';

    @Component({})
    export default class WorldHome extends AppComponent {
        @Getter('worlds/current') world;
    }
</script>

<style scoped lang="scss">

</style>
