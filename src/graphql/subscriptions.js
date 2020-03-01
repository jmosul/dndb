/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePartyMember = /* GraphQL */ `
  subscription OnCreatePartyMember($dm: String!) {
    onCreatePartyMember(dm: $dm) {
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
export const onUpdatePartyMember = /* GraphQL */ `
  subscription OnUpdatePartyMember($dm: String!) {
    onUpdatePartyMember(dm: $dm) {
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
export const onDeletePartyMember = /* GraphQL */ `
  subscription OnDeletePartyMember($dm: String!) {
    onDeletePartyMember(dm: $dm) {
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
export const onCreateCampaign = /* GraphQL */ `
  subscription OnCreateCampaign($dm: String!) {
    onCreateCampaign(dm: $dm) {
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
export const onUpdateCampaign = /* GraphQL */ `
  subscription OnUpdateCampaign($dm: String!) {
    onUpdateCampaign(dm: $dm) {
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
export const onDeleteCampaign = /* GraphQL */ `
  subscription OnDeleteCampaign($dm: String!) {
    onDeleteCampaign(dm: $dm) {
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
export const onCreateCampaignLog = /* GraphQL */ `
  subscription OnCreateCampaignLog($dm: String!) {
    onCreateCampaignLog(dm: $dm) {
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
export const onUpdateCampaignLog = /* GraphQL */ `
  subscription OnUpdateCampaignLog($dm: String!) {
    onUpdateCampaignLog(dm: $dm) {
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
export const onDeleteCampaignLog = /* GraphQL */ `
  subscription OnDeleteCampaignLog($dm: String!) {
    onDeleteCampaignLog(dm: $dm) {
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
export const onCreateNonPlayerCharacter = /* GraphQL */ `
  subscription OnCreateNonPlayerCharacter($dm: String!) {
    onCreateNonPlayerCharacter(dm: $dm) {
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
export const onUpdateNonPlayerCharacter = /* GraphQL */ `
  subscription OnUpdateNonPlayerCharacter($dm: String!) {
    onUpdateNonPlayerCharacter(dm: $dm) {
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
export const onDeleteNonPlayerCharacter = /* GraphQL */ `
  subscription OnDeleteNonPlayerCharacter($dm: String!) {
    onDeleteNonPlayerCharacter(dm: $dm) {
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
export const onCreateOccurrence = /* GraphQL */ `
  subscription OnCreateOccurrence($dm: String!) {
    onCreateOccurrence(dm: $dm) {
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
export const onUpdateOccurrence = /* GraphQL */ `
  subscription OnUpdateOccurrence($dm: String!) {
    onUpdateOccurrence(dm: $dm) {
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
export const onDeleteOccurrence = /* GraphQL */ `
  subscription OnDeleteOccurrence($dm: String!) {
    onDeleteOccurrence(dm: $dm) {
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
export const onCreateHistoryOccurrence = /* GraphQL */ `
  subscription OnCreateHistoryOccurrence($dm: String!) {
    onCreateHistoryOccurrence(dm: $dm) {
      id
      dm
      content
    }
  }
`;
export const onUpdateHistoryOccurrence = /* GraphQL */ `
  subscription OnUpdateHistoryOccurrence($dm: String!) {
    onUpdateHistoryOccurrence(dm: $dm) {
      id
      dm
      content
    }
  }
`;
export const onDeleteHistoryOccurrence = /* GraphQL */ `
  subscription OnDeleteHistoryOccurrence($dm: String!) {
    onDeleteHistoryOccurrence(dm: $dm) {
      id
      dm
      content
    }
  }
`;
export const onCreatePlayer = /* GraphQL */ `
  subscription OnCreatePlayer($dm: String!) {
    onCreatePlayer(dm: $dm) {
      id
      dm
      name
    }
  }
`;
export const onUpdatePlayer = /* GraphQL */ `
  subscription OnUpdatePlayer($dm: String!) {
    onUpdatePlayer(dm: $dm) {
      id
      dm
      name
    }
  }
`;
export const onDeletePlayer = /* GraphQL */ `
  subscription OnDeletePlayer($dm: String!) {
    onDeletePlayer(dm: $dm) {
      id
      dm
      name
    }
  }
`;
export const onCreatePlayerCharacter = /* GraphQL */ `
  subscription OnCreatePlayerCharacter($dm: String!) {
    onCreatePlayerCharacter(dm: $dm) {
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
export const onUpdatePlayerCharacter = /* GraphQL */ `
  subscription OnUpdatePlayerCharacter($dm: String!) {
    onUpdatePlayerCharacter(dm: $dm) {
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
export const onDeletePlayerCharacter = /* GraphQL */ `
  subscription OnDeletePlayerCharacter($dm: String!) {
    onDeletePlayerCharacter(dm: $dm) {
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
export const onCreateCharacterSheet = /* GraphQL */ `
  subscription OnCreateCharacterSheet($dm: String!) {
    onCreateCharacterSheet(dm: $dm) {
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
export const onUpdateCharacterSheet = /* GraphQL */ `
  subscription OnUpdateCharacterSheet($dm: String!) {
    onUpdateCharacterSheet(dm: $dm) {
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
export const onDeleteCharacterSheet = /* GraphQL */ `
  subscription OnDeleteCharacterSheet($dm: String!) {
    onDeleteCharacterSheet(dm: $dm) {
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
