<template>
    <span>
        <b-tooltip
            :label="description"
            multilined
            v-if="date"
        >
            <span class="dale-reckoning">{{day}} {{month}} {{year}} DR</span>
        </b-tooltip>
    </span>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';

    @Component({
        props: [
            'date',
        ],
    })
    export default class DaleReckoning extends Vue {
        months = [
            {num: 1, name: 'Hammer', common: 'Deepwinter'},
            {num: 2, name: 'Alturiak', common: 'The Claw of Winter'},
            {num: 3, name: 'Ches', common: 'The Claw of the Sunsets'},
            {num: 4, name: 'Tarsakh', common: 'The Claw of the Storms'},
            {num: 5, name: 'Mirtul', common: 'The Melting'},
            {num: 6, name: 'Kythorn', common: 'The Time of Flowers'},
            {num: 7, name: 'Flamerule', common: 'Summertide'},
            {num: 8, name: 'Eleasis', common: 'Highsun'},
            {num: 9, name: 'Eleint', common: 'The Fading'},
            {num: 10, name: 'Marpenoth', common: 'Leaffall'},
            {num: 11, name: 'Uktar', common: 'The Rotting'},
            {num: 12, name: 'Nightal', common: 'The Drawing Down'},
        ];

        /**
         * @return {Array<Number>}
         */
        get dateSplit() {
            return this.date.split('-').map((value) => {
                value = value.charAt(0) === '0' ? value.charAt(1) : value;

                return parseInt(value);
            });
        }

        /**
         * @return {String}
         */
        get day() {
            const day = this.dateSplit[2];

            if (!day) {
                return '';
            }

            switch (day) {
                case 1:
                case 21:
                    return `${day}st`;

                case 2:
                case 22:
                    return `${day}nd`;

                case 3:
                    return `${day}rd`;
            }

            return `${day}th`;
        }

        /**
         * @return {{num: Number, name: String, common: String}}
         */
        get monthDetails() {
            const month = this.dateSplit[1] - 1;

            if (month === -1) {
                return {
                    num: -1,
                    name: '',
                    common: '',
                };
            }

            return this.months[month];
        }

        /**
         * @return {String}
         */
        get month() {
            return this.monthDetails.name;
        }

        /**
         * @return {Number}
         */
        get year() {
            return this.dateSplit[0];
        }

        /**
         * @return {String}
         */
        get description() {
            return `${this.date} (${this.monthDetails.common})`;
        }
    }
</script>

<style lang="scss" scoped>
    .dale-reckoning {
        white-space: nowrap;
    }
</style>
