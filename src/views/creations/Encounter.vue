<template>
    <section class="list characters">
        <amplify-connect
            :query="encounterQuery"
            v-if="$route.params.id"
        >
            <template slot-scope="{loading, data, errors}">

                <div class="hero is-primary">
                    <div class="hero-body">
                        <h1 class="title">Encounter: {{data.getEncounter.name}}</h1>
                    </div>
                </div>
            </template>
        </amplify-connect>
    </section>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import {getEncounter} from '../../graphql/queries';
    import {components} from 'aws-amplify-vue';

    @Component({
        components,
    })
    export default class Encounter extends Vue {
        get encounterQuery() {
            return this.$Amplify.graphqlOperation(getEncounter, {id: this.$route.params.id});
        }
    }
</script>

<style scoped lang="scss">
</style>
