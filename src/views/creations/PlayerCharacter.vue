<template>
    <div class="character public">
        <div class="hero is-primary">
            <div class="hero-body">
                <h1 class="title">{{character.name}}</h1>
            </div>
        </div>
        <section class="container mt-15">
            <div class="columns">
                <div class="column is-one-third">
                    <character-card :character="character" :key="character.id"></character-card>
                </div>
                <div class="column is-two-thirds">
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import {getPlayerCharacter} from '../../graphql/queries';
    import {API} from 'aws-amplify';
    import {Getter} from 'vuex-class';
    // import logParser from '../../LogParser';
    import DaleReckoning from '../../components/DaleReckoning';
    import CharacterCard from '../../components/CharacterCard';

    @Component({
        components: {CharacterCard, DaleReckoning},
    })
    export default class PlayerCharacter extends Vue {
        @Getter('dungeonMaster/id') dungeonMasterId;

        character = {};

        mounted() {
            this.loadCharacter();
        }

        get authMode() {
            return this.dungeonMasterId ? 'AMAZON_COGNITO_USER_POOLS' : 'AWS_IAM';
        }

        async loadCharacter() {
            return API.graphql({
                query: getPlayerCharacter,
                variables: {
                    id: this.$route.params.id,
                },
                authMode: this.authMode,
            }).then(
                (response) => this.character = response.data.getPlayerCharacter
            );
        }
    }
</script>

<style lang="scss" scoped>
</style>
