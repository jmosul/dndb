import AppComponent from './AppComponent';
import {API} from 'aws-amplify';
import * as queries from '../graphql/queries';
import {Watch} from 'vue-property-decorator';

export default class ViewModelComponent extends AppComponent {
    model = {};
    query = '';

    mounted() {
        this.loadModel(this.$route.params.id);
    }

    async loadModel(id) {
        const variables = {id};
        const authMode = this.dungeonMasterId ? 'AMAZON_COGNITO_USER_POOLS' : 'AWS_IAM';

        this.hasLoaded = false;

        return API.graphql({
            query: queries[this.query],
            variables,
            authMode,
        }).then(
            (response) => {
                this.onLoadModel(response.data[this.query]);
                this.hasLoaded = true;
            }
        );
    }

    onLoadModel(model) {
        this.model = model;
    }

    @Watch('$route.params.id')
    onChildChanged(id) {
        this.loadModel(id);
    }
}
