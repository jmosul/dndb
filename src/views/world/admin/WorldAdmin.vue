<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
    import AppComponent from '../../../components/AppComponent';
    import Component from 'vue-class-component';
    import {Getter} from 'vuex-class';

    @Component({})
    export default class WorldAdmin extends AppComponent {
        @Getter('worlds/current') world;
    }
</script>

<style scoped lang="scss">

</style>
