<template>
    <section class="home view">
        <h1>
            Dungeons
            <br><i class="fab fa-d-and-d"></i>
            Databases
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
            margin: 5rem 0 0 10rem;
            text-align: left;

            color: $color-dnd-red;
            font-family: $font-goblin-family;
            font-size: 6em;
            line-height: 115px;
            height: 300px;

            i {
                margin-right: -30px;
            }
        }

        .campaigns {
            max-width: 500px;
            margin: 60px auto 0;
            text-align: center;
        }
    }
</style>
