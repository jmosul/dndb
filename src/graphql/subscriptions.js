/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCombatant = /* GraphQL */ `
  subscription OnCreateCombatant($dm: String!) {
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
export const onUpdateCombatant = /* GraphQL */ `
  subscription OnUpdateCombatant($dm: String!) {
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
export const onDeleteCombatant = /* GraphQL */ `
  subscription OnDeleteCombatant($dm: String!) {
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
export const onCreateEncounter = /* GraphQL */ `
  subscription OnCreateEncounter($dm: String!) {
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
export const onUpdateEncounter = /* GraphQL */ `
  subscription OnUpdateEncounter($dm: String!) {
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
export const onDeleteEncounter = /* GraphQL */ `
  subscription OnDeleteEncounter($dm: String!) {
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
export const onCreateCampaignLog = /* GraphQL */ `
  subscription OnCreateCampaignLog($dm: String!) {
    onCreateCampaignLog(dm: $dm) {
      id
      dm
      date
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
      date
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
      date
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
export const onCreatePlayerCharacter = /* GraphQL */ `
  subscription OnCreatePlayerCharacter($dm: String!) {
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
export const onUpdatePlayerCharacter = /* GraphQL */ `
  subscription OnUpdatePlayerCharacter($dm: String!) {
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
export const onDeletePlayerCharacter = /* GraphQL */ `
  subscription OnDeletePlayerCharacter($dm: String!) {
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
