<template>
    <section class="character view">
        <amplify-connect
            :query="player"
            v-if="$route.params.id"
        >
            <template slot-scope="{loading, data, errors}">
                <div v-if="data.getPlayerCharacter">

                    <div class="hero">
                        <div class="hero-body">
                            <h1 class="title">{{data.getPlayerCharacter.name}}</h1>
                        </div>
                    </div>

                    <section class="container">
                        <div class="columns">
                            <div class="column is-one-third">
                                <div class="card">
                                    <div class="card-image" v-if="data.getPlayerCharacter.image">
                                        <figure class="image is-3by4">
                                            <a :href="getImage(data.getPlayerCharacter.image)" title="Open image" target="_blank">
                                                <img :src="getImage(data.getPlayerCharacter.image)" :alt="data.getPlayerCharacter.name">
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
                                                <p class="title is-4">{{data.getPlayerCharacter.name}}</p>
                                                <p class="subtitle is-6">
                                                    {{data.getPlayerCharacter.class}}
                                                </p>
                                            </div>
                                        </div>
                                        <div class="content">
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <th>Race</th>
                                                        <td>{{data.getPlayerCharacter.race}}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Age</th>
                                                        <td>{{data.getPlayerCharacter.age}}</td>
                                                    </tr>
                                                    <tr v-if="data.getPlayerCharacter.height">
                                                        <th>Height</th>
                                                        <td>
                                                            <converter :value="data.getPlayerCharacter.height" type="length"></converter>
                                                        </td>
                                                    </tr>
                                                    <tr v-if="data.getPlayerCharacter.weight">
                                                        <th>Weight</th>
                                                        <td>
                                                            <converter :value="data.getPlayerCharacter.weight" type="weight"></converter>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="column is-two-thirds">
                                <section>
                                    <h4 class="title">Interaction</h4>
                                    <hr>
                                    <p v-if="data.getPlayerCharacter.interaction">{{data.getPlayerCharacter.interaction}}</p>

                                    <p v-if="data.getPlayerCharacter.voice">
                                        <strong>Voice: </strong>
                                        {{data.getPlayerCharacter.voice}}
                                    </p>
                                    <p v-if="data.getPlayerCharacter.mannerisms">
                                        <strong>Mannerisms: </strong>
                                        {{data.getPlayerCharacter.mannerisms}}
                                    </p>
                                </section>

                                <section>
                                    <h4 class="title">Personality</h4>
                                    <hr>
                                    <p v-if="data.getPlayerCharacter.personality">{{data.getPlayerCharacter.personality}}</p>

                                    <p>
                                        <strong>Alignment: </strong>
                                        <alignment :moral="data.getPlayerCharacter.alignment_moral" :order="data.getPlayerCharacter.alignment_order"></alignment>
                                    </p>

                                    <p
                                        v-for="detail in details"
                                        :key="detail.id"
                                        v-if="data.getPlayerCharacter[detail.id]"
                                    >
                                        <strong>{{detail.title}}: </strong>
                                        <span class="detail">
                                            {{data.getPlayerCharacter[detail.id]}}
                                        </span>
                                    </p>
                                </section>

                                <section
                                    v-for="article in articles"
                                    :key="article.id"
                                    v-if="data.getPlayerCharacter[article.id]"
                                >
                                    <h4 class="title">{{article.title}}</h4>
                                    <hr>
                                    <p class="article">
                                        {{data.getPlayerCharacter[article.id]}}
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
    import {getPlayerCharacter} from '../../graphql/queries';
    import {components} from 'aws-amplify-vue';
    import Converter from '../../components/Converter';
    import Alignment from '../../components/Alignment';
    import CharacterView from './CharacterView';

    @Component({
        components: {
            Alignment,
            Converter,
            ...components,
        },
    })
    export default class Character extends CharacterView {
        query = getPlayerCharacter;
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
