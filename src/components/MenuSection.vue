<template>
    <div>
        <p class="menu-label" v-if="title">
            {{title}}
        </p>

        <ul class="menu-list">
            <li v-for="item in items" :key="item.name" class="is-size-5">
                <router-link :to="{ name: item.name }" active-class="is-active" :title="item.label">
                    <i class="fa mr-2" :class="item.icon"></i>
                    <span>{{item.label}}</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import {Prop} from 'vue-property-decorator';

    @Component({})
    export default class MenuSection extends Vue {
        @Prop(String) title;
        @Prop(Array) items;
    }
</script>

<style lang="scss" scoped>
</style>
