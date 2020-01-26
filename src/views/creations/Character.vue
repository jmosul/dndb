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
                                    <div class="card-image">
                                        <figure class="image is-4by3">
                                            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
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

                                <section>
                                    ABILITIES
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

    @Component({
        components,
    })
    export default class Character extends AppComponent {
        articles = [
            {
                id: 'description',
                title: 'Description',
            },
            {
                id: 'history',
                title: 'History',
            },
            {
                id: 'notes',
                title: 'Notes',
            },
        ];

        get character() {
            return this.$Amplify.graphqlOperation(getNonPlayerCharacter, {id: this.$route.params.characterId});
        }
    }
</script>
