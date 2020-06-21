<template>
    <section class="home view">
        <h1>
            Dungeons
            <br><i class="fab fa-d-and-d"></i>
            Databases
        </h1>
        <div class="worlds columns is-centered">
            <router-link :to="{name: 'world.home', params: {world: world.slug}}" v-for="world in worlds" :key="world.id" class="column is-one-fifth-desktop">
                <div class="card">
                    <card-image :image="world.slug"></card-image>
                    <div class="content">
                        <h3>{{world.title}}</h3>
                    </div>
                </div>
            </router-link>
        </div>
    </section>
</template>

<script>
    import AppComponent from '../components/AppComponent';
    import Component from 'vue-class-component';
    import {Getter} from 'vuex-class';
    import CardImage from '../components/CardImage';

    @Component({
        components: {CardImage},
    })
    export default class Home extends AppComponent {
        @Getter('worlds/all') worlds;
    }
</script>

<style scoped lang="scss">
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

        .worlds {
            h3 {
                text-align: center;
                color: $color-dnd-black;
                font-family: $font-goblin-family;
                padding: 5px;
            }
        }
    }
</style>
