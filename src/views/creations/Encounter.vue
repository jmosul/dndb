<template>
    <div class="encounter">
        <amplify-connect
            :query="encounterQuery"
            v-if="$route.params.id"
        >
            <template slot-scope="{loading, data, errors}">
                <div v-if="data && data.getEncounter">
                    <div class="hero is-primary">
                        <div class="hero-body">
                            <h1 class="title">Encounter: {{data.getEncounter.name}}</h1>
                        </div>
                    </div>

                    <div class="container">
                        <div class="columns">
                            <div class="column is-two-thirds">
                                <ul class="combatants-list">
                                    <combatant-panel
                                        v-for="combatant in sort(data.getEncounter.combatants.items)"
                                        :key="combatant.id"
                                        :combatant="combatant"
                                    ></combatant-panel>
                                </ul>
                            </div>
                            <div class="column">
                                <b-tabs v-model="activeAddTab">
                                    <b-tab-item label="Monster">
                                        <add-monster-combatant
                                        ></add-monster-combatant>
                                    </b-tab-item>

                                    <b-tab-item label="Character">
                                        <add-character-combatant></add-character-combatant>
                                    </b-tab-item>

                                    <b-tab-item label="Player">
                                        <add-player-combatant></add-player-combatant>
                                    </b-tab-item>
                                </b-tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </amplify-connect>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import {getEncounter} from '../../graphql/queries';
    import {components} from 'aws-amplify-vue';
    import AddMonsterCombatant from '../../components/CombatantForms/AddMonsterCombatant';
    import AddCharacterCombatant from '../../components/CombatantForms/AddCharacterCombatant';
    import AddPlayerCombatant from '../../components/CombatantForms/AddPlayerCombatant';
    import CombatantPanel from '../../components/CombatantPanel';

    @Component({
        components: {
            CombatantPanel,
            ...components,
            AddPlayerCombatant,
            AddCharacterCombatant,
            AddMonsterCombatant,
        },
    })
    export default class Encounter extends Vue {
        activeAddTab = 0;

        get encounterQuery() {
            return this.$Amplify.graphqlOperation(getEncounter, {
                id: this.$route.params.id,
            });
        }

        sort(items) {
            return [...items].sort((a, b) => b.initiative - a.initiative);
        }
    }
</script>

<style scoped lang="scss">
    .combatants-list {
        width: 100%;
    }
</style>
