import {API} from 'aws-amplify';

const listWorlds = `
  query ListWorlds(
    $id: ID
    $filter: ModelWorldFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listWorlds(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        title
        slug
        content
        createdAt
        updatedAt
        parties {
          items {
            id
            name
            slug
          }
          nextToken
        }
      }
    }
  }
`;

export default {
    async load({commit}) {
        return API.graphql({query: listWorlds, authMode: 'AWS_IAM'}).then(
            (response) => {
                const worlds = response.data.listWorlds.items;

                commit('worlds', worlds);

                return worlds;
            }
        );
    },
    setCurrentBySlug({commit, state}, setSlug) {
        const worlds = state.worlds || [];
        const match = worlds.filter(({slug}) => slug === setSlug)[0] || {};

        commit('currentId', match.id);
    },
};
