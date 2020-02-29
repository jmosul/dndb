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
      party_opinion
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
        party_opinion
      }
      nextToken
    }
  }
`;
export const listCampaigns = /* GraphQL */ `
  query ListCampaigns(
    $filter: ModelCampaignFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCampaigns(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        dm
        name
        image
      }
      nextToken
    }
  }
`;
export const getCampaign = /* GraphQL */ `
  query GetCampaign($id: ID!) {
    getCampaign(id: $id) {
      id
      dm
      name
      image
    }
  }
`;
export const listCampaignLogs = /* GraphQL */ `
  query ListCampaignLogs(
    $filter: ModelCampaignLogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCampaignLogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        dm
        campaignId
        date
        dale_reckoning
        title
        content
        highlights
      }
      nextToken
    }
  }
`;
export const getCampaignLog = /* GraphQL */ `
  query GetCampaignLog($id: ID!) {
    getCampaignLog(id: $id) {
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
export const getOccurrence = /* GraphQL */ `
  query GetOccurrence($id: ID!) {
    getOccurrence(id: $id) {
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
export const listOccurrences = /* GraphQL */ `
  query ListOccurrences(
    $filter: ModelOccurrenceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOccurrences(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const listHistoryOccurrences = /* GraphQL */ `
  query ListHistoryOccurrences(
    $filter: ModelHistoryOccurrenceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHistoryOccurrences(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        dm
        content
      }
      nextToken
    }
  }
`;
export const getHistoryOccurrence = /* GraphQL */ `
  query GetHistoryOccurrence($id: ID!) {
    getHistoryOccurrence(id: $id) {
      id
      dm
      content
    }
  }
`;
