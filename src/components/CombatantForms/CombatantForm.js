import Vue from 'vue';
import {Getter} from 'vuex-class';
import uuid from 'uuid';
import {createCombatant} from '../../graphql/mutations';
import {API} from 'aws-amplify';

export default class CombatantForm extends Vue {
    @Getter('dungeonMaster/id') dungeonMasterId;

    model = {};
    initiativeModifier = 0;

    constructor() {
        super();

        this.resetModel();
    }

    /**
     * @return {number}
     */
    get initiative() {
        const rand = Math.random() * 20;

        return Math.round(rand) + parseInt(this.initiativeModifier);
    }

    /**
     * @return {*}
     */
    get createMutation() {
        return this._input.id.length
            ? this.$Amplify.graphqlOperation(createCombatant, {input: this._input})
            : undefined;
    }

    /**
     * @param {function} mutate
     */
    async add() {
        this._input.id = uuid.v4();
        this._input.dm = this.dungeonMasterId;
        this._input.encounterId = this.$route.params.id;
        this._input.initiative = this.initiative;

        this._input.name = this.model.name;
        this._input.creature = this.model.creature;
        this._input.hit_points = parseInt(this.model.hit_points);
        this._input.armour_class = parseInt(this.model.armour_class);
        this._input.team = this.model.team;

        await API.graphql(this.createMutation);
    }

    handleComplete() {
        this.resetModel();
    }

    resetModel() {
        this.model = {
            name: 'Orc',
            creature: 'Orc',
            hit_points: '20',
            armour_class: '15',
            team: 'monster',
        };

        this._input = {
            id: '',
            dm: '',
            encounterId: '',
            initiative: 0,
            damage_taken: 0,
            name: '',
            creature: '',
            hit_points: 0,
            armour_class: 0,
            team: 'monster',
            type: 'Monster',
            blinded: false,
            charmed: false,
            deafened: false,
            exhaustion: false,
            frightened: false,
            grappled: false,
            incapacitated: false,
            invisible: false,
            paralyzed: false,
            petrified: false,
            poisoned: false,
            prone: false,
            restrained: false,
            stunned: false,
            unconscious: false,
            disadvantage: false,
            advantage: false,
        };

        this.initiativeModifier = 0;
    }
}
