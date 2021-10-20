<template>
    <section>
        <b-field label="DndBeyond Import" horizontal grouped>
            <b-input type="textarea" v-model="beyondImport"></b-input>
            <p class="control">
                <b-button
                    class="button button-secondary"
                    @click="importCharacter()"
                    :disabled="!beyondImport"
                    :loading="importing"
                >
                    <i class="fa fa-download"></i>
                </b-button>
            </p>
        </b-field>

        <form @submit.prevent="submit" v-if="!importing && !loading">
            <b-field label="Name" horizontal>
                <b-input v-model="model.name"></b-input>
            </b-field>

            <div class="columns">
                <div class="column">
                    <b-field label="Strength" horizontal>
                        <b-input v-model="model.strength" type="number"></b-input>
                    </b-field>
                </div>
                <div class="column">
                    <b-field label="Dexterity" horizontal>
                        <b-input v-model="model.dexterity" type="number"></b-input>
                    </b-field>
                </div>
                <div class="column">
                    <b-field label="Constitution" horizontal>
                        <b-input v-model="model.constitution" type="number"></b-input>
                    </b-field>
                </div>
                <div class="column">
                    <b-field label="Intelligence" horizontal>
                        <b-input v-model="model.intelligence" type="number"></b-input>
                    </b-field>
                </div>
                <div class="column">
                    <b-field label="Wisdom" horizontal>
                        <b-input v-model="model.wisdom" type="number"></b-input>
                    </b-field>
                </div>
                <div class="column">
                    <b-field label="Charisma" horizontal>
                        <b-input v-model="model.charisma" type="number"></b-input>
                    </b-field>
                </div>
            </div>

            <b-field label="Type" horizontal>
                <b-select v-model="model.type">
                    <option value="PlayerCharacter">Player</option>
                    <option value="NonPlayerCharacter">NPC</option>
                </b-select>
            </b-field>

            <b-field label="Status" horizontal v-if="model.status">
                <b-select v-model="model.status">
                    <option value="Private">Private</option>
                    <option value="Public">Public</option>
                </b-select>
            </b-field>

            <b-field label="Avatar Url" horizontal>
                <b-input v-model="model.avatar"></b-input>
            </b-field>

            <b-field label="Race" horizontal>
                <b-select v-model="model.race">
                    <option value="HighElf">Elf (High)</option>
                    <option value="WoodElf">Elf (Wood)</option>
                    <option value="Human">Human</option>
                    <option value="Tiefling">Tiefling</option>
                    <option value="Dwarf">Dwarf</option>
                </b-select>
            </b-field>

            <b-field label="Gender" horizontal>
                <b-input v-model="model.gender"></b-input>
            </b-field>

            <b-field label="Alignment" horizontal>
                <b-select v-model="model.alignment">
                    <option value="ChaoticGood">Chaotic Good</option>
                    <option value="NeutralGood">Neutral Good</option>
                    <option value="LawfulGood">Lawful Good</option>
                    <option value="ChaoticNeutral">Chaotic Neutral</option>
                    <option value="TrueNeutral">True Neutral</option>
                    <option value="LawfulNeutral">Lawful Neutral</option>
                    <option value="ChaoticEvil">Chaotic Evil</option>
                    <option value="NeutralEvil">Neutral Evil</option>
                    <option value="LawfulEvil">Lawful Evil</option>
                </b-select>
            </b-field>

            <b-field horizontal>
                <button
                    type="submit"
                    class="button is-primary"
                    :v-class="{'is-loading': saving}"
                    :disabled="saving"
                >
                    Submit
                </button>
            </b-field>
        </form>
        <b-loading is-full-page :active="importing || loading"></b-loading>
    </section>
</template>

<script>
import Component from 'vue-class-component';
import {Getter} from 'vuex-class';
import EditorComponent from './EditorComponent';
import BeyondCharacter from '../../../services/dndbeyond/BeyondCharacter';

@Component({})
export default class CharacterEditor extends EditorComponent {
    @Getter('worlds/current') world;
    @Getter('worlds/party') party;

    modelName = 'Character';
    importing = false;
    beyondImport = '';

    mounted() {
        this.model.type = 'NonPlayerCharacter';
        this.model.status = 'Private';
        this.model.characterWorldId = this.world.id;
        this.model.characterPartyId = this.party.id;

        super.mounted();
    }

    async importCharacter() {
        this.importing = true;

        const beyondCharacter = new BeyondCharacter(this.beyondImport);

        BeyondCharacter.IMPORTABLE.forEach((field) => {
            this.model[field] = beyondCharacter[field];
        });

        this.importing = false;
    }
}
</script>

<style scoped lang="scss">

</style>
