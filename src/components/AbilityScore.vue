<template>
    <div class="ability is-centered">
        <h4 class="ability__title">
            {{ability}}
        </h4>
        <div class="ability__modifier is-center">
            {{modifier}}
        </div>
        <div class="ability__score is-center">
            {{score}}
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';

    @Component({
        props: [
            'score',
            'ability',
        ],
    })
    export default class AbilityScore extends Vue {
        name = 'AbilityScore';

        get modifier() {
            const modifier = Math.floor((this.score - 10) / 2);

            return modifier > 0 ? `+${modifier}` : modifier;
        }
    }
</script>

<style scoped lang="scss">
    .ability, .ability__score {
        border: 1px solid indianred;
        border-radius: 10px;
    }

    .ability {
        margin: 5px;
        padding: 10px 10px 20px;
        position: relative;
        text-align: center;

        .ability__title {
            text-transform: uppercase;
        }

        .ability__modifier {
            font-size: 32px;
        }

        .ability__score {
            position: absolute;
            bottom: -15px;
            background-color: white;
            padding: 3px 0;
            width: 40px;
            font-size: 18px;
            border-top: 0;
            border-bottom: 0;
            left: 50%;
            margin-left: -20px;
        }
    }
</style>
