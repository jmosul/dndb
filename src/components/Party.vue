<template>
    <div class="party is-italic">
        <div class="party__avatars">
            <div v-for="member in members" :key="member.id" class="px-2 py-2">
                <div class="card">
                    <div class="card-content px-2 py-2">
                        <div class="media">
                            <div class="media-left">
                                <figure class="image is-64x64">
                                    <img :src="member.avatar" v-if="member.avatar" :alt="member.name"/>
                                </figure>
                            </div>
                            <div class="media-content">
                                <p class="title is-5">{{member.name}}</p>
                                <p class="subtitle is-6">{{member.race}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Component from 'vue-class-component';
    import {Prop} from 'vue-property-decorator';
    import {API, graphqlOperation} from 'aws-amplify';
    import AppComponent from './AppComponent';
    import {sortByKey} from '../methods';

    const getParty = /* GraphQL */ `
      query GetParty($id: ID!) {
        getParty(id: $id) {
          id
          name
          slug
          characters {
            items {
              id
              name
              type
              race
              avatar
            }
            nextToken
          }
        }
      }
    `;

    @Component()
    export default class Party extends AppComponent {
        @Prop(String) partyId;

        party = {};
        members = [];

        mounted() {
            this.loadParty();
        }

        async loadParty() {
            this.loading = true;

            try {
                const response = await API.graphql(graphqlOperation(getParty, {id: this.partyId}));

                this.party = response.data['getParty'];
                this.members = sortByKey(this.party.characters.items, 'name');

            }
            catch (e) {
                this.loading = false;

                return this.showGraphQlError(e);
            }

            this.loading = false;
        }
    }
</script>

<style scoped lang="scss">
    .party {
        width: 100%;

        .party__avatars {
            width: 100%;
            display: flex;

            flex-wrap: wrap;

            > * {
                flex: 0 0 50%;
            }
        }

        .media {
            align-items: flex-start;

            .media-left {
                flex-shrink: 1;
            }

            .media-content {
                flex-shrink: 0;
            }
        }

    }
</style>
