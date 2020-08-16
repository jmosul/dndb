/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listWorlds = /* GraphQL */ `
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
        parties {
          nextToken
        }
        characters {
          nextToken
        }
        occurrences {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getWorld = /* GraphQL */ `
  query GetWorld($id: ID!) {
    getWorld(id: $id) {
      id
      title
      slug
      content
      parties {
        items {
          id
          name
          slug
        }
        nextToken
      }
      characters {
        items {
          id
          name
          type
        }
        nextToken
      }
      occurrences {
        items {
          id
          title
          content
          reckoning
          status
          type
        }
        nextToken
      }
    }
  }
`;
export const listPartys = /* GraphQL */ `
  query ListPartys(
    $id: ID
    $filter: ModelPartyFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPartys(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        slug
        world {
          id
          title
          slug
        }
        characters {
          nextToken
        }
        occurrences {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getParty = /* GraphQL */ `
  query GetParty($id: ID!) {
    getParty(id: $id) {
      id
      name
      slug
      world {
        id
        title
        slug
        parties {
          nextToken
        }
        characters {
          nextToken
        }
        occurrences {
          nextToken
        }
      }
      characters {
        items {
          id
          name
          type
          avatar
        }
        nextToken
      }
      occurrences {
        items {
          id
          title
          content
          reckoning
          status
          type
        }
        nextToken
      }
    }
  }
`;
export const listCharacters = /* GraphQL */ `
  query ListCharacters(
    $id: ID
    $filter: ModelCharacterFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCharacters(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        type
        avatar
        alignment
        gender
        name
        race
        world {
          id
          title
          slug
        }
        party {
          id
          name
          slug
        }
        occurrences {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getCharacter = /* GraphQL */ `
  query GetCharacter($id: ID!) {
    getCharacter(id: $id) {
      id
      name
      type
      avatar
      alignment
      gender
      name
      race
      world {
        id
        title
        slug
        parties {
          nextToken
        }
        characters {
          nextToken
        }
        occurrences {
          nextToken
        }
      }
      party {
        id
        name
        slug
        world {
          id
          title
          slug
        }
        characters {
          nextToken
        }
        occurrences {
          nextToken
        }
      }
      occurrences {
        items {
          id
          title
          content
          reckoning
          status
          type
        }
        nextToken
      }
    }
  }
`;
export const name = /* GraphQL */ `
  query Name(
    $type: CharacterType
    $sortDirection: ModelSortDirection
    $filter: ModelCharacterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    name(
      type: $type
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        type
        world {
          id
          title
          slug
        }
        party {
          id
          name
          slug
        }
        occurrences {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getOccurrence = /* GraphQL */ `
  query GetOccurrence($id: ID!) {
    getOccurrence(id: $id) {
      id
      title
      content
      reckoning
      status
      type
      world {
        id
        title
        slug
        parties {
          nextToken
        }
        characters {
          nextToken
        }
        occurrences {
          nextToken
        }
      }
      party {
        id
        name
        slug
        world {
          id
          title
          slug
        }
        characters {
          nextToken
        }
        occurrences {
          nextToken
        }
      }
      character {
        id
        name
        type
        world {
          id
          title
          slug
        }
        party {
          id
          name
          slug
        }
        occurrences {
          nextToken
        }
      }
    }
  }
`;
export const listOccurrences = /* GraphQL */ `
  query ListOccurrences(
    $id: ID
    $filter: ModelOccurrenceFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listOccurrences(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        title
        content
        reckoning
        status
        type
        world {
          id
          title
          slug
        }
        party {
          id
          name
          slug
        }
        character {
          id
          name
          type
        }
      }
      nextToken
    }
  }
`;
export const reckoning = /* GraphQL */ `
  query Reckoning(
    $type: OccurrenceType
    $sortDirection: ModelSortDirection
    $filter: ModelOccurrenceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    reckoning(
      type: $type
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        content
        reckoning
        status
        type
        world {
          id
          title
          slug
        }
        party {
          id
          name
          slug
        }
        character {
          id
          name
          type
        }
      }
      nextToken
    }
  }
`;
