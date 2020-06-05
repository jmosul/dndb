// src/components/App.vue
<template>
    <div class="app">
        <app-header></app-header>
        <main class="view">
            <router-view></router-view>
        </main>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import {AmplifyEventBus} from 'aws-amplify-vue';
    import {Auth} from 'aws-amplify';
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import AppHeader from './components/AppHeader';
    import AppFooter from './components/AppFooter';

    @Component({
        components: {
            AppFooter,
            AppHeader,
        },
    })
    export default class App extends Vue {
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
    }

    .app {
        box-sizing: border-box;
        position: relative;
        padding-bottom: $footer-height;
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

        main {
            position: relative;
            top: 50px;
            padding-bottom: 15px;
            margin-bottom: 35px;

            p {
                margin: 10px;
            }

            p.panel-heading {
                margin: 0;
            }
        }

        @each $margin in $margins {
            .m-#{$margin} {
                margin: #{$margin}px;
            }

            .mt-#{$margin} {
                margin-top: #{$margin}px;
            }

            .mr-#{$margin} {
                margin-right: #{$margin}px;
            }

            .mb-#{$margin} {
                margin-bottom: #{$margin}px;
            }

            .ml-#{$margin} {
                margin-left: #{$margin}px;
            }
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
    }
</style>
