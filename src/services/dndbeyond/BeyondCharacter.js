export default class BeyondCharacter {
    _data = {};

    constructor(data) {
        this._data = JSON.parse(data).data;

        this._modifiers = [];

        Object.values(this._getData('modifiers')).forEach((modType) => {
            modType.forEach(({type, value, subType}) => this._modifiers.push({type, value, subType}));
        });
    }

    get name() {
        return this._getData('name');
    }

    get avatar() {
        return this._getData('avatarUrl').split('?')[0];
    }

    get race() {
        return this._data.race.fullName.replace(/ /g, '');
    }

    get gender() {
        return this._getData('gender');
    }

    get alignment() {
        return [
            'LawfulGood',
            'NeutralGood',
            'ChaoticGood',
            'LawfulNeutral',
            'TrueNeutral',
            'ChaoticNeutral',
            'LawfulEvil',
            'NeutralEvil',
            'ChaoticEvil',
        ][this._getData('alignmentId') - 1];
    }

    get strength() {
        return this._getStat('strength');
    }

    get dexterity() {
        return this._getStat('dexterity');
    }

    get constitution() {
        return this._getStat('constitution');
    }

    get intelligence() {
        return this._getStat('intelligence');
    }

    get wisdom() {
        return this._getStat('wisdom');
    }

    get charisma() {
        return this._getStat('charisma');
    }

    _getData(field) {
        return this._data[field];
    }

    _getStat(stat) {
        const id = BeyondCharacter.STAT_IDS[stat];

        const totalStats = [
            this._getData('stats').filter((statDetails) => statDetails.id === id)[0],
            this._getData('bonusStats').filter((statDetails) => statDetails.id === id)[0],
            this._getData('overrideStats').filter((statDetails) => statDetails.id === id)[0],
            ...this._searchModifiers('bonus', `${stat}-score`),
        ].filter(({value}) => value !== null);

        return totalStats.reduce((total, {value}) => total + parseInt(value), 0) + 0;
    }

    _searchModifiers(type, subType) {
        return this._modifiers.filter((mod) => mod.type === type && mod.subType === subType);
    }

    static get STAT_IDS() {
        return {
            'strength': 1,
            'dexterity': 2,
            'constitution': 3,
            'intelligence': 4,
            'wisdom': 5,
            'charisma': 6,
        };
    }

    static get IMPORTABLE() {
        return [
            'alignment',
            'avatar',
            'gender',
            'name',
            'race',
            'strength',
            'dexterity',
            'constitution',
            'intelligence',
            'wisdom',
            'charisma',
        ];
    }
}
