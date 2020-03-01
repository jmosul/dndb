<template>
    <div class="card">
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                    <figure class="image is-64x64">
                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                    </figure>
                </div>
                <div class="media-content">
                    <p class="title is-4">{{character.name}}</p>
                    <p class="subtitle is-6">
                        Class
                    </p>
                </div>
            </div>
            <div class="content" v-if="!collapseable">
                DETAILS
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import {Prop} from 'vue-property-decorator';

    @Component({})
    export default class CharacterCard extends Vue {
        @Prop(Object) character;
        @Prop(Boolean) collapseable;
    }
</script>

<style scoped lang="scss">
    .media-content {
        .title {
            margin-top: 0;
        }
    }
</style>
