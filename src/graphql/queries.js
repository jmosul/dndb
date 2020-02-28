/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCombatant = `query GetCombatant($id: ID!) {
  getCombatant(id: $id) {
    id
    dm
    encounterId
    name
    creature
    type
    type_id
    initiative
    damage_taken
    hit_points
    armour_class
    team
    blinded
    charmed
    deafened
    exhaustion
    frightened
    grappled
    incapacitated
    invisible
    paralyzed
    petrified
    poisoned
    prone
    restrained
    stunned
    unconscious
    disadvantage
    advantage
  }
}
`;
export const listCombatants = `query ListCombatants(
  $filter: ModelCombatantFilterInput
  $limit: Int
  $nextToken: String
) {
  listCombatants(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      dm
      encounterId
      name
      creature
      type
      type_id
      initiative
      damage_taken
      hit_points
      armour_class
      team
      blinded
      charmed
      deafened
      exhaustion
      frightened
      grappled
      incapacitated
      invisible
      paralyzed
      petrified
      poisoned
      prone
      restrained
      stunned
      unconscious
      disadvantage
      advantage
    }
    nextToken
  }
}
`;
export const getEncounter = `query GetEncounter($id: ID!) {
  getEncounter(id: $id) {
    id
    dm
    name
    started
    combatants {
      items {
        id
        dm
        encounterId
        name
        creature
        type
        type_id
        initiative
        damage_taken
        hit_points
        armour_class
        team
        blinded
        charmed
        deafened
        exhaustion
        frightened
        grappled
        incapacitated
        invisible
        paralyzed
        petrified
        poisoned
        prone
        restrained
        stunned
        unconscious
        disadvantage
        advantage
      }
      nextToken
    }
  }
}
`;
export const listEncounters = `query ListEncounters(
  $filter: ModelEncounterFilterInput
  $limit: Int
  $nextToken: String
) {
  listEncounters(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      dm
      name
      started
      combatants {
        nextToken
      }
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
export const getPlayerCharacter = `query GetPlayerCharacter($id: ID!) {
  getPlayerCharacter(id: $id) {
    dm
    id
    name
    player
    class
    race
    status
    age
    height
    weight
    description
    alignment_moral
    alignment_order
    ideal
    bond
    flaw
    history
    joined
    secrets
    notes
    image
  }
}
`;
export const listPlayerCharacters = `query ListPlayerCharacters(
  $filter: ModelPlayerCharacterFilterInput
  $limit: Int
  $nextToken: String
) {
  listPlayerCharacters(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      dm
      id
      name
      player
      class
      race
      status
      age
      height
      weight
      description
      alignment_moral
      alignment_order
      ideal
      bond
      flaw
      history
      joined
      secrets
      notes
      image
    }
    nextToken
  }
}
`;
export const getCampaign = `query GetCampaign($id: ID!) {
  getCampaign(id: $id) {
    id
    dm
    name
    image
  }
}
`;
export const listCampaigns = `query ListCampaigns(
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
export const getCampaignLog = `query GetCampaignLog($id: ID!) {
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
export const listCampaignLogs = `query ListCampaignLogs(
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
export const getOccurrence = `query GetOccurrence($id: ID!) {
  getOccurrence(id: $id) {
    id
    dm
    dale_reckoning
    public
    title
    history {
      id
      dm
      content
    }
  }
}
`;
export const listOccurrences = `query ListOccurrences(
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
export const listHistoryOccurrences = `query ListHistoryOccurrences(
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
export const getHistoryOccurrence = `query GetHistoryOccurrence($id: ID!) {
  getHistoryOccurrence(id: $id) {
    id
    dm
    content
  }
}
`;
