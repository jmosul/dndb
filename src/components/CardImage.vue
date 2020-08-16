<template>
    <div :class="typeClass" class="image-card">
        <div class="image" :style="imageStyle" :class="sizeClass"></div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import {Prop} from 'vue-property-decorator';

    @Component()
    export default class CardImage extends Vue {
        @Prop(String) image;
        @Prop({default: 'card'}) type;
        @Prop({default: '4by3'}) size;

        get imageStyle() {
            const image = this.image.indexOf('.') === -1 ? `${this.image}.jpg` : this.image;

            return this.image ? {'background-image': `url(/images/${image})`} : {};
        }

        get sizeClass() {
            return [
                `is-${this.size}`,
            ];
        }

        get typeClass() {
            switch (this.type) {
                case 'fullWidth':
                    return '';

                case 'panel':
                    return 'panel-block';

                case 'card':
                default:
                    return 'card-image';
            }
        }
    }
</script>

<style scoped lang="scss">
    .image-card {
        .image {
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            width: 100%;
        }
    }

    .panel-block {
        padding: 0;
    }
</style>
