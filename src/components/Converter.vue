<template>
    <span class="converter">
        {{value}}{{unit}} ({{conversion}})
    </span>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';

    @Component({
        props: [
            'value',
            'type',
        ],
    })
    export default class Converter extends Vue {
        name = 'Converter';

        get unit() {
            switch (this.type) {
                case 'length':
                    return 'cm';

                case 'weight':
                    return 'kg';
            }
        }

        get conversion() {
            switch (this.type) {
                case 'length':
                    return this.toFeetAndInches();

                case 'weight':
                    return this.stonesAndPounds();
            }
        }

        toFeetAndInches() {
            let feet = this.value / 30.48;
            const foot = Math.floor(feet);
            const inches = Math.floor((feet - foot) * 12);

            return `${foot}ft ${inches}in`;
        }

        stonesAndPounds() {
            const pounds = this.value * 2.205;
            const stone = Math.floor(pounds / 16);
            const lb = Math.floor(pounds % 16);

            return `${stone}st ${lb}lb`;
        }
    }
</script>

<style scoped lang="scss">

</style>
