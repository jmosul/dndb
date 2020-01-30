/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCampaignLog = `query GetCampaignLog($id: ID!) {
  getCampaignLog(id: $id) {
    id
    dm
    date
    title
    content
    highlights
  }
}
`;
export const listCampaignLogs = `query ListCampaignLogs(
  $filter: ModelCampaignLogFilterInput
  $limit: Int
  $nextToken: String
) {
  listCampaignLogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      dm
      date
      title
      content
      highlights
    }
    nextToken
  }
}
`;
export const getNonPlayerCharacter = `query GetNonPlayerCharacter($id: ID!) {
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
    party_opinion
  }
}
`;
export const listNonPlayerCharacters = `query ListNonPlayerCharacters(
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
      party_opinion
    }
    nextToken
  }
}
`;
