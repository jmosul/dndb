<template>
    <section class="create npc">
        <div class="hero">
            <div class="hero-body">
                <h1 class="title">Create Player Character</h1>
            </div>
        </div>

        <section class="container">
            <amplify-connect :mutation="createMutation" @done="handleComplete">
                <template slot-scope="{ loading, mutate }">

                    <b-field label="Name">
                        <b-input v-model="model.name"></b-input>
                    </b-field>

                    <b-field label="Player">
                        <b-input v-model="model.player"></b-input>
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
                        <b-input type="number" v-model="model.height"></b-input>
                    </b-field>

                    <b-field label="Weight">
                        <b-input type="number" v-model="model.weight"></b-input>
                    </b-field>

                    <b-field label="Image">
                        <b-input type="text" v-model="model.image"></b-input>
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

                    <b-field label="Backstory">
                        <b-input type="textarea" v-model="model.history"></b-input>
                    </b-field>

                    <b-field label="How joined">
                        <b-input type="textarea" v-model="model.joined"></b-input>
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
    import {createPlayerCharacter} from '../../graphql/mutations';
    import uuid from 'uuid';
    import {Getter} from 'vuex-class';

    @Component({
        components,
    })
    export default class CreateNonPlayerCharacter extends AppComponent {
        @Getter('dungeonMaster/id') dungeonMasterId;

        model = {
            name: '',
            race: 'Human',
            class: 'Commoner',
            alignment_moral: 'Neutral',
            alignment_order: 'Neutral',
        };

        mounted() {
            this.model.id = uuid.v4();
        }

        handleComplete() {
            this.$router.push({
                name: 'player',
                params: {
                    playerId: this.model.id,
                },
            });
        }

        get createMutation() {
            this.model.dm = this.dungeonMasterId;

            return this.$Amplify.graphqlOperation(createPlayerCharacter, {input: this.model});
        }
    }
</script>
