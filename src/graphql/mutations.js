/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCampaignLog = `mutation CreateCampaignLog(
  $input: CreateCampaignLogInput!
  $condition: ModelCampaignLogConditionInput
) {
  createCampaignLog(input: $input, condition: $condition) {
    id
    dm
    date
    title
    content
    highlights
  }
}
`;
export const updateCampaignLog = `mutation UpdateCampaignLog(
  $input: UpdateCampaignLogInput!
  $condition: ModelCampaignLogConditionInput
) {
  updateCampaignLog(input: $input, condition: $condition) {
    id
    dm
    date
    title
    content
    highlights
  }
}
`;
export const deleteCampaignLog = `mutation DeleteCampaignLog(
  $input: DeleteCampaignLogInput!
  $condition: ModelCampaignLogConditionInput
) {
  deleteCampaignLog(input: $input, condition: $condition) {
    id
    dm
    date
    title
    content
    highlights
  }
}
`;
export const createNonPlayerCharacter = `mutation CreateNonPlayerCharacter(
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
export const updateNonPlayerCharacter = `mutation UpdateNonPlayerCharacter(
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
export const deleteNonPlayerCharacter = `mutation DeleteNonPlayerCharacter(
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
