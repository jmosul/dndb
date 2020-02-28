/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCampaign = `subscription OnCreateCampaign($dm: String!) {
  onCreateCampaign(dm: $dm) {
    id
    dm
    name
    image
  }
}
`;
export const onUpdateCampaign = `subscription OnUpdateCampaign($dm: String!) {
  onUpdateCampaign(dm: $dm) {
    id
    dm
    name
    image
  }
}
`;
export const onDeleteCampaign = `subscription OnDeleteCampaign($dm: String!) {
  onDeleteCampaign(dm: $dm) {
    id
    dm
    name
    image
  }
}
`;
export const onCreateCombatant = `subscription OnCreateCombatant($dm: String!) {
  onCreateCombatant(dm: $dm) {
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
export const onUpdateCombatant = `subscription OnUpdateCombatant($dm: String!) {
  onUpdateCombatant(dm: $dm) {
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
export const onDeleteCombatant = `subscription OnDeleteCombatant($dm: String!) {
  onDeleteCombatant(dm: $dm) {
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
export const onCreateEncounter = `subscription OnCreateEncounter($dm: String!) {
  onCreateEncounter(dm: $dm) {
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
export const onUpdateEncounter = `subscription OnUpdateEncounter($dm: String!) {
  onUpdateEncounter(dm: $dm) {
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
export const onDeleteEncounter = `subscription OnDeleteEncounter($dm: String!) {
  onDeleteEncounter(dm: $dm) {
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
export const onCreateCampaignLog = `subscription OnCreateCampaignLog($dm: String!) {
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
export const onUpdateCampaignLog = `subscription OnUpdateCampaignLog($dm: String!) {
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
export const onDeleteCampaignLog = `subscription OnDeleteCampaignLog($dm: String!) {
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
export const onCreateNonPlayerCharacter = `subscription OnCreateNonPlayerCharacter($dm: String!) {
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
export const onUpdateNonPlayerCharacter = `subscription OnUpdateNonPlayerCharacter($dm: String!) {
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
export const onDeleteNonPlayerCharacter = `subscription OnDeleteNonPlayerCharacter($dm: String!) {
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
export const onCreateOccurrence = `subscription OnCreateOccurrence($dm: String!) {
  onCreateOccurrence(dm: $dm) {
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
export const onUpdateOccurrence = `subscription OnUpdateOccurrence($dm: String!) {
  onUpdateOccurrence(dm: $dm) {
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
export const onDeleteOccurrence = `subscription OnDeleteOccurrence($dm: String!) {
  onDeleteOccurrence(dm: $dm) {
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
export const onCreateHistoryOccurrence = `subscription OnCreateHistoryOccurrence($dm: String!) {
  onCreateHistoryOccurrence(dm: $dm) {
    id
    dm
    content
  }
}
`;
export const onUpdateHistoryOccurrence = `subscription OnUpdateHistoryOccurrence($dm: String!) {
  onUpdateHistoryOccurrence(dm: $dm) {
    id
    dm
    content
  }
}
`;
export const onDeleteHistoryOccurrence = `subscription OnDeleteHistoryOccurrence($dm: String!) {
  onDeleteHistoryOccurrence(dm: $dm) {
    id
    dm
    content
  }
}
`;
export const onCreatePlayerCharacter = `subscription OnCreatePlayerCharacter($dm: String!) {
  onCreatePlayerCharacter(dm: $dm) {
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
export const onUpdatePlayerCharacter = `subscription OnUpdatePlayerCharacter($dm: String!) {
  onUpdatePlayerCharacter(dm: $dm) {
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
export const onDeletePlayerCharacter = `subscription OnDeletePlayerCharacter($dm: String!) {
  onDeletePlayerCharacter(dm: $dm) {
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
