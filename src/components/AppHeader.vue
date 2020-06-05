<template>
    <header>
        <b-navbar>
            <template slot="brand">
                <b-navbar-item href="/">
                    <logo></logo>
                </b-navbar-item>
            </template>
            <template slot="start">
                Start
            </template>
            <template slot="end">
                End
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
    import AppComponent from './AppComponent';
    import Logo from './Logo';

    Vue.use(Navbar);

    @Component({
        components: {
            ...components,
            Logo,
        },
    })
    export default class AppHeader extends AppComponent {

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
