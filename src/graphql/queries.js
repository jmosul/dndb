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
export const getPartyMember = /* GraphQL */ `
  query GetPartyMember($id: ID!) {
    getPartyMember(id: $id) {
      id
      dm
      status
      campaignId
      player {
        id
        dm
        name
      }
      character {
        id
        dm
        name
        image
        sheet {
          id
          dm
          secrets
        }
      }
    }
  }
`;
export const listPartyMembers = /* GraphQL */ `
  query ListPartyMembers(
    $filter: ModelPartyMemberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPartyMembers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        dm
        status
        campaignId
        player {
          id
          dm
          name
        }
        character {
          id
          dm
          name
          image
        }
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
        partyMembers {
          nextToken
        }
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
      partyMembers {
        items {
          id
          dm
          status
          campaignId
        }
        nextToken
      }
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
      occurrenceCampaignId
      campaign {
        id
        dm
        name
        image
        partyMembers {
          nextToken
        }
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
        occurrenceCampaignId
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
export const listPlayers = /* GraphQL */ `
  query ListPlayers(
    $filter: ModelPlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        dm
        name
      }
      nextToken
    }
  }
`;
export const getPlayer = /* GraphQL */ `
  query GetPlayer($id: ID!) {
    getPlayer(id: $id) {
      id
      dm
      name
    }
  }
`;
export const listPlayerCharacters = /* GraphQL */ `
  query ListPlayerCharacters(
    $filter: ModelPlayerCharacterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayerCharacters(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        dm
        name
        image
        sheet {
          id
          dm
          secrets
        }
      }
      nextToken
    }
  }
`;
export const getPlayerCharacter = /* GraphQL */ `
  query GetPlayerCharacter($id: ID!) {
    getPlayerCharacter(id: $id) {
      id
      dm
      name
      image
      sheet {
        id
        dm
        abilities {
          strength
          dexterity
          constitution
          intelligence
          wisdom
          charisma
        }
        secrets
      }
    }
  }
`;
export const listCharacterSheets = /* GraphQL */ `
  query ListCharacterSheets(
    $filter: ModelCharacterSheetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCharacterSheets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        dm
        abilities {
          strength
          dexterity
          constitution
          intelligence
          wisdom
          charisma
        }
        secrets
      }
      nextToken
    }
  }
`;
export const getCharacterSheet = /* GraphQL */ `
  query GetCharacterSheet($id: ID!) {
    getCharacterSheet(id: $id) {
      id
      dm
      abilities {
        strength
        dexterity
        constitution
        intelligence
        wisdom
        charisma
      }
      secrets
    }
  }
`;
