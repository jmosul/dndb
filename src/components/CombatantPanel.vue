<template>
    <li
        class="card"
        :class="cardClasses"
    >
        <div class="columns">
            <div class="column card-header is-one-fifth">
                <p class="card-header-title">{{combatant.name}}</p>
                <p class="card-header-subtitle has-text-grey">
                    <small>{{combatant.creature}}</small>
                </p>
            </div>
            <div class="column card-content">
                <div class="content">
                    <combatant-status
                        v-for="status in statuses"
                        :key="status"
                        :type="status"
                        :active="combatant[status]"
                    >
                        {{status.name}}
                    </combatant-status>
                </div>
                <div class="content">
                    <b-field>
                        <b-input
                            type="number"
                            v-model="combatant.damage_taken"
                            custom-class="is-small combatant__input"
                        ></b-input>

                        <p class="control">
                            <span class="button is-static is-small">/ {{combatant.hit_points}}</span>
                        </p>
                    </b-field>
                </div>
            </div>
        </div>
        <div class="initiative has-text-grey-light">
            {{combatant.initiative}}
        </div>
    </li>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import CombatantStatus from './CombatantStatus';

    @Component({
        components: {CombatantStatus},
        props: [
            'combatant',
        ],
    })
    export default class CombatantPanel extends Vue {
        get cardClasses() {
            return `card__${this.combatant.team}`;
        }

        get statuses() {
            return [
                'blinded',
                'charmed',
                'deafened',
                'frightened',
                'grappled',
                'incapacitated',
                'invisible',
                'paralyzed',
                'petrified',
                'poisoned',
                'prone',
                'restrained',
                'stunned',
                'disadvantage',
                'advantage',
            ];
        }
    }
</script>

<style lang="scss" scoped>
    $team-monster-color: red;
    $team-player-color: blue;

    li {
        margin-top: 2rem;
    }

    p.control {
        margin: 0;
    }

    .content {
        margin-bottom: 10px;
    }

    .initiative {
        position: absolute;
        right: 10px;
        top: 5px;
    }

    .card {
        &.card {
            &__monster {
                border-left: 4px solid $team-monster-color;
            }

            &__players {
                border-left: 4px solid $team-player-color;
            }

            &--dead {
                opacity: 0.5;
            }

        }

        .card-header p {
            margin: 0 10px;
            padding: 0;

            &.combatant__stat {
                margin-top: 5px;
                font-size: 1.4em;
            }
        }
    }
</style>
