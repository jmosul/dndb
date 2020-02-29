/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCampaign = /* GraphQL */ `
  mutation CreateCampaign(
    $input: CreateCampaignInput!
    $condition: ModelCampaignConditionInput
  ) {
    createCampaign(input: $input, condition: $condition) {
      id
      dm
      name
      image
    }
  }
`;
export const updateCampaign = /* GraphQL */ `
  mutation UpdateCampaign(
    $input: UpdateCampaignInput!
    $condition: ModelCampaignConditionInput
  ) {
    updateCampaign(input: $input, condition: $condition) {
      id
      dm
      name
      image
    }
  }
`;
export const deleteCampaign = /* GraphQL */ `
  mutation DeleteCampaign(
    $input: DeleteCampaignInput!
    $condition: ModelCampaignConditionInput
  ) {
    deleteCampaign(input: $input, condition: $condition) {
      id
      dm
      name
      image
    }
  }
`;
export const createCampaignLog = /* GraphQL */ `
  mutation CreateCampaignLog(
    $input: CreateCampaignLogInput!
    $condition: ModelCampaignLogConditionInput
  ) {
    createCampaignLog(input: $input, condition: $condition) {
      id
      dm
      campaignId
      date
      dale_reckoning
      title
      content
      highlights
    }
  }
`;
export const updateCampaignLog = /* GraphQL */ `
  mutation UpdateCampaignLog(
    $input: UpdateCampaignLogInput!
    $condition: ModelCampaignLogConditionInput
  ) {
    updateCampaignLog(input: $input, condition: $condition) {
      id
      dm
      campaignId
      date
      dale_reckoning
      title
      content
      highlights
    }
  }
`;
export const deleteCampaignLog = /* GraphQL */ `
  mutation DeleteCampaignLog(
    $input: DeleteCampaignLogInput!
    $condition: ModelCampaignLogConditionInput
  ) {
    deleteCampaignLog(input: $input, condition: $condition) {
      id
      dm
      campaignId
      date
      dale_reckoning
      title
      content
      highlights
    }
  }
`;
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
      image
      party_opinion
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
      image
      party_opinion
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
      image
      party_opinion
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
      dm
      dale_reckoning
      public
      title
      type
      campaign {
        id
        dm
        name
        image
      }
      log {
        id
        dm
        campaignId
        date
        dale_reckoning
        title
        content
        highlights
      }
      history {
        id
        dm
        content
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
      dm
      dale_reckoning
      public
      title
      type
      campaign {
        id
        dm
        name
        image
      }
      log {
        id
        dm
        campaignId
        date
        dale_reckoning
        title
        content
        highlights
      }
      history {
        id
        dm
        content
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
      dm
      dale_reckoning
      public
      title
      type
      campaign {
        id
        dm
        name
        image
      }
      log {
        id
        dm
        campaignId
        date
        dale_reckoning
        title
        content
        highlights
      }
      history {
        id
        dm
        content
      }
    }
  }
`;
export const createHistoryOccurrence = /* GraphQL */ `
  mutation CreateHistoryOccurrence(
    $input: CreateHistoryOccurrenceInput!
    $condition: ModelHistoryOccurrenceConditionInput
  ) {
    createHistoryOccurrence(input: $input, condition: $condition) {
      id
      dm
      content
    }
  }
`;
export const updateHistoryOccurrence = /* GraphQL */ `
  mutation UpdateHistoryOccurrence(
    $input: UpdateHistoryOccurrenceInput!
    $condition: ModelHistoryOccurrenceConditionInput
  ) {
    updateHistoryOccurrence(input: $input, condition: $condition) {
      id
      dm
      content
    }
  }
`;
export const deleteHistoryOccurrence = /* GraphQL */ `
  mutation DeleteHistoryOccurrence(
    $input: DeleteHistoryOccurrenceInput!
    $condition: ModelHistoryOccurrenceConditionInput
  ) {
    deleteHistoryOccurrence(input: $input, condition: $condition) {
      id
      dm
      content
    }
  }
`;
