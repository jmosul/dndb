/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createWorld = /* GraphQL */ `
  mutation CreateWorld(
    $input: CreateWorldInput!
    $condition: ModelWorldConditionInput
  ) {
    createWorld(input: $input, condition: $condition) {
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
      characters {
        items {
          id
          name
          type
          avatar
          race
          alignment
          gender
          status
        }
        nextToken
      }
      occurrences {
        items {
          id
          title
          summary
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
export const updateWorld = /* GraphQL */ `
  mutation UpdateWorld(
    $input: UpdateWorldInput!
    $condition: ModelWorldConditionInput
  ) {
    updateWorld(input: $input, condition: $condition) {
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
      characters {
        items {
          id
          name
          type
          avatar
          race
          alignment
          gender
          status
        }
        nextToken
      }
      occurrences {
        items {
          id
          title
          summary
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
export const deleteWorld = /* GraphQL */ `
  mutation DeleteWorld(
    $input: DeleteWorldInput!
    $condition: ModelWorldConditionInput
  ) {
    deleteWorld(input: $input, condition: $condition) {
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
      characters {
        items {
          id
          name
          type
          avatar
          race
          alignment
          gender
          status
        }
        nextToken
      }
      occurrences {
        items {
          id
          title
          summary
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
export const createParty = /* GraphQL */ `
  mutation CreateParty(
    $input: CreatePartyInput!
    $condition: ModelPartyConditionInput
  ) {
    createParty(input: $input, condition: $condition) {
      id
      name
      slug
      world {
        id
        title
        slug
        content
        createdAt
        updatedAt
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
          race
          alignment
          gender
          status
        }
        nextToken
      }
      occurrences {
        items {
          id
          title
          summary
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
export const updateParty = /* GraphQL */ `
  mutation UpdateParty(
    $input: UpdatePartyInput!
    $condition: ModelPartyConditionInput
  ) {
    updateParty(input: $input, condition: $condition) {
      id
      name
      slug
      world {
        id
        title
        slug
        content
        createdAt
        updatedAt
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
          race
          alignment
          gender
          status
        }
        nextToken
      }
      occurrences {
        items {
          id
          title
          summary
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
export const deleteParty = /* GraphQL */ `
  mutation DeleteParty(
    $input: DeletePartyInput!
    $condition: ModelPartyConditionInput
  ) {
    deleteParty(input: $input, condition: $condition) {
      id
      name
      slug
      world {
        id
        title
        slug
        content
        createdAt
        updatedAt
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
          race
          alignment
          gender
          status
        }
        nextToken
      }
      occurrences {
        items {
          id
          title
          summary
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
export const createCharacter = /* GraphQL */ `
  mutation CreateCharacter(
    $input: CreateCharacterInput!
    $condition: ModelCharacterConditionInput
  ) {
    createCharacter(input: $input, condition: $condition) {
      id
      name
      type
      avatar
      race
      alignment
      gender
      status
      world {
        id
        title
        slug
        content
        createdAt
        updatedAt
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
          content
          createdAt
          updatedAt
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
          summary
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
export const updateCharacter = /* GraphQL */ `
  mutation UpdateCharacter(
    $input: UpdateCharacterInput!
    $condition: ModelCharacterConditionInput
  ) {
    updateCharacter(input: $input, condition: $condition) {
      id
      name
      type
      avatar
      race
      alignment
      gender
      status
      world {
        id
        title
        slug
        content
        createdAt
        updatedAt
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
          content
          createdAt
          updatedAt
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
          summary
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
export const deleteCharacter = /* GraphQL */ `
  mutation DeleteCharacter(
    $input: DeleteCharacterInput!
    $condition: ModelCharacterConditionInput
  ) {
    deleteCharacter(input: $input, condition: $condition) {
      id
      name
      type
      avatar
      race
      alignment
      gender
      status
      world {
        id
        title
        slug
        content
        createdAt
        updatedAt
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
          content
          createdAt
          updatedAt
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
          summary
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
export const createOccurrence = /* GraphQL */ `
  mutation CreateOccurrence(
    $input: CreateOccurrenceInput!
    $condition: ModelOccurrenceConditionInput
  ) {
    createOccurrence(input: $input, condition: $condition) {
      id
      title
      summary
      content
      reckoning
      status
      type
      world {
        id
        title
        slug
        content
        createdAt
        updatedAt
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
          content
          createdAt
          updatedAt
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
        avatar
        race
        alignment
        gender
        status
        world {
          id
          title
          slug
          content
          createdAt
          updatedAt
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
export const updateOccurrence = /* GraphQL */ `
  mutation UpdateOccurrence(
    $input: UpdateOccurrenceInput!
    $condition: ModelOccurrenceConditionInput
  ) {
    updateOccurrence(input: $input, condition: $condition) {
      id
      title
      summary
      content
      reckoning
      status
      type
      world {
        id
        title
        slug
        content
        createdAt
        updatedAt
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
          content
          createdAt
          updatedAt
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
        avatar
        race
        alignment
        gender
        status
        world {
          id
          title
          slug
          content
          createdAt
          updatedAt
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
export const deleteOccurrence = /* GraphQL */ `
  mutation DeleteOccurrence(
    $input: DeleteOccurrenceInput!
    $condition: ModelOccurrenceConditionInput
  ) {
    deleteOccurrence(input: $input, condition: $condition) {
      id
      title
      summary
      content
      reckoning
      status
      type
      world {
        id
        title
        slug
        content
        createdAt
        updatedAt
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
          content
          createdAt
          updatedAt
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
        avatar
        race
        alignment
        gender
        status
        world {
          id
          title
          slug
          content
          createdAt
          updatedAt
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
