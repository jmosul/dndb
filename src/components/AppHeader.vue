<template>
    <header>
        <b-navbar>
            <template slot="brand">
                <b-navbar-item href="/">
                    <logo></logo>
                </b-navbar-item>
            </template>
            <template slot="start" v-if="world">
                <b-navbar-item tag="router-link" :to="{name: 'world.home', params: {world: world.slug}}">
                    <span class="nav__world">{{world.title}}</span>
                </b-navbar-item>
            </template>
            <template slot="end">
                <b-navbar-item tag="router-link" to="/identity" v-if="!currentUserId">
                    Sign In
                </b-navbar-item>
                <b-navbar-item tag="router-link" :to="{name: 'world.admin.world.update'}" v-if="currentUserId && world">
                    Admin
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
    import {Getter} from 'vuex-class';

    Vue.use(Navbar);

    @Component({
        components: {
            ...components,
            Logo,
        },
    })
    export default class AppHeader extends AppComponent {
        @Getter('user/id') currentUserId;
        @Getter('worlds/current') world;
    }
</script>

<style lang="scss">
    @import '../styles.scss';

    header {
        position: fixed;
        width: 100%;
        z-index: 9;
        max-height: $header-height;

        nav {
            .nav__world {
                font-family: $font-goblin-family;
                font-size: 1.3em;
            }

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
