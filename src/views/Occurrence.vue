<template>
    <article v-if="occurrence.id">
        <div class="hero is-info mb-15">
            <div class="hero-body">
                <h3 class="subtitle">
                    <dale-reckoning :date="occurrence.dale_reckoning"></dale-reckoning>
                </h3>
                <h2 class="title">
                    {{occurrence.title}}
                </h2>
            </div>
        </div>
        <log-occurrence :occurrence="occurrence" :key="occurrence.id" v-if="occurrence.type === 'Log'"></log-occurrence>
        <history-occurrence :occurrence="occurrence" :key="occurrence.id" v-else></history-occurrence>
    </article>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import {getOccurrence} from '../graphql/queries';
    import {API} from 'aws-amplify';
    import HistoryOccurrence from './HistoryOccurrence';
    import DaleReckoning from '../components/DaleReckoning';
    import {Watch} from 'vue-property-decorator';
    import LogOccurrence from './LogOccurrence';

    @Component({
        components: {
            LogOccurrence,
            DaleReckoning,
            HistoryOccurrence,
        },
    })
    export default class Occurrence extends Vue {
        occurrence = {};
        hasLoaded = false;
        content = '';

        @Watch('$route.params.id')
        onChildChanged(id) {
            this.loadOccurrence(id);
        }

        mounted() {
            this.loadOccurrence(this.$route.params.id);
        }

        async loadOccurrence(id) {
            const variables = {id};
            const authMode = this.dungeonMasterId ? 'AMAZON_COGNITO_USER_POOLS' : 'AWS_IAM';

            this.hasLoaded = false;

            return API.graphql({
                query: getOccurrence,
                variables,
                authMode,
            }).then(
                (response) => {
                    console.log('res', response);

                    this.occurrence = response.data.getOccurrence;
                    this.hasLoaded = true;
                }
            );
        }
    }
</script>

<style scoped>

</style>
