<template>
    <div :class="statusClass">
        <button
            class="button is-small"
            :class="{'is-active is-info': isActive}"
            type="button"
            @click="toggle()"
        >
            {{name}}
        </button>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';

    @Component({
        props: [
            'active',
            'type',
        ],
    })
    export default class CombatantStatus extends Vue {

        constructor() {
            super();

            this.isActive = null;
        }

        mounted() {
            this.isActive = this.active;
        }

        get name() {
            switch (this.type) {
                case 'blinded':
                    return 'Bld';
                case 'charmed':
                    return 'Cha';
                case 'deafened':
                    return 'Def';
                case 'frightened':
                    return 'Fri';
                case 'grappled':
                    return 'Grp';
                case 'incapacitated':
                    return 'Inc';
                case 'invisible':
                    return 'Inv';
                case 'paralyzed':
                    return 'Par';
                case 'petrified':
                    return 'Pet';
                case 'poisoned':
                    return 'Psn';
                case 'prone':
                    return 'Prn';
                case 'restrained':
                    return 'Res';
                case 'stunned':
                    return 'Stn';
                case 'unconscious':
                    return 'Ucn';
                case 'disadvantage':
                    return 'Dis';
                case 'advantage':
                    return 'Adv';
            }
        }

        get statusClass() {
            return `status--${this.type}`;
        }

        toggle() {
            this.isActive = !this.isActive;

            console.log('tog', this.isActive);
        }
    }
</script>

<style lang="scss" scoped>
    div {
        display: inline-block;
    }

    button.button {
        .is-blinded {
            background-color: red;
        }
    }
</style>
