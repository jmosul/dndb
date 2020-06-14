<template>
    <div class="card-image">
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
    }
</script>

<style scoped lang="scss">
    .card-image .image {
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }
</style>
