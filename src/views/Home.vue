<template>
    <section class="home view">
        <h1>
            Dungeons
            <br>
            <img src="../assets/dnd.png">
            <br>Databases
        </h1>
        <div class="campaigns">
            <campaign-selector></campaign-selector>
        </div>
    </section>
</template>

<script>
    import AppComponent from '../AppComponent';
    import Component from 'vue-class-component';
    import CampaignSelector from '../components/CampaignSelector';

    @Component({
        components: {CampaignSelector},
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
            margin: 50px auto 0;
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

        .campaigns {
            max-width: 500px;
            margin: 60px auto 0;
            text-align: center;
        }
    }
</style>
