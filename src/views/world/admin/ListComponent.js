import AppComponent from '../../../components/AppComponent';
import {API, graphqlOperation} from 'aws-amplify';
import * as queries from '../../../graphql/queries';

export default class ListComponent extends AppComponent {
    models = [];
    loading = false;

    /**
     * @return {string}
     */
    get title() {
        return `List ${this.modelName}s`;
    }

    /**
     * @return {Promise<{}>}
     */
    async loadModels() {
        this.loading = true;

        try {
            const models = await API.graphql(graphqlOperation(this.getQuery(), {
                input: this.getQueryParams(),
            }));

            this.models = models.data[this.getQueryName()].items;
        }
        catch (e) {
            this.loading = false;

            return this.showGraphQlError(e);
        }

        this.loading = false;
    }

    mounted() {
        this.loadModels();
    }

    /**
     * @return {string}
     */
    getQuery() {
        return queries[this.getQueryName()];
    }

    /**
     * @return {string}
     */
    getQueryName() {
        return `list${this.modelName}s`;
    }

    getQueryParams() {
        return {};
    }
}
