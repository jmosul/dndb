<template>
    <section class="list characters">
        <div class="hero is-primary">
            <div class="hero-body">
                <h1 class="title">Characters</h1>
            </div>
        </div>
        <div class="container">
            <amplify-connect :query="listPlayersQuery">
                <template slot-scope="{loading, data, errors}">
                    <div v-if="loading">Loading...</div>
                    <div v-else-if="errors.length > 0">Error</div>
                    <div v-else-if="data">
                        <b-table
                            :data="data.listNonPlayerCharacters.items"
                            :paginated="true"
                            :per-page="10"
                            default-sort="name"
                            detailed
                            ref="table"
                        >
                            <template slot-scope="{row}">
                                <b-table-column field="name" label="Name" sortable searchable>
                                    <a
                                        @click="toggle(row)"
                                        :title="row.name"
                                    >
                                        {{row.name}}
                                    </a>
                                </b-table-column>

                                <b-table-column field="occupation" label="Occupation" sortable>
                                    {{row.occupation}}
                                </b-table-column>

                                <b-table-column field="race" label="Race" sortable>
                                    {{row.race}}
                                </b-table-column>
                            </template>

                            <template slot="detail" slot-scope="{row}">
                                <article class="media">
                                    <figure class="media-left">
                                        <p class="image is-64">
                                            <img :src="getPhoto(row)" :alt="row.name">
                                        </p>
                                    </figure>
                                    <div class="media-content">
                                        <div class="content">
                                            <p>
                                                {{row.description}}
                                            </p>
                                            <p class="has-text-right">
                                                <a
                                                    @click="openCharacter(row)"
                                                    title="Open"
                                                    class="button is-primary"
                                                >
                                                    More...
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </template>
                        </b-table>
                    </div>
                </template>
            </amplify-connect>
        </div>
    </section>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import {listNonPlayerCharacters} from '../graphql/queries';

    @Component()
    export default class Characters extends Vue {
        get listPlayersQuery() {
            return this.$Amplify.graphqlOperation(listNonPlayerCharacters, {
                limit: 100,
            });
        }

        /**
         * @param {object} character
         * @return {string}
         */
        getPhoto({image}) {
            return `/images/characters/${image}`;
        }

        /**
         * @param {object} row
         */
        toggle(row) {
            this.$refs.table.toggleDetails(row);
        }

        openCharacter({id}) {
            this.$router.push({
                name: 'character',
                params: {id},
            });
        }
    }
</script>

<style scoped lang="scss">
    .image.is-64 {
        width: 64px;
    }
</style>
