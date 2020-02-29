import Vue from 'vue';
import logParser from '../../LogParser';
import {Prop} from 'vue-property-decorator';

export default class OccurrenceView extends Vue {
    @Prop(Object) occurrence;

    logParser = logParser;
}
