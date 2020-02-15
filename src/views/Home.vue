<template>
    <section class="home view">
        <h1>
            Dungeons
            <br>
            <img src="../assets/dnd.png">
            <br>Databases
        </h1>
    </section>
</template>

<script>
    import AppComponent from '../AppComponent';
    import Component from 'vue-class-component';

    @Component({
        components: {},
    })
    export default class Home extends AppComponent {

    }
</script>

<style lang="scss" scoped>
    @import '../styles.scss';

    section {
        height: 100%;

        h1 {
            position: relative;
            margin: 150px auto 0;
            text-align: center;

            color: $color-dnd-red;
            font-family: $font-goblin-family;
            font-size: 6em;
            line-height: 100px;
            height: 300px;

            img {
                margin: 20px 0 -10px;
                width: 100px;
            }
        }
    }
</style>
