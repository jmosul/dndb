/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNonPlayerCharacter = /* GraphQL */ `
  query GetNonPlayerCharacter($id: ID!) {
    getNonPlayerCharacter(id: $id) {
      dm
      id
      name
      class
      occupation
      race
      age
      height
      weight
      description
      history
      voice
      strength
      dexterity
      constitution
      intelligence
      wisdom
      charisma
      alignment_moral
      alignment_order
      personality
      ideal
      bond
      flaw
      talent
      mannerisms
      interaction
      secrets
      notes
      image
    }
  }
`;
export const listNonPlayerCharacters = /* GraphQL */ `
  query ListNonPlayerCharacters(
    $filter: ModelNonPlayerCharacterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNonPlayerCharacters(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        dm
        id
        name
        class
        occupation
        race
        age
        height
        weight
        description
        history
        voice
        strength
        dexterity
        constitution
        intelligence
        wisdom
        charisma
        alignment_moral
        alignment_order
        personality
        ideal
        bond
        flaw
        talent
        mannerisms
        interaction
        secrets
        notes
        image
      }
      nextToken
    }
  }
`;
