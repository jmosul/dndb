// src/components/App.vue
<template>
    <div class="app">
        <app-header></app-header>
        <main class="view">
            <section class="sidebar-layout">
                <b-sidebar
                    v-if="menu"
                    position="static"
                    :mobile="mobile"
                    :expand-on-hover="expandOnHover"
                    :reduce="reduce"
                    type="is-light"
                    open
                >
                    <div class="menu-control has-text-right py-2 px-4">
                        <span @click="toggleMenu()">
                            <i class="fa fa-chevron-left"></i>
                        </span>
                    </div>
                    <world-menu v-if="menu === 'world'"></world-menu>
                    <admin-menu v-else-if="menu === 'admin'"></admin-menu>
                    <app-footer v-if="!reduce"></app-footer>
                </b-sidebar>

                <router-view class="content"></router-view>
            </section>
        </main>
    </div>
</template>

<script>
    import {AmplifyEventBus} from 'aws-amplify-vue';
    import {Auth} from 'aws-amplify';
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import AppHeader from './components/AppHeader';
    import AppFooter from './components/AppFooter';
    import router from './router';
    import WorldMenu from './components/WorldMenu';
    import AdminMenu from './components/AdminMenu';

    @Component({
        components: {
            AdminMenu,
            WorldMenu,
            AppFooter,
            AppHeader,
        },
    })
    export default class App extends Vue {
        menu = '';
        mobile = 'reduce';
        expandOnHover = false;
        reduce = false;

        beforeCreate() {
            AmplifyEventBus.$on('authState', info => {
                if (info === 'signedIn') {
                    this.signedIn = true;
                }

                if (info === 'signedOut') {
                    this.$router.push('/auth');
                    this.signedIn = false;
                }
            });

            Auth.currentAuthenticatedUser()
                .then(user => this.signedIn = true)
                .catch(() => this.signedIn = false);

            router.afterEach(() => this.setMenu());
        }

        mounted() {
            this.setMenu();
        }

        setMenu() {
            this.menu = this.$route.matched.reduce((menu, match) => (match.meta && match.meta.menu) || menu, '');
        }

        toggleMenu() {
            this.reduce = !this.reduce;
        }
    }
</script>

<style lang="scss">
    @import "styles";
    @import "~bulma";
    @import "~buefy/src/scss/buefy";

    html, body {
        height: 100%;
        margin: 0;
        background: #f9f9f9 url('/images/background.png') repeat;

        --color-primary: #{$primary};
        --color-primary-accent: #{$primary-invert};
        --color-primary-highlight: #{$primary};
        --color-background: #232f3e;
        --color-secondary: #{$secondary};
        --color-secondary-accent: #{$secondary-invert};
        --color-danger: #{$colors("danger")};
        --color-error: #d0021b;
        --gradient-blaze: linear-gradient(270deg, #{$secondary}, #{$primary});
        --button-background-color: #{$primary};
        --button-color: #{$primary-invert};

        p {
            margin: 10px;
        }
    }

    .app {
        box-sizing: border-box;
        position: relative;
        // padding-bottom: $footer-height;
        height: 100%;

        .is-goblin {
            font-family: $font-goblin-family;
        }

        .view {
            min-height: 100%;
            width: 100%;
            bottom: 0;
            overflow: scroll;
        }

        .hero .hero-body .title {
            font-family: $font-goblin-family;
        }

        .occurrence__content, .occurrence__highlights {
            ul {
                list-style: initial;
                padding: 0 1.5rem;
            }

            p {
                margin-left: 0;
                margin-right: 0;
            }

            .content {

                &__combat--start, &__combat--end {
                    border-color: $color-dnd-red;
                    background-color: $color-dnd-red;
                    position: relative;
                    overflow: visible;

                    &::after {
                        background-color: white;
                        color: $color-dnd-grey;
                        width: 100px;
                        margin-left: -50px;
                        left: 50%;
                        top: -11px;
                        line-height: 18px;
                        position: relative;
                        padding: 5px;
                    }
                }

                &__combat--start::after {
                    content: "Combat Start";
                }

                &__combat--end::after {
                    content: "Combat End";
                }
            }
        }

        main {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
            padding-top: $header-height;

            .sidebar-layout {
                display: flex;
                flex-direction: row;
                height: 100%;

                .sidebar-content {
                    height: 100%;
                    position: relative;
                }
            }

            .content {
                width: 100%;
            }
        }

        @media screen and (max-width: 1023px) {
            .sidebar-content {
                @import "assets/styles/mini-sidebar";
            }
        }

        .sidebar-content.is-mini {
            @import "assets/styles/mini-sidebar";
        }
    }
</style>
