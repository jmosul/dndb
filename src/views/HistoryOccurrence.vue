<template>
    <section class="occurrence__history">
        <div class="card">
            <div class="card-content occurrence__content" v-html="content"></div>
        </div>

    </section>
</template>

<script>
    import Component from 'vue-class-component';
    import {components} from 'aws-amplify-vue';
    import DaleReckoning from '../components/DaleReckoning';
    import OccurrenceView from './occurrences/OccurrenceView';

    @Component({
        components: {
            DaleReckoning,
            ...components,
        },
    })
    export default class HistoryOccurrence extends OccurrenceView {
        content = '';

        mounted() {
            this.content = this.logParser(this.occurrence.history.content);
        }
    }
</script>
