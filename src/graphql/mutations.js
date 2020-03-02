/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPartyMember = /* GraphQL */ `
  mutation CreatePartyMember(
    $input: CreatePartyMemberInput!
    $condition: ModelPartyMemberConditionInput
  ) {
    createPartyMember(input: $input, condition: $condition) {
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
export const updatePartyMember = /* GraphQL */ `
  mutation UpdatePartyMember(
    $input: UpdatePartyMemberInput!
    $condition: ModelPartyMemberConditionInput
  ) {
    updatePartyMember(input: $input, condition: $condition) {
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
export const deletePartyMember = /* GraphQL */ `
  mutation DeletePartyMember(
    $input: DeletePartyMemberInput!
    $condition: ModelPartyMemberConditionInput
  ) {
    deletePartyMember(input: $input, condition: $condition) {
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
export const createPlayer = /* GraphQL */ `
  mutation CreatePlayer(
    $input: CreatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    createPlayer(input: $input, condition: $condition) {
      id
      dm
      name
    }
  }
`;
export const updatePlayer = /* GraphQL */ `
  mutation UpdatePlayer(
    $input: UpdatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    updatePlayer(input: $input, condition: $condition) {
      id
      dm
      name
    }
  }
`;
export const deletePlayer = /* GraphQL */ `
  mutation DeletePlayer(
    $input: DeletePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    deletePlayer(input: $input, condition: $condition) {
      id
      dm
      name
    }
  }
`;
export const createPlayerCharacter = /* GraphQL */ `
  mutation CreatePlayerCharacter(
    $input: CreatePlayerCharacterInput!
    $condition: ModelPlayerCharacterConditionInput
  ) {
    createPlayerCharacter(input: $input, condition: $condition) {
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
export const updatePlayerCharacter = /* GraphQL */ `
  mutation UpdatePlayerCharacter(
    $input: UpdatePlayerCharacterInput!
    $condition: ModelPlayerCharacterConditionInput
  ) {
    updatePlayerCharacter(input: $input, condition: $condition) {
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
export const deletePlayerCharacter = /* GraphQL */ `
  mutation DeletePlayerCharacter(
    $input: DeletePlayerCharacterInput!
    $condition: ModelPlayerCharacterConditionInput
  ) {
    deletePlayerCharacter(input: $input, condition: $condition) {
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
export const createCharacterSheet = /* GraphQL */ `
  mutation CreateCharacterSheet(
    $input: CreateCharacterSheetInput!
    $condition: ModelCharacterSheetConditionInput
  ) {
    createCharacterSheet(input: $input, condition: $condition) {
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
export const updateCharacterSheet = /* GraphQL */ `
  mutation UpdateCharacterSheet(
    $input: UpdateCharacterSheetInput!
    $condition: ModelCharacterSheetConditionInput
  ) {
    updateCharacterSheet(input: $input, condition: $condition) {
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
export const deleteCharacterSheet = /* GraphQL */ `
  mutation DeleteCharacterSheet(
    $input: DeleteCharacterSheetInput!
    $condition: ModelCharacterSheetConditionInput
  ) {
    deleteCharacterSheet(input: $input, condition: $condition) {
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
