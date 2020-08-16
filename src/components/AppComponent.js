import Vue from 'vue';
import {Getter} from 'vuex-class';

export default class AppComponent extends Vue {
    @Getter('user/id') userId;

    get authMode() {
        return this.userId ? 'AMAZON_COGNITO_USER_POOLS' : 'AWS_IAM';
    }

    /**
     * @param {string} message
     * @param {string} type
     */
    showMessage(message, type = 'is-danger') {
        this.$buefy.toast.open({
            message,
            type,
            position: 'is-top',
            duration: 2500,
        });
    }

    /**
     * @param {{errors: Array<{message: string}>}} errorResponse
     */
    showGraphQlError(errorResponse) {
        this.showMessage(errorResponse.errors[0].message);
    }
}
