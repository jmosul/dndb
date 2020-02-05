<template>
    <span>
        <span v-if="order === moral">
            True {{order}}
        </span>
        <span v-else>
            {{order}} {{moral}}
        </span>
    </span>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';

    @Component({
        props: [
            'order',
            'moral',
        ],
    })
    export default class Alignment extends Vue {

    }
</script>
