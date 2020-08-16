import AppComponent from '../../../components/AppComponent';
import {API, graphqlOperation} from 'aws-amplify';
import uuid from 'uuid';
import * as mutations from '../../../graphql/mutations';
import * as queries from '../../../graphql/queries';

export default class EditorComponent extends AppComponent {
    model = {};
    saving = false;
    loading = false;
    action = 'create';

    /**
     * @return {Promise<{}>}
     */
    async loadModel() {
        this.loading = true;

        const id = this.getId();
        let newModel;

        try {
            newModel = await API.graphql(graphqlOperation(this.getQuery(), {id}));
            newModel = newModel.data[this.getQueryName()];

            delete newModel.world;
            delete newModel.party;
            delete newModel.character;
            delete newModel.parties;
            delete newModel.characters;
            delete newModel.occurrences;
        }
        catch (e) {
            this.loading = false;

            return this.showGraphQlError(e);
        }

        this.model = Object.assign({}, newModel);

        this.loading = false;
    }

    /**
     * @return {Promise<void>}
     */
    async submit() {
        let newModel;

        this.saving = true;

        const input = this.getMutationData();

        try {
            newModel = await API.graphql(graphqlOperation(this.getMutation(), {input}));
            newModel = newModel.data[this.getMutationName()];
        }
        catch (e) {
            this.loading = false;

            return this.showGraphQlError(e);
        }

        this.showMessage(`${this.modelName} saved.`, 'is-success');

        if (this.action === 'create') {
            const name = this.$route.name.replace('.create', '.update');

            this.$router.push({name, params: {id: newModel.id}});
        }

        this.saving = false;

        return newModel;
    }

    mounted() {
        if (this.getId()) {
            this.loadModel();
            this.action = 'update';
        }
    }

    getId() {
        return this.$route.params.id;
    }

    /**
     * @return {string}
     */
    getMutation() {
        return mutations[this.getMutationName()];
    }

    /**
     * @return {{id: string}}
     */
    getMutationData() {
        return Object.assign({
            id: uuid.v4(),
        }, this.model);
    }

    /**
     * @return {string}
     */
    getMutationName() {
        return `${this.action}${this.modelName}`;
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
        return `get${this.modelName}`;
    }
}
