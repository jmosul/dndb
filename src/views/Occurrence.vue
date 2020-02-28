<template>
    <section class="occurrence">
        <article v-if="occurrence.id">
            <div class="hero is-info">
                <div class="hero-body">
                    <h2 class="title">
                        {{occurrence.title}}
                    </h2>
                    <h3 class="subtitle">
                        <dale-reckoning :date="occurrence.dale_reckoning"></dale-reckoning>
                    </h3>
                    <div class="content" v-html="content"></div>
                </div>
            </div>
        </article>
    </section>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import {components} from 'aws-amplify-vue';
    import {getOccurrence} from '../graphql/queries';
    import DaleReckoning from '../components/DaleReckoning';
    import {API} from 'aws-amplify';
    import logParser from '../LogParser';

    @Component({
        components: {
            DaleReckoning,
            ...components,
        },
    })
    export default class Occurrence extends Vue {
        occurrence = {};
        content = '';

        get occurrenceQuery() {
            return this.$Amplify.graphqlOperation(getOccurrence, {id: this.$route.params.id});
        }

        mounted() {
            this.loadOccurrence();
        }

        async loadOccurrence() {
            return API.graphql({
                query: getOccurrence,
                variables: {
                    id: this.$route.params.id,
                },
            }).then(
                (response) => {
                    this.occurrence = response.data.getOccurrence;

                    if (this.occurrence.history) {
                        this.content = logParser(this.occurrence.history.content);
                    }
                }
            );
        }
    }
</script>
