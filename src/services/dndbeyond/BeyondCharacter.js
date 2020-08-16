export default class BeyondCharacter {
    _data = {};

    constructor(data) {
        this._data = JSON.parse(data).data;
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

    _getData(field) {
        return this._data[field];
    }

    static get IMPORTABLE() {
        return [
            'alignment',
            'avatar',
            'gender',
            'name',
            'race',
        ];
    }
}
