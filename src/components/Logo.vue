<template>
    <div class="logo">
        D<i class="fab fa-d-and-d"></i>DB
    </div>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';

    @Component()
    export default class Logo extends Vue {

    }
</script>

<style scoped lang="scss">
    @import "../styles";

    $height: 20px;

    .logo {
        color: $color-dnd-red;
        font-family: $font-goblin-family;
        line-height: $height;
        font-size: 24px;
        white-space: nowrap;

        img {
            height: $height;
            position: relative;
            top: 1px;
            margin: 0 -7px;
        }
    }
</style>
