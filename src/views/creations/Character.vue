<template>
    <section class="character view">
        <amplify-connect
            :query="character"
            v-if="$route.params.characterId"
        >
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
                                        <figure class="image is-3by4">
                                            <a :href="getImage(data.getNonPlayerCharacter.image)" title="Open image" target="_blank">
                                                <img :src="getImage(data.getNonPlayerCharacter.image)" :alt="data.getNonPlayerCharacter.name">
                                            </a>
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
                                            <strong>Party Opinion</strong>
                                            <party-opinion
                                                :character="data.getNonPlayerCharacter"
                                            ></party-opinion>

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
                                                    <tr v-if="data.getNonPlayerCharacter.height">
                                                        <th>Height</th>
                                                        <td>
                                                            <converter :value="data.getNonPlayerCharacter.height" type="length"></converter>
                                                        </td>
                                                    </tr>
                                                    <tr v-if="data.getNonPlayerCharacter.weight">
                                                        <th>Weight</th>
                                                        <td>
                                                            <converter :value="data.getNonPlayerCharacter.weight" type="weight"></converter>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <p>
                                                {{data.getNonPlayerCharacter.description}}
                                            </p>
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
                                        class="column is-half-mobile"
                                    ></ability-score>
                                </section>

                                <section>
                                    <h4 class="title">Interaction</h4>
                                    <hr>
                                    <p v-if="data.getNonPlayerCharacter.interaction">{{data.getNonPlayerCharacter.interaction}}</p>

                                    <p v-if="data.getNonPlayerCharacter.voice">
                                        <strong>Voice: </strong>
                                        {{data.getNonPlayerCharacter.voice}}
                                    </p>
                                    <p v-if="data.getNonPlayerCharacter.mannerisms">
                                        <strong>Mannerisms: </strong>
                                        {{data.getNonPlayerCharacter.mannerisms}}
                                    </p>
                                </section>

                                <section>
                                    <h4 class="title">Personality</h4>
                                    <hr>
                                    <p v-if="data.getNonPlayerCharacter.personality">{{data.getNonPlayerCharacter.personality}}</p>

                                    <p>
                                        <strong>Alignment: </strong>
                                        <span v-if="data.getNonPlayerCharacter.alignment_order === data.getNonPlayerCharacter.alignment_order">
                                            True {{data.getNonPlayerCharacter.alignment_order}}
                                        </span>
                                        <span v-else>
                                            {{data.getNonPlayerCharacter.alignment_order}} {{data.getNonPlayerCharacter.alignment_order}}
                                        </span>
                                    </p>

                                    <p v-if="data.getNonPlayerCharacter.ideal">
                                        <strong>Ideal: </strong>
                                        {{data.getNonPlayerCharacter.ideal}}
                                    </p>
                                    <p v-if="data.getNonPlayerCharacter.bond">
                                        <strong>Bond: </strong>
                                        {{data.getNonPlayerCharacter.bond}}
                                    </p>
                                    <p v-if="data.getNonPlayerCharacter.flaw">
                                        <strong>Flaw: </strong>
                                        {{data.getNonPlayerCharacter.flaw}}
                                    </p>
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

                                <section>
                                    <h4 class="title">Notes</h4>
                                    <hr>
                                    <character-notes :character="data.getNonPlayerCharacter"></character-notes>
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
    import Converter from '../../components/Converter';
    import PartyOpinion from '../../components/PartyOpinion';
    import CharacterNotes from '../../components/CharacterNotes';

    @Component({
        components: {
            CharacterNotes,
            PartyOpinion,
            Converter,
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
                'history',
                'secrets',
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

        .card h4.title {
            margin: 0;
        }

        h4.title {
            margin-bottom: 10px;
        }
    }
</style>
