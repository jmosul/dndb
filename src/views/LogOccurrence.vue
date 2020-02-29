<template>
    <section class="occurrence__log">
        <div class="card mb-15">
            <div class="card-content occurrence__highlights" v-html="highlights"></div>
        </div>

        <div v-html="content" class="occurrence__content"></div>
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
    export default class LogOccurrence extends OccurrenceView {
        highlights = '';
        content = '';

        mounted() {
            console.log('mount', this.occurrence);

            this.highlights = this.logParser(this.occurrence.log.highlights);
            this.content = this.logParser(this.occurrence.log.content);
        }
    }
</script>
