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
                <div class="panel-heading columns my-0 mx-0">
                    <div class="column has-text-left px-0 py-0">
                        Party: {{party.name}}
                    </div>
                    <div class="column has-text-right px-0 py-0" v-if="currentUserId">
                        <router-link
                            class="button button-white is-small"
                            :to="{name: 'world.admin.parties.update', params: {id: party.id}}"
                        >
                            Edit
                        </router-link>
                    </div>
                </div>
                <div class="panel-block py-4">
                    <party :party-id="party.id"></party>
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
    import Party from '../components/Party';

    @Component({
        components: {Party, Timeline, CardImage},
    })
    export default class WorldHome extends AppComponent {
        @Getter('worlds/current') world;
        @Getter('worlds/party') party;
        @Getter('user/id') currentUserId;
    }
</script>

<style scoped lang="scss">
    .timeline {
        width: 100%;
    }

    .pre-line {
        white-space: pre-line;
    }

    .panel-block {
        background-color: white;
    }
</style>
