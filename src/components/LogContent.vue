<template>
    <amplify-connect
        :mutation="updateLogNotes"
    >
        <template slot-scope="{ loading, mutate }">
            <b-field label="Highlights">
                <b-input type="textarea" v-model="newLog.highlights"></b-input>
            </b-field>

            <b-field label="Content">
                <b-input type="textarea" v-model="newLog.content"></b-input>
            </b-field>

            <button
                class="button is-primary"
                @click="updateNotes(mutate)"
                :disabled="loading"
                :class="{'is-loading': loading}"
            >
                Update Notes
            </button>
        </template>
    </amplify-connect>
</template>

<script>
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import {updateCampaignLog} from '../graphql/mutations';

    @Component({
        props: [
            'log',
        ],
    })
    export default class LogContent extends Vue {
        newLog = {
            content: '',
            highlights: '',
            image: '',
        };

        mounted() {
            Object.assign(this.newLog, this.log);
        }

        updateNotes(mutate) {
            mutate();
        }

        get updateLogNotes() {
            return this.$Amplify.graphqlOperation(updateCampaignLog, {
                input: this.newLog,
            });
        }
    }
</script>

<style scoped lang="scss">

</style>
