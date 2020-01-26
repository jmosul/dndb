<template>
    <section class="create npc">
        <div class="hero">
            <div class="hero-body">
                <h1 class="title">Create NPC</h1>
            </div>
        </div>

        <section class="container">
            <amplify-connect :mutation="createMutation" @done="handleComplete">
                <template slot-scope="{ loading, mutate }">

                    <b-field label="Name">
                        <b-input v-model="model.name"></b-input>
                    </b-field>

                    <b-field grouped group-multiline>
                        <b-field label="Race">
                            <b-select
                                placeholder="Select a race"
                                v-model="model.race"
                            >
                                <option value="DwarfHill">Hill Dwarf</option>
                                <option value="DwarfMountain">Mountain Dwarf</option>
                                <option value="ElfHigh">High Elf</option>
                                <option value="ElfWood">Wood Elf</option>
                                <option value="ElfDark">Dark Elf</option>
                                <option value="HalflingLightfoot">Lightfoot Halfling</option>
                                <option value="HalflingStout">Stout Halfling</option>
                                <option value="Human">Human</option>
                                <option value="Dragonborn">Dragonborn</option>
                                <option value="GnomeForest">Forest Gnome</option>
                                <option value="GnomeRock">Rock Gnome</option>
                                <option value="HalfElf">Half-Elf</option>
                                <option value="HalfOrc">Half-Orc</option>
                                <option value="Tiefling">Tiefling</option>
                            </b-select>
                        </b-field>

                        <b-field label="Class">
                            <b-select
                                placeholder="Select a class"
                                v-model="model.class"
                            >
                                <option value="Barbarian">Barbarian</option>
                                <option value="Bard">Bard</option>
                                <option value="Cleric">Cleric</option>
                                <option value="Druid">Druid</option>
                                <option value="Fighter">Fighter</option>
                                <option value="Monk">Monk</option>
                                <option value="Paladin">Paladin</option>
                                <option value="Ranger">Ranger</option>
                                <option value="Rogue">Rogue</option>
                                <option value="Sorcerer">Sorcerer</option>
                                <option value="Warlock">Warlock</option>
                                <option value="Wizard">Wizard</option>
                                <option value="Commoner">Commoner</option>
                            </b-select>
                        </b-field>

                        <b-field label="Occupation">
                            <b-input type="text" v-model="model.occupation"></b-input>
                        </b-field>
                    </b-field>

                    <b-field grouped group-multiline>
                        <b-field label="Strength">
                            <b-input type="number" v-model="model.strength"></b-input>
                        </b-field>

                        <b-field label="Dexterity">
                            <b-input type="number" v-model="model.dexterity"></b-input>
                        </b-field>

                        <b-field label="Constitution">
                            <b-input type="number" v-model="model.constitution"></b-input>
                        </b-field>

                        <b-field label="Intelligence">
                            <b-input type="number" v-model="model.intelligence"></b-input>
                        </b-field>

                        <b-field label="Wisdom">
                            <b-input type="number" v-model="model.wisdom"></b-input>
                        </b-field>

                        <b-field label="Charisma">
                            <b-input type="number" v-model="model.charisma"></b-input>
                        </b-field>
                    </b-field>

                    <b-field grouped group-multiline>
                        <b-field label="Moral">
                            <b-select
                                placeholder="Select a morality"
                                v-model="model.alignment_moral"
                            >
                                <option value="Evil">Evil</option>
                                <option value="Neutral">Neutral</option>
                                <option value="Good">Good</option>
                            </b-select>
                        </b-field>

                        <b-field label="Order">
                            <b-select
                                placeholder="Select a order"
                                v-model="model.alignment_order"
                            >
                                <option value="Lawful">Lawful</option>
                                <option value="Neutral">Neutral</option>
                                <option value="Chaotic">Chaotic</option>
                            </b-select>
                        </b-field>
                    </b-field>

                    <b-field label="Age">
                        <b-input type="number" v-model="model.age"></b-input>
                    </b-field>

                    <b-field label="Height">
                        <b-input type="number" v-model="model.height"></b-input
                    </b-field>

                    <b-field label="Weight">
                        <b-input type="number" v-model="model.weight"></b-input>
                    </b-field>

                    <b-field label="Description">
                        <b-input type="textarea" v-model="model.description"></b-input>
                    </b-field>

                    <b-field label="Image">
                        <b-input type="text" v-model="model.image"></b-input>
                    </b-field>

                    <b-field label="History">
                        <b-input type="textarea" v-model="model.history"></b-input>
                    </b-field>

                    <b-field label="Voice">
                        <b-input type="input" v-model="model.voice"></b-input>
                    </b-field>

                    <b-field label="Personality">
                        <b-input type="textarea" v-model="model.personality"></b-input>
                    </b-field>

                    <b-field label="Ideal">
                        <b-input type="text" v-model="model.ideal"></b-input>
                    </b-field>

                    <b-field label="Bond">
                        <b-input type="text" v-model="model.bond"></b-input>
                    </b-field>

                    <b-field label="Flaw">
                        <b-input type="text" v-model="model.flaw"></b-input>
                    </b-field>

                    <b-field label="Talent">
                        <b-input type="text" v-model="model.talent"></b-input>
                    </b-field>

                    <b-field label="Mannerisms">
                        <b-input type="text" v-model="model.mannerisms"></b-input>
                    </b-field>

                    <b-field label="Interaction">
                        <b-input type="textarea" v-model="model.interaction"></b-input>
                    </b-field>

                    <b-field label="Secrets">
                        <b-input type="textarea" v-model="model.secrets"></b-input>
                    </b-field>

                    <b-field label="Notes">
                        <b-input type="textarea" v-model="model.notes"></b-input>
                    </b-field>

                    <b-field>
                        <button
                            class="button is-primary"
                            type="submit"
                            :disabled="loading"
                            @click="mutate"
                        >
                            Save
                        </button>
                    </b-field>
                </template>
            </amplify-connect>
        </section>
    </section>
</template>

<script>
    import {components} from 'aws-amplify-vue';
    import Component from 'vue-class-component';
    import AppComponent from '../../AppComponent';
    import {createNonPlayerCharacter} from '../../graphql/mutations';
    import uuid from 'uuid';
    import {Getter} from 'vuex-class';

    @Component({
        components,
    })
    export default class CreateNonPlayerCharacter extends AppComponent {
        @Getter('dungeonMaster/id') dungeonMasterId;

        mutation = createNonPlayerCharacter;
        model = {
            name: '',
            race: 'Human',
            class: 'Commoner',
            alignment_moral: 'Neutral',
            alignment_order: 'Neutral',
        };

        mounted() {
            this.model.dm = this.dungeonMasterId;
            this.model.id = uuid.v4();
        }

        handleComplete() {
            console.log('complete');
        }

        get createMutation() {
            return this.$Amplify.graphqlOperation(this.mutation, {input: this.model});
        }
    }
</script>
