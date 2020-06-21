<template>
    <div class="world__home columns">
        <div class="column">
            <div class="panel">
                <div class="panel-heading">Welcome to {{world.title}}</div>
                <div class="panel-block py-4 pre-line">
                    {{world.content}}
                </div>
            </div>

            <div class="panel">
                <div class="panel-heading">Party</div>
                <div class="panel-block py-4">
                    <span class="is-italic">Coming soon</span>
                </div>
            </div>
        </div>
        <div class="column">
            <div class="panel">
                <div class="panel-heading">Recent Sessions</div>
                <div class="panel-block py-4">
                    <timeline type="Session" limit="5"></timeline>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import AppComponent from '../components/AppComponent';
    import Component from 'vue-class-component';
    import {Getter} from 'vuex-class';
    import CardImage from '../components/CardImage';
    import Timeline from '../components/Timeline';

    @Component({
        components: {Timeline, CardImage},
    })
    export default class WorldHome extends AppComponent {
        @Getter('worlds/current') world;
    }
</script>

<style scoped lang="scss">
    .timeline {
        width: 100%;
    }

    .pre-line {
        white-space: pre-line;
    }
</style>
