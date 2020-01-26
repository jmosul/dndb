/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNonPlayerCharacter = /* GraphQL */ `
  mutation CreateNonPlayerCharacter(
    $input: CreateNonPlayerCharacterInput!
    $condition: ModelNonPlayerCharacterConditionInput
  ) {
    createNonPlayerCharacter(input: $input, condition: $condition) {
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
    }
  }
`;
export const updateNonPlayerCharacter = /* GraphQL */ `
  mutation UpdateNonPlayerCharacter(
    $input: UpdateNonPlayerCharacterInput!
    $condition: ModelNonPlayerCharacterConditionInput
  ) {
    updateNonPlayerCharacter(input: $input, condition: $condition) {
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
    }
  }
`;
export const deleteNonPlayerCharacter = /* GraphQL */ `
  mutation DeleteNonPlayerCharacter(
    $input: DeleteNonPlayerCharacterInput!
    $condition: ModelNonPlayerCharacterConditionInput
  ) {
    deleteNonPlayerCharacter(input: $input, condition: $condition) {
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
    }
  }
`;
