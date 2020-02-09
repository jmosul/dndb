/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCombatant = /* GraphQL */ `
  mutation CreateCombatant(
    $input: CreateCombatantInput!
    $condition: ModelCombatantConditionInput
  ) {
    createCombatant(input: $input, condition: $condition) {
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
export const updateCombatant = /* GraphQL */ `
  mutation UpdateCombatant(
    $input: UpdateCombatantInput!
    $condition: ModelCombatantConditionInput
  ) {
    updateCombatant(input: $input, condition: $condition) {
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
export const deleteCombatant = /* GraphQL */ `
  mutation DeleteCombatant(
    $input: DeleteCombatantInput!
    $condition: ModelCombatantConditionInput
  ) {
    deleteCombatant(input: $input, condition: $condition) {
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
export const createEncounter = /* GraphQL */ `
  mutation CreateEncounter(
    $input: CreateEncounterInput!
    $condition: ModelEncounterConditionInput
  ) {
    createEncounter(input: $input, condition: $condition) {
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
export const updateEncounter = /* GraphQL */ `
  mutation UpdateEncounter(
    $input: UpdateEncounterInput!
    $condition: ModelEncounterConditionInput
  ) {
    updateEncounter(input: $input, condition: $condition) {
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
export const deleteEncounter = /* GraphQL */ `
  mutation DeleteEncounter(
    $input: DeleteEncounterInput!
    $condition: ModelEncounterConditionInput
  ) {
    deleteEncounter(input: $input, condition: $condition) {
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
export const createCampaignLog = /* GraphQL */ `
  mutation CreateCampaignLog(
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
export const updateCampaignLog = /* GraphQL */ `
  mutation UpdateCampaignLog(
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
export const deleteCampaignLog = /* GraphQL */ `
  mutation DeleteCampaignLog(
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
export const createPlayerCharacter = /* GraphQL */ `
  mutation CreatePlayerCharacter(
    $input: CreatePlayerCharacterInput!
    $condition: ModelPlayerCharacterConditionInput
  ) {
    createPlayerCharacter(input: $input, condition: $condition) {
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
export const updatePlayerCharacter = /* GraphQL */ `
  mutation UpdatePlayerCharacter(
    $input: UpdatePlayerCharacterInput!
    $condition: ModelPlayerCharacterConditionInput
  ) {
    updatePlayerCharacter(input: $input, condition: $condition) {
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
export const deletePlayerCharacter = /* GraphQL */ `
  mutation DeletePlayerCharacter(
    $input: DeletePlayerCharacterInput!
    $condition: ModelPlayerCharacterConditionInput
  ) {
    deletePlayerCharacter(input: $input, condition: $condition) {
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
