<template>
    <header>
        <b-navbar>
            <template slot="brand">
                <b-navbar-item href="/">
                    <logo></logo>
                </b-navbar-item>
            </template>
            <template slot="start">
                <b-navbar-item tag="router-link" to="/campaign" v-if="campaignId" :key="campaignId" class="is-goblin">
                    {{currentCampaignName}}
                </b-navbar-item>
                <b-navbar-dropdown>
                    <a
                        v-for="campaign in campaigns"
                        :key="campaign.id"
                        @click="setCampaign(campaign)"
                        class="navbar-item"
                    >
                        {{campaign.name}}
                    </a>
                </b-navbar-dropdown>
                <b-navbar-item tag="router-link" to="/campaign" v-if="campaignId">
                    Overview
                </b-navbar-item>

                <b-navbar-item tag="router-link" to="/timeline">
                    Timeline
                </b-navbar-item>
            </template>
            <template slot="end">
                <b-navbar-item tag="router-link" to="/logs" v-if="dungeonMasterId">
                    Campaign Logs
                </b-navbar-item>

                <b-navbar-item :to="{name: 'characters'}" tag="router-link" v-if="dungeonMasterId">
                    NPCs
                </b-navbar-item>

                <b-navbar-dropdown label="Manage and Create" v-if="dungeonMasterId">
                    <b-navbar-item
                        v-for="creation in creations"
                        :key="creation.route"
                        tag="router-link"
                        :to="{name: creation.route}"
                    >
                        {{creation.label}}
                    </b-navbar-item>

                    <b-navbar-item tag="router-link" :to="{name: 'players'}">
                        Players
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
    import {Action, Getter} from 'vuex-class';
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
        @Getter('campaigns/all') campaigns;
        @Getter('campaign/id') campaignId;
        @Getter('campaign/name') campaignName;
        @Action('campaign/setCampaign') setCampaign;

        creations = [
            {route: 'createNPC', label: 'NPC'},
            {route: 'createCampaign', label: 'Campaign'},
            {route: 'createHistory', label: 'History'},
            {route: 'createPlayerCharacter', label: 'Player Character'},
        ];

        get listCharactersQuery() {
            return this.$Amplify.graphqlOperation(listNonPlayerCharacters);
        }

        get listPlayersQuery() {
            return this.$Amplify.graphqlOperation(listPlayerCharacters);
        }

        get currentCampaignName() {
            return this.campaignName || 'Select Campaign';
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
