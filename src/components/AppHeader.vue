<template>
    <header>
        <b-navbar>
            <template slot="brand">
                <b-navbar-item href="/">
                    <logo></logo>
                </b-navbar-item>
            </template>
            <template slot="start" v-if="campaignId">
                <b-navbar-item tag="router-link" to="/campaign">
                    {{campaignName}}:
                </b-navbar-item>
                <b-navbar-item tag="router-link" to="/campaign">
                    Story
                </b-navbar-item>
            </template>
            <template slot="end">
                <b-navbar-item tag="router-link" to="/logs" v-if="dungeonMasterId">
                    Campaign Logs
                </b-navbar-item>
                <b-navbar-item tag="router-link" to="/timeline" v-if="dungeonMasterId">
                    Timeline
                </b-navbar-item>

                <b-navbar-item :to="{name: 'characters'}" tag="router-link">
                    NPCs
                </b-navbar-item>

                <b-navbar-dropdown label="Players" v-if="dungeonMasterId">
                    <amplify-connect :query="listPlayersQuery">
                        <template slot-scope="{loading, data, errors}">
                            <div v-if="loading">Loading...</div>
                            <div v-else-if="errors.length > 0">Error</div>
                            <div v-else-if="data">
                                <b-navbar-item
                                    v-for="player in data.listPlayerCharacters.items"
                                    :key="player.id"
                                    :to="{name: 'player', params: {id: player.id}}"
                                    tag="router-link"
                                >
                                    {{npc.name}}
                                </b-navbar-item>
                            </div>
                        </template>
                    </amplify-connect>
                </b-navbar-dropdown>

                <b-navbar-dropdown label="Create" v-if="dungeonMasterId">
                    <b-navbar-item tag="router-link" to="/create/npc">
                        NPC
                    </b-navbar-item>
                    <b-navbar-item tag="router-link" to="/create/player">
                        Player
                    </b-navbar-item>
                    <b-navbar-item tag="router-link" to="/create/encounter">
                        Encounter
                    </b-navbar-item>
                    <b-navbar-item tag="router-link" to="/create/campaign">
                        Campaign
                    </b-navbar-item>
                    <b-navbar-item tag="router-link" to="/create/history">
                        History
                    </b-navbar-item>
                </b-navbar-dropdown>
            </template>
            <template slot="end" v-if="!dungeonMasterId">
                <b-navbar-item tag="router-link" to="/identity">
                    Sign In
                </b-navbar-item>
            </template>
        </b-navbar>
    </header>
</template>

<script>
    import Component from 'vue-class-component';
    import {Navbar} from 'buefy/src/index';
    import Vue from 'vue';
    import {components} from 'aws-amplify-vue';
    import {listNonPlayerCharacters, listPlayerCharacters} from '../graphql/queries';
    import AppComponent from '../AppComponent';
    import {Getter} from 'vuex-class';
    import Logo from './Logo';

    Vue.use(Navbar);

    @Component({
        components: {
            ...components,
            Logo,
        },
    })
    export default class AppHeader extends AppComponent {
        @Getter('dungeonMaster/id') dungeonMasterId;
        @Getter('campaign/id') campaignId;
        @Getter('campaign/name') campaignName;

        get listCharactersQuery() {
            return this.$Amplify.graphqlOperation(listNonPlayerCharacters);
        }

        get listPlayersQuery() {
            return this.$Amplify.graphqlOperation(listPlayerCharacters);
        }
    }
</script>

<style lang="scss">
    @import "~bulma/sass/utilities/_all";

    header {
        position: fixed;
        width: 100%;
        z-index: 9;

        nav {
            .navbar-item.has-dropdown.is-active .navbar-link {
                color: $dark;
            }

            .navbar-dropdown {
                .navbar-item {
                    color: $dark;
                }
            }
        }
    }
</style>
