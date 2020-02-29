<template>
    <footer class="footer">
        <div class="content has-text-centered has-text-grey-light">
            <p>
                <small>
                    Dungeons and Databases | James O'Sullivan | &copy; {{year}}
                    <br>
                    <a
                        href="https://github.com/jmosul/dndb"
                        target="_blank"
                        title="See code or report issues Dungeons and Database in GitHub"
                        class="has-text-grey-light"
                    >
                        <b-icon
                            icon="github"
                            pack="fab"
                            size="is-small"
                        ></b-icon>
                        <span>&nbsp;Github</span>
                    </a>
                </small>
            </p>
        </div>
    </footer>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import BIcon from 'buefy/src/components/icon/Icon';

    @Component({
        components: {
            BIcon,
        },
    })
    export default class AppFooter extends Vue {
        get year() {
            return new Date().getFullYear();
        }
    }
</script>

<style scoped lang="scss">
    @import '../styles';

    footer {
        width: 100%;
        height: $footer-height;
        padding: 1em;
        background-color: $dark;
    }
</style>
