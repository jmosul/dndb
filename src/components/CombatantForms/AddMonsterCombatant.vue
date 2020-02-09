<template>
    <div class="combatant__form">
        <amplify-connect :mutation="createMutation" @done="handleComplete">
            <template slot-scope="{ loading, mutate }">
                <form
                    @submit="add()"
                    v-if="model.type"
                >
                    <b-field label="Name">
                        <b-input
                            required
                            v-model="model.name"
                        ></b-input>
                    </b-field>

                    <b-field label="Creature">
                        <b-input
                            required
                            v-model="model.creature"
                        ></b-input>
                    </b-field>

                    <b-field grouped group-multiline>
                        <b-field label="Initiative Modifier">
                            <b-input
                                type="number"
                                required
                                v-model="initiativeModifier"
                            ></b-input>
                        </b-field>

                        <b-field label="Armour Class">
                            <b-input
                                type="number"
                                required
                                v-model="model.armour_class"
                            ></b-input>
                        </b-field>

                        <b-field label="Hit Points">
                            <b-input
                                type="number"
                                required
                                v-model="model.hit_points"
                            ></b-input>
                        </b-field>
                    </b-field>

                    <b-field>
                        <button
                            class="button is-primary"
                            type="submit"
                        >
                            Add
                        </button>
                    </b-field>
                </form>
            </template>
        </amplify-connect>
    </div>
</template>

<script>
    import Component from 'vue-class-component';
    import CombatantForm from './CombatantForm';

    @Component({})
    export default class AddMonsterCombatant extends CombatantForm {
        model = {};

        mounted() {
            this.resetModel();
        }

        resetModel() {
            super.resetModel();

            this.model.type = 'Monster';
            this.model.team = 'monster';
        }
    }
</script>

<style scoped>

</style>
