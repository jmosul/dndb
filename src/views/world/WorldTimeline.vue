<template>
    <timeline></timeline>
</template>

<script>
    import AppComponent from '../../components/AppComponent';
    import Timeline from '../../components/Timeline';
    import Component from 'vue-class-component';

    @Component({
        components: {Timeline},
    })
    export default class WorldTimeline extends AppComponent {
    }
</script>

<style scoped lang="scss">

</style>
