<template>
    <section class="character view">
        <amplify-connect :query="character" v-if="$route.params.characterId">
            <template slot-scope="{loading, data, errors}">
                <div v-if="data.getNonPlayerCharacter">

                    <div class="hero">
                        <div class="hero-body">
                            <h1 class="title">{{data.getNonPlayerCharacter.name}}</h1>
                        </div>
                    </div>

                    <section class="container">
                        <div class="columns">
                            <div class="column is-one-third">
                                <div class="card">
                                    <div class="card-image" v-if="data.getNonPlayerCharacter.image">
                                        <figure class="image is-4by3">
                                            <img :src="getImage(data.getNonPlayerCharacter.image)" :alt="data.getNonPlayerCharacter.name">
                                        </figure>
                                    </div>
                                    <div class="card-content">
                                        <div class="media">
                                            <div class="media-left">
                                                <figure class="image is-48x48">
                                                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                                                </figure>
                                            </div>
                                            <div class="media-content">
                                                <p class="title is-4">{{data.getNonPlayerCharacter.name}}</p>
                                                <p class="subtitle is-6">
                                                    {{data.getNonPlayerCharacter.class}}
                                                    <span v-if="data.getNonPlayerCharacter.occupation">
                                                        ({{data.getNonPlayerCharacter.occupation}})
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                        <div class="content">

                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <th>Race</th>
                                                        <td>{{data.getNonPlayerCharacter.race}}</td>
                                                    </tr>

                                                    <tr>
                                                        <th>Age</th>
                                                        <td>{{data.getNonPlayerCharacter.age}}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="column is-two-thirds">

                                <section class="columns is-multiline">
                                    <ability-score
                                        v-for="ability in abilities"
                                        v-if="data.getNonPlayerCharacter[ability.id]"
                                        :key="ability.id"
                                        :score="data.getNonPlayerCharacter[ability.id]"
                                        :ability="ability.title"
                                        class="column"
                                    ></ability-score>
                                </section>

                                <section
                                    v-for="article in articles"
                                    :key="article.id"
                                    v-if="data.getNonPlayerCharacter[article.id]"
                                >
                                    <h4 class="title">{{article.title}}</h4>
                                    <hr>
                                    <p class="article">
                                        {{data.getNonPlayerCharacter[article.id]}}
                                    </p>

                                </section>
                            </div>
                        </div>
                    </section>
                </div>
            </template>
        </amplify-connect>
    </section>
</template>

<script>
    import Component from 'vue-class-component';
    import AppComponent from '../../AppComponent';
    import {getNonPlayerCharacter} from '../../graphql/queries';
    import {components} from 'aws-amplify-vue';
    import AbilityScore from '../../components/AbilityScore';


    @Component({
        components: {
            ...components,
            AbilityScore,
        },
    })
    export default class Character extends AppComponent {
        get abilities() {
            return this.formatList([
                'strength',
                'dexterity',
                'constitution',
                'intelligence',
                'wisdom',
                'charisma',
            ]);
        }

        get articles() {
            return this.formatList([
                'description',
                'history',
                'notes',
            ]);
        }

        get character() {
            return this.$Amplify.graphqlOperation(getNonPlayerCharacter, {id: this.$route.params.characterId});
        }

        getImage(image) {
            return `/images/characters/${image}`;
        }

        formatList(list) {
            return list.map((id) => ({
                id,
                title: id.charAt(0).toUpperCase() + id.slice(1),
            }));
        }
    }
</script>

<style scoped lang="scss">
    .view section {
        margin-bottom: 30px;

        hr {
            margin-top: 5px;
            margin-bottom: 5px;
        }

        h4.title {
            margin-bottom: 10px;
        }
    }
</style>
