<template>
    <header>
        <b-navbar
            type="is-dark"
        >
            <template slot="brand">
                <b-navbar-item href="/">
                    Home
                </b-navbar-item>
            </template>
            <template slot="start">
                <b-navbar-item tag="router-link" to="/logs">
                    Campaign Logs
                </b-navbar-item>
                <b-navbar-item tag="router-link" to="/create/npc">
                    Create NPC
                </b-navbar-item>

                <b-navbar-dropdown label="NPCs">
                    <amplify-connect :query="listPlayersQuery">
                        <template slot-scope="{loading, data, errors}">
                            <div v-if="loading">Loading...</div>
                            <div v-else-if="errors.length > 0">Error</div>
                            <div v-else-if="data">
                                <b-navbar-item
                                    v-for="npc in data.listNonPlayerCharacters.items"
                                    :key="npc.id"
                                    :to="{name: 'character', params: {characterId: npc.id}}"
                                    tag="router-link"
                                >
                                    {{npc.name}}
                                </b-navbar-item>
                                <b-navbar-item
                                    :to="{name: 'characters'}"
                                    tag="router-link"
                                >
                                    More...
                                </b-navbar-item>
                            </div>
                        </template>
                    </amplify-connect>
                </b-navbar-dropdown>
            </template>
        </b-navbar>
    </header>
</template>

<script>
    import Component from 'vue-class-component';
    import {Navbar} from 'buefy/src/index';
    import Vue from 'vue';
    import {components} from 'aws-amplify-vue';
    import {listNonPlayerCharacters} from '../graphql/queries';
    import AppComponent from '../AppComponent';

    Vue.use(Navbar);

    @Component({
        components,
    })
    export default class AppHeader extends AppComponent {
        get listPlayersQuery() {
            return this.$Amplify.graphqlOperation(listNonPlayerCharacters);
        }
    }
</script>

<style scoped>

</style>
