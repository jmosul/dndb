<template>
    <section class="create player">
        <div class="hero is-primary">
            <div class="hero-body">
                <h1 class="title">Manage Players</h1>
            </div>
        </div>

        <div class="container mt-15">
            <div class="columns">
                <div class="column is-one-third">
                    <div class="panel">
                        <p class="panel-heading">
                            Add Player
                        </p>
                        <div class="panel-block">
                            <add-player></add-player>
                        </div>
                        <p class="panel-heading">
                            Players
                        </p>

                        <amplify-connect :query="listPlayersQuery"
                                         :subscription="onCreatePlayerSub"
                                         :onSubscriptionMsg="onCreatePlayer"
                        >
                            <template slot-scope="{loading, data}">
                                <div v-if="loading">Loading...</div>

                                <div v-else-if="data">
                                    <router-link
                                        class="panel-block"
                                        v-for="player in data.listPlayers.items"
                                        :key="player.id"
                                        :to="{name: 'managePlayer', params: {id: player.id}}"
                                    >
                                        <strong>&nbsp;{{player.name}}</strong>
                                    </router-link>
                                </div>
                            </template>
                        </amplify-connect>
                    </div>

                </div>
                <div class="column is-two-thirds">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import {components} from 'aws-amplify-vue';
    import Component from 'vue-class-component';
    import AppComponent from '../../AppComponent';
    import {Getter} from 'vuex-class';
    import AddPlayer from '../../components/AddPlayer';
    import {listPlayers} from '../../graphql/queries';
    import {onCreatePlayer} from '../../graphql/subscriptions';

    @Component({
        components: {
            AddPlayer,
            ...components,
        },
    })
    export default class ManagePlayers extends AppComponent {
        @Getter('dungeonMaster/id') dungeonMasterId;

        get listPlayersQuery() {
            return this.$Amplify.graphqlOperation(listPlayers, {dm: this.dungeonMasterId});
        }

        get onCreatePlayerSub() {
            return this.$Amplify.graphqlOperation(onCreatePlayer, {dm: this.dungeonMasterId});
        }

        onCreatePlayer(prevData, newData) {
            const newPlayer = newData.onCreatePlayer;

            prevData.data.listPlayers.items.push(newPlayer);

            return prevData.data;
        }
    }
</script>
